import {Recipe} from '../shared/types';

export type RootStackParamList = {
  Home: undefined;
  RecipeDetails: {recipe: Recipe};
};
