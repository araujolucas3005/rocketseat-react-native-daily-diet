import { StatisticCard } from "@components/statistic-card";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  inDiet: boolean;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;

  background: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 24px;

  align-items: center;
  border-radius: 20px;

  background: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text`
  margin-top: 33px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const CardsContainer = styled.View`
  margin-top: 23px;
  gap: 12px;
`;

export const MealFeedbackCardsContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;
