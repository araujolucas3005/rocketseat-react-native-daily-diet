import { Alert, FlatList } from "react-native";
import * as Styled from "./styles";
import { Button } from "@components/button";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { TitleHeader } from "@components/title-header";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { StorageMeal } from "@storage/meal/types/meal";
import { AppError } from "utils/app-error";
import { findSingleMealByDate } from "@storage/meal/find-single-meal-by-date";
import { Loading } from "@components/loading";
import { deleteMealBydate } from "@storage/meal/delete-meal-by-date";

type RouteParams = {
  mealId: string;
  date: string;
};

export function Meal() {
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState<StorageMeal>();

  const navigation = useNavigation();

  const route = useRoute();

  const params = route.params as RouteParams;

  function handleDeleteButtonPress() {
    Alert.alert("Excluir refeição", "Deseja realmente excluir essa refeição?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sim, Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteMealBydate(params.date, params.mealId);

            Alert.alert("Sucesso", "Refeição excluída com sucesso");

            navigation.navigate("home");
          } catch {
            Alert.alert("Erro", "Não foi possível excluir a refeição");
          }
        },
      },
    ]);
  }

  function handleEditMealButtonPress() {
    if (!meal) {
      return;
    }

    navigation.navigate("edit-meal", { mealId: meal.id, date: meal.date });
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
    }, [params])
  );

  if (isLoading || !meal) {
    return <Loading />;
  }

  return (
    <Styled.Container inDiet={false}>
      <TitleHeader
        title="Refeição"
        variant={meal.inDiet ? "positive" : "negative"}
      />
      <Styled.MealContainer>
        <Styled.MealInfoContainer>
          <Styled.MealTitle>{meal.name}</Styled.MealTitle>
          <Styled.MealDescription>{meal.description}</Styled.MealDescription>

          <Styled.MealDateAndHourTitle>Date e hora</Styled.MealDateAndHourTitle>
          <Styled.MealDateNadHourContent>
            {meal.date} às {meal.hour}
          </Styled.MealDateNadHourContent>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={["fora da dieta"]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <Styled.MealTag>
                  <Styled.MealTagIcon inDiet={false} />
                  <Styled.MealTagTitle>{item}</Styled.MealTagTitle>
                </Styled.MealTag>
              );
            }}
          />
        </Styled.MealInfoContainer>

        <Styled.ButtonsContainer>
          <Button
            title="Editar refeição"
            icon={<PencilSimpleLine />}
            onPress={handleEditMealButtonPress}
          />
          <Button
            title="Excluir refeição"
            variant="outlined"
            icon={<Trash />}
            onPress={handleDeleteButtonPress}
          />
        </Styled.ButtonsContainer>
      </Styled.MealContainer>
    </Styled.Container>
  );
}
