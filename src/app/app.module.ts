import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CliComponent } from './cli/cli.component';
import { ExamComponent } from './exam/exam.component';
import { ExamplComponent } from './exampl/exampl.component';
import { StyleTaskComponent } from './style-task/style-task.component';
import { CategoryComponent } from './category/category.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { MyPipe } from './pipes/my.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LendingsComponent } from './lendings/lendings.component';
import { Routes, RouterModule } from '@angular/router';
import { LibraryMenueComponent } from './library-menue/library-menue.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { InformationComponent } from './information/information.component';
import { PoliciesComponent } from './policies/policies.component';
import { ConnectionDetailesComponent } from './connection-detailes/connection-detailes.component';
import { BorrowerFormComponent } from './borrower-form/borrower-form.component';
import { BookFormComponent } from './book-form/book-form.component';
import { LendingsFormComponent } from './lendings-form/lendings-form.component';
import { AddingsComponent } from './addings/addings.component';

const routes: Routes = [
  // {path:"B_detailes",component:BookDetailsComponent},
  // {path:'',component:BookListComponent,pathMatch:'full'},
  // {path:"B_list",component:BookListComponent,children:[{path:"bookDetailes/:id",component:BookDetailsComponent}]},
  // {path:"B_borrower",component:BorrowerComponent},
  // {path:"about",component:AboutComponent,
  // children:[
  //   {path:"information",component:InformationComponent},
  //   {path:"policies",component:PoliciesComponent},
  //   {path:"connection",component:ConnectionDetailesComponent},
  //   {path:'',component:InformationComponent,pathMatch:'full'}
  // ]},
  // {path:'**',component:PageNotFoundComponent,children:[{path:"about",component:AboutComponent}]}
  // {path:"B_category",component:CategoryComponent},
  // {path:"B_lendings",component:LendingsComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    ExamComponent,
    ExamplComponent,
    StyleTaskComponent,
    CategoryComponent,
    BorrowerComponent,
    BookDetailsComponent,
    BookListComponent,
    MyPipe,
    FilterPipe,
    LendingsComponent,
    LibraryMenueComponent,
    AboutComponent,
    InformationComponent,
    PoliciesComponent,
    ConnectionDetailesComponent,
    PageNotFoundComponent,
    BorrowerFormComponent,
    BookFormComponent,
    LendingsFormComponent,
    AddingsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
