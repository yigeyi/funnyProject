const models = require('../models');
const path = require('path');
const fs = require('fs');
const {
  joi,
  validateParams
} = require('../base/controller.js')
module.exports = {
  //获取数据库数据
  async upload(ctx){
    console.log('ctx', ctx);
    let file = ctx.request.files.files;
    console.log('file', file.path);
    if(file){
      //拿到文件，重命名
      let fileId = new Date().getTime();
      let extName = file.type.replace(/video\//, '')
      let fileName = `${fileId}.${extName}`;
      console.log('fileName', fileName)
      let videoPath = path.join(__dirname, `../../public/upload/${fileName}`);
      console.log('file___', file)
      let reader = fs.createReadStream(file.path);
      let upStream = fs.createWriteStream(videoPath);
      await reader.pipe(upStream);
      
    }
    let data = {
      tip: '你安装了数据库就可以把上面注释打开'
    }
    return ctx.output({data:data},'获取成功',0)
  }
}