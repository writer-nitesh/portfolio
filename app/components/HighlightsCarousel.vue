<script setup lang="ts">
defineProps<{
  highlights: any[]
}>()

const emit = defineEmits<{
  (e: 'open-story', highlight: any): void
}>()
</script>

<template>
  <section class="py-4 px-4 overflow-x-auto no-scrollbar border-b border-neutral-800 md:border-none md:pb-8">
    <div class="flex gap-4 md:gap-8 w-max">
      <div 
        v-for="h in highlights" 
        :key="h.id" 
        @click="emit('open-story', h)"
        class="flex flex-col items-center gap-2 cursor-pointer group"
      >
        <div class="w-16 h-16 md:w-20 md:h-20 rounded-full p-[2px] bg-neutral-500 hover:bg-neutral-400 transition-colors">
          <div class="w-full h-full rounded-full border-2 border-black overflow-hidden object-cover bg-neutral-900">
             <img :src="h.image" :alt="h.name" class="w-full h-full object-cover">
          </div>
        </div>
        <span class="text-[12px] md:text-sm">{{ h.name }}</span>
      </div>
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
