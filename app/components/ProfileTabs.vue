<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="border-t border-neutral-800 mt-2">
    <div class="flex justify-center uppercase text-xs font-semibold tracking-widest text-neutral-400">
      <button 
        @click="$emit('update:modelValue', 'posts')" 
        class="flex items-center gap-2 px-6 py-4 border-t-2 transition-colors"
        :class="modelValue === 'posts' ? 'border-white text-white' : 'border-transparent hover:text-white'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
        <span class="hidden md:inline">Posts</span>
      </button>
      
      <button 
        @click="$emit('update:modelValue', 'reels')" 
        class="flex items-center gap-2 px-6 py-4 border-t-2 transition-colors"
        :class="modelValue === 'reels' ? 'border-white text-white' : 'border-transparent hover:text-white'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
        <span class="hidden md:inline">Reels</span>
      </button>
      
      <button 
        @click="$emit('update:modelValue', 'tagged')" 
        class="flex items-center gap-2 px-6 py-4 border-t-2 transition-colors"
        :class="modelValue === 'tagged' ? 'border-white text-white' : 'border-transparent hover:text-white'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12A10 10 0 1 0 22 12 10 10 0 1 0 2 12Z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
        <span class="hidden md:inline">Tagged</span>
      </button>
    </div>
  </div>
</template>
