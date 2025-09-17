"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, BarChart3, Target, Zap } from "lucide-react"

export function MLInsights() {
  const insights = [
    {
      title: "Vector Similarity",
      description: "Using embeddings to find similar venues based on your preferences",
      score: 0.94,
      icon: Brain,
    },
    {
      title: "CTR Prediction",
      description: "Machine learning model predicting click-through rates",
      score: 0.87,
      icon: Target,
    },
    {
      title: "Conversion Rate",
      description: "Deep learning architecture for CVR optimization",
      score: 0.91,
      icon: BarChart3,
    },
    {
      title: "Real-time Ranking",
      description: "Blended ranking algorithm with personalization signals",
      score: 0.89,
      icon: Zap,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Brain className="w-6 h-6 text-accent" />
          ML Pipeline Insights
        </CardTitle>
        <p className="text-sm text-muted-foreground">Real-time performance metrics from our machine learning models</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight) => (
            <div key={insight.title} className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <insight.icon className="w-4 h-4 text-accent" />
                  <h4 className="font-semibold text-sm">{insight.title}</h4>
                </div>
                <Badge variant="secondary">{Math.round(insight.score * 100)}%</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold text-sm mb-2">Model Performance</h4>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-lg font-bold text-accent">+9%</p>
              <p className="text-xs text-muted-foreground">Conversion Efficiency</p>
            </div>
            <div>
              <p className="text-lg font-bold text-accent">127ms</p>
              <p className="text-xs text-muted-foreground">Avg Response Time</p>
            </div>
            <div>
              <p className="text-lg font-bold text-accent">94.2%</p>
              <p className="text-xs text-muted-foreground">Model Accuracy</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
