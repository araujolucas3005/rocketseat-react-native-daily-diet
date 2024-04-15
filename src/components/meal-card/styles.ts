import { TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  border-radius: 6px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const TitleHourContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

export const TitleHourSeparator = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const HourText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

type StyledInDietFlagProps = {
  inDiet: boolean;
};

export const InDietFlag = styled.View<StyledInDietFlagProps>`
  border-radius: 99px;
  width: 14px;
  height: 14px;

  background: ${({ theme, inDiet }) =>
    inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
