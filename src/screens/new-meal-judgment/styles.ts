import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
  `}
`;

export const Subtitle = styled.Text`
  margin-top: 8px;
  margin-bottom: 40px;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const SubtitleHighlight = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Image = styled.Image`
  margin-bottom: 48px;
`;
