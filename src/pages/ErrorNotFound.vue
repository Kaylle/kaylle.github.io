<template>
  <q-page class="bg-dark text-center" @mousemove="eyeMovement">
      <div class="box__ghost">
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="symbol"></div>
        <div class="box__ghost-container">
          <svg width="100" height="110" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50C0 22.3858 22.3858 0 50 0V0C77.6142 0 100 22.3858 100 50V88H0V50Z" fill="white"/>
            <path d="M20 100C20 105.523 15.5228 110 10 110V110C4.47715 110 -1.51594e-06 105.523 -1.03312e-06 100L1.59523e-08 88L20 88L20 100Z" fill="white"/>
            <path d="M60 100C60 105.523 55.5228 110 50 110V110C44.4772 110 40 105.523 40 100L40 88L60 88L60 100Z" fill="white"/>
            <path d="M100 100C100 105.523 95.5228 110 90 110V110C84.4772 110 80 105.523 80 100L80 88L100 88L100 100Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 97C20 92.0294 24.0294 88 29 88H20V97ZM40 97H60C60 92.0294 64.0294 88 69 88H31C35.9706 88 40 92.0294 40 97ZM71 88C75.9706 88 80 92.0294 80 97H81V88H71Z" fill="white"/>
          </svg>
          <div class="box__ghost-eyes" :style="style">
            <div class="box__eye-left"/>
            <div class="box__eye-right"/>
          </div>
        </div>
        <div class="box__ghost-shadow"/>
        <div class="q-mt-lg">
          <h1 class="error">404</h1>
          <h5 class="q-ma-none text-grey">Не существующая страница</h5>
          <q-btn
            class="q-mt-xl"
            color="primary"
            to="/"
            label="На главную"
            no-caps
          />
        </div>
      </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const style = ref('')
const $q = useQuasar()
const eyeMovement = (e) => {
  let pageX = $q.screen.width;
  let pageY = $q.screen.height;
  let mouseY=0;
  let mouseX=0;
  mouseY = e.pageY;
  let yAxis = (pageY/3-mouseY)/pageY*300;
  mouseX = e.pageX / -pageX;
  let xAxis = -mouseX * 100 - 100;
  style.value=`transform:translate(${xAxis}%,${yAxis*-1}%)`;
  console.log((pageY/3+mouseY)/pageY*300);
}
</script>

<style lang="scss">
.error {
  background: $avatar;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-weight: 700;
  font-size: 200px;
  line-height: 250px;
}
.box__ghost {
  padding: 15px 25px 25px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);

  .symbol{
    &:nth-child(1) {
      opacity: .2;
      animation: shine 4s ease-in-out 3s infinite;

      &:before, &:after {
        content: '';
        width: 12px;
        height: 4px;
        background: $white;
        position: absolute;
        border-radius: 5px;
        bottom: 65px;
        left: 0;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
    &:nth-child(2) {
      position: absolute;
      left: -5px;
      top: 30px;
      height: 18px;
      width: 18px;
      border: 4px solid;
      border-radius: 50%;
      border-color: $white;
      opacity: .2;
      animation: shine 4s ease-in-out 1.3s infinite;
    }
    &:nth-child(3) {
      opacity: .2;
      animation: shine 3s ease-in-out .5s infinite;

      &:before, &:after {
        content: '';
        width: 12px;
        height: 4px;
        background: $white;
        position: absolute;
        border-radius: 5px;
        top: 5px;
        left: 40px;
      }
      &:before {
        transform: rotate(90deg);
      }
      &:after {
        transform: rotate(180deg);
      }
    }
    &:nth-child(4) {
      opacity: .2;
      animation: shine 6s ease-in-out 1.6s infinite;

      &:before, &:after {
        content: '';
        width: 15px;
        height: 4px;
        background: $white;
        position: absolute;
        border-radius: 5px;
        top: 10px;
        right: 30px;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
    &:nth-child(5) {
      position: absolute;
      right: 5px;
      top: 40px;
      height: 12px;
      width: 12px;
      border: 3px solid;
      border-radius: 50%;
      border-color: $white;
      opacity: .2;
      animation: shine 1.7s ease-in-out 7s infinite;
    }
    &:nth-child(6) {
      opacity: .2;
      animation: shine 2s ease-in-out 6s infinite;

      &:before, &:after {
        content: '';
        width: 15px;
        height: 4px;
        background: $white;
        position: absolute;
        border-radius: 5px;
        bottom: 65px;
        right: -5px;
      }
      &:before {
        transform: rotate(90deg);
      }
      &:after {
        transform: rotate(180deg);
      }
    }
  }

  .box__ghost-container {
    width: 100px;
    height: 100px;
    border-radius: 100px 100px 0 0;
    position: relative;
    margin: 0 auto;
    animation: upndown 3s ease-in-out infinite;
    .box__ghost-eyes {
      position: absolute;
      left: 50%;
      top: 45%;
      height: 12px;
      width: 70px;
      .box__eye-left {
        width: 12px;
        height: 12px;
        background: $bg;
        border-radius: 50%;
        margin: 0 10px;
        position: absolute;
        left: 0;
      }
      .box__eye-right {
        width: 12px;
        height: 12px;
        background: $bg;
        border-radius: 50%;
        margin: 0 10px;
        position: absolute;
        right: 0;
      }
    }
  }
  .box__ghost-shadow {
    height: 20px;
    box-shadow: 0 50px 15px 5px #3B3769;
    border-radius: 50%;
    margin: 0 auto;
    animation: smallnbig 3s ease-in-out infinite;
  }
}

@keyframes upndown {
  0% {transform: translateY(5px);}
  50% {transform: translateY(15px);}
  100% {transform: translateY(5px);}
}
@keyframes smallnbig {
  0% {width: 90px;}
  50% {width: 100px;}
  100% {width: 90px;}
}
@keyframes shine {
  0% {opacity: .2;}
  25% {opacity: .1;}
  50% {opacity: .2;}
  100% {opacity: .2;}
}
</style>
