import { Alert } from "react-native";

type HandleFunctionErrorOptions = {
  errorMessage?: string;
};

export function handleFunctionError<T>(
  fn: () => T,
  options?: HandleFunctionErrorOptions
): T | undefined {
  try {
    return fn();
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert("Erro", error.message);
    } else {
      Alert.alert(
        "Erro",
        options?.errorMessage || "Ocorreu um erro inesperado."
      );
    }
  }
}
