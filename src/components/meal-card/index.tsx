import { Text, TouchableOpacityProps } from "react-native";
import * as Styled from "./styles";

type MealCardProps = TouchableOpacityProps & {
  hour: string;
  title: string;
  inDiet?: boolean;
};

export function MealCard({
  hour,
  title,
  inDiet = true,
  ...rest
}: MealCardProps) {
  return (
    <Styled.Container {...rest}>
      <Styled.TitleHourContainer>
        <Styled.HourText>{hour}</Styled.HourText>
        <Styled.TitleHourSeparator>|</Styled.TitleHourSeparator>
        <Styled.Title>{title}</Styled.Title>
      </Styled.TitleHourContainer>

      <Styled.InDietFlag inDiet={inDiet} />
    </Styled.Container>
  );
}
