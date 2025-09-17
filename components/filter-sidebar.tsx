"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, MapPin, Star, DollarSign } from "lucide-react"

interface FilterSidebarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function FilterSidebar({ selectedCategory, onCategoryChange }: FilterSidebarProps) {
  const categories = [
    { id: "all", name: "All Services", count: 156 },
    { id: "dining", name: "Dining", count: 67 },
    { id: "hospitality", name: "Hotels", count: 34 },
    { id: "leisure", name: "Entertainment", count: 55 },
  ]

  const priceRanges = ["$", "$$", "$$$", "$$$$"]
  const ratings = [5, 4, 3, 2, 1]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="w-5 h-5 text-accent" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className="w-full justify-between"
              onClick={() => onCategoryChange(category.id)}
            >
              <span>{category.name}</span>
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-accent" />
            Price Range
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((price) => (
              <Button key={price} variant="outline" size="sm">
                {price}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            Rating
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {ratings.map((rating) => (
            <Button key={rating} variant="ghost" className="w-full justify-start">
              <div className="flex items-center gap-2">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
                {Array.from({ length: 5 - rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gray-300" />
                ))}
                <span className="ml-2">& up</span>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            Distance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {["Within 1 mile", "Within 5 miles", "Within 10 miles", "Any distance"].map((distance) => (
            <Button key={distance} variant="ghost" className="w-full justify-start">
              {distance}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
