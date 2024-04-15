import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Plus } from "phosphor-react-native";

export type ButtonVariant = "filled" | "outlined";

type StyledButtonProps = {
  variant: ButtonVariant;
};

export const Container = styled(TouchableOpacity)<StyledButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;
  padding: 16px 24px;
  border-radius: 6px;

  ${({ theme, variant }) =>
    variant === "filled"
      ? css`
          background: ${theme.COLORS.GRAY_600};
        `
      : css`
          background: ${theme.COLORS.WHITE};
          border: 1px solid ${theme.COLORS.GRAY_600};
        `}
`;

export const Text = styled.Text<StyledButtonProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_WEIGHT.BOLD};
    color: ${variant === "filled" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600};
  `};
`;
