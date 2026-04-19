<script setup lang="ts">
import { ref } from 'vue'
import { useHead, useSeoMeta } from '#imports'
import { highlights } from '~/data/highlights'
import info from '~/data/info'

useSeoMeta({
  title: `${info.name} | Software Developer`,
  description: info.description,
  ogTitle: `${info.name} | Software Developer`,
  ogDescription: info.description,
  ogImage: '/images/nitesh_singh_software_developer_og_image.jpeg',
  ogUrl: info.url,
  twitterTitle: `${info.name} | Software Developer`,
  twitterDescription: info.description,
  twitterImage: '/images/nitesh_singh_software_developer_og_image.jpeg',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/images/icons/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/icons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/icons/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/icons/apple-touch-icon.png' },
    { rel: 'canonical', href: info.url }
  ]
})


const activeTab = ref('projects')
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

    <PostGrid :active-tab="activeTab" />

    <LazyStoryViewer v-if="activeStory" :story="activeStory" @close="handleCloseStory" />
  </div>
</template>
