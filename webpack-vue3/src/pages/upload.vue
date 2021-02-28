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

        upload(formData).then(e=>{
          console.log('2', e)
        })
      }
      // TODO 文件头转16进制编码格式
      function blobToString(blob){
        return new Promise(resolve =>{
          const reader = new FileReader();
          reader.onload = ()=>{
            
          }
        })
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