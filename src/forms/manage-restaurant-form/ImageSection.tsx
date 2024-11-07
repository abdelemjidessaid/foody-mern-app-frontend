import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import restImage from "../../assets/restaurant_image.svg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function ImageSection() {
  const { control, watch } = useFormContext();
  const existingImageUrl = watch("imageUrl");

  return (
    <div className="flex flex-col md:flex-row-reverse gap-4 space-y-2">
      {/* Section Image */}
      <div className="flex-1">
        <img src={restImage} alt="" />
      </div>
      {/* Section Details */}
      <div className="flex-1">
        <div className="mb-4">
          <h2 className="text2xl font-bold">Image</h2>
          <FormDescription>
            Add an image that will be displayed on yout restaurant listing in the search results.
            Adding a new image will overwrite the existing one.
          </FormDescription>
        </div>
        <div className="flex flex-col gap-8 w-[50%]">
          {existingImageUrl && (
            <AspectRatio ratio={16 / 9}>
              <img src={existingImageUrl} className="rouned-md object-cover w-full h-full" />
            </AspectRatio>
          )}
          <FormField
            control={control}
            name="imageFile"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="bg-white"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(event) => {
                      field.onChange(event.target.files ? event.target.files[0] : null);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
