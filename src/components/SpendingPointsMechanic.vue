<template>
  <q-card>
    <q-card-actions>
      <q-avatar icon='icon-setting' font-size='30px'></q-avatar>
      <span style='font-size: 16px;font-weight: 500'>
        Spending points on gifts
      </span>
      <q-space/>
      <q-btn
        round
        color='dark'
        flat
        unelevated
        icon='icon-edit'
      >
<!--        <q-menu touch-position>-->
<!--          <q-list>-->
<!--            <q-item>Выбрать товары</q-item>-->
<!--            <q-item>Настроить</q-item>-->
<!--          </q-list>-->
<!--        </q-menu>-->
      </q-btn>
    </q-card-actions>
    <q-card-section style='padding: 10px 4px !important;'>
      <q-expansion-item>
        <template v-slot:header>
          <div style='flex: 1 1 100%' class='row q-col-gutter-md'>
            <div class='col-4' v-for='n in [1,2,3]' :key='n'>
              <q-card>
                <div class='q-pa-md flex items-center'>
                  <q-avatar class='q-mr-md'>
                    <img src='../../public/images/246179_3.png'>
                  </q-avatar>
                  <div>
                    <span>Cucumber</span><br>
                    <b class='text-positive'>143 points</b>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
        </template>
        <div class='q-pa-md'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
          commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
          commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </div>
      </q-expansion-item>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">

</script>
