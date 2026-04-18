<script setup lang="ts">
import type { GitHubUser } from '~/types/github.types';
import info from '~/data/info';

const { data } = await useFetch<GitHubUser>('/api/users')

// Config map for social link keys
const socialConfig: Record<string, { icon: string; label: string }> = {
  github: { icon: 'uil:github', label: 'GitHub' },
  linkedin: { icon: 'uil:linkedin', label: 'LinkedIn' },
  email: { icon: 'uil:envelope', label: 'Email' },
  twitter: { icon: 'uil:twitter', label: 'Twitter' },
  instagram: { icon: 'uil:instagram', label: 'Instagram' },
}

// Build social links array from info data
const socialLinks = computed(() =>
  Object.entries(info.social_links)
    .filter(([_, url]) => !!url)
    .map(([key, url]) => ({
      key,
      href: key === 'email' ? `mailto:${url}` : url!,
      icon: socialConfig[key]?.icon || 'uil:link',
      label: socialConfig[key]?.label || key,
      external: key !== 'email',
    }))
)

// Stats from GitHub API
const stats = computed(() => [
  { label: 'Repositories', value: data.value?.public_repos ?? 0 },
  { label: 'Followers', value: data.value?.followers ?? 0 },
  { label: 'Following', value: data.value?.following ?? 0 },
])

// Clean display URL (strip https:// and trailing slash)
const displayUrl = computed(() =>
  info.url.replace('https://', '').replace(/\/$/, '')
)

// Native share or clipboard fallback
const shareProfile = async () => {
  const shareData = {
    title: `${info.name} — Portfolio`,
    text: info.bio,
    url: info.url,
  }

  if (navigator.share) {
    try {
      await navigator.share(shareData)
    } catch (err) {
      // User cancelled — ignore
    }
  } else {
    await navigator.clipboard.writeText(info.url)
    alert('Profile link copied to clipboard!')
  }
}
</script>

<template>
  <section class="flex flex-col justify-center items-center pt-8 pb-2 px-2 md:px-4 gap-4">
    <div>
      <div class="flex flex-row md:gap-10 gap-4">
        <!-- Avatar -->
        <div>
          <div class="size-28 md:size-36 rounded-full overflow-hidden relative group cursor-pointer">
            <img :src="info.profile_image" alt="Profile" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="flex flex-col flex-1 gap-4">
          <div class="flex items-center gap-4">
            <h1 class="text-2xl font-medium">{{ info.username }}</h1>
            <div class="hidden md:flex md:flex-row gap-2">
              <UButton size="md" color="neutral">
                <NuxtLink to="/resume/Nitesh_Software_Developer_Resume.pdf" external download>
                  Download CV
                </NuxtLink>
              </UButton>
              <UButton size="md" color="neutral" @click="shareProfile">Share profile</UButton>
            </div>
            <UColorModeButton />
          </div>

          <!-- Stats -->
          <div class="flex md:gap-8 gap-2">
            <div v-for="stat in stats" :key="stat.label" class="flex flex-col md:flex-row md:gap-2">
              <span class="font-bold">{{ stat.value }}</span>
              <span class="md:text-base text-xs">{{ stat.label }}</span>
            </div>
          </div>

          <!-- Bio & Links (Desktop) -->
          <div class="hidden md:flex flex-col gap-1">
            <span class="font-bold">{{ info.name }}</span>
            <span class="font-medium">
              <Icon name="bxs:map" />
              <Icon name="noto:mountain" />
              {{ info.location.city }},{{ info.location.state }}
            </span>

            <span class="text-sm">{{ info.bio }}</span>
            <div class="flex items-center flex-wrap gap-3 text-sm">
              <NuxtLink :href="info.url" target="_blank" class="text-blue-400 hover:underline flex items-center gap-1">
                <Icon name="uil:link" />
                {{ displayUrl }}
              </NuxtLink>
              <NuxtLink v-for="link in socialLinks" :key="link.key" :href="link.href"
                :target="link.external ? '_blank' : undefined"
                class="flex items-center gap-1 hover:text-blue-400 transition-colors">
                <Icon :name="link.icon" size="18" />
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Action Buttons (Mobile) -->
          <div class="flex md:hidden gap-2 w-full">
            <UButton size="md" color="neutral">Download CV</UButton>
            <UButton size="md" color="neutral" @click="shareProfile">Share profile</UButton>
          </div>
        </div>
      </div>

      <!-- Bio & Links (Mobile) -->
      <div class="md:hidden flex flex-col mt-4 gap-1">
        <span class="font-bold">{{ info.name }}</span>
        <span class="font-medium">
          <Icon name="bxs:map" />
          <Icon name="noto:mountain" />
          {{ info.location.city }},{{ info.location.state }}
        </span>
        <span class="text-sm">{{ info.bio }}</span>
        <div class="flex items-center flex-wrap gap-3 text-sm">

          <NuxtLink :href="info.url" target="_blank" class="text-blue-400 hover:underline flex items-center gap-1">
            <Icon name="uil:link" />
            {{ displayUrl }}
          </NuxtLink>

          <NuxtLink v-for="link in socialLinks" :key="link.key" :href="link.href"
            :target="link.external ? '_blank' : undefined"
            class="flex items-center gap-1 hover:text-blue-400 transition-colors">
            <Icon :name="link.icon" size="18" />
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
