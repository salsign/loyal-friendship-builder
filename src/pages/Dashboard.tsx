import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Stamp, Gift, UserPlus } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

const data = [
  { month: "Jan", value: 0 },
  { month: "Feb", value: 2 },
  { month: "Mar", value: 0 },
  { month: "Apr", value: 0 },
  { month: "May", value: 4 },
  { month: "Jun", value: 0 },
  { month: "Jul", value: 3 },
  { month: "Aug", value: 0 },
  { month: "Sep", value: 0 },
  { month: "Oct", value: 0 },
  { month: "Nov", value: 0 },
  { month: "Dec", value: 0 },
]

export default function Dashboard() {
  return (
    <div className="p-6 bg-background min-h-screen">
      <h1 className="text-4xl font-semibold mb-6">Dashboard</h1>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <Select defaultValue="all-locations">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-locations">All Locations</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-cards">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select stamp card" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-cards">All Stamp Cards</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="this-year">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Stamp className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <p className="text-3xl font-semibold">5320</p>
                <p className="text-muted-foreground">Stamps this year</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Gift className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-3xl font-semibold">450</p>
                <p className="text-muted-foreground">Redemptions this year</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <UserPlus className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-3xl font-semibold">535</p>
                <p className="text-muted-foreground">Joined this year</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-3xl font-semibold">4300</p>
                <p className="text-muted-foreground">Total members</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Member activity this year</h2>
          <Tabs defaultValue="stamps">
            <TabsList>
              <TabsTrigger value="stamps">Stamps</TabsTrigger>
              <TabsTrigger value="redemptions">Redemptions</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Bar dataKey="value" fill="#FFE4BA" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}