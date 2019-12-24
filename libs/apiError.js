class ApiError extends Error {
    constructor(message, code = -1) {
        super();
        this.name = "自定义错误类型";
        this.code = code || -1;
        this.message = message;
    }
}

module.exports = ApiError;