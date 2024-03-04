<template>
  <div class="flex flex-col overflow-hidden">
    <div
      class="relative logo-screen:h-full h-screen w-screen overflow-hidden bg-global-city bg-cover bg-center bg-no-repeat"
    >
      <MyGamesLogo class="absolute right-[80px] top-[80px]" />
      <div
        class="flex h-full flex-col items-center justify-center gap-5 py-16 text-lg 2xl:gap-4"
      >
        <MainLogo class="mb-12" />

        <InfoBlock size="large" class="relative -translate-x-0.5">
          <quotes class="absolute top-1/2 l-1/2  -translate-y-1/2" />
          <div class="relative z-10 w-[390px] translate-x-20">
            <p class="mb-6">Игра больше не публикуется на площадке. Если вы играли в проект ранее, перейдите на сайт
              разработчика и
              авторизуйтесь, чтобы сохранить своего
              персонажа.
            </p>

            <p>Нажимая "Перейти", вы соглашаетесь с передачей ваших
              данных
              компании MY.GAMES B.V. и их обработкой согласно
              <a class="underline" href="https://documentation.my.games/terms/mygames_privacy" target="_blank">Политике
                конфиденциальности</a> портала MY.GAMES
            </p>
          </div>
        </InfoBlock>

        <BaseButton class="mt-10" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import MainLogo from "../assets/main-logo.vue";
import BaseButton from "../components/BaseButton.vue";
import InfoBlock from "../components/InfoBlock.vue";
import MyGamesLogo from "../assets/my-games-logo.vue";
import Quotes from "../assets/quotes.vue";

const title = useTitle();
title.value = "Global City";


</script>

<style scoped></style>
