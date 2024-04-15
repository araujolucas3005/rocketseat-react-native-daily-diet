import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "utils/app-error";
import { MealStorage } from "./types/meal-storage";

export async function findSingleMealByDate(date: string, mealId: string) {
  const storedData = await AsyncStorage.getItem("@daily-diet/meals");

  if (!storedData) {
    throw new AppError("Refeição não encotrada");
  }

  const parsedData = JSON.parse(storedData) as MealStorage;

  const dateMeals = parsedData[date];

  if (!dateMeals) {
    throw new AppError("Refeição não encotrada");
  }

  const meal = dateMeals.find((meal) => meal.id === mealId);

  if (!meal) {
    throw new AppError("Refeição não encotrada");
  }

  return meal;
}
