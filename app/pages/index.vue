<script setup lang="ts">
import { ref } from 'vue'
import { highlights } from '~/data/highlights'

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

    <ProfileHeader />

    <HighlightsCarousel :highlights="highlights" @open-story="handleOpenStory" />

    <ProfileTabs v-model="activeTab" />

    <PostGrid :active-tab="activeTab" :posts="posts" />

    <StoryViewer v-if="activeStory" :story="activeStory" @close="handleCloseStory" />
  </div>
</template>
