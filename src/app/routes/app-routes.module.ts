import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';

const appRoutes = [
  //uses empty string b/c that's what will load when we boot up the app but then we want it to
  //redirect to recipes.
  // pathMatch set to 'full' says: only if the full path is ''.
  // without pathMatch full, angular matches everything to '' because '' is part of everything.
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [ //the child routes are added to the parent
    {path: '', component: RecipeStartComponent},              // via router-outlet
    {path: ':id', component: RecipeDetailComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  //need this exports b/c we are in an exterior module from our main app
  exports: [RouterModule],
  declarations: []
})
export class AppRoutesModule { }
