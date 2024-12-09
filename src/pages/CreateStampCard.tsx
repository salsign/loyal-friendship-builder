import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

type StampCardFormValues = {
  cardName: string;
  stamps: number;
  joinStamps: number;
  cardDescription: string;
  websiteUrl: string;
  businessName: string;
  offerDetails: string;
};

const CreateStampCard = () => {
  const form = useForm<StampCardFormValues>({
    defaultValues: {
      cardName: "",
      stamps: 6,
      joinStamps: 0,
      cardDescription: "",
      websiteUrl: "",
      businessName: "Zainab Foods",
      offerDetails: "",
    },
  });

  const onSubmit = (data: StampCardFormValues) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7] py-8">
      <div className="container max-w-6xl space-y-8">
        <div className="flex items-center gap-6">
          <Link to="/">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#F2FCE2]">
              <ChevronLeft className="h-6 w-6 text-[#1A1F2C]" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-[#1A1F2C]">Create Stamp Card</h1>
        </div>

        <div className="flex gap-8">
          <div className="flex-1 space-y-6">
            <Card className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-[#1A1F2C]">Front card</h2>
                    
                    <FormField
                      control={form.control}
                      name="cardName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Card name*</FormLabel>
                          <FormControl>
                            <Input placeholder="Coffee card" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="stamps"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stamps*</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="joinStamps"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Join stamps</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="cardDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Card description*</FormLabel>
                          <FormControl>
                            <Input placeholder="E.G. BUY 8 COFFEES, GET ONE FREE!" {...field} />
                          </FormControl>
                          <FormDescription>0/50 characters</FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-[#1A1F2C]">Back card</h2>
                    
                    <FormField
                      control={form.control}
                      name="websiteUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://www.stampme.com/" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business name*</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="offerDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Offer details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Include any information you would like to share with your customers, such as terms & conditions."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>0/250 characters</FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white py-6 h-auto text-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Create Stamp Card
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          <div className="w-[400px]">
            <Card className="p-6 sticky top-8">
              <div className="aspect-[9/16] bg-white rounded-3xl border-8 border-black relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center pt-16 px-8">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-xs text-gray-500">
                    YOUR LOGO HERE
                  </div>
                  <p className="text-center text-sm font-medium mb-8">CARD DESCRIPTION</p>
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="aspect-square rounded-full border-2 border-gray-200" />
                    ))}
                  </div>
                  <div className="mt-auto mb-8 w-full">
                    <Button 
                      variant="destructive" 
                      className="w-full bg-[#ea384c] hover:bg-[#ea384c]/90"
                    >
                      STAMP ME
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStampCard;