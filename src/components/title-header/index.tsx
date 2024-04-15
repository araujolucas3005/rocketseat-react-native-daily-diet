import { IconButton } from "@components/icon-button";
import * as Styled from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

type TitleHeaderProps = {
  title: string;
  subtitle?: string;
  variant?: Styled.TitleHeaderContainerVariant;
  sizeVariant?: Styled.TitleHeaderSizeVariant;
};

export function TitleHeader({
  title,
  subtitle,
  variant = "neutral",
  sizeVariant = "small",
}: TitleHeaderProps) {
  const navigation = useNavigation();

  function handleBackButtonPress() {
    navigation.goBack();
  }

  return (
    <Styled.Container variant={variant} sizeVariant={sizeVariant}>
      <Styled.BackIcon icon={<ArrowLeft />} onPress={handleBackButtonPress} />
      <Styled.TitleContainer>
        <Styled.Title variant={sizeVariant}>{title}</Styled.Title>
        {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
      </Styled.TitleContainer>
    </Styled.Container>
  );
}
