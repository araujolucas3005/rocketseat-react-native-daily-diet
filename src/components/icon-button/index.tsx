import { TouchableOpacityProps } from "react-native";
import * as Styled from "./styles";
import { ReactNode } from "react";

type ButtonIconProps = TouchableOpacityProps & {
  icon: ReactNode;
};

export function IconButton({ icon, ...rest }: ButtonIconProps) {
  return <Styled.Container {...rest}>{icon}</Styled.Container>;
}
