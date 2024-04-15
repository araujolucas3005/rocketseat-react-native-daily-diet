import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectButtonVariant = "positive" | "negative";

type SelectButtonProps = {
  variant: SelectButtonVariant;
  isActive: boolean;
};

export const Container = styled(TouchableOpacity)<SelectButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  flex: 1;
  width: 100%;
  padding: 16px 24px;
  border-radius: 6px;

  ${({ theme, variant, isActive }) => {
    if (!isActive) {
      return css`
        background: ${theme.COLORS.GRAY_200};
      `;
    }

    if (variant === "positive") {
      return css`
        background: ${theme.COLORS.GREEN_LIGHT};
        border: 1px solid ${theme.COLORS.GREEN_DARK};
      `;
    }

    return css`
      background: ${theme.COLORS.RED_LIGHT};
      border: 1px solid ${theme.COLORS.RED_DARK};
    `;
  }}
`;

type DietFlagProps = {
  variant: SelectButtonVariant;
};

export const InDietFlag = styled.View<DietFlagProps>`
  border-radius: 99px;
  width: 14px;
  height: 14px;

  background: ${({ theme, variant }) =>
    variant === "positive" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`;
