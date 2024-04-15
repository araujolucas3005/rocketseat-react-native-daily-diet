import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Meal, MealForm } from "@components/meal-form";
import { TitleHeader } from "@components/title-header";
import { createMeal } from "@storage/meal/create-meal";
import { Alert } from "react-native";

export function NewMeal() {
  const navigation = useNavigation();

  async function handleMealRegister(meal: Meal) {
    try {
      await createMeal({
        name: meal.name,
        date: meal.date,
        description: meal.description,
        hour: meal.hour,
        inDiet: meal.isInDiet,
      });

      navigation.navigate("new-meal-judgment", { inDiet: meal.isInDiet });
    } catch {
      Alert.alert("Erro", "Não foi possível salvar a refeição");
    }
  }

  return (
    <Styled.Container>
      <TitleHeader title="Nova refeição" />
      <Styled.ContentContainer>
        <MealForm onSubmit={handleMealRegister} />
      </Styled.ContentContainer>
    </Styled.Container>
  );
}
