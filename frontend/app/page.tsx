"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, BarChart, DollarSign, Download, Shield, TrendingDown, TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const performanceData = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 1200 },
  { month: 'Mar', value: 1100 },
  { month: 'Apr', value: 1400 },
  { month: 'May', value: 1300 },
  { month: 'Jun', value: 1600 }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col gap-6 p-8 max-w-7xl mx-auto">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary">Investor Dashboard</h1>
            <p className="text-muted-foreground">Insights, Predictions, and Financial Metrics</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download Report
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Insights and Predictions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Expected Listing Price</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">$245,000</div>
                <div className="flex items-center gap-2 text-green-500">
                  <TrendingUp className="h-4 w-4" />
                  <span>+2.5% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Short-Term Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <Select defaultValue="1m">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m">1 Month</SelectItem>
                    <SelectItem value="3m">3 Months</SelectItem>
                    <SelectItem value="6m">6 Months</SelectItem>
                  </SelectContent>
                </Select>
                <div className="mt-4">
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Overall Risk Index</h3>
                    <Progress value={35} className="h-2 mb-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Low Risk</span>
                      <span>Moderate</span>
                      <span>High Risk</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium">Market Risk: Low</p>
                        <p className="text-sm text-muted-foreground">Stable market conditions with low volatility</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="font-medium">Liquidity Risk: Moderate</p>
                        <p className="text-sm text-muted-foreground">Average trading volume with moderate spread</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <TrendingDown className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Credit Risk: Low</p>
                        <p className="text-sm text-muted-foreground">Strong balance sheet and stable cash flows</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Financial Metrics */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">ROE</p>
                    <p className="text-2xl font-bold">18.2%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Debt-to-Equity</p>
                    <p className="text-2xl font-bold">0.85</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">P/E Ratio</p>
                    <p className="text-2xl font-bold">22.5</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Price Volatility</p>
                    <p className="text-2xl font-bold">Low</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Health Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <BarChart className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">Strong Revenue Growth</p>
                      <p className="text-sm text-muted-foreground">15% YoY increase in revenue</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <DollarSign className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-medium">Stable Cash Flow</p>
                      <p className="text-sm text-muted-foreground">Positive operating cash flow for 8 consecutive quarters</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <TrendingDown className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="font-medium">Market Volatility</p>
                      <p className="text-sm text-muted-foreground">Below average market volatility in the past 30 days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}