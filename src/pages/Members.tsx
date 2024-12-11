import { Users, Gift, UserPlus, Stamp } from "lucide-react";
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
    <div className="p-6 space-y-4 bg-[#F8F7FD]"> {/* Updated background color to match Stamp Card page */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-medium text-gray-700">Members</h1> {/* Reduced from text-4xl */}
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-center gap-2"> {/* Reduced padding */}
        <span className="bg-blue-100 p-1 rounded text-sm">👁️ DEMO VIEW</span> {/* Added text-sm */}
        <span className="text-blue-600 text-sm">
          Create & publish a Stamp Card first to unlock this area with your real data and functionality. Data shown is an example.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4"> {/* Changed to 4 columns and reduced gap */}
        <Card className="p-4 flex items-center gap-3"> {/* Reduced padding and gap */}
          <div className="bg-blue-100 p-2 rounded-lg"> {/* Reduced padding */}
            <Users className="w-5 h-5 text-blue-600" /> {/* Reduced size */}
          </div>
          <div>
            <div className="text-xl font-semibold">10</div> {/* Reduced from text-2xl */}
            <div className="text-gray-500 text-sm">Total members</div>
          </div>
        </Card>

        <Card className="p-4 flex items-center gap-3">
          <div className="bg-emerald-100 p-2 rounded-lg">
            <Stamp className="w-5 h-5 text-emerald-600" /> {/* Changed to Stamp icon */}
          </div>
          <div>
            <div className="text-base">Give Stamps</div> {/* Reduced from text-xl */}
          </div>
        </Card>

        <Card className="p-4 flex items-center gap-3">
          <div className="bg-orange-100 p-2 rounded-lg">
            <UserPlus className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <div className="text-base">Create Member</div>
          </div>
        </Card>

        <Card className="p-4 flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Gift className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <div className="text-base">Redeem Reward</div>
          </div>
        </Card>
      </div>

      <Card className="p-4"> {/* Reduced padding */}
        <div className="space-y-3"> {/* Reduced spacing */}
          <div className="flex items-center gap-2 text-sm"> {/* Added text-sm */}
            <span className="text-gray-500">Showing members from</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]"> {/* Reduced width */}
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-gray-500">on</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
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
            className="max-w-md text-sm"
          />

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30px]">
                  <Checkbox />
                </TableHead>
                <TableHead className="text-sm">First Name</TableHead>
                <TableHead className="text-sm">Last Name</TableHead>
                <TableHead className="text-sm">Email</TableHead>
                <TableHead className="text-sm">Phone</TableHead>
                <TableHead className="text-sm">Last stamped location</TableHead>
                <TableHead className="text-sm">Last stamp date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="text-sm">{member.firstName}</TableCell>
                  <TableCell className="text-sm">{member.lastName}</TableCell>
                  <TableCell className="text-sm">{member.email}</TableCell>
                  <TableCell className="text-sm">{member.phone}</TableCell>
                  <TableCell className="text-sm">{member.lastStampedLocation}</TableCell>
                  <TableCell className="text-sm">{member.lastStampDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}