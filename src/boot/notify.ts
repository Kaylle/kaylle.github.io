import { Notify } from 'quasar'

Notify.registerType('error', {
  progress: true,
  color: 'negative',
  icon: 'icon-danger-triangle',
  position: 'bottom-right',
  actions: [
    { icon: 'icon-close', color: 'white', handler: () => { /* ... */ } }
  ]
})

Notify.registerType('warning', {
  progress: true,
  color: 'negative',
  icon: 'icon-danger-triangle',
  position: 'bottom-right',
  actions: [
    { icon: 'icon-close', color: 'white', handler: () => { /* ... */ } }
  ]
})
Notify.registerType('success', {
  progress: true,
  color: 'positive',
  icon: 'icon-tick-square',
  position: 'bottom-right',
  actions: [
    { icon: 'icon-close', color: 'white', handler: () => { /* ... */ } }
  ]
})
