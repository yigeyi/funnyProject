/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('article', {
		article_id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		user_nick_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		is_add_score: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		tabs: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		user_head_img: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		is_good: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		default_img: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		num_visit: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		num_like: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		num_comment: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		num_share: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		type: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		create_datetime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		update_datetime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		_del: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		del_datetime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		upload_type: {
			type: DataTypes.TINYINT(1),
			allowNull: false,
			defaultValue: 1
    },
    theme_no: {
			type: DataTypes.TINYINT(1),
			allowNull: false,
			defaultValue: 1
		}
	}, {
		tableName: 'article',
		timestamps: false
	});
};
