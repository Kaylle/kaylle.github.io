<template>
  <q-card>
    <q-card-actions>
      <q-avatar icon='icon-setting' font-size='30px'></q-avatar>
      <span style='font-size: 16px;font-weight: 500'>
        Welcome bonus
      </span>
      <q-space/>
      <q-btn
        round
        color='dark'
        flat
        unelevated
        icon='icon-edit'
      >
      </q-btn>
    </q-card-actions>
    <q-card-section style='padding: 10px 4px !important;'>
      <q-expansion-item>
        <template v-slot:header>
          <div style='flex: 1 1 100%' class='row q-col-gutter-md'>
            <div class='col-12'>
              <q-card>
                <div class='q-pa-md flex items-center'>
<!--                  <q-avatar class='q-mr-md bg-white'>-->
<!--                    <q-icon name="icon-wallet"/>-->
<!--                  </q-avatar>-->
                  <div>
                    <b class='text-positive'>100 points </b>
                    <span>- Unlimited</span>
                  </div>
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
