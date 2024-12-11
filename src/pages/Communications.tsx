import { BellRing, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Communications() {
  return (
    <div className="min-h-screen p-6 space-y-6 bg-[#F1F1F1]">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-medium text-gray-700">Communications</h1>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <p className="text-sm text-blue-700">
          Create & publish a Stamp Card first to unlock this area with your real functionality. (Available to Pro & Elite plans only).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-gray-600 mb-4">Send a new message</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BellRing className="h-5 w-5" />
                Push notification
              </CardTitle>
              <CardDescription>
                Send free & unlimited push notification (with or without reward voucher attached) through the Stamp Me App, direct to member's pockets!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for future functionality */}
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                SMS
              </CardTitle>
              <CardDescription>
                Activate SMS to communicate with loyalty members via text message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for future functionality */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}