<template>
  <div :class="setCurrentBlockSize()" class="text-base">
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
      return "w-[450px] py-5 px-[30px] bg-white rounded-2xl";
    case "large":
      return "w-[528px]";
  }
};
</script>

<style scoped></style>