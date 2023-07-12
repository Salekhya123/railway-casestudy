import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { NextComponent } from './next/next.component';
import { TrainService } from './train.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { FormbookComponent } from './formbook/formbook.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Ng2SearchPipeModule} from  'ng2-search-filter';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { CommonModule } from '@angular/common';
import { SelectedRowDataServiceService } from './selected-row-data-service.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    SearchComponent,
    NextComponent,
    BookComponent,
    FormbookComponent,
    LoginComponent,
    RegisterComponent,
    BookdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    CommonModule
   
  ],
  providers: [TrainService,BookService,SelectedRowDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
