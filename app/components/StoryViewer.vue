<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps<{
  story: any
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
  if (currentStoryIndex.value < props.story.photos.length - 1) {
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
  <div class="fixed inset-0 z-50 bg-black flex flex-col">
    <!-- Progress bars -->
    <div class="absolute top-0 left-0 w-full flex gap-1 p-2 pt-4 bg-gradient-to-b from-black/60 to-transparent z-10">
      <div v-for="(photo, index) in story.photos" :key="index" class="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
        <div 
          class="h-full bg-white transition-all duration-100 ease-linear"
          :style="{ width: index < currentStoryIndex ? '100%' : (index === currentStoryIndex ? `${storyProgress}%` : '0%') }"
        ></div>
      </div>
    </div>
    
    <!-- Story Header -->
    <div class="absolute top-4 left-0 w-full p-4 flex items-center justify-between z-10 pt-6">
       <div class="flex items-center gap-2">
         <img :src="story.image" class="w-8 h-8 rounded-full border border-white/20">
         <span class="font-semibold text-sm">{{ story.name }}</span>
         <span class="text-xs text-white/60">2h</span>
       </div>
       <button @click="emit('close')" class="text-white hover:text-gray-300">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
       </button>
    </div>

    <!-- Image Area (Tappable sides) -->
    <div class="flex-1 relative flex items-center justify-center">
       <img :src="story.photos[currentStoryIndex]" class="max-w-full max-h-full object-contain pointer-events-none">
       
       <div class="absolute inset-0 flex">
         <!-- Prev hit area -->
         <div class="w-1/3 bg-transparent h-full cursor-pointer" @click="currentStoryIndex > 0 ? (currentStoryIndex--, startStoryTimer()) : null"></div>
         <!-- Next hit area -->
         <div class="flex-1 bg-transparent h-full cursor-pointer" @click="nextStoryImage"></div>
       </div>
    </div>
  </div>
</template>
