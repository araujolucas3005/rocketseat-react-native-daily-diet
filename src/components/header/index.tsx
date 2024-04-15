import * as Styled from "./styles";

import logoImg from "@assets/logo.png";
import avatarImg from "@assets/avatar.png";
import { Image } from "react-native";

export function Header() {
  return (
    <Styled.Container>
      <Image source={logoImg} />
      <Image source={avatarImg} />
    </Styled.Container>
  );
}
