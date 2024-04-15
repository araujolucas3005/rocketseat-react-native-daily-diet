export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      "new-meal": undefined;
      "new-meal-judgment": { inDiet: boolean };
      meal: { mealId: string; date: string };
      statistics: undefined;
      "edit-meal": { mealId: string; date: string };
    }
  }
}
