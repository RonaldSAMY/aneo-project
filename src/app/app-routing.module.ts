import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { EditorComponent } from './editor/editor.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:ArticleComponent,pathMatch:'full'},
  {path:'article/:slug',component:ArticleDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'editor',component:EditorComponent},
  {path:'profile/:id',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
