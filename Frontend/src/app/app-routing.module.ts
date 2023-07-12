import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';
import { SearchComponent } from './search/search.component';
import { BookComponent } from './book/book.component';
import { FormbookComponent } from './formbook/formbook.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';


const routes: Routes = [

{path: '',component:HomeComponent, pathMatch:'full'},
{path: 'admin', component: AdminComponent},
{path: 'search', component: SearchComponent},
{path: 'next', component: NextComponent},
{path: 'next/:t_id', component: NextComponent},
{path: 'book', component: BookComponent},    /* it is in this line only,canActivate:[AuthGuard] */
{path: 'bookdetails', component: BookdetailsComponent},
{path: 'formbook', component: FormbookComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent,
                                  AdminComponent,
                                  SearchComponent,
                                  NextComponent,
                                 BookComponent,
                                FormbookComponent,
                              LoginComponent]

