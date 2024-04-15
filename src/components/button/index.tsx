import { TouchableOpacityProps } from "react-native";
import * as Styled from "./styles";
import { ReactElement, ReactNode, cloneElement } from "react";
import { IconProps } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: ReactElement<IconProps>;
  variant?: Styled.ButtonVariant;
};

export function Button({
  title,
  icon,
  variant = "filled",
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  const coloredIcon =
    icon &&
    cloneElement<IconProps>(icon, {
      size: 24,
      color: variant === "filled" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600,
    });

  return (
    <Styled.Container variant={variant} {...rest}>
      {coloredIcon}
      <Styled.Text variant={variant}>{title}</Styled.Text>
    </Styled.Container>
  );
}
