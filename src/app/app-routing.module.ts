import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { EditorComponent } from './editor/editor.component';
import { ProfileComponent } from './profile/profile.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'search',component:SearchComponent},
  {path:'article/:slug',component:ArticleDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'editor',component:EditorComponent},
  {path:'profile/:id/page/:page',component:ProfileComponent},
  {path:'page/:page',component:PaginatorComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'',component:PaginatorComponent,pathMatch:'full'},
  {path:'',redirectTo:'/',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
