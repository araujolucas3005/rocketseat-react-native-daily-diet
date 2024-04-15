import { TouchableOpacityProps } from "react-native";
import * as Styled from "./styles";

type SelectButtonProps = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
  variant?: Styled.SelectButtonVariant;
};

export function SelectButton({
  title,
  variant = "positive",
  isActive = false,
  ...rest
}: SelectButtonProps) {
  return (
    <Styled.Container isActive={isActive} variant={variant} {...rest}>
      <Styled.InDietFlag variant={variant} />
      <Styled.ButtonText>{title}</Styled.ButtonText>
    </Styled.Container>
  );
}
