import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";
import foodTable3 from "../../assets/food_table_3.svg";

const MenuSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: "menuItems" });

  return (
    <div className="flex flex-col md:flex-row space-y-2 gap-4">
      <div className="flex-1">
        <img src={foodTable3} alt="" />
      </div>
      <div className="flex-1">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <FormDescription>Create your menu and give each item a name and price</FormDescription>
        </div>
        <FormField
          control={control}
          name="menuItems"
          render={() => (
            <FormItem className="flex flex-col gap-2">
              {fields.map((_, index) => (
                <MenuItemInput index={index} removeMenuItem={() => remove(index)} />
              ))}
            </FormItem>
          )}
        />
        <Button className="mt-4" type="button" onClick={() => append({ name: "", price: "" })}>
          Add Menu Item
        </Button>
      </div>
    </div>
  );
};

export default MenuSection;
