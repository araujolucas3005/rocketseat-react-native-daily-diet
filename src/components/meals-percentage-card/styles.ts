import styled, { css } from "styled-components/native";
import { IconButton } from "@components/icon-button";

export type ContainerVariant = "positive" | "negative";

type ContainerProps = {
  variant: ContainerVariant;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  padding: 20px;

  background: ${({ theme, variant }) =>
    variant === "positive" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const PercentageText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_WEIGHT.BOLD};
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_WEIGHT.REGULAR};
  `};
`;

type IconProps = ContainerProps;

export const Icon = styled(IconButton)<IconProps>`
  position: absolute;
  top: -5px;
  right: -5px;

  color: ${({ theme, variant }) =>
    variant === "positive" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
