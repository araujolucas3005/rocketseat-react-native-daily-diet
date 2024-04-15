import { Header } from "@components/header";
import { TitleHeader } from "@components/title-header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditMeal } from "@screens/edit-meal";
import { Home } from "@screens/home";
import { Meal } from "@screens/meal";
import { NewMeal } from "@screens/new-meal";
import { NewMealJudgment } from "@screens/new-meal-judgment";
import { Statistics } from "@screens/statistics";
import { useTheme } from "styled-components/native";

const NavigatorStack = createNativeStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <NavigatorStack.Navigator
      screenOptions={{
        animation: "fade_from_bottom",
        headerShown: false,
        contentStyle: { backgroundColor: theme.COLORS.GRAY_300 },
      }}
    >
      <NavigatorStack.Screen name="home" component={Home} />
      <NavigatorStack.Screen name="new-meal" component={NewMeal} />
      <NavigatorStack.Screen
        name="new-meal-judgment"
        component={NewMealJudgment}
      />
      <NavigatorStack.Screen name="meal" component={Meal} />
      <NavigatorStack.Screen name="statistics" component={Statistics} />
      <NavigatorStack.Screen name="edit-meal" component={EditMeal} />
    </NavigatorStack.Navigator>
  );
}
