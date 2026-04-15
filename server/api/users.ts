import type { GitHubUser } from '~/types/github.types'

export default defineEventHandler(async (): Promise<GitHubUser> => {
  const data = await $fetch<GitHubUser>('https://api.github.com/users/writer-nitesh')
  return data
})
