<template>
  <div :class="setCurrentBlockSize()" class=" leading-[140%]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  size: "medium" | "large";
}>();

const setCurrentBlockSize = () => {
  switch (props.size) {
    case "medium":
      return "w-[408px] py-5 px-[30px] bg-white rounded-2xl text-base mt-7";
    case "large":
      return "w-[528px] text-lg";
  }
};
</script>

<style scoped></style>