<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'
import type { Highlight } from '../types/higllights.types'

const props = defineProps<{
  story: Highlight
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const currentStoryIndex = ref(0)
const storyProgress = ref(0)
let storyTimer: any = null

const startStoryTimer = () => {
  clearInterval(storyTimer)
  storyProgress.value = 0
  storyTimer = setInterval(() => {
    storyProgress.value += 2
    if (storyProgress.value >= 100) {
      nextStoryImage()
    }
  }, 100)
}

const nextStoryImage = () => {
  if (currentStoryIndex.value < props.story.images.length - 1) {
    currentStoryIndex.value++
    startStoryTimer()
  } else {
    emit('close')
  }
}

watch(() => props.story, (newVal) => {
  if (newVal) {
    currentStoryIndex.value = 0
    startStoryTimer()
  }
}, { immediate: true })

onUnmounted(() => {
  clearInterval(storyTimer)
})
</script>

<template>
  <!-- Full dark backdrop always for stories, similar to Instagram -->
  <div class="fixed inset-0 z-100 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center">

    <!-- Desktop Close Button (Outside the viewing area) -->
    <UButton @click="emit('close')" color="neutral" variant="ghost" icon="i-heroicons-x-mark-20-solid"
      class="hidden md:flex absolute top-4 right-4 z-50 text-white opacity-80 hover:opacity-100 hover:bg-white/10"
      size="xl" />

    <div
      class="w-full h-full md:max-w-[400px] md:h-[95vh] md:rounded-xl overflow-hidden  shadow-2xl bg-[#111] flex flex-col relative">

      <!-- Progress bars -->
      <div class="absolute top-0 left-0 w-full flex gap-1 p-2 pt-4 bg-linear-to-b from-black/80 to-transparent z-20">
        <div v-for="(photo, index) in story.images" :key="index"
          class="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
          <div class="h-full bg-white transition-all duration-100 ease-linear"
            :style="{ width: index < currentStoryIndex ? '100%' : (index === currentStoryIndex ? `${storyProgress}%` : '0%') }">
          </div>
        </div>
      </div>

      <!-- Story Header -->
      <div class="absolute top-4 left-0 w-full p-4 flex items-center justify-between z-20 pt-6">
        <div class="flex items-center gap-3 drop-shadow-md">
          <img :src="story.coverImage" class="w-8 h-8 rounded-full border border-white/40 object-cover">
          <span class="font-semibold text-sm text-white">{{ story.title }}</span>
        </div>

        <!-- Mobile View Close Button -->
        <UButton @click="emit('close')" color="neutral" variant="ghost" icon="i-heroicons-x-mark-20-solid"
          class="md:hidden text-white/80 hover:text-white" />
      </div>

      <!-- Image Area (Tappable sides) -->
      <div class="flex-1 w-full h-full relative flex items-center justify-center bg-black">
        <img :src="story.images[currentStoryIndex]" class="w-full h-full object-contain pointer-events-none">

        <!-- Hidden Interaction overlay -->
        <div class="absolute inset-0 flex z-10 w-full h-full">
          <!-- Prev hit area - Left 30% of screen -->
          <div class="w-[30%] bg-transparent h-full cursor-pointer tap-highlight-transparent"
            @click="currentStoryIndex > 0 ? (currentStoryIndex--, startStoryTimer()) : null"></div>

          <!-- Next hit area - Right 70% of screen -->
          <div class="flex-1 bg-transparent h-full cursor-pointer tap-highlight-transparent" @click="nextStoryImage">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.tap-highlight-transparent {
  -webkit-tap-highlight-color: transparent;
}
</style>
