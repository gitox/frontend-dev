import { recipes } from "../../data/dummyRecipesAPI";

export function recetteDuJour(recipe){
    if (recipe === null) {
      let presentDay = new Date().getDay();
      
      if (presentDay <= recipes.length) {
        // On decale le dimanche (index=0) à lundi index=0
        presentDay = presentDay > 0 ? presentDay - 1 : presentDay;
        return recipes[presentDay];
      }
    }
    return recipe;
  }