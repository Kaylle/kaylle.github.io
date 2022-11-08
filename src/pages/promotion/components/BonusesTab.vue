<template>
  <div class='q-px-lg q-pb-lg row q-col-gutter-lg'>
    <div class='col-6' v-for='n in [1,2,3,4,5,6]' :key='n'>
      <SpendingPointsMechanic/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpendingPointsMechanic from 'components/SpendingPointsMechanic.vue';
</script>

<style scoped lang='scss'>
.mechanic-info {
  width: 200px;
  background: #ffffffaa !important;
}
</style>
