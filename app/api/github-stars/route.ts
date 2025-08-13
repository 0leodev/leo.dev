import { NextResponse } from "next/server"
import { GitHubApiClient } from "@/lib/services/github-api"

export async function GET() {
  try {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN

    if (!GITHUB_TOKEN) {
      console.error("GitHub token is not configured")
      return NextResponse.json(
        { error: "GitHub token not configured" }, 
        { status: 500 }
      )
    }

    const githubClient = new GitHubApiClient(GITHUB_TOKEN)
    const repositories = await githubClient.fetchStarredRepositories()
    
    return NextResponse.json(repositories)
  } catch (error) {
    console.error("Error in GitHub API route:", error)
    return NextResponse.json(
      { error: "Failed to fetch starred repositories" }, 
      { status: 500 }
    )
  }
}