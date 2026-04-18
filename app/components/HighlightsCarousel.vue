<script setup lang="ts">
import { ref } from 'vue'
import type { Highlight } from '../types/higllights.types'

const props = defineProps<{
  highlights: Highlight[]
}>()

const emit = defineEmits<{
  (e: 'open-story', highlight: Highlight): void
}>()

const scrollContainer = ref<HTMLElement | null>(null)

const scroll = (direction: 'left' | 'right') => {
  if (scrollContainer.value) {
    const scrollAmount = 300
    scrollContainer.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }
}

</script>

<template>
  <section class="flex justify-center w-full md:my-4">
    <div class="relative w-full max-w-4xl px-2 md:px-8 flex items-center group">

      <!-- Left Scroll Button -->
      <UButton icon="uil:angle-left" size="md"
        class="hidden md:flex absolute left-0 z-20 rounded-full shadow-md dark:bg-old-neutral-600 bg-old-neutral-400"
        color="neutral" variant="solid" v-show="props.highlights.length > 7" @click="scroll('left')" />

      <!-- Scrollable Container -->
      <div ref="scrollContainer"
        class="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth w-full px-2 py-4">

        <div v-for="(h, i) in props.highlights" :key="i" @click="emit('open-story', h)"
          class="flex flex-col items-center gap-1.5 cursor-pointer group/item w-16 md:w-20 shrink-0">
          <!-- Gradient Ring -->
          <div
            class="w-16 h-16 md:w-20 md:h-20 rounded-full p-[2px] bg-linear-to-tr from-yellow-400 via-red-500 to-fuchsia-600 group-hover/item:scale-105 transition-transform duration-200">
            <!-- Inner Avatar Container -->
            <div
              class="w-full h-full rounded-full border-[3px] border-white dark:border-[#121212] overflow-hidden flex items-center justify-center bg-white dark:bg-[#121212]">
              <img :src="h.coverImage" :alt="h.title" class="w-full h-full object-cover">
            </div>
          </div>
          <span class="text-xs w-full truncate text-center font-medium">{{ h.title }}</span>
        </div>
      </div>

      <!-- Right Scroll Button -->
      <UButton icon="uil:angle-right" size="md"
        class="hidden md:flex absolute right-0 z-20 rounded-full shadow-md dark:bg-old-neutral-600 bg-old-neutral-400"
        color="neutral" variant="solid" v-show="props.highlights.length > 7" @click="scroll('right')" />

    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
