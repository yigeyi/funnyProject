const db = require("mysql");
const config = require('../config').mysql;
const client = function () {}
var pool = db.createPool({
	host: config.host,
	port: config.port,
	user: config.user,
	password: config.password,
	database: config.database,
	charset: 'UTF8mb4'
});

//普通查询
client.query = function (sql) {
	return new Promise((resolve, reject) => {
		console.log('[mysql db]query sql : ' + sql);
		pool.getConnection((err, connection) => {
			if (err) {
				console.log('[mysql db] connection error : ' + err);
				reject(err);
				return;
			}
			connection.config.queryFormat = null;
			_common(connection, sql, null, resolve, reject);
		});
	});
};

//支持 a=:a查询
client.queryFormat = function (sql, obj) {
	return new Promise((resolve, reject) => {
		console.log('[mysql db] query sql : ' + sql);
		pool.getConnection(function (err, connection) {
			if (err) {
				reject(err);
				console.log('[mysql db] connection error : ' + err);
				return;
			}
			connection.config.queryFormat = function (query, values) {
				if (!values) return query;
				return query.replace(/\:(\w+)/g, function (txt, key) {
					if (values.hasOwnProperty(key)) {
						return this.escape(values[key]);
					}
					return txt;
				}.bind(this));
			};
			// Use the connection
			_common(connection, sql, obj, resolve, reject);
		});
	});
};

client.save = function (sql, obj, connection) {
	return new Promise((resolve, reject) => {
		console.log('[mysql db]save sql : ' + sql);
		if (!connection) {
			client.getConnection().then(function (connection) {
				connection.config.queryFormat = null;
				_common(connection, sql, obj, resolve, reject);
			}, function (err) {
				reject(err);
			});
		} else {
			connection.config.queryFormat = null;
			_commonWithTransaction(connection, sql, obj, resolve, reject);
		}
	});
};

client.update = function (sql, obj, connection) {
	return new Promise((resolve, reject) => {
		console.log('[mysql db] update sql : ' + sql);
		if (!connection) {
			client.getConnection().then(function (connection) {
				connection.config.queryFormat = function (query, values) {
					if (!values) return query;
					return query.replace(/\:(\w+)/g, function (txt, key) {
						if (values.hasOwnProperty(key)) {
							return this.escape(values[key]);
						}
						return txt;
					}.bind(this));
				};
				_common(connection, sql, obj, resolve, reject);
			}, function (err) {
				reject(err);
			});
		} else {
			connection.config.queryFormat = function (query, values) {
				if (!values) return query;
				return query.replace(/\:(\w+)/g, function (txt, key) {
					if (values.hasOwnProperty(key)) {
						return this.escape(values[key]);
					}
					return txt;
				}.bind(this));
			};
			_commonWithTransaction(connection, sql, obj, resolve, reject);
		}
	});

};

var _common = function (connection, sql, obj, resolve, reject) {
	connection.query(sql, obj, function (err, rows) {
		try {
			if (err) {
				console.log('[mysql db] operator error : ', err);
				reject(err);
				return;
			}
			console.log('[mysql db] operator back rows length : ', rows.length);
			resolve(rows);
		} catch (e) {
			console.log('[mysql db] operator error : ', e);
			reject(e);
		} finally {
			connection.release();
		}
	});
};

var _commonWithTransaction = function (connection, sql, obj, resolve, reject) {
	connection.query(sql, obj, function (err, rows) {
		try {
			if (err) {
				console.log('[mysql db] operator error : ', err);
				reject(err);
				return
			};
			console.log('[mysql db]operator back rows : ', rows);
			resolve(rows, connection);
		} catch (e) {
			console.log('[mysql db] operator error : ', e);
			reject(e);
		}
	});
};

client.escape = function (obj) {
	return pool.escape(obj);
};

client.getConnection = function () {
	return new Promise((resolve, reject) => {
		pool.getConnection(function (err, connection) {
			if (err) {
				reject(err);
			} else {
				resolve(connection);
			}
		});
	});
};

client.release = function (connection) {
	try {
		if (connection) connection.release();
	} catch (e) {
		console.log('[mysql db] connection releaseed for transaction');
	}
};

client.beginTransaction = function (connection) {
	return new Promise((resolve, reject) => {
		connection.beginTransaction(function (err) {
			if (err) {
				reject(err);
			} else {
				resolve(connection);
			}
		});
	});
};

client.rollback = function (connection) {
	return new Promise(() => {
		connection.rollback(function (err) {
			if (err) {
				console.log('[mysql db] rollback error : ' + err);
			}
			client.release(connection);
		});
	});
};

client.commit = function (connection) {
	return new Promise((resolve, reject) => {
		connection.commit(function (err) {
			if (err) {
				reject(err);
				client.rollback(connection);
			} else {
				resolve(null);
				client.release(connection);
			}
		});
	});
};

client.pool = pool;

module.exports = client;