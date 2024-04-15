import { css } from "styled-components";
import styled from "styled-components/native";

type ContainerProps = {
  inDiet: boolean;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;

  background: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const MealContainer = styled.View`
  flex: 1;
  padding: 24px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const MealInfoContainer = styled.View`
  flex: 1;
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const MealDescription = styled.Text`
  margin-top: 8px;
  margin-bottom: 16px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const MealDateAndHourTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const MealDateNadHourContent = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const MealTag = styled.View`
  min-height: 34px;
  max-height: 34px;
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-radius: 99px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const MealTagTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

type MealTagIconProps = {
  inDiet: boolean;
};

export const MealTagIcon = styled.Image<MealTagIconProps>`
  background: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  width: 8px;
  height: 8px;
  border-radius: 99px;
`;

export const ButtonsContainer = styled.View`
  gap: 9px;
`;
