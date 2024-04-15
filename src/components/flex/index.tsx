import { View } from "react-native";

type FlexProps = {
  children: React.ReactNode;
  flex?: number;
};

export function Flex({ children, flex = 1 }: FlexProps) {
  return <View style={{ flex }}>{children}</View>;
}
