import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import foodTable from "../../assets/food_table.svg";

const DetailsSection = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center space-y-2">
      <div className="flex-1">
        <img src={foodTable} />
      </div>
      <div className="flex-1">
        <div className="mb-8 space-y-1">
          <h2 className="text-2xl font-bold">Details</h2>
          <FormDescription>Enter the details about your Restaurant</FormDescription>
        </div>
        {/* Restaurant Name */}
        <FormField
          control={control}
          name="restaurantName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Restaurant Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          {/* City Name */}
          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Country Name */}
          <FormField
            control={control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Delivery Price */}
        <FormField
          control={control}
          name="deliveryPrice"
          render={({ field }) => (
            <FormItem className="max-w-[25%]">
              <FormLabel>Delivery Price ($)</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" placeholder="1.50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Estimated Delivery Time */}
        <FormField
          control={control}
          name="estimatedDeliveryTime"
          render={({ field }) => (
            <FormItem className="max-w-[25%]">
              <FormLabel>Estimated Delivery Time</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" placeholder="30 Minutes" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default DetailsSection;
