import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * useCreateRestaurant
 *
 * A custom hook that handles creating a new restaurant by sending a POST request to the backend API.
 * This hook leverages Auth0 for authorization, React Query's useMutation for request management,
 * and React Toast notifications for user feedback.
 *
 * @returns {Object} - Returns an object with:
 *   - createRestaurant (function): A function to initiate the restaurant creation request.
 *   - isLoading (boolean): Indicates if the create request is currently loading.
 *
 * Example usage:
 *   const { createRestaurant, isLoading } = useCreateRestaurant();
 *   createRestaurant(restaurantFormData);
 *
 * Dependencies:
 *   - Auth0: Used to retrieve the access token.
 *   - React Query's useMutation: Manages the asynchronous request state.
 *   - React Toast: Provides user feedback notifications.
 *
 * Functionality:
 *   - `createRestaurantRequest`: An asynchronous function that sends a POST request to the API with
 *      the provided `restaurantFormData`. Authenticates the request using a bearer token retrieved
 *      from Auth0.
 *      - Params:
 *         - restaurantFormData (FormData): The form data for the restaurant to be created.
 *      - Returns:
 *         - Promise<Restaurant[]>: Returns a Promise that resolves to an array of Restaurant objects.
 *      - Throws:
 *         - An error if the request fails.
 *
 *   - `createRestaurant`: Executes the `createRestaurantRequest` when called. Handles API response
 *     statuses and triggers React Toast notifications on success or error.
 *
 */
export const useCreateRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createRestaurantRequest = async (restaurantFormData: FormData): Promise<Restaurant[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create new Restaurant");
    }

    return response.json();
  };

  const {
    mutate: createRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createRestaurantRequest);

  if (isSuccess) toast.success("Restaurant Created");
  if (error) toast.error(error.toString());

  return { createRestaurant, isLoading };
};

/**
 * useGetRestaurant
 *
 * A custom hook to retrieve a restaurant's information using an authenticated GET request to the backend API.
 * This hook utilizes Auth0 for authentication, and React Query's useQuery for managing the asynchronous
 * request state.
 *
 * @returns {Object} - Returns an object with:
 *   - restaurant (Restaurant | undefined): The fetched restaurant data, or undefined if not yet loaded.
 *   - isLoading (boolean): Indicates if the data fetching request is in progress.
 *
 * Example usage:
 *   const { restaurant, isLoading } = useGetRestaurant();
 *
 * Dependencies:
 *   - Auth0: Used to retrieve an access token for authorization.
 *   - React Query's useQuery: Handles request state and caching for efficient data retrieval.
 *
 * Functionality:
 *   - `getRestaurantRequest`: An asynchronous function that sends a GET request to the API to retrieve
 *     restaurant data, using a bearer token obtained from Auth0 for authorization.
 *     - Returns:
 *         - Promise<Restaurant>: Resolves to a Restaurant object containing the restaurant details.
 *     - Throws:
 *         - An error if the request fails.
 *
 *   - `restaurant`: Holds the restaurant data returned by the `getRestaurantRequest` if the request is successful.
 *   - `isLoading`: Boolean flag indicating if the request is currently loading.
 *
 */
export const useGetRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getRestaurantRequest = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) throw new Error("Failed to get restaurant");

    return response.json();
  };

  const { data: restaurant, isLoading } = useQuery("fetchRestaurant", getRestaurantRequest);

  return { restaurant, isLoading };
};

export const useUpdateRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateRestaurantRequest = async (restaurantFormData: FormData): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response) throw new Error("Failed to update restaurant");

    return response.json();
  };

  const {
    mutate: updateRestaurant,
    isLoading,
    error,
    isSuccess,
  } = useMutation(updateRestaurantRequest);

  if (isSuccess) toast.success("Restaurant Updated");
  if (error) toast.error(error.toString());

  return { updateRestaurant, isLoading };
};
