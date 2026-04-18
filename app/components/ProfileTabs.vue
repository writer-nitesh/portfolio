<script setup lang="ts">
import tabs from '~/data/tabs'

defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="mt-2">
    <div class="flex flex-wrap justify-center uppercase text-xs font-semibold tracking-widest text-neutral-400">
      <UButton v-for="tab in tabs" :key="tab.name" @click="$emit('update:modelValue', tab.name)" variant="ghost"
        color='neutral'
        class="flex items-center justify-center gap-2 px-4 md:px-6 py-4 border-t-2 transition-colors rounded-none mt-[-1px] flex-1 md:flex-none uppercase tracking-widest hover:bg-transparent"
        :class="modelValue === tab.name ? 'dark:border-white border-neutral-800' : 'dark:border-neutral-800 border-neutral-200'">
        <Icon :name="tab.icon" class="text-lg md:text-xl" />
        <span class="hidden md:inline">{{ tab.name }}</span>
      </UButton>
    </div>
  </div>
</template>
