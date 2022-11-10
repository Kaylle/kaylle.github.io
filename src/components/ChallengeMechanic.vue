<template>
  <q-card>
    <q-card-actions>
      <q-avatar icon='icon-setting' font-size='30px'></q-avatar>
      <span style='font-size: 16px;font-weight: 500'>
        Challenge
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
              <div class="flex items-center q-gutter-md">
                <q-avatar class='bg-white'>
                  <q-img src="../../public/images/246179_3.png"/>
                </q-avatar>
                <q-input label="Amount" outlined dense style="width: 100px"/>
                <q-input outlined label="Period" dense style="width: 100px"/>
                <q-input outlined label="Points" dense style="width: 100px"/>
              </div>
            </div>
            <div class='col-12'><ApplyButton is-applied /></div>
          </div>
        </template>
        <div class='q-pa-md'>
          Set points
          <q-btn label="Apply"/>
        </div>
      </q-expansion-item>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import ApplyButton from "components/ApplyButton.vue";
</script>
