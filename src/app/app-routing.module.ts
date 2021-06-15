import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { MyPipe } from './pipes/my.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LendingsComponent } from './lendings/lendings.component';
import { LibraryMenueComponent } from './library-menue/library-menue.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { InformationComponent } from './information/information.component';
import { PoliciesComponent } from './policies/policies.component';
import { ConnectionDetailesComponent } from './connection-detailes/connection-detailes.component';
import { AppComponent } from './app.component';
import { BorrowerFormComponent } from './borrower-form/borrower-form.component';
import { BookFormComponent } from './book-form/book-form.component';
import { LendingsFormComponent } from './lendings-form/lendings-form.component';
import { AddingsComponent } from './addings/addings.component';

const routes: Routes = [
  { path: '', component: BookListComponent, pathMatch: 'full' },
  {
    path: "B_list", component: BookListComponent,
    children:
      [{ path: "bookDetailes/:id", component: BookDetailsComponent },
      { path: 'category/:id', component: BookListComponent },
      // { path: '', component: BookListComponent, pathMatch: 'full' },
      ]
  },
  { path: "B_borrower", component: BorrowerComponent },
  {
    path: "about", component: AboutComponent,
    children: [
      { path: "information", component: InformationComponent },
      { path: "policies", component: PoliciesComponent },
      { path: "connection", component: ConnectionDetailesComponent },
      { path: '', component: InformationComponent, pathMatch: 'full' }
    ]
  },
  {
    path: "addings", component: AddingsComponent,
    children: [
      { path: 'borrowerForm', component: BorrowerFormComponent },
      { path: 'bookForm', component: BookFormComponent },
      { path: 'lendingsForm', component: LendingsFormComponent },
      { path: '', component: BookFormComponent, pathMatch: 'full' }
    ]
  },
  // { path: 'B_list/category/:id', component: BookListComponent },
  { path: '**', component: PageNotFoundComponent, children: [{ path: "about", component: AboutComponent }] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
