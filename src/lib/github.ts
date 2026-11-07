export interface RepoData {
  name: string
  fullName: string
  description: string | null
  url: string
  homepage: string | null
  language: string | null
  languages: string[]
  stars: number
  forks: number
  watchers: number
  openIssues: number
  topics: string[]
  license: string | null
  updatedAt: string | null
  pushedAt: string | null
  createdAt: string | null
  isArchived: boolean
  defaultBranch: string
  /** true when live data could not be fetched and a fallback is used */
  fallback: boolean
}

/** owner/name pairs to display, in order. */
export const REPO_SLUGS: Array<{ owner: string; repo: string }> = [
  { owner: "0leodev", repo: "bolder" },
  { owner: "0leodev", repo: "token-recovery" },
  { owner: "0leodev", repo: "renew-app" },
  { owner: "0leodev", repo: "mint-approve-transfer" },
]

const GITHUB_API = "https://api.github.com"

function authHeaders(): HeadersInit {
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "leo-dev-portfolio",
  }
  if (token) headers.Authorization = `Bearer ${token}`
  return headers
}

function fallbackRepo(owner: string, repo: string): RepoData {
  return {
    name: repo,
    fullName: `${owner}/${repo}`,
    description: null,
    url: `https://github.com/${owner}/${repo}`,
    homepage: null,
    language: null,
    languages: [],
    stars: 0,
    forks: 0,
    watchers: 0,
    openIssues: 0,
    topics: [],
    license: null,
    updatedAt: null,
    pushedAt: null,
    createdAt: null,
    isArchived: false,
    defaultBranch: "main",
    fallback: true,
  }
}

async function fetchLanguages(owner: string, repo: string): Promise<string[]> {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/languages`, {
      headers: authHeaders(),
    })
    if (!res.ok) return []
    const data = (await res.json()) as Record<string, number>
    return Object.entries(data)
      .sort((a, b) => b[1] - a[1])
      .map(([lang]) => lang)
  } catch {
    return []
  }
}

async function fetchRepo(owner: string, repo: string): Promise<RepoData> {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}`, {
      headers: authHeaders(),
    })
    if (!res.ok) return fallbackRepo(owner, repo)

    const data = await res.json()
    const languages = await fetchLanguages(owner, repo)

    return {
      name: data.name,
      fullName: data.full_name,
      description: data.description,
      url: data.html_url,
      homepage: data.homepage || null,
      language: data.language,
      languages: languages.length ? languages : data.language ? [data.language] : [],
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      watchers: data.subscribers_count ?? data.watchers_count ?? 0,
      openIssues: data.open_issues_count ?? 0,
      topics: data.topics ?? [],
      license: data.license?.spdx_id ?? null,
      updatedAt: data.updated_at ?? null,
      pushedAt: data.pushed_at ?? null,
      createdAt: data.created_at ?? null,
      isArchived: Boolean(data.archived),
      defaultBranch: data.default_branch ?? "main",
      fallback: false,
    }
  } catch {
    return fallbackRepo(owner, repo)
  }
}

/** Fetches all configured repos in parallel. Runs at build time (SSG). */
export async function getRepos(): Promise<RepoData[]> {
  return Promise.all(REPO_SLUGS.map(({ owner, repo }) => fetchRepo(owner, repo)))
}
