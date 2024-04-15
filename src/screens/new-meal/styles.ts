import { Input } from "@components/input";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const ContentContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
  border-radius: 20px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  gap: 32px;
`;

export const DateHourContainer = styled.View`
  gap: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const FlagButtonsContainer = styled.View`
  gap: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

export const FlexInput = styled(Input)`
  flex: 1;
`;
