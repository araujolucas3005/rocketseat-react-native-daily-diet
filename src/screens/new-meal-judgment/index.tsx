import { useNavigation, useRoute } from "@react-navigation/native";
import * as Styled from "./styles";
import { Button } from "@components/button";

import onDietImg from "@assets/on-diet.png";
import offDietImage from "@assets/off-diet.png";

type RouteParams = {
  inDiet: boolean;
};

export function NewMealJudgment() {
  const route = useRoute();
  const navigation = useNavigation();

  const { inDiet } = route.params as RouteParams;

  function handleButtonPress() {
    navigation.navigate("home");
  }

  if (inDiet) {
    return (
      <Styled.Container>
        <Styled.Title>Continue assim!</Styled.Title>
        <Styled.Subtitle>
          Você continua
          <Styled.SubtitleHighlight> dentro da dieta</Styled.SubtitleHighlight>.
          Muito bem!
        </Styled.Subtitle>

        <Styled.Image source={onDietImg} />

        <Button title="Ir para a página inicial" onPress={handleButtonPress} />
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      <Styled.Title>Que pena!</Styled.Title>
      <Styled.Subtitle>
        Você <Styled.SubtitleHighlight>saiu da dieta </Styled.SubtitleHighlight>
        dessa vez, mas continue se esforçando e não desista!
      </Styled.Subtitle>

      <Styled.Image source={offDietImage} />

      <Button title="Ir para a página inicial" onPress={handleButtonPress} />
    </Styled.Container>
  );
}
