// Server-side GitHub API service
import type { Repository } from "../types/github"

export class GitHubApiClient {
  private token: string
  private username: string

  constructor(token: string, username = "0leodev") {
    this.token = token
    this.username = username
  }

  async fetchStarredRepositories(): Promise<Repository[]> {
    try {
      const response = await fetch(`https://api.github.com/users/${this.username}/starred`, {
        headers: {
          Authorization: `token ${this.token}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "cover-letter-app",
        },
        cache: "no-store",
      })

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const repos = await response.json()

      // Transform the data to include only what we need
      return repos.map((repo: any) => ({
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description || "No description provided",
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
        owner: {
          login: repo.owner.login,
          avatar: repo.owner.avatar_url,
          url: repo.owner.html_url,
        },
        updatedAt: repo.updated_at,
      }))
    } catch (error) {
      console.error("Error fetching GitHub stars:", error)
      throw error
    }
  }
}
