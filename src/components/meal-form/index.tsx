import { Input } from "@components/input";
import * as Styled from "./styles";
import { SelectButton } from "@components/select-button";
import { useState } from "react";
import { Button } from "@components/button";
import { Alert } from "react-native";

export type Meal = {
  name: string;
  description: string;
  date: string;
  hour: string;
  isInDiet: boolean;
};

export type MealFormProps = {
  onSubmit: (meal: Meal) => void;

  meal?: {
    name: string;
    description: string;
    date: string;
    hour: string;
    isInDiet: boolean;
  };
};

export function MealForm({ meal, onSubmit }: MealFormProps) {
  const [isInDiet, setIsInDiet] = useState(meal?.isInDiet ?? true);

  const [mealName, setMealName] = useState(meal?.name || "");
  const [mealDescription, setMealDescription] = useState(
    meal?.description || ""
  );
  const [mealDate, setMealDate] = useState(meal?.date || "");
  const [mealHour, setMealHour] = useState(meal?.hour || "");

  function validateInput(text: string) {
    return text.length > 0;
  }

  function validateInputs() {
    return (
      validateInput(mealName) &&
      validateInput(mealDescription) &&
      validateInput(mealDate) &&
      validateInput(mealHour)
    );
  }

  function handleFormSubmit() {
    if (!validateInputs()) {
      return Alert.alert("Erro", "Preencha todos os campos para continuar");
    }

    onSubmit({
      name: mealName,
      description: mealDescription,
      date: mealDate,
      hour: mealHour,
      isInDiet,
    });
  }

  return (
    <Styled.Container>
      <Styled.Form>
        <Input label="Nome" value={mealName} onChangeText={setMealName} />
        <Input
          label="Descrição"
          value={mealDescription}
          onChangeText={setMealDescription}
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />

        <Styled.DateHourContainer>
          <Input
            label="Data"
            value={mealDate}
            onChangeText={setMealDate}
            containerProps={{
              style: {
                flex: 1,
              },
            }}
          />

          <Input
            label="Hora"
            value={mealHour}
            onChangeText={setMealHour}
            containerProps={{
              style: { flex: 1 },
            }}
          />
        </Styled.DateHourContainer>

        <Styled.FlagButtonsContainer>
          <SelectButton
            title="Sim"
            isActive={isInDiet}
            onPress={() => setIsInDiet(true)}
          />
          <SelectButton
            title="Não"
            isActive={!isInDiet}
            variant="negative"
            onPress={() => setIsInDiet(false)}
          />
        </Styled.FlagButtonsContainer>
      </Styled.Form>

      <Button
        title={!meal ? "Cadastrar refeição" : "Salvar aterações"}
        onPress={handleFormSubmit}
      />
    </Styled.Container>
  );
}
