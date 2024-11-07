import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckbox";
import foodTable2 from "../../assets/food_table_2.svg";

const CuisinesSection = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col-reverse md:flex-row space-y-2 gap-4">
      <div className="flex-1">
        {/* Cuisines Heading */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Cuisines</h2>
          <FormDescription>Select the cuisines that your Restaurant serves</FormDescription>
        </div>
        {/* Cuisines CheckBoxs */}
        <FormField
          control={control}
          name="cuisines"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                {cuisineList.map((cuisineItem) => (
                  <CuisineCheckbox cuisine={cuisineItem} field={field} />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {/* Food Table Image */}
      <div className="flex-1">
        <img src={foodTable2} alt="" />
      </div>
    </div>
  );
};

export default CuisinesSection;
