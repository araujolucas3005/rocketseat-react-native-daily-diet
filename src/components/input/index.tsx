import { TextInputProps, ViewProps } from "react-native";
import * as Styled from "./styles";

type InputProps = TextInputProps & {
  containerProps?: ViewProps;
  label: string;
};

export function Input({ label, containerProps, ...rest }: InputProps) {
  return (
    <Styled.Container {...containerProps}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input {...rest} />
    </Styled.Container>
  );
}
