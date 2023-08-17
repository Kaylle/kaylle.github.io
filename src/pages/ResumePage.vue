<template>
  <q-page class="q-pa-lg bg-dark">
    <div class="flex items-center q-my-lg">
      <PhUserCircle color="white" :size="24" class="q-mr-sm"/>
      <div class="text-h5 text-white">Резюме</div>
      <q-space/>
      <q-btn
        label="hh.ru"
        no-caps
        color="primary"
        target="_blank"
        href="https://spb.hh.ru/applicant/resumes/view?resume=83ff72eeff09b6e22f0039ed1f374148427970"
      />
    </div>
    <div class="row q-col-gutter-md">
      <q-intersection
        sstyle="height: 446px"
        transition="scale"
        class="col-lg-3 col-md-4 col-sm-6 col-12"
      >
        <q-card dark class="q-pa-md">
          <q-img src="https://img.hhcdn.ru/photo/645507564.jpeg?t=1692257862&amp;h=Z9BSIyry9fmFLoz2crBrEw" width="100px" />
          Куркина Екатерина Евгеньевна
          Женщина, 23 года, родилась  9 января 2000

          Контакты
          +7 (996) 590-14-45
          kaylle@yandex.ru
          Сыктывкар, готова к переезду (Санкт-Петербург), готова к редким командировкам
        </q-card>
        <q-card dark class="q-pa-md">
          Frontend-разработчик
          Специализации: Программист, разработчик
          Занятость: полная занятость

          График работы: полный день, удаленная работа
        </q-card>
        <q-card dark class="q-pa-md">
          Опыт работы 3 года 1 месяц
          Май 2022 — по настоящее время
          <q-separator color="white" class="q-my-md"/>
          <div>
            <q-chip
              no-caps
              unelevated
              color="white"
              text-color="primary"
              class="cursor-pointer"
              label="1 год 4 месяца"
            />
          </div>
          <div class="text-h5 q-mt-sm">ООО Информационные Технологии</div>
          <div class="text-grey q-mb-md">Сыктывкар, it-rkomi.ru</div>
          <div class="text-bold q-mt-sm">Frontend-разработчик</div>
          <p>
            На моем текущем месте работы у меня есть множество задач и проектов, над которыми я активно тружусь. В настоящее время я веду четыре проекта, в трёх я выступаю ведущим фронтенд-разработчиком.
          </p>
          <p>
            Кроме этого, я также курирую стажера по фронтенду, помогая ему развиваться в своей работе. Мой стек технологий включает в себя такие популярные инструменты, как Vue, Vuex, Vue-router, Quasar-framework, Docker и Node. Я также работаю с такими программами и приложениями, как WebStorm, Figma, Postman и Notion.
          </p>
          <p>
            В прошлом я проявляла инициативу в отрисовке и вёрстке дизайна для двух смежных проектов. Все шаблоны и вёрстку обязательно делаю адаптивными. Так же занималась вёрсткой по шаблонам других дизайнеров из фигмы.
          </p>
          <p>
            В рамках своей работы, я разрабатывала внутренний мерч для компании. Это включало в себя создание концепции дизайна худи и футболки в белой и чёрной вариациях.
          </p>


          <q-separator color="white" class="q-my-md"/>
          <div>
            Август 2020 — Май 2022
            <q-chip
              no-caps
              unelevated
              color="white"
              text-color="primary"
              class="cursor-pointer"
              label="1 год 10 месяцев"
            />
          </div>
          <div class="text-h5 q-mt-sm">ООО Информационные Технологии</div>
          <div class="text-grey q-mb-md">Сыктывкар, it-rkomi.ru</div>
          <div class="text-bold q-mt-sm">Frontend-разработчик</div>



          ИП Сидоров МА
          Сыктывкар, www.smaip.ru

          IT-специалист
          Мои обязанности на предыдущей работе включали работу с бизнес-процессами Bitrix24, в том числе написание кастомных активностей. Я также занималась выгрузкой и загрузкой данных из Битрикса с помощью CREST API на PHP и JavaScript, что помогало мне автоматизировать рутинные задачи и сокращать время их выполнения.

          Кроме того, я работала с загрузкой статистики в таблицы SQL и выводом данных из Битрикса и таблиц SQL на свёрстанные HTML страницы. Это требовало от меня знаний HTML5, CSS3, JavaScript(ES6+) и умения работать с различными типами данных.

          Мне также приходилось создавать инструменты (веб-приложения) для менеджеров, которые позволяли им эффективно справляться с задачами, что повышало производительность. Это требовало от меня умения разрабатывать интуитивно понятный интерфейс и учитывать потребности конечного пользователя.

          Наконец, я работала над созданием личного кабинета для клиентов с собственным дизайном и адаптивной вёрсткой на Vue3. Это позволяло моим клиентам управлять своими аккаунтами и более удобно взаимодействовать с нашими услугами(продажа вторсырья для фермеров). Работа над этим проектом требовала от меня глубоких знаний в области фронтенд-разработки и умения создавать сложные интерфейсы.

        </q-card>
        <q-card dark class="q-pa-md">
          <div class="text-h5 q-mb-md">Ключевые навыки</div>
          <div class="flex q-gutter-sm">
            <q-chip
              v-for="n in tags"
              :key="n"
              :label="n"
              no-caps
              unelevated
              color="white"
              text-color="primary"
              class="cursor-pointer"
            />
          </div>
        </q-card>
        <q-card dark class="q-pa-md">
          <div class="text-h5 q-mb-md">Обо мне</div>
          <p>
            Я обожаю играть в компьютерные игры, и этот хобби приносит мне не только удовольствие, но и помогает развивать навыки, которые могу использовать в профессиональной сфере. Кроме того, я регулярно занимаюсь физическими упражнениями в спортзале, чтобы поддерживать свою форму и здоровье.
          </p>
          <p>
            Я также имею некоторый опыт работы с нейронными сетями и даже использовала Midjorney для создания дизайна своего портфолио-сайта. Это должно позволить мне продемонстрировать свои навыки в области веб-дизайна и улучшить свои шансы на рынке труда.
          </p>
          <p>
            Моей большой мечтой является переезд в Санкт-Петербург и работа в крупной и прогрессивной компании. Я стремлюсь стать активным участником жизни компании и принимать участие в различных проектах. Это, в свою очередь, будет мотивировать меня искать новые знакомства и расширять свой круг общения в большом городе. Я уверена, что это поможет мне расти как профессионал и как личность.
          </p>
        </q-card>
        <q-card dark class="q-pa-md">
          <!--      <p>-->
          Среднее специальное образование
          2020
          Сыктывкарский кооперативный техникум
          Прикладная информатика, Техник-программист

        </q-card>
      </q-intersection>
    </div>
  </q-page>
</template>

<script setup>
import ProjectPreviewCard from "components/ProjectPreviewCard.vue";
import { PhFunnel, PhImages, PhUserCircle } from "@phosphor-icons/vue";

const tags = [
  'HTML5',
  'CSS3',
  'SQL',
  'Git',
  'PHP',
  'Sass',
  'VueJS',
  'JavaScript',
  'server-side rendering',
  'Vuex',
  'Figma',
  'SCSS',
  'Vue-Router',
  'Webpack',
  'Vite',
  'Websocket',
  'Bitrix Rest Api',
  'Bitrix24 Бизнес-процессы',
  'Node.js',
  'Nginx',
  'TypeScript',
  'Docker'
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
