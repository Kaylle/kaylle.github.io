<template>
  <q-page class='row items-center justify-around'>
    <div class='col-12 col-md-5 col-lg-4 q-pa-lg'>
      <div>
        <h1 class='q-mb-lg' style='margin-left: -13px'>Login to</h1>
        <h4 class='q-mb-lg' style='margin-left: -3px'>Lorem Ipsum is simply</h4>
        <p>Congratulations, you have registered in the loyalty system!</p>
        <p>Please Log in</p>
      </div>
    </div>
    <div class='col-12 col-md-5 col-lg-4 q-pa-lg'>
      <q-card>
        <q-card-section>
          <h4 class='q-mb-lg'>Login</h4>
          <q-input
            outlined
            v-model='login' label='Login'
            :rules="[val => !!val || 'Field is required']"
            lazy-rules
          />
          <q-input
            outlined
            v-model='password' label='Password'
            :rules="[val => !!val || 'Field is required']"
            :type="isPwd ? 'password' : 'text'"
            lazy-rules
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn
            style='width: 100%'
            no-caps
            color='dark'
            label='Sign In'
            @click='signIn'
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { defineProps } from 'vue';

const props = defineProps({
  afterRegistration: {
    type: Boolean,
    default: false
  }
})

const login = ref('')
const password = ref('')
const isPwd = ref(true)
const $q = useQuasar()

const signIn = () => {
  $q.notify({
    type: 'success',
    message: 'Sign In!'
  })
}
</script>
