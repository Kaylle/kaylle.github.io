<template>
  <q-drawer
    show-if-above
    class='q-pl-lg'
  >
    <q-card>
      <q-tabs vertical v-model='tab' align='left'>
        <q-route-tab
          v-for="tab in tabs"
          :key="tab.tab"
          :to='tab.tab'
          no-caps
          style='justify-content: start'
        >
          <div class='row q-gutter-lg'>
            <q-icon :name='tab.icon' size='24px'/>
            <span>{{tab.title}}</span>
          </div>
        </q-route-tab>
      </q-tabs>
    </q-card>
    <slot/>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  tabs: { required: false, type: Array },
});

const tab = ref('mechanics')
</script>

<style scoped lang='scss'>
</style>
