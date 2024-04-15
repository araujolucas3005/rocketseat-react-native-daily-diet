import { IconButton } from "@components/icon-button";
import * as Styled from "./styles";
import { ArrowUpRight } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

type MealsPercentageCardProps = {
  percentage: number;
  subtitle: string;
  variant: Styled.ContainerVariant;
};

export function MealsPercentageCard({
  percentage,
  subtitle,
  variant = "positive",
}: MealsPercentageCardProps) {
  const navigation = useNavigation();

  function handleIconPress() {
    navigation.navigate("statistics");
  }

  return (
    <Styled.Container variant={variant}>
      <Styled.PercentageText>${percentage.toFixed(2)}%</Styled.PercentageText>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      <Styled.Icon
        icon={<ArrowUpRight />}
        variant={variant}
        onPress={handleIconPress}
      />
    </Styled.Container>
  );
}
