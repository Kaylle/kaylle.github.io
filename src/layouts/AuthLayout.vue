<template>
  <q-layout>
    <q-page-container class='bg-grey text-dark'>
      <div class='before'></div>
      <div class='before'></div>
      <div class='before'></div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang='scss'>
@import "src/css/quasar.variables";

.custom-uploader {
  border-radius: 16px !important;
  width: 100%;
}
.q-uploader {
  backdrop-filter: blur(10px);
  background: #ffffffaa !important;
  & .q-uploader__file {
    border-radius: 16px;
  }
}
.q-page-container {
  position: relative;
  & .before {
    position: fixed;
    content: '';
    border-radius: 50%;
    &:nth-child(1) {
      background: #9C27B0;
      right: 60px;
      width: 100px;
      height: 100px;
      top: 370px;
    }
    &:nth-child(2) {
      background: $negative;
      right: 260px;
      width: 200px;
      height: 200px;
      top: 170px;
    }
    &:nth-child(3) {
      background: $positive;
      right: 240px;
      width: 30px;
      height: 30px;
      top: 710px;
    }
  }
}
.q-btn {
  line-height: 42px;
}
</style>
