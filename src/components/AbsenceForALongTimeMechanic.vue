<template>
  <q-card>
    <q-card-actions>
      <q-avatar icon='icon-setting' font-size='30px'></q-avatar>
      <span style='font-size: 16px;font-weight: 500'>
        Absence for a long time
      </span>
      <q-space/>
      <q-btn
        round
        color='dark'
        flat
        unelevated
        icon='icon-edit'
      />
    </q-card-actions>
    <q-card-section style='padding: 10px 4px !important;'>
      <q-expansion-item>
        <template v-slot:header>
          <div style='flex: 1 1 100%' class='row q-col-gutter-md'>
            <div class='col-12'>
              <div class='row items-center q-gutter-md'>
                  <q-input outlined model-value="" label="How much days" dense style="width: calc(50% - 16px)"/>
                  <q-input outlined model-value="" label="Duration" dense style="width: calc(50% - 16px)"/>
              </div>
            </div>
            <q-select
              class="col-12"
              label="Choose promotion mechanic"
              value=""
              model-value=""
              :options="['1+1=3']"
              outlined
            />
            <div class='col-12'>
              <q-card>
                <div class='q-pa-md flex items-center'>
                    <q-avatar class='q-mr-md bg-white'>
                      <q-img src="../../public/images/peach.png"/>
                    </q-avatar>
                    <b style="font-size: 20px">+</b>
                    <q-avatar class='q-mx-md bg-white'>
                      <q-img src="../../public/images/watermellon.png"/>
                    </q-avatar>
                    <b style="font-size: 20px">=</b>
                    <q-avatar class='q-ml-md bg-white'>
                      <q-img src="../../public/images/246179_3.png"/>
                    </q-avatar>
                  </div>
              </q-card>
            </div>
            <div class='col-12'><ApplyButton /></div>
          </div>
        </template>
        <div class='q-pa-md'>
          Set points
        </div>
      </q-expansion-item>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import ApplyButton from "components/ApplyButton.vue";
</script>
