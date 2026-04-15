<script setup lang="ts">
import { ref } from 'vue'

const highlights = [
  { id: 1, name: 'Delhi', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200&h=200&fit=crop', photos: ['https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=1200&fit=crop'] },
  { id: 2, name: 'GGN', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=200&h=200&fit=crop', photos: ['https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&h=1200&fit=crop'] },
  { id: 3, name: 'T', image: 'https://images.unsplash.com/photo-1565019056238-de766ec6d194?w=200&h=200&fit=crop', photos: ['https://images.unsplash.com/photo-1565019056238-de766ec6d194?w=800&h=1200&fit=crop'] },
  { id: 4, name: 'F', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=200&h=200&fit=crop', photos: ['https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=1200&fit=crop'] },
  { id: 5, name: 'college', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop', photos: ['https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=1200&fit=crop'] },
]

const posts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop' },
  { id: 2, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop' },
  { id: 3, image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=600&fit=crop' },
  { id: 4, image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop' },
]

const activeTab = ref('posts')
const activeStory = ref<null | any>(null)

const handleOpenStory = (highlight: any) => {
  activeStory.value = highlight
}

const handleCloseStory = () => {
  activeStory.value = null
}
</script>

<template>
  <div class="max-w-4xl mx-auto w-full min-h-screen">
    <!-- Navbar Mobile -->
    <!-- <div class="md:hidden flex items-center justify-between p-4 border-b border-neutral-800">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
        <h1 class="text-xl font-bold">singh_ni30_</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </div>
    </div> -->

    <ProfileHeader />

    <HighlightsCarousel :highlights="highlights" @open-story="handleOpenStory" />

    <ProfileTabs v-model="activeTab" />

    <PostGrid :active-tab="activeTab" :posts="posts" />

    <!-- Fullscreen Story Modal -->
    <StoryViewer v-if="activeStory" :story="activeStory" @close="handleCloseStory" />
  </div>
</template>
