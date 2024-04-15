import { MealsPercentageCard } from "@components/meals-percentage-card";
import * as Styled from "./styles";

import { Header } from "@components/header";
import { Button } from "@components/button";
import { Plus } from "phosphor-react-native";
import { MealCard } from "@components/meal-card";
import { SectionList, Text, View } from "react-native";
import { EmptyList } from "@components/empty-list";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { findAllMeals } from "@storage/meal/find-all-meals";
import { MealStorage } from "@storage/meal/types/meal-storage";
import { Loading } from "@components/loading";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mealsByDate, setMealsByDate] = useState<MealStorage>({});

  const navigate = useNavigation();

  function handleNewMealButtonPress() {
    navigate.navigate("new-meal");
  }

  function onMealCardPress(mealId: string, date: string) {
    navigate.navigate("meal", { mealId, date });
  }

  async function fetchMeals() {
    setIsLoading(true);

    const meals = await findAllMeals();

    setMealsByDate(meals);

    setIsLoading(false);
  }

  const sections = Object.entries(mealsByDate)
    .map(([date, meals]) => ({
      title: date,
      data: meals,
    }))
    .sort((a, b) => {
      const dateA = new Date(a.title);
      const dateB = new Date(b.title);

      return dateB.getTime() - dateA.getTime();
    });

  sections.forEach((section) => {
    section.data.sort((a, b) => {
      const hourA = new Date(a.hour);
      const hourB = new Date(b.hour);

      return hourB.getTime() - hourA.getTime();
    });
  });

  const totals = Object.values(mealsByDate)
    .flat()
    .reduce(
      (acc, meal) => {
        acc.total += 1;
        acc.inDiet += meal.inDiet ? 1 : 0;

        return acc;
      },
      { total: 0, inDiet: 0 }
    );

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  if (isLoading) {
    return <Loading />;
  }

  const inDeatPercentage = (totals.inDiet / totals.total) * 100;

  return (
    <Styled.Container>
      <Header />

      <MealsPercentageCard
        variant={inDeatPercentage < 50 ? "negative" : "positive"}
        percentage={inDeatPercentage}
        subtitle="das refeições dentro da dieta"
      />

      <Styled.CreateMealButtonLabel>Refeições</Styled.CreateMealButtonLabel>
      <Button
        variant="filled"
        title="Nova refeição"
        icon={<Plus />}
        onPress={handleNewMealButtonPress}
      />

      <SectionList
        style={{ marginTop: 32 }}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled
        ListEmptyComponent={() => (
          <EmptyList message="Que tal cadastrar uma nova refeição?" />
        )}
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item, section }) => (
          <MealCard
            hour={item.hour}
            title={item.name}
            inDiet={item.inDiet}
            onPress={() => onMealCardPress(item.id, section.title)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Styled.MealSectionTitle>{title}</Styled.MealSectionTitle>
        )}
        SectionSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
        ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
        contentContainerStyle={[{ paddingBottom: 24 }]}
      />
    </Styled.Container>
  );
}
