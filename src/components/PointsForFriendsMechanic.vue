<template>
  <q-card>
    <q-card-actions>
      <q-avatar icon='icon-setting' font-size='30px'/>
      <span style='font-size: 16px;font-weight: 500'>
        Points for friends
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
            <q-select
              class="col-12"
              label="Product coupon"
              outlined
            />
            <div class='col-12'>
              <div class="row items-center q-gutter-md">
                <q-avatar class='bg-white'>
                  <q-img src="../../public/images/peach.png"/>
                </q-avatar>
                <q-input model-value="" outlined dense label="Product amount" style="width: 174px"/>
                <q-input model-value="" outlined dense label="Period" style="width: 174px"/>
              </div>
            </div>
            <q-select
              class="col-12"
              label="Condition"
              outlined
            />
            <div class='col-12'><ApplyButton/></div>
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
