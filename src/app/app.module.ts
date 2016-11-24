import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from "./todo/app-routing.module";
import {TodoService} from "./todo/todo.service";
import {TodoDetailComponent} from "./todo/todo-detail.component";
import {TodoMasterComponent} from "./todo/todo-master.component";
import {TodoFilter} from "./todo/todos-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent,
    TodoMasterComponent,
    TodoFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule, //I added this.
    routing
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
