import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealStorage } from "./types/meal-storage";
import { generateRandomString } from "utils/generate-random-string";
import { StorageMeal } from "./types/meal";

export type CreateMealDTO = {
  name: string;
  description: string;
  inDiet: boolean;
  date: string;
  hour: string;
};

export async function createMeal(data: CreateMealDTO) {
  const storedData = await AsyncStorage.getItem("@daily-diet/meals");

  const mealId = generateRandomString();

  const newMeal: StorageMeal = {
    id: mealId,
    ...data,
  };

  if (!storedData) {
    const storage = {
      [data.date]: [newMeal],
    };

    await AsyncStorage.setItem("@daily-diet/meals", JSON.stringify(storage));

    return;
  }

  const parsedData = JSON.parse(storedData) as MealStorage;

  if (!parsedData[data.date]) {
    parsedData[data.date] = [newMeal];
  } else {
    parsedData[data.date].push(newMeal);
  }

  await AsyncStorage.setItem("@daily-diet/meals", JSON.stringify(parsedData));
}
