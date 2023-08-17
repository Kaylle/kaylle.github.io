<template>
  <q-layout view="lHh Lpr lff">
      <q-toolbar class="q-pa-md">
        <q-avatar size="60px" class="q-mr-md">
          <PhTerminalWindow/>
        </q-avatar>
        <template v-if="$q.screen.width>1024">
          <q-tabs indicator-color="transparent" no-caps class="f">
            <q-route-tab label="Портфолио" to="/"/>
            <!--to="/resume"-->
            <q-tab
              @click="openResume()"
              label="Резюме"
            />
          </q-tabs>
          <q-space/>
        </template>
        <div class="column" :class="$q.screen.width>1024?'items-center':''">
          <div class="text-h5">Екатерина Куркина</div>
          <div class="text-caption text-grey">Портфолио фронтенд разработчика</div>
        </div>
        <q-space/>
        <q-tabs indicator-color="transparent" no-caps v-if="$q.screen.width>1024">
          <q-route-tab label="Почта" to="/"/>
          <q-route-tab label="Телефон" to="/"/>
          <q-route-tab label="Telegram" to="/"/>
        </q-tabs>
        <q-btn
          v-else
          round
          color="primary"
        >
          <PhList/>
          <q-menu dark>
            <q-item>
              Меню
            </q-item>
            <q-list>
              <q-item clickable>
                <q-item-section>Портфолио</q-item-section>
                <q-item-section side class="bg-accent">
                  <PhLink color="white" :size="18"/>
                </q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Резюме</q-item-section>
                <q-item-section side class="bg-accent">
                  <PhLink color="white" :size="18"/>
                </q-item-section>
              </q-item>
            </q-list>
            <q-item>
              <q-item-section clickable>
                <span>Почта</span>
                <span>Телефон</span>
              </q-item-section>
              <q-item-section clickable side>
                <span>Telegram</span>
              </q-item-section>
            </q-item>
          </q-menu>
        </q-btn>
      </q-toolbar>
      <q-footer>
        <q-toolbar :class="$q.screen.width<=600?'column justify-center':''">
          <q-avatar size="60px" :class="$q.screen.width<=600?'q-mb-sm':'q-mr-md'">
            <PhTerminalWindow/>
          </q-avatar>
          <div class="column" :class="$q.screen.width>600?'':'items-center q-gutter-y-sm'">
            <div class="text-h5">Екатерина Куркина</div>
            <div class="text-caption text-grey">Портфолио фронтенд разработчика</div>
          </div>
          <q-space/>
          <span :class="$q.screen.width<=600?'q-mt-sm':''">© 2023 Kaylle</span>
        </q-toolbar>
      </q-footer>
      <q-page-container>
        <router-view />
      </q-page-container>
  </q-layout>
</template>

<script setup>
import { PhLink, PhList, PhTerminalWindow } from "@phosphor-icons/vue";

const openResume = () => {
  window.open('https://spb.hh.ru/applicant/resumes/view?resume=83ff72eeff09b6e22f0039ed1f374148427970','_blank')
}
</script>

<style lang="scss">
.search-btn {
  background: #4A4475;
}
.q-input {
  & .q-field__before {
    height: 34px;
    min-height: 34px;
  }
  & .q-field__inner {
    height: 34px;
    min-height: 34px;
    & .q-field__control {
      box-shadow: $card-shadow;
      height: 34px;
      & .q-field__label {
        top: 6px;
        font-size: 10px;
      }
    }
  }
}
.search-field {
  & .q-field__control {
    background: #493C67 !important;
  }
}
.extra-field {
  & .q-field__control {
    background: #2B2D4B !important;
  }
}
</style>
