import { IconButton } from "@components/icon-button";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type TitleHeaderContainerVariant = "positive" | "negative" | "neutral";

export type TitleHeaderSizeVariant = "big" | "small";

type ContainerProps = {
  variant: TitleHeaderContainerVariant;
  sizeVariant: TitleHeaderSizeVariant;
};

export const Container = styled(SafeAreaView)<ContainerProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${({ sizeVariant }) => (sizeVariant === "big" ? "32px" : "24px")};
  position: relative;

  flex-direction: row;

  background: ${({ theme, variant }) =>
    variant === "neutral"
      ? theme.COLORS.GRAY_300
      : variant === "positive"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
`;

type TitleProps = {
  variant: TitleHeaderSizeVariant;
};

export const TitleContainer = styled.View`
  align-items: center;
  justify-content: center;

  gap: 2px;
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, variant }) => css`
    font-size: ${variant === "big"
      ? theme.FONT_SIZE.XXL
      : theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const BackIcon = styled(IconButton)`
  position: absolute;
  left: 4px;
  top: 38px;
`;
