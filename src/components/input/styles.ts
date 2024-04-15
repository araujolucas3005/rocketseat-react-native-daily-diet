import styled, { css } from "styled-components/native";

export const Container = styled.View`
  gap: 4px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_WEIGHT.BOLD};
  `}
`;

export const Input = styled.TextInput`
  padding: 14px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  ${({ multiline }) =>
    multiline &&
    css`
      min-height: 120px;
      max-height: 120px;
    `}
`;
