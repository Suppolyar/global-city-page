<template>
  <button
    @click="onBtnClick"
    class="rounded-3xl custom-button py-10 px-16 font-[800]	text-[33px] text-white uppercase"
  >
    Скачать
  </button>
</template>

<script setup>
defineOptions({
  name: "BaseButton"
});

const onBtnClick = () => {
  window.__GEM.detectAndDownload(
    "13.2013983",
    "https://static.gc.my.games/HawkedLoader.exe"
  );
};
</script>

<style lang="scss" scoped>
.custom-button {
  background: linear-gradient(180.00deg, rgb(255, 191, 48),rgb(255, 232, 150) 11.273%,rgb(255, 209, 76) 81.273%,rgb(235, 178, 14) 86.773%,rgb(248, 136, 4) 100%);
  border-bottom: 6px solid rgb(230, 64, 32);
  border-left: 2px solid rgb(230, 64, 32);
  border-right: 2px solid rgb(230, 64, 32);
  text-shadow:0px 1px 0 rgb(143,50,0),0px -1px 0 rgb(143,50,0),1px 0px 0 rgb(143,50,0),-1px 0px 0 rgb(143,50,0),1px 1px 0 rgb(143,50,0),1px -1px 0 rgb(143,50,0),-1px 1px 0 rgb(143,50,0),-1px -1px 0 rgb(143,50,0),0px 2px 0 rgb(143,50,0),0px -2px 0 rgb(143,50,0),2px 0px 0 rgb(143,50,0),-2px 0px 0 rgb(143,50,0),2px 2px 0 rgb(143,50,0),2px -2px 0 rgb(143,50,0),-2px 2px 0 rgb(143,50,0),-2px -2px 0 rgb(143,50,0),3px 3px 1px rgba(0,0,0,1);
  -webkit-text-shadow:0px 1px 0 rgb(143,50,0),0px -1px 0 rgb(143,50,0),1px 0px 0 rgb(143,50,0),-1px 0px 0 rgb(143,50,0),1px 1px 0 rgb(143,50,0),1px -1px 0 rgb(143,50,0),-1px 1px 0 rgb(143,50,0),-1px -1px 0 rgb(143,50,0),0px 2px 0 rgb(143,50,0),0px -2px 0 rgb(143,50,0),2px 0px 0 rgb(143,50,0),-2px 0px 0 rgb(143,50,0),2px 2px 0 rgb(143,50,0),2px -2px 0 rgb(143,50,0),-2px 2px 0 rgb(143,50,0),-2px -2px 0 rgb(143,50,0),3px 3px 1px rgba(0,0,0,1);
  -moz-text-shadow:0px 1px 0 rgb(143,50,0),0px -1px 0 rgb(143,50,0),1px 0px 0 rgb(143,50,0),-1px 0px 0 rgb(143,50,0),1px 1px 0 rgb(143,50,0),1px -1px 0 rgb(143,50,0),-1px 1px 0 rgb(143,50,0),-1px -1px 0 rgb(143,50,0),0px 2px 0 rgb(143,50,0),0px -2px 0 rgb(143,50,0),2px 0px 0 rgb(143,50,0),-2px 0px 0 rgb(143,50,0),2px 2px 0 rgb(143,50,0),2px -2px 0 rgb(143,50,0),-2px 2px 0 rgb(143,50,0),-2px -2px 0 rgb(143,50,0),3px 3px 1px rgba(0,0,0,1);
}
</style>

