<template>
  <div>
    <input type="file" @change="choseFile">
  </div>
</template>

<script>
import { upload } from "@http/api.js";
import {onMounted} from 'vue'
  export default {
    setup(){
      onMounted(()=>{
      })
      function onUploadProgress(e){
        console.log(2222, e)
      }
      function choseFile(e){
        console.log('e', e);
        let file = e.target.files[0];
        console.log('接收到的file',file);
        let fileSize = file.size;
        let fileName = file.name;
        //直接那最后面
        let ext = fileName.split('.').pop();
        console.log('后缀名是', ext)
        console.log('fileSize',fileSize / 1024 / 1024);
        //获取到文件以及文件大小
        //上传到后端 接后端接口来接收
        let formData = new FormData();
        formData.append('files', file);
        formData.append('name', 124);
        isMp4(file).then(e=>{
          console.log(e)
        });
        // console.log('isMp4', isMp41)
        return;
        upload(formData).then(e=>{
          console.log('2', e)
        })
      }
      // TODO 文件头转16进制编码格式
      function blobToString(blob){
        return new Promise(resolve =>{
          const reader = new FileReader();
          reader.onload = ()=>{
            const result = (reader.result)
            .split("")
            //转化成asc码
            .map(v=>v.charCodeAt(0))
            //转成16进制
            .map(v=>v.toString(16))
            //补齐
            .map(v=> v.padStart(2, "0"))
            .join("")
            resolve(result);
          };
          reader.readAsBinaryString(blob);
        })
      }
      async function isMp4(file){
        const ret = await blobToString(file.slice(0,4));
        return ret === '00000018'
      }
      return {
        v: 12,
        choseFile
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>