export interface GitHubOwner {
  login: string
  avatar: string
  url: string
}

export interface Repository {
  name: string
  fullName: string
  description: string
  url: string
  stars: number
  language: string | null
  owner: GitHubOwner
  updatedAt: string
}

export interface GitHubService {
  getStarredRepositories(): Promise<Repository[]>
}
