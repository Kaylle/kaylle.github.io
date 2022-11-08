<template>
  <q-card>
    <q-card-actions>
      <q-avatar icon='icon-setting' font-size='30px'></q-avatar>
      <span style='font-size: 16px;font-weight: 500'>
        Points for poll
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
            <div class='col-6' v-for='n in [1,2]' :key='n'>
              <q-card>
                <div class='q-pa-md flex items-center'>
                  <q-avatar class='q-mr-md bg-white'>
                    <q-icon name="icon-chart"/>
                  </q-avatar>
                  <div>
                    <span><a href="/">Questions</a></span><br>
                    <b class='text-positive'>150 points</b>
                  </div>
                </div>
              </q-card>
            </div>
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

</script>
