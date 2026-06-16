<script setup lang="ts">
import { ref } from 'vue'
import { useHead, useSeoMeta } from '#imports'
import info from '~/data/info'

const OG_IMAGE = 'https://ni30.vercel.app/images/nitesh_singh_software_developer_og_image.png'

useSeoMeta({
  title: `${info.name} | Software Developer`,
  description: `Bug Production License. ${info.description}`,
  ogTitle: `${info.name} | Software Developer`,
  ogDescription: `Bug Production License. ${info.description}`,
  ogImage: OG_IMAGE,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogUrl: `${info.url}devcard`,
  ogType: 'website',
  twitterTitle: `${info.name} | Software Developer`,
  twitterDescription: `Bug Production License. ${info.description}`,
  twitterImage: OG_IMAGE,
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
    { rel: 'canonical', href: `${info.url}devcard` }
  ]
})

const isAipanOpen = ref(false)

const shareCard = async () => {
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({
        title: 'Bug Production License',
        url: window.location.href
      })
    } catch (err) {
      console.error('Share failed', err)
    }
  } else {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }
}
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

    <div class="absolute top-2 right-2 md:top-6 md:right-6 z-10 flex gap-2 items-center">
      <UButton color="neutral" variant="ghost" @click="isAipanOpen = true" title="About Aipan Art">
        <Icon name="lucide:info" class="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
      </UButton>
      <UColorModeButton />
    </div>

    <!-- Aipan Art Info Sidebar (Slide-over) -->
    <Teleport to="body">
      <!-- Backdrop -->
      <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="isAipanOpen" class="fixed inset-0 bg-neutral-900/50 dark:bg-black/50 backdrop-blur-sm z-100"
          @click="isAipanOpen = false"></div>
      </Transition>

      <!-- Sidebar Content -->
      <Transition enter-active-class="transform transition ease-in-out duration-300" enter-from-class="translate-x-full"
        enter-to-class="translate-x-0" leave-active-class="transform transition ease-in-out duration-300"
        leave-from-class="translate-x-0" leave-to-class="translate-x-full">
        <div v-if="isAipanOpen"
          class="fixed inset-y-0 right-0 z-110 w-full h-full justify-between max-w-sm bg-white dark:bg-neutral-900 shadow-2xl flex flex-col  border-l border-neutral-200 dark:border-neutral-800">

          <div
            class="flex items-center justify-between p-4 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 shrink-0">

            <h3 class="text-lg font-bold text-neutral-900 dark:text-white">Inspired by Aipan Art</h3>
            <button
              class="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors flex items-center"
              @click="isAipanOpen = false">
              <Icon name="lucide:x" class="w-5 h-5" />
            </button>
          </div>

          <div class="p-5 flex-1 overflow-y-auto space-y-6">
            <p class="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
              Aipan is a traditional, ritualistic folk art from the Kumaon region of Uttarakhand, India, characterized
              by intricate white rice-paste patterns drawn on a brick-red (geru) base. Primarily practiced by women on
              walls and floors during festivals and ceremonies, it symbolizes prosperity, positivity, and divine
              invocation.
            </p>
          </div>

          <div
            class="p-4 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 shrink-0">
            <div class="flex flex-col sm:flex-row gap-3">
              <UButton to="https://en.wikipedia.org/wiki/Aipan_art" target="_blank" color="neutral" variant="solid"
                class="justify-center w-full py-2 whitespace-nowrap">
                <template #leading>
                  <Icon name="lucide:search" class="w-4 h-4" />
                </template>
                Learn More
              </UButton>
              <UButton color="neutral" variant="soft" @click="shareCard"
                class="justify-center w-full py-2 whitespace-nowrap">
                <template #leading>
                  <Icon name="lucide:share-2" class="w-4 h-4" />
                </template>
                Share Card
              </UButton>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>


    <div class="text-center mb-10 flex flex-col items-center gap-2">
      <h1 class="text-3xl font-bold">Bug Production License</h1>
      <p class="text-neutral-500 dark:text-neutral-400 md:max-w-2/3 w-full">
        Warning: Looking at this card in 3D may cause a sudden urge to ask me if I can build 'the next Facebook' for
        $50.
      </p>
    </div>

    <DevCard />
  </div>
</template>
