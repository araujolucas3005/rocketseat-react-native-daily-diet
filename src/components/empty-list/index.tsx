import * as Styled from "./styles";

type ListEmptyProps = {
  message: string;
};

export function EmptyList({ message }: ListEmptyProps) {
  return (
    <Styled.Container>
      <Styled.Message>{message}</Styled.Message>
    </Styled.Container>
  );
}
