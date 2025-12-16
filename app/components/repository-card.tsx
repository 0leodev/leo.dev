import { memo } from "react"
import { Github, Star, Clock } from "lucide-react"
import type { Repository } from "@/lib/types/github"

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date)
}

interface RepositoryCardProps {
  repo: Repository
}

export const RepositoryCard = memo(function RepositoryCard({ repo }: RepositoryCardProps) {
  return (
    <a href={repo.url} target="_blank" rel="noopener noreferrer" className="repo-card group">
      <div className="repo-header">
        <h3 className="repo-title group-hover:text-gray-100">{repo.name}</h3>
        <Github className="repo-icon group-hover:text-gray-400" />
      </div>
      <p className="repo-type">
        {repo.language ? repo.language.toUpperCase() : "VARIOUS"} •{" "}
        {repo.owner.login !== "0leodev" ? "STARRED" : "OWNED"}
      </p>
      <p className="repo-description">{repo.description}</p>

      <div className="flex items-center justify-between mt-4 text-xs font-medium text-gray-500">
        <div className="flex items-center">
          <Star className="w-4 h-4 mr-1 text-gray-600" />
          <span>{repo.stars}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1 text-gray-600" />
          <span>{formatDate(repo.updatedAt)}</span>
        </div>
      </div>
    </a>
  )
})
