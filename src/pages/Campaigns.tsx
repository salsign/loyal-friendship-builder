import { Cake, Bell, MonitorPlay, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Campaigns() {
  return (
    <div className="min-h-screen p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-medium text-gray-700">Campaigns</h1>
      </div>

      <p className="text-gray-600">Create campaigns to engage your loyalty members.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-rose-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cake className="h-5 w-5" />
              Birthday Club
            </CardTitle>
            <CardDescription>
              An automated message and/or reward voucher sent to celebrate your members' special day.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for future functionality */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Lapsed Customers
            </CardTitle>
            <CardDescription>
              An automated Push Notification sent to members' after a certain interval of no stamps engagement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for future functionality */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MonitorPlay className="h-5 w-5" />
              Scratch & Win
            </CardTitle>
            <CardDescription>
              Add a bit of fun with a game based on the idea of a scratch card - but digital!
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for future functionality */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Integrate with Mailing Platforms
            </CardTitle>
            <CardDescription>
              Automatically add new loyalty contacts to your mailing platform lists, so you can send members EDMs and newsletters.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for future functionality */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}