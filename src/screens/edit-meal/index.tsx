import * as Styled from "./styles";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Meal, MealForm } from "@components/meal-form";
import { TitleHeader } from "@components/title-header";
import { useCallback, useEffect, useState } from "react";
import { findSingleMealByDate } from "@storage/meal/find-single-meal-by-date";
import { AppError } from "utils/app-error";
import { Alert } from "react-native";
import { StorageMeal } from "@storage/meal/types/meal";
import { Loading } from "@components/loading";
import { updateMeal } from "@storage/meal/update-meal";

type RouteParams = {
  mealId: string;
  date: string;
};

export function EditMeal() {
  const [meal, setMeal] = useState<StorageMeal>();
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const route = useRoute();

  const params = route.params as RouteParams;

  async function handleMealEdit(newMealData: Meal) {
    try {
      await updateMeal(params.mealId, params.date, {
        date: newMealData.date,
        description: newMealData.description,
        hour: newMealData.hour,
        inDiet: newMealData.isInDiet,
        name: newMealData.name,
      });

      Alert.alert("Sucesso", "Refeição atualizada com sucesso");

      navigation.navigate("meal", {
        mealId: params.mealId,
        date: newMealData.date,
      });
    } catch (err) {
      Alert.alert("Erro", "Não foi possível atualizar a refeição");
    }
  }

  async function fetchMeal() {
    setIsLoading(true);

    try {
      const meal = await findSingleMealByDate(params.date, params.mealId);

      setMeal(meal);
    } catch (err) {
      if (err instanceof AppError) {
        return Alert.alert("Erro", err.message);
      }

      Alert.alert("Erro", "Não foi possível carregar a refeição");
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  if (isLoading || !meal) {
    return <Loading />;
  }

  return (
    <Styled.Container>
      <TitleHeader title="Editar refeição" />
      <Styled.ContentContainer>
        <MealForm
          onSubmit={handleMealEdit}
          meal={{
            name: meal.name,
            description: meal.description,
            date: meal.date,
            hour: meal.hour,
            isInDiet: meal.inDiet,
          }}
        />
      </Styled.ContentContainer>
    </Styled.Container>
  );
}
