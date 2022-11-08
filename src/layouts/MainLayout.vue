<template>
  <q-layout view="hHh LpR fFf">
    <q-header class='text-dark q-pa-md'>
      <q-toolbar class='items-center'>
        <q-avatar size='70px' square>
          <img src='../../public/svg/logo.svg'>
        </q-avatar>
        <q-tabs v-model="tab" shrink stretch no-caps style='height: 50px;margin-right: auto;margin-top: 10px'>
          <q-route-tab
            :to="tab.tab"
            :label="tab.title"
            v-for='tab in tabs'
            :key='tab.tab'
          />
        </q-tabs>
        <q-btn
          unelevated
          text-color='dark'
          color='white'
          class='q-mr-md'
          no-caps
          @click='showPopup = true'
          label='NPS: 13,6%'
        />
        <q-btn
          icon='icon-logout'
          unelevated
          text-color='dark'
          color='white'
          no-caps
          label='Logout'
          to='/login'
        />
      </q-toolbar>
    </q-header>
    <q-dialog v-model='showPopup'>
      <q-card style='min-width: 500px'>
        <q-card-section class='row'>
          <h5>What is NPS?</h5>
          <q-space/>
          <q-btn
            icon='icon-close'
            v-close-popup
            color='white'
            text-color='dark'
            round
          />
        </q-card-section>
        <q-card-section>
          <p>It's ...</p>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('main')
const showPopup = ref(false)

const tabs = [
  {
    title: 'Home',
    tab: '/'
  },
  {
    title: 'Promotions and mailing',
    tab: '/promotions'
  },
  {
    title: 'Company info',
    tab: '/company'
  },
  {
    title: 'Finance',
    tab: '/finance'
  }
];
</script>

<style scoped lang='scss'>
@import "src/css/quasar.variables";

.q-layout {
  background-image: url("../../public/images/milad-fakurian-PGdW_bHDbpI-unsplash.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom;
  color: $dark;
}
.q-header {
  background-color: transparent !important;
  //color: $white !important;
}
.q-page {
  margin-right: 24px;
  background: linear-gradient(90deg, #E1E4E88C 0%, #E1E4E866 100%) !important;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(211, 213, 218, 0.15);
}
</style>
