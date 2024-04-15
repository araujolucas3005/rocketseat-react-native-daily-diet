import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "utils/app-error";
import { MealStorage } from "./types/meal-storage";

export async function deleteMealBydate(date: string, mealId: string) {
  const storedData = await AsyncStorage.getItem("@daily-diet/meals");

  if (!storedData) {
    throw new AppError("Refeição não encotrada");
  }

  const parsedData = JSON.parse(storedData) as MealStorage;

  const dateMeals = parsedData[date];

  if (!dateMeals) {
    throw new AppError("Refeição não encotrada");
  }

  const newStorage = dateMeals.filter((meal) => meal.id !== mealId);

  if (newStorage.length === 0) {
    delete parsedData[date];
  } else {
    parsedData[date] = newStorage;
  }

  await AsyncStorage.setItem("@daily-diet/meals", JSON.stringify(parsedData));
}
