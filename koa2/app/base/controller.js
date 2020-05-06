/** controller 公用方法 */
const joi = require('joi');
const log4js = require('../../libs/log4js');
const apiError = require('../../libs/apiError');

class Base {
    constructor() {
        this.log4js = log4js;
        this.apiError = apiError;
        this.joi = joi;
        this.logger = log4js.getLogger('[controller]');
    }

    /**
     * 验证参数
     * @param data 请求参数
     * @param schema    验证的方法
     */
    validateParams (data, schema) {
        joi.validate(data, schema, function (err, value) {
            if (err) {
                throw new apiError(err.message, -1)
            }
        })
    }
}

module.exports = new Base();