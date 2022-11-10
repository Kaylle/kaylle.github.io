<template>
  <q-btn
    :label="label"
    :color="color"
    dense
    no-caps
    unelevated
    rounded
    :text-color="text"
  />
</template>

<script setup lang="ts">
let color = ''
let label = ''
let text = ''

const props = defineProps({
  isApplied: { required: false, type: Boolean },
});

if (props.isApplied) {
  color = 'dark'
  label = 'Applied'
  text = 'white'
} else {
  color = 'white'
  label = 'Apply'
  text = 'dark'
}
</script>
