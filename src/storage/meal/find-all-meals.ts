import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealStorage } from "./types/meal-storage";

export async function findAllMeals() {
  const storedData = await AsyncStorage.getItem("@daily-diet/meals");

  if (!storedData) {
    return {} as MealStorage;
  }

  const data = JSON.parse(storedData) as MealStorage;

  return data;
}
