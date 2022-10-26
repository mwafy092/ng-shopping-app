import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Cocacola',
      'simple drink',
      'https://images.unsplash.com/photo-1567705323043-d0e489de300d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=651&q=80'
    ),
    new Recipe(
      'Cocacola',
      'simple drink',
      'https://images.unsplash.com/photo-1567705323043-d0e489de300d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=651&q=80'
    ),
    new Recipe(
      'Cocacola',
      'simple drink',
      'https://images.unsplash.com/photo-1567705323043-d0e489de300d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=651&q=80'
    ),
  ];
  constructor() {}
  ngOnInit(): void {
    console.log(this.recipes);
  }
}
