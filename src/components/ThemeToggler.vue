<template>
  <div>
    <Toggle v-model:pressed="isDark">
      <div
        class="relative flex justify-between gap-x-2 rounded-full border-primary bg-text p-2 text-xl text-background"
      >
        <Icon icon="tabler:sun-filled" />
        <Icon icon="tabler:moon-filled" />
        <div
          :class="{
            'ease ease-out-back absolute top-1/2 aspect-square h-[calc(100%-0.75rem)] -translate-y-1/2 rounded-full bg-background transition-all duration-[400ms]': true,
            'left-2.5 translate-x-full': !isDark,
            'left-1.5 translate-x-0': isDark,
          }"
        />
      </div>
    </Toggle>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
const isDark = ref(isDarkTheme())

function toggleTheme() {
  document.documentElement.classList.toggle("dark", isDarkTheme())
}

function isDarkTheme() {
  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  )
}

watch(
  isDark,
  () => {
    localStorage.theme = isDark.value ? "dark" : "light"
    toggleTheme()
  },
  {
    immediate: true,
  }
)
</script>
