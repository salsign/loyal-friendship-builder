import { Users, Gift, UserPlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const members = [
  {
    firstName: "Sarah",
    lastName: "Staddon",
    email: "sarah@gmail.com",
    phone: "+18005682031",
    lastStampedLocation: "undefined - undefined",
    lastStampDate: "2023-07-09 16:02:32"
  },
  // ... more members can be added here
];

export default function Members() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-medium text-gray-700">Members</h1>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-center gap-2">
        <span className="bg-blue-100 p-1 rounded">👁️ DEMO VIEW</span>
        <span className="text-blue-600">
          Create & publish a Stamp Card first to unlock this area with your real data and functionality. Data shown is an example.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <div className="text-2xl font-semibold">10</div>
            <div className="text-gray-500">Total members</div>
          </div>
        </Card>

        <Card className="p-6 flex items-center gap-4">
          <div className="bg-emerald-100 p-3 rounded-lg">
            <Gift className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <div className="text-xl">Give Stamps</div>
          </div>
        </Card>

        <Card className="p-6 flex items-center gap-4">
          <div className="bg-orange-100 p-3 rounded-lg">
            <UserPlus className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <div className="text-xl">Create Member</div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Showing members from</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-gray-500">on</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All Stamp Cards" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stamp Cards</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="join-only" />
            <label htmlFor="join-only" className="text-sm text-gray-500">
              Show join only members
            </label>
          </div>

          <Input 
            type="search" 
            placeholder="Search by name, email or phone number"
            className="max-w-md"
          />

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30px]">
                  <Checkbox />
                </TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Last stamped location</TableHead>
                <TableHead>Last stamp date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{member.firstName}</TableCell>
                  <TableCell>{member.lastName}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.phone}</TableCell>
                  <TableCell>{member.lastStampedLocation}</TableCell>
                  <TableCell>{member.lastStampDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}