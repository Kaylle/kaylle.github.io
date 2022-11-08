<template>
  <q-page class='row items-center justify-around'>
    <div class='col-12 col-md-5 col-lg-4 q-pa-lg' vif='$q.screen.width>1024'>
      <div>
        <h1>Sign in to</h1>
        <h4 class='q-mb-lg'>Lorem Ipsum is simply</h4>
        <p>If you don’t have an account register</p>
        <p>You can   Register here !</p>
      </div>
    </div>
    <div class='col-12 col-md-5 col-lg-4 q-pa-lg'>
      <q-card>
        <q-card-section>
          <h4 class='q-mb-lg'>Registration</h4>
          <q-input
            outlined
            ref='emailRef'
            v-model='email'
            label='Company Email'
            :rules="[
              val => !!val || 'Email is missing',
              isValidEmail
            ]"
            type='email'
            clearable
            clear-icon='close'
          />
          <q-btn
            style='width: 100%'
            unelevated
            no-caps
            @click='submit'
            color='dark'
            label='Send to Email'
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const email = ref('')
const emailRef = ref(null)
const $q = useQuasar()

const isValidEmail = () => {
  const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(email.value) || 'Invalid email';
}

const submit = () => {
  emailRef.value.validate()
  if (emailRef.value.hasError) {
    $q.notify({
      type: 'error',
      message: 'Required fields are not filled!'
    })
  } else {
    $q.notify({
      type: 'success',
      message: 'Check your email!'
    })
  }
}
</script>
