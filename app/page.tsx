"use client"

import { useState } from "react"
import { SearchHeader } from "@/components/search-header"
import { ServiceCard } from "@/components/service-card"
import { PersonalizedDashboard } from "@/components/personalized-dashboard"
import { MLInsights } from "@/components/ml-insights"
import { FilterSidebar } from "@/components/filter-sidebar"
import { mockServices } from "@/lib/mock-data"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredServices, setFilteredServices] = useState(mockServices)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // Simulate ML-powered search with relevance scoring
    const filtered = mockServices
      .filter(
        (service) =>
          service.name.toLowerCase().includes(query.toLowerCase()) ||
          service.category.toLowerCase().includes(query.toLowerCase()) ||
          service.description.toLowerCase().includes(query.toLowerCase()),
      )
      .sort((a, b) => b.relevanceScore - a.relevanceScore)

    setFilteredServices(filtered)
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    const filtered = category === "all" ? mockServices : mockServices.filter((service) => service.category === category)
    setFilteredServices(filtered)
  }

  return (
    <div className="min-h-screen bg-background">
      <SearchHeader onSearch={handleSearch} />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <FilterSidebar selectedCategory={selectedCategory} onCategoryChange={handleCategoryFilter} />

          <div className="lg:col-span-3 space-y-8">
            <PersonalizedDashboard />

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {searchQuery ? `Results for "${searchQuery}"` : "Recommended Services"}
                </h2>
                <span className="text-sm text-muted-foreground">{filteredServices.length} services found</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </section>

            <MLInsights />
          </div>
        </div>
      </main>
    </div>
  )
}
