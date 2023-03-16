export type Recipe = {
  key: number;
  name: string;
  prepTime: string;
  serves: number;
  description: string;
  recipeImage: HTMLImageElement;
  ingredientsList: string[];
  stepsList: string[];
};
