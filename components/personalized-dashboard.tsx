"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, Star } from "lucide-react"

export function PersonalizedDashboard() {
  const userPreferences = [
    { category: "Italian Cuisine", score: 0.92 },
    { category: "Boutique Hotels", score: 0.87 },
    { category: "Live Music", score: 0.81 },
    { category: "Craft Cocktails", score: 0.76 },
  ]

  const recentActivity = [
    { action: "Visited", place: "Nopa Restaurant", time: "2 hours ago" },
    { action: "Saved", place: "Hotel Zephyr", time: "1 day ago" },
    { action: "Reviewed", place: "The Fillmore", time: "3 days ago" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            Your Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {userPreferences.map((pref) => (
            <div key={pref.category} className="flex items-center justify-between">
              <span className="text-sm text-card-foreground">{pref.category}</span>
              <Badge variant="secondary">{Math.round(pref.score * 100)}%</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {activity.action}
                </Badge>
                <span className="text-card-foreground">{activity.place}</span>
              </div>
              <p className="text-muted-foreground text-xs mt-1">{activity.time}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            Quick Stats
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-card-foreground">Places Visited</span>
            <span className="font-semibold">127</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-card-foreground">Reviews Written</span>
            <span className="font-semibold">43</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-card-foreground">Avg Rating Given</span>
            <span className="font-semibold">4.2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-card-foreground">Saved Places</span>
            <span className="font-semibold">89</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
