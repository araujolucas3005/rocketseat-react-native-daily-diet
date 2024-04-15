import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const CreateMealButtonLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme.COLORS.GRAY_700};
    margin-bottom: 8px;
    margin-top: 40px;
    align-self: flex-start;
  `};
`;

export const MealSectionTitle = styled.Text`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`;
