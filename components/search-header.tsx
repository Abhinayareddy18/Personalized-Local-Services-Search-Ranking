"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchHeaderProps {
  onSearch: (query: string) => void
}

export function SearchHeader({ onSearch }: SearchHeaderProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Search className="w-4 h-4 text-accent-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">LocalAI</h1>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for restaurants, hotels, activities..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
          <Button type="submit" size="lg" className="px-8">
            Search
          </Button>
        </form>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-muted-foreground">Popular:</span>
          <Button variant="outline" size="sm">
            Italian Food
          </Button>
          <Button variant="outline" size="sm">
            Hotels
          </Button>
          <Button variant="outline" size="sm">
            Nightlife
          </Button>
        </div>
      </div>
    </header>
  )
}
