<template>
  <q-page class='row items-center justify-around'>
    <div class='col-12 col-md-5 col-lg-4 q-pa-lg' vif='$q.screen.width>1024'>
      <div>
        <h1 class='q-mb-lg' style='margin-left: -13px'>Sign in to</h1>
        <h4 class='q-mb-lg' style='margin-left: -3px'>Lorem Ipsum is simply</h4>
        <p>If you don’t have an account register</p>
        <p>You can   Register here !</p>
      </div>
    </div>
    <div class='col-12 col-md-5 col-lg-4 q-pa-lg'>
      <q-card>
        <q-card-section>
          <h4 class='q-mb-lg'>Step {{step}}</h4>
          <template v-if='step===1'>
            <q-input
              ref='loginRef'
              outlined
              v-model='login'
              label='Login'
              :rules="[val => !!val || 'Field is required']"
            />
            <q-input
              outlined
              v-model='password'
              label='Password'
              :rules="[val => !!val || 'Field is required']"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'icon-hide' : 'icon-show'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-input
              outlined
              v-model='repeatPassword'
              label='Repeat Password'
              :rules="[val => !!val || 'Field is required']"
              :type="isPwd2 ? 'password' : 'text'"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd2 ? 'icon-hide' : 'icon-show'"
                  class="cursor-pointer"
                  @click="isPwd2 = !isPwd2"
                />
              </template>
            </q-input>
            <q-btn
              style='width: 100%'
              unelevated
              no-caps
              @click='submit'
              color='dark'
              label='Next Page'
            />
          </template>
          <template v-if='step===2'>
            <q-input
              outlined
              v-model='companyName'
              label='Company Name'
              :rules="[val => !!val || 'Field is required']"
              clearable
              clear-icon='close'
            />
            <q-input
              outlined
              v-model='companyId'
              label='Company id'
              :rules="[val => !!val || 'Field is required']"
              clearable
            />
            <q-input
              outlined
              v-model='legalAddress'
              label='Legal address'
              :rules="[val => !!val || 'Field is required']"
              clearable
            />
            <q-input
              outlined
              v-model='AN_GEL'
              label='Account Number in GEL'
              :rules="[val => !!val || 'Field is required']"
              clearable
            />
            <q-input
              outlined
              v-model='bankNumber'
              label='Bank Number'
              :rules="[val => !!val || 'Field is required']"
              clearable
            />
            <q-input
              outlined
              v-model='bankName'
              label='Bank Name'
              :rules="[val => !!val || 'Field is required']"
              clearable
            />
            <q-input
              outlined
              v-model='swiftNumber'
              :rules="[val => val]"
              label='Swift Number'
              clearable
            />
            <q-input
              outlined
              v-model='telNumber'
              label='Tel Number'
              :rules="[val => !!val || 'Field is required']"
              clearable
              mask='(+995) ### - ####'
              unmasked-value
              clear-icon='close'
              fill-mask
            />
            <q-input
              outlined
              v-model='director'
              label='Director`s full name'
              :rules="[val => !!val || 'Field is required']"
              clearable
            />
            <q-btn
              style='width: 100%'
              unelevated
              no-caps
              @click='submit'
              color='dark'
              label='Next Page'
            />
          </template>
          <template v-if='step===3'>
            <q-select
              outlined
              :options='[]'
              use-input
              use-chips
              multiple
              hide-dropdown-icon
              new-value-mode="add-unique"
              v-model='branchOffices'
              hint='Branch offices'
            >
              <template v-slot:selected-item='props'>
                <q-chip

                  dense
                  square
                  color="white"
                  text-color="primary"
                  class="q-my-none q-ml-xs q-mr-none"
                >
                  <q-avatar color="primary" text-color="white" icon="icon-show" />
                  {{ branchOffices[props.index] }}
                </q-chip>
              </template>
            </q-select>
            <q-select
              outlined
              v-model='products'
              :options='[]'
              use-input
              use-chips
              multiple
              hide-dropdown-icon
              new-value-mode="add-unique"
              hint='Add products to participate in promotions'
            />
            <q-uploader
              class='q-mb-md custom-uploader'
              url="http://localhost:8080/upload"
              color='dark'
              flat
              label='Add an Excel file'
              multiple
              accept='application/vnd.ms-excel'
            />
<!--            <q-input-->
<!--              outlined-->
<!--              @update:v-model="val => { excel = val[0] }"-->
<!--              v-model='excel'-->
<!--              type='file'-->
<!--              hint='Add an Excel file'-->
<!--            />-->
            <q-btn
              style='width: 100%'
              unelevated
              no-caps
              @click='submit'
              color='dark'
              label='Next Page'
            />
          </template>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

const router = useRouter();
const $q = useQuasar()

const login = ref('')
const loginRef = ref(null)
const password = ref(null)
const repeatPassword = ref(null)
const companyName = ref('')
const companyId = ref('')
const legalAddress = ref('')
const AN_GEL = ref('')
const bankNumber = ref('')
const bankName = ref('')
const swiftNumber = ref('')
const telNumber = ref('')
const director = ref('')
const branchOffices = ref(null)
const products = ref(null)
const excel = ref('')
const isPwd = ref(true)
const isPwd2 = ref(true)
//vuex
const step = ref(1)

const submit = () => {
  if (step.value === 1) {
    loginRef.value.validate()
    if (password.value !== repeatPassword.value) {
      $q.notify({
        type: 'error',
        message: 'Passwords do not match!'
      })
    }
    else if (loginRef.value.hasError || !password.value) {
      $q.notify({
        type: 'error',
        message: 'Required fields are not filled!'
      })
    } else step.value++
  } else if (step.value === 2) {
    step.value++
  } else {
    router.push('/login?success')
  }
}
</script>
