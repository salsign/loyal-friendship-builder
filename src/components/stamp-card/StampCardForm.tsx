import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { StampCardFormValues } from "@/types/stamp-card";
import { StampIconSelector } from "./StampIconSelector";
import { AdvancedSettings } from "./AdvancedSettings";
import { useEffect } from "react";

interface StampCardFormProps {
  onFormChange: (values: StampCardFormValues) => void;
}

export const StampCardForm = ({ onFormChange }: StampCardFormProps) => {
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

  useEffect(() => {
    const subscription = form.watch((value) => {
      onFormChange(value as StampCardFormValues);
    });
    return () => subscription.unsubscribe();
  }, [form.watch, onFormChange]);

  const onSubmit = (data: StampCardFormValues) => {
    console.log("Form submitted:", data);
  };

  return (
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

          <StampIconSelector />
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

          <AdvancedSettings />
        </div>

        <Button 
          type="submit"
          className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white py-6 h-auto text-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
        >
          Create Stamp Card
        </Button>
      </form>
    </Form>
  );
};