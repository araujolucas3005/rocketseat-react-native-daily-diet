import { ViewProps } from "react-native";
import * as Styled from "./styles";

type StatisticCardProps = ViewProps & {
  title: string;
  subtitle: string;
  variant: Styled.StatisticCardVariant;
};

export function StatisticCard({
  title,
  subtitle,
  variant,
  ...rest
}: StatisticCardProps) {
  return (
    <Styled.Container variant={variant} {...rest}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Container>
  );
}
