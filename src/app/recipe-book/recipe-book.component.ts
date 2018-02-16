import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipes.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  recipeSelected: Recipe;
  constructor() { }

  ngOnInit() {
  }

  

}
