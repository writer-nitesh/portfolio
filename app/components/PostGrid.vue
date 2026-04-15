<script setup lang="ts">
defineProps<{
  activeTab: string
  posts: any[]
}>()
</script>

<template>
  <div>
    <!-- Grid View -->
    <div v-show="activeTab === 'posts'" class="grid grid-cols-3 gap-1 md:gap-2">
      <div v-for="post in posts" :key="post.id" class="aspect-square bg-neutral-900 group relative">
        <img :src="post.image" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity cursor-pointer">
      </div>
    </div>
    
    <div v-show="activeTab === 'reels'" class="py-20 text-center text-neutral-500">
      <div class="text-3xl mb-4">🎥</div>
      <p>Showcase specific projects or playlists here</p>
    </div>
    
    <div v-show="activeTab === 'tagged'" class="py-20 text-center text-neutral-500">
      <div class="text-3xl mb-4">🏷️</div>
      <p>Photos of you</p>
    </div>
  </div>
</template>
