import { TitleHeader } from "@components/title-header";
import * as Styled from "./styles";
import { StatisticCard } from "@components/statistic-card";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { MealStorage } from "@storage/meal/types/meal-storage";
import { findAllMeals } from "@storage/meal/find-all-meals";
import { Loading } from "@components/loading";

export function Statistics() {
  const [isLoading, setIsLoading] = useState(true);
  const [mealsByDate, setMealsByDate] = useState<MealStorage>({});

  const meals = new Map(
    [...Object.entries(mealsByDate)].sort(([k, v], [k2, v2]) => {
      const dateA = new Date(k);
      const dateB = new Date(k2);

      return dateB.getTime() - dateA.getTime();
    })
  );

  meals.forEach((meal) => {
    meal.sort((a, b) => {
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
        acc.inDientSequence = meal.inDiet ? acc.inDientSequence + 1 : 0;

        return acc;
      },
      { total: 0, inDiet: 0, inDientSequence: 0 }
    );

  async function fetchMeals() {
    setIsLoading(true);

    const meals = await findAllMeals();

    setMealsByDate(meals);

    setIsLoading(false);
  }

  const inDietPercentage = (totals.inDiet / totals.total) * 100;

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Styled.Container inDiet>
      <TitleHeader
        title={`${inDietPercentage.toFixed(2)}%`}
        subtitle="das refeições dentro da dieta"
        sizeVariant="big"
        variant={inDietPercentage < 50 ? "negative" : "positive"}
      />
      <Styled.ContentContainer>
        <Styled.Title>Estatísticas gerais</Styled.Title>

        <Styled.CardsContainer>
          <StatisticCard
            variant="neutral"
            title={totals.inDientSequence.toString()}
            subtitle="melhor sequência de pratos dentro da dieta"
          />
          <StatisticCard
            variant="neutral"
            title={totals.total.toString()}
            subtitle="refeições registradas"
          />

          <Styled.MealFeedbackCardsContainer>
            <StatisticCard
              variant="positive"
              title={totals.total.toString()}
              subtitle="refeições dentro da dieta"
            />
            <StatisticCard
              variant="negative"
              title={(totals.total - totals.inDiet).toString()}
              subtitle="refeições fora da dieta"
            />
          </Styled.MealFeedbackCardsContainer>
        </Styled.CardsContainer>
      </Styled.ContentContainer>
    </Styled.Container>
  );
}
