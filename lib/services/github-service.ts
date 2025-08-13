import type { GitHubService, Repository } from "../types/github"

export class GitHubApiService implements GitHubService {
  private baseUrl: string
  private username: string

  constructor(baseUrl = "/api/github-stars", username = "0leodev") {
    this.baseUrl = baseUrl
    this.username = username
  }

  async getStarredRepositories(): Promise<Repository[]> {
    try {
      const response = await fetch(this.baseUrl)

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error fetching repositories:", error)
      throw error
    }
  }
}

export const createGitHubService = (): GitHubService => {
  return new GitHubApiService()
}
