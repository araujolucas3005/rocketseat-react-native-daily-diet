import { css } from "styled-components";
import styled from "styled-components/native";

export type StatisticCardVariant = "positive" | "negative" | "neutral";

type ContainerProps = {
  variant: StatisticCardVariant;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  min-height: 110px;
  max-height: 110px;

  padding: 0 16px;

  background: ${({ theme, variant }) =>
    variant === "neutral"
      ? theme.COLORS.GRAY_200
      : variant === "positive"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Subtitle = styled.Text`
  margin-top: 8px;

  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
