import { useCreateRestaurant, useGetRestaurant, useUpdateRestaurant } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } = useCreateRestaurant();
  const { restaurant } = useGetRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateRestaurant();

  const editable = !!restaurant;

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={editable ? updateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
};

export default ManageRestaurantPage;
