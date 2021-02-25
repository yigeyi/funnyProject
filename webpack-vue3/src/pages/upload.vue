<template>
  <div>
    <input type="file" @change="choseFile">
  </div>
</template>

<script>
import { test } from "@http/api.js";
  export default {
    setup(){
      function choseFile(e){
        console.log('e', e);
        let file = e.target.files[0];
        console.log('接收到的file',file);
        let fileSize = file.size;
        console.log('fileSize',fileSize / 1024 / 1024);
        //获取到文件以及文件大小
        //上传到后端 接后端接口来接收
        test().then(e=>{
          console.log('2', e)
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