<script setup lang="ts">
import { ref } from 'vue'
import info from '~/data/info'

defineProps<{
  activeTab: string
}>()

const selectedProject = ref<any>(null)
const isModalOpen = ref(false)

const openProject = (project: any) => {
  selectedProject.value = { ...project, showFullDesc: false }
  isModalOpen.value = true
}
</script>

<template>
  <div class="py-4 px-0">
    <!-- Projects View (Instagram Grid Style) -->
    <div v-show="activeTab === 'projects'" class="grid grid-cols-3 gap-0.5 md:gap-1">
      <div v-for="project in info.projects" :key="project.name"
        class="md:h-80 h-40 relative cursor-pointer group bg-neutral-900" @click="openProject(project)">
        <img v-if="project.image" :src="project.image"
          @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/171717/white?text=' + encodeURIComponent(project.name)"
          class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" />
        <div v-else class="w-full h-full flex items-center justify-center text-neutral-600">
          <Icon name="uil:folder" class="text-4xl" />
        </div>

        <!-- Hover Overlay -->
        <div
          class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div class="flex gap-6 text-white font-bold">
            <div class="flex items-center gap-2">
              <Icon name="uil:heart" class="text-xl" /> {{ Math.floor(Math.random() * 900) + 100 }}
            </div>
            <div class="flex items-center gap-2">
              <Icon name="uil:comment" class="text-xl" /> {{ Math.floor(Math.random() * 50) + 5 }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills View -->
    <div v-show="activeTab === 'skills'" class="py-2 max-w-3xl mx-auto text-center px-2">
      <div class="flex flex-wrap gap-2 justify-start">
        <div v-for="skill in info.skills" :key="skill"
          class="lowercase px-4 py-2 rounded-full text-sm font-medium hover:underline cursor-pointer text-blue-500">
          #{{ skill }}
        </div>
      </div>
    </div>

    <!-- Experience View -->
    <div v-show="activeTab === 'experience'" class="py-2 max-w-3xl mx-auto space-y-8 px-4">
      <div v-for="exp in info.work_experience" :key="exp.company_name"
        class="relative pl-8 border-l border-neutral-700">
        <div class="absolute w-4 h-4 bg-neutral-900 border-2 border-neutral-500 rounded-full -left-[8.5px] top-1"></div>
        <h3 class="text-xl font-bold">{{ exp.position }}</h3>
        <div class="font-medium mt-1">{{ exp.company_name }}</div>
        <div class="text-xs text-neutral-400 mt-1 mb-4 flex items-center gap-2">
          <Icon name="uil:calendar-alt" /> {{ exp.start }} - {{ exp.end }}
          <span class="text-neutral-600">|</span>
          <Icon name="uil:map-marker" class="capitalize" /> {{ exp.location }}
        </div>
        <ul class="space-y-2 text-sm">
          <li v-for="desc in exp.description" :key="desc" class="flex gap-2">
            <Icon name="uil:angle-right" class="mt-0.5 shrink-0" />
            <span>{{ desc }}</span>
          </li>
        </ul>
        <div class="flex flex-wrap gap-2 mt-4">
          <UBadge v-for="skill in exp.skills" :key="skill" color="neutral" variant="soft" size="sm">{{ skill }}</UBadge>
        </div>
      </div>
    </div>

    <!-- Education View -->
    <div v-show="activeTab === 'education'" class="py-4 md:py-6 max-w-3xl mx-auto space-y-6 px-3 lg:px-0">
      <div v-for="edu in info.education" :key="edu.course"
        class="relative w-full border-b border-neutral-100 dark:border-neutral-800 pb-4 last:border-0">
        <div class="flex flex-col sm:flex-row w-full sm:justify-between sm:items-start gap-1">
          <h3 class="text-lg md:text-xl font-bold text-neutral-900 dark:text-white leading-snug">{{ edu.course }}</h3>
          <div class="text-xs text-neutral-500 dark:text-neutral-400 mt-1 sm:mt-1.5 flex items-center gap-1.5 shrink-0">
            <Icon name="uil:calendar-alt" /> {{ edu.start }} - {{ edu.end }}
          </div>
        </div>
        <div class="flex flex-col sm:flex-row w-full sm:justify-between sm:items-start gap-1 mt-2 sm:mt-1">
          <div class="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300">{{ edu.institution }}
          </div>
          <div
            class="text-xs text-neutral-500 dark:text-neutral-400 mt-1 sm:mt-0 flex items-center gap-1.5 shrink-0 capitalize">
            <Icon name="uil:map-marker" /> {{ edu.location }}
          </div>
        </div>
      </div>
    </div>

    <!-- Certifications View -->
    <div v-show="activeTab === 'certifications'"
      class="py-2 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 px-2 md:px-0">
      <a v-for="cert in info.certifications" :key="cert.name" :href="cert.link" target="_blank"
        class="block p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-400 dark:hover:border-white transition-colors bg-white/50 dark:bg-neutral-900/40 group shadow-sm dark:shadow-none">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-start gap-3">
            <div
              class="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-md shrink-0 focus-within:ring hover:bg-neutral-200 dark:hover:bg-neutral-700 transition">
              <Icon name="uil:award" class="text-lg md:text-xl text-neutral-800 dark:text-white" />
            </div>
            <span class="text-neutral-800 dark:text-neutral-200 font-medium text-xs md:text-sm mt-1">{{ cert.name
              }}</span>
          </div>
          <Icon name="uil:external-link-alt"
            class="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-800 dark:group-hover:text-white transition-colors text-lg flex-shrink-0 mt-1" />
        </div>
      </a>
    </div>

    <!-- Project Post Modal (Instagram Style) -->
    <Teleport to="body">
      <div v-if="isModalOpen && selectedProject"
        class="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm" @click="isModalOpen = false"></div>

        <div
          class="relative flex flex-col md:flex-row h-full sm:h-[85vh] md:h-[600px] w-full max-w-4xl mx-auto overflow-hidden sm:rounded-md shadow-2xl z-10 bg-white dark:bg-black md:border md:border-neutral-200 dark:md:border-neutral-800">

          <!-- ============================ -->
          <!-- Desktop Side-by-Side Layout  -->
          <!-- ============================ -->
          <div class="hidden md:flex w-full h-full">
            <!-- Left side: Image -->
            <div
              class="h-full w-[60%] bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center shrink-0 border-r border-neutral-200 dark:border-neutral-800 relative">
              <img v-if="selectedProject.image" :src="selectedProject.image"
                @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/171717/white?text=' + encodeURIComponent(selectedProject.name)"
                class="w-full h-full object-contain" />
              <Icon v-else name="uil:folder" class="text-7xl text-neutral-400 dark:text-neutral-600" />
            </div>

            <!-- Right side: Content -->
            <div class="h-full w-[40%] flex flex-col">
              <!-- Header -->
              <div
                class="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800 shrink-0">
                <div class="flex items-center gap-3">
                  <img :src="info.profile_image" class="w-8 h-8 rounded-full object-cover" />
                  <div class="font-semibold text-sm text-neutral-900 dark:text-white flex items-center gap-1">
                    <span> {{ info.username }}</span>
                    <Icon name="mdi:tick-decagram" class="text-blue-500 text-md" />
                  </div>
                </div>
                <div class="flex gap-2 items-center">
                  <UButton v-if="selectedProject.links?.live" :to="selectedProject.links.live" target="_blank" size="xs"
                    color="neutral" variant="ghost" icon="uil:external-link-alt" />
                  <UButton v-if="selectedProject.links?.source" :to="selectedProject.links.source" target="_blank"
                    size="xs" color="neutral" variant="ghost" icon="uil:github" />
                  <UButton color="neutral" variant="ghost" icon="i-heroicons-x-mark"
                    class="ml-2 hover:bg-neutral-100 dark:hover:bg-neutral-800" @click="isModalOpen = false" />
                </div>
              </div>

              <!-- Description / Comments Space -->
              <div class="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
                <div class="flex gap-3">
                  <img :src="info.profile_image" class="w-8 h-8 rounded-full object-cover shrink-0" />
                  <div>
                    <span class="font-semibold text-sm text-neutral-900 dark:text-white mr-2 flex items-center gap-1">
                      <span> {{ info.username }}</span>
                      <Icon name="mdi:tick-decagram" class="text-blue-500 text-md" />
                    </span>
                    <span class="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">{{
                      selectedProject.description[0] }}</span>

                    <div class="mt-2" v-if="selectedProject.description.length > 1">
                      <p v-for="(desc, idx) in selectedProject.description.slice(1)" :key="idx"
                        class="text-sm text-neutral-500 dark:text-neutral-400 mt-2">{{ desc }}</p>
                    </div>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-1 mt-3">
                      <span v-for="tech in selectedProject.technology_used" :key="tech"
                        class="text-xs text-blue-500 dark:text-blue-400 font-medium">#{{ tech.replace(/\s+/g,
                          '').toLowerCase() }}</span>
                    </div>

                    <!-- Timestamp -->
                    <div class="text-xs text-neutral-500 dark:text-neutral-500 mt-3 font-semibold">{{
                      selectedProject.start }} - {{
                        selectedProject.end }}</div>
                  </div>
                </div>

                <!-- Fake Comments -->
                <div class="flex gap-3 items-start mt-6 opacity-70 hover:opacity-100 transition-opacity">
                  <div
                    class="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                    <Icon name="uil:user" class="text-neutral-500" />
                  </div>
                  <div>
                    <span class="font-semibold text-sm text-neutral-900 dark:text-white mr-2">dev_fan</span>
                    <span class="text-sm text-neutral-700 dark:text-neutral-200">This looks amazing! 🔥 Can't wait to
                      try it out.</span>
                    <div class="text-[11px] text-neutral-500 mt-1 flex gap-4 font-semibold">
                      <span>2w</span>
                      <span>12 likes</span>
                      <span>Reply</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Footer Actions -->
              <div class="p-4 border-t border-neutral-200 dark:border-neutral-800 shrink-0">
                <div class="flex items-center justify-between mb-2 text-neutral-900 dark:text-white">
                  <div class="flex items-center gap-4">
                    <Icon name="uil:heart"
                      class="text-2xl hover:text-neutral-500 dark:hover:text-neutral-400 cursor-pointer transition-colors" />
                    <Icon name="uil:comment"
                      class="text-2xl hover:text-neutral-500 dark:hover:text-neutral-400 cursor-pointer transition-colors" />
                    <Icon name="mynaui:send"
                      class="text-2xl hover:text-neutral-500 dark:hover:text-neutral-400 cursor-pointer transition-colors" />
                  </div>
                  <Icon name="uil:bookmark"
                    class="text-2xl hover:text-neutral-500 dark:hover:text-neutral-400 cursor-pointer transition-colors" />
                </div>
                <div class="font-semibold text-sm text-neutral-900 dark:text-white mb-1">2,341 likes</div>
                <div class="text-xs text-neutral-500 dark:text-neutral-400 mb-4">{{ selectedProject.name }}</div>

                <!-- Add Comment -->
                <div class="flex items-center gap-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                  <Icon name="uil:smile" class="text-2xl text-neutral-500 dark:text-neutral-400" />
                  <input type="text" placeholder="Add a comment..."
                    class="bg-transparent border-none text-sm text-neutral-900 dark:text-white w-full focus:ring-0 focus:outline-none placeholder-neutral-400 dark:placeholder-neutral-500" />
                  <button class="text-blue-500 font-semibold text-sm opacity-50 cursor-default">Post</button>
                </div>
              </div>
            </div>
          </div>

          <!-- ============================ -->
          <!-- Mobile Native Feed Layout    -->
          <!-- ============================ -->
          <div
            class="flex flex-col md:hidden w-full h-full bg-white dark:bg-black overflow-y-auto hide-scrollbar pb-10">
            <!-- Header -->
            <div class="flex items-center justify-between p-3 shrink-0">
              <div class="flex items-center gap-4">
                <Icon name="uil:arrow-left" class="text-2xl text-neutral-900 dark:text-white cursor-pointer -ml-1"
                  @click="isModalOpen = false" />
                <div class="flex items-center gap-3">
                  <img :src="info.profile_image" class="w-9 h-9 rounded-full object-cover" />
                  <div class="flex flex-col">
                    <div class="font-semibold text-[15px] text-neutral-900 dark:text-white flex items-center gap-1">
                      <span>{{ info.username }}</span>
                      <Icon name="mdi:tick-decagram" class="text-blue-500 text-md" />
                      <span class="text-neutral-500 dark:text-neutral-400 font-normal mx-1">•</span>
                      <span class="text-neutral-500 dark:text-neutral-400 font-normal text-sm">1d</span>
                    </div>
                    <div class="text-[12px] text-neutral-600 dark:text-neutral-100">Suggested for you</div>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-blue-500 font-semibold text-sm">Follow</span>
                <Icon name="uil:ellipsis-h" class="text-neutral-900 dark:text-white text-xl" />
              </div>
            </div>

            <!-- Image -->
            <div
              class="w-full shrink-0 relative bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center min-h-[300px]">
              <img v-if="selectedProject.image" :src="selectedProject.image"
                @error="(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/400x500/171717/white?text=' + encodeURIComponent(selectedProject.name)"
                class="w-full h-auto max-h-[70vh] object-contain" />
              <div v-else class="w-full aspect-square flex items-center justify-center">
                <Icon name="uil:folder" class="text-7xl text-neutral-400 dark:text-neutral-600" />
              </div>
            </div>

            <!-- Mobile Footer Actions & Description -->
            <div class="px-4 py-4">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-6 text-neutral-900 dark:text-white">
                  <div class="flex items-center gap-1.5">
                    <Icon name="uil:heart" class="text-[26px]" />
                    <span class="text-[15px] font-semibold">1.6M</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <Icon name="uil:comment" class="text-[26px]" />
                    <span class="text-[15px] font-semibold">9.3K</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <Icon name="mynaui:send" class="text-[24px]" />
                    <span class="text-[15px] font-semibold">13K</span>
                  </div>
                </div>
                <div>
                  <Icon name="uil:bookmark" class="text-[26px] text-neutral-900 dark:text-white" />
                </div>
              </div>

              <!-- Truncated Description -->
              <div class="text-neutral-900 dark:text-white text-[15px] cursor-pointer leading-tight wrap-break-word"
                @click="selectedProject.showFullDesc = !selectedProject.showFullDesc">
                <span class="font-semibold mr-1">{{ info.username }}</span>
                <Icon name="uil:check-circle" class="text-blue-500 text-xs mr-2 inline" />

                <span class="text-neutral-700 dark:text-neutral-100" v-if="!selectedProject.showFullDesc">
                  “{{ selectedProject.name }}” {{ selectedProject.description[0].substring(0, 40) }}...
                  <span class="text-neutral-500 dark:text-neutral-400 ml-1 font-normal">more</span>
                </span>
                <span class="text-neutral-700 dark:text-neutral-100" v-else>
                  “{{ selectedProject.name }}” {{ selectedProject.description[0] }}
                  <span v-for="tech in selectedProject.technology_used" :key="tech"
                    class="text-blue-500 dark:text-blue-400 font-medium ml-1">#{{ tech.replace(/\s+/g, '').toLowerCase()
                    }}</span>
                </span>
              </div>

              <div class="text-[13px] font-semibold text-neutral-500 dark:text-neutral-400 mt-2 cursor-pointer">See
                translation</div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
