<template>
  <q-card dark>
    <q-card-section class="column full-height">
      <q-img
        :ratio="16/9"
        class="rounded-borders hover"
        :src="card.image"
      >
        <div class="full-height full-width flex items-end hover-inner">
          <div class="q-gutter-sm flex reverse-wrap">
            <q-badge v-for="badge in card.badges" :key="badge" rounded>
              {{badge}}
            </q-badge>
          </div>
        </div>
      </q-img>
      <div class="text-h6 q-my-md">{{ card.title }}</div>
      <p class="text-grey" style="min-height: 80px">{{ card.description }}</p>
      <q-space/>
      <div class="flex items-center" style="height: 56px">
        <div class="column" style="gap: 8px">
          <q-btn
            v-for="pos in card.link"
            :key="pos"
            flat
            color="white"
            class="self-start"
            padding="0"
            no-caps
          >
            <PhUserCircle :size="19" color="white" weight="regular" />
            <span class="q-ml-sm">{{ pos }}</span>
          </q-btn>
        </div>
        <q-space/>
        <q-btn
          color="primary"
          no-caps
          :to="'/project/'+card.id"
        >
          <PhHandPointing :size="18" color="white" weight="regular" />
          <span class="q-ml-sm">Подробнее</span>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import { PhHandPointing, PhUserCircle } from "@phosphor-icons/vue";

export default defineComponent({
  name: 'ProjectPreviewCard',
  components: { PhUserCircle, PhHandPointing },
  props: {
    card: {
      type: Object,
      required: true
    }
  }
})
</script>
