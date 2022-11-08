<template>
  <q-btn
    icon='icon-plus'
    label='Suggest new mechanic'
    color='white'
    text-color='dark'
    unelevated
    no-caps
    class='fixed-bottom-right q-ma-lg'
    style='z-index: 1000'
  />
  <DrawerComponent :tabs='tabs'>
    <q-card class="q-my-md" v-for='item in activeMechanics' :key='item'>
      <q-expansion-item
        expand-separator
        :icon="item.icon"
        :label="item.title"
        :caption="item.caption"
      >
        <q-card-section>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.</p>
          <q-btn no-caps flat color='primary' dense label='Remove'/>
        </q-card-section>
      </q-expansion-item>
    </q-card>
  </DrawerComponent>
  <q-page>
    <q-card class='row q-pr-sm q-mx-lg q-mb-lg'>
      <div class='col-12'>
        <q-tabs active-color='accent' align='right' no-caps>
          <h5 class='q-pa-md'>Promotions mechanics</h5>
          <q-space/>
          <q-route-tab to='/promotions/bonuses' exact label='Bonuses'/>
          <q-route-tab to='/promotions/promotions' exact label='Promotions'/>
          <q-route-tab to='/promotions/collaborations' exact label='Collaborations'/>
        </q-tabs>
      </div>
    </q-card>
    <div class='row q-mx-lg q-mb-lg justify-around'>
      <ComparationComponent/>
      <ComparationComponent/>
    </div>
    <router-view/>
  </q-page>
</template>

<script setup lang="ts">
import DrawerComponent from 'components/DrawerComponent.vue';
import ComparationComponent from "components/ComparationComponent.vue";

const tabs = [
  {
    title: 'Certificates settings',
    icon: 'icon-category',
    tab: 'mechanics'
  },
  {
    title: 'Promotions mechanics',
    icon: 'icon-discount',
    tab: '/promotions/bonuses'//fix
  },
  {
    title: 'Add new promotion',
    icon: 'icon-plus-square',
    tab: 'add-promotion'
  },
  {
    title: 'Mailing settings',
    icon: 'icon-message',
    tab: 'mailing-settings'
  }
];

const activeMechanics = [
  {
    title: 'Active mechanic 1',
    caption: 'Description',
    icon: 'icon-setting'
  },
  {
    title: 'Active mechanic 2',
    caption: 'Description',
    icon: 'icon-setting'
  },
  {
    title: 'Active mechanic 3',
    caption: 'Description',
    icon: 'icon-setting'
  }
];
</script>

<style scoped lang='scss'>
</style>
