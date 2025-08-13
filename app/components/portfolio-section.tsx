"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import type { Repository } from "@/lib/types/github"
import { createGitHubService } from "@/lib/services/github-service"
import { RepositoryCard } from "./repository-card"

const RepositorySkeleton = () => (
  <div className="repo-card animate-pulse">
    <div className="h-6 bg-gray-800/50 w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-800/30 w-1/2 mb-6"></div>
    <div className="h-4 bg-gray-800/30 w-full mb-2"></div>
    <div className="h-4 bg-gray-800/30 w-5/6"></div>
  </div>
)

const ErrorDisplay = ({ message, onRetry }: { message: string; onRetry: () => void }) => (
  <div className="text-center py-10">
    <p className="text-gray-400 mb-4">{message}</p>
    <button onClick={onRetry} className="px-4 py-2 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-colors">
      Retry
    </button>
  </div>
)

export default function PortfolioSection() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRepositories = async () => {
    try {
      setIsLoading(true)
      const githubService = createGitHubService()
      const repos = await githubService.getStarredRepositories()
      setRepositories(repos)
      setError(null)
    } catch (err) {
      console.error("Error fetching repositories:", err)
      setError("Unable to load repositories. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRepositories()

    const intervalId = setInterval(fetchRepositories, 5 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="section-padding">
      <div className="section-bg-portfolio" />
      <div className="section-container">
        <h2 className="section-title">REPOS</h2>

        {isLoading ? (
          <div className="repo-grid">
            {[...Array(4)].map((_, index) => (
              <RepositorySkeleton key={index} />
            ))}
          </div>
        ) : error ? (
          <ErrorDisplay message={error} onRetry={fetchRepositories} />
        ) : (
          <>
            <div className="repo-grid">
              {repositories.slice(0, 4).map((repo) => (
                <RepositoryCard key={repo.fullName} repo={repo} />
              ))}
            </div>

            {repositories.length > 4 && (
              <div className="repo-footer">
                <a
                  href="https://github.com/0leodev?tab=stars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  <Star className="w-4 h-4 mr-3" />
                  <span>VIEW ALL REPOS</span>
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
