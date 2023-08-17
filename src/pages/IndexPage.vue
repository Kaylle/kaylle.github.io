<template>
  <q-parallax src="/images/image 18.png">
    <template v-slot:media>
      <video autoplay loop muted>
        <source type="video/mp4" src="/images/1.mp4">
      </video>
    </template>
    <div style="background: rgba(0,0,0,.5)" class="full-width full-height flex flex-center">
      <div class="text-center" style="max-width: 830px">
        <div class="text-white text-h3">Добро пожаловать!</div>
        <p class="text-white q-pa-lg">
          Здесь я представляю свои работы, которые выполняла в течение своего пути как фронтенд разработчик. Моё портфолио включает в себя разнообразные проекты, которые создавала для клиентов и личных проектов. Для меня очень важно, чтобы каждый проект, над которым я работаю, был уникальным и отвечал потребностям клиента. Надеюсь, что вы оцените мои работы и найдёте здесь что-то интересное для себя!
        </p>
        <div class="flex q-gutter-md justify-center">
          <q-chip
            v-for="n in tags"
            :key="n"
            :label="n.label"
            no-caps
            unelevated
            color="white"
            text-color="primary"
            class="cursor-pointer"
          />
        </div>
      </div>
    </div>
  </q-parallax>
  <q-page class="q-pa-lg bg-dark">
    <div class="flex items-center q-my-lg">
      <PhImages color="white" :size="24" class="q-mr-sm"/>
      <div class="text-h5 text-white">Портфолио</div>
      <q-space/>
      <q-select
        disable
        hide-dropdown-icon
        style="width: 170px"
        dark
        input-class="rounded-borders"
        class="search-field"
        standout
        dense
        :model-value="'По умолчанию'"
        :options="['По умолчанию']"
      >
        <template v-slot:prepend>
          <PhFunnel color="white" :size="18"/>
        </template>
      </q-select>
    </div>
    <div class="row q-col-gutter-md">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-12"
        v-for="card in projects"
        :key="card"
      >
        <ProjectPreviewCard
          :card="card"
          style="height: 100%"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import ProjectPreviewCard from "components/ProjectPreviewCard.vue";
import { PhFunnel, PhImages } from "@phosphor-icons/vue";

const tags = [
  {
    label: '#frontend'
  },
  {
    label: '#design'
  },
  {
    label: '#vue'
  },
  {
    label: '#js'
  },
  {
    label: '#quasar'
  },
  {
    label: '#figma'
  }
]

const projects = [
  {
    id: 1,
    title: 'Сайт ИП Сидоров',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/smaip.png',
    link: ['Design', 'Frontend'],
    badges: [
      'HTML5',
      'CSS3',
      'Bootstrap 5.1'
    ]
  },
  {
    id: 2,
    title: 'Личный кабинет ИП Сидоров',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/lk.png',
    link: ['Design', 'Frontend'],
    badges: [
      'Vue3',
      'Vue-router',
      'VUEX',
      'SCCS',
      'JS',
      'Bootstrap 5.1',
      'Figma'
    ]
  },
  {
    id: 3,
    title: 'ISA - Информационная система академии',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/isa.png',
    link: ['Design', 'Main-frontend'],
    badges: [
      'Vue3',
      'Quasar',
      'Vue-router',
      'VUEX',
      'SCCS',
      'JS',
      'Websocket',
      'Figma'
    ]
  },
  {
    id: 4,
    title: 'Quantum - платформа для курсов',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/quantum.png',
    link: ['Design', 'Main-frontend'],
    badges: [
      'Vue3',
      'Quasar',
      'Vue-router',
      'VUEX',
      'SCCS',
      'JS',
      'Websocket',
      'Figma'
    ]
  },
  {
    id: 5,
    title: 'Мерч для компании "ООО Intech"',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/intech.png',
    link: ['Design'],
    badges: [
      'Figma'
    ]
  },
  {
    id: 6,
    title: 'HR CRM - Кабинет заказчика',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/hr.png',
    link: ['Frontend'],
    badges: [
      'Vue3',
      'Quasar',
      'Vue-router',
      'VUEX',
      'SCCS',
      'JS',
      'Websocket'
    ]
  },
  {
    id: 7,
    title: 'Telemilk - Рекламная биржа Telegram',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/telemilk.png',
    link: ['Frontend'],
    badges: [
      'Vue3',
      'Vue-router',
      'VUEX',
      'SCCS',
      'TS'
    ]
  },
  {
    id: 8,
    title: 'Space Bonus - система лояльности',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/sb.png',
    link: ['Main-frontend'],
    badges: [
      'Vue3',
      'Quasar',
      'Vue-router',
      'VUEX',
      'SCCS',
      'TS'
    ]
  }
]
</script>
