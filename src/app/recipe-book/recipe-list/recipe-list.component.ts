import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('MaPo Doufu','Szechuan style tofu dish', 'https://chinasichuanfood.com/wp-content/uploads/2014/09/mapo-tofu-steps-9.jpg'),
    new Recipe('Beef with Broccoli','Beef with Broccoli', 'https://chinasichuanfood.com/wp-content/uploads/2014/09/mapo-tofu-steps-9.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
