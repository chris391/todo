import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoMasterComponent} from "./todo-master.component";
import {TodoDetailComponent} from "./todo-detail.component";


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full'
  },
  {
    path: "todo",
    component: TodoMasterComponent,
    // useAsDefault: true
  },
  {
    path: "todos",
    component: TodoDetailComponent
  },
  // {
  //   path: 'internships',
  //   component: InternshipsComponent,
  //   children: [
  //     {path:'' },
  //     {path:'a', component: AComponent},
  //     {path:'b', component: BComponent}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class InternshipsRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
