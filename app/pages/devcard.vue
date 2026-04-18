<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'My DevCard'
})
</script>

<template>
  <div class="min-h-[85vh] flex flex-col items-center justify-center py-12 px-4 relative">
    <!-- Back Button -->
    <div class="absolute top-2 left-2 md:top-6 md:left-6 z-10">
      <UButton to="/" color="neutral" variant="ghost" size="lg">
        <template #leading>
          <Icon name="lucide:arrow-left" class="w-5 h-5" />
        </template>
        Back
      </UButton>
    </div>

    <div class="absolute top-2 right-2 md:top-6 md:right-6 z-10">
      <UColorModeButton />
    </div>


    <div class="text-center mb-10 flex flex-col items-center gap-2">
      <h1 class="text-3xl font-bold">Bug Production License</h1>
      <p class="text-neutral-500 dark:text-neutral-400 max-w-2/3">
        Warning: Looking at this card in 3D may cause a sudden urge to ask me if I can build 'the next Facebook' for
        $50.
      </p>
    </div>

    <DevCard />
  </div>
</template>
