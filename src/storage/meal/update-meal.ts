import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "utils/app-error";
import { MealStorage } from "./types/meal-storage";
import { StorageMeal } from "./types/meal";

export type UpdateMealDTO = {
  name: string;
  description: string;
  inDiet: boolean;
  date: string;
  hour: string;
};

export async function updateMeal(
  mealId: string,
  previousDate: string,
  data: UpdateMealDTO
) {
  const storage = await AsyncStorage.getItem("@daily-diet/meals");

  if (!storage) {
    throw new AppError("Refeição não encontrada");
  }

  let parsedStorage = JSON.parse(storage) as MealStorage;

  const dateMeals = parsedStorage[previousDate];

  if (!dateMeals) {
    throw new AppError("Refeição não encontrada");
  }

  const mealIndex = dateMeals.findIndex((meal) => meal.id === mealId);

  if (mealIndex === -1) {
    throw new AppError("Refeição não encontrada");
  }

  const updatedMeal: StorageMeal = {
    id: mealId,
    date: data.date,
    description: data.description,
    hour: data.hour,
    inDiet: data.inDiet,
    name: data.name,
  };

  if (previousDate === data.date) {
    parsedStorage[data.date][mealIndex] = updatedMeal;
  } else {
    parsedStorage[previousDate] = parsedStorage[previousDate].filter(
      (meal) => meal.id !== mealId
    );

    if (parsedStorage[previousDate].length === 0) {
      delete parsedStorage[previousDate];
    }

    parsedStorage[data.date] = [
      ...(parsedStorage[data.date] ?? []),
      updatedMeal,
    ];
  }

  await AsyncStorage.setItem(
    "@daily-diet/meals",
    JSON.stringify(parsedStorage)
  );
}
