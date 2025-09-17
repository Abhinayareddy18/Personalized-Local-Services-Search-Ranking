"use client"

import { Star, MapPin, Clock, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Service {
  id: string
  name: string
  category: string
  description: string
  rating: number
  reviewCount: number
  priceRange: string
  distance: string
  estimatedTime: string
  relevanceScore: number
  ctrPrediction: number
  cvrPrediction: number
  imageUrl: string
  tags: string[]
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative">
        <img src={service.imageUrl || "/placeholder.svg"} alt={service.name} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {service.priceRange}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-card-foreground line-clamp-1">{service.name}</h3>
          <div className="flex items-center space-x-1 text-sm">
            <TrendingUp className="w-3 h-3 text-accent" />
            <span className="text-accent font-medium">{Math.round(service.relevanceScore * 100)}%</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{service.description}</p>

        <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{service.rating}</span>
            <span>({service.reviewCount})</span>
          </div>

          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{service.distance}</span>
          </div>

          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{service.estimatedTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {service.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            <span>CTR: {Math.round(service.ctrPrediction * 100)}%</span>
            <span className="ml-2">CVR: {Math.round(service.cvrPrediction * 100)}%</span>
          </div>
          <Button size="sm" className="ml-auto">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
