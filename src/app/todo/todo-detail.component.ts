import {Component, OnInit} from '@angular/core';
import {TodoService} from "./todo.service";
import{Todo} from "./todo.model.ts";
// import { TodoFilter } from './todos-filter.pipe';

@Component({
  providers:[TodoService],
  template: `
<div class="col-md-12">
    <div class="todolist">
        <h1>Already Done</h1>
        <ul id="done-items" class="list-unstyled">
            <li *ngFor="let todo of completedTodos" [class.done]="todo.completed">
              {{todo.task}}
            
            <!--[completed-->
              <!--&lt;!&ndash;completed&ndash;&gt;-->
              <!--&lt;!&ndash;completed&ndash;&gt;-->
              
              
              <button class="remove-item btn btn-default btn-xs pull-right" (click)="remove(todo)"><span class="glyphicon glyphicon-minus-sign"></span></button>
            </li>

        </ul>
    </div>
</div>
`

})

export class TodoDetailComponent implements OnInit {
  private todos: Todo[] = [];
  private internships: any[] =[];

  private completedTodos: Todo[]=[];
  private index:number=0;

  private getCompleted():any{
    while (this.index<=this.todos.length-1){
      console.log("hei");
      if(this.todos[this.index].completed==true){
        console.log("heeeei");
        // return this.todos[this.index];
        this.completedTodos.push(this.todos[this.index]);
        console.log("works");

      }
      this.index++;

    }
  }

  private errorMessage: string = "";

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(
      todo => this.todos = todo,
      error => this.errorMessage = error,
      () => this.getCompleted()

    );

  }

  constructor(private todoService: TodoService) {

  }
  // constructor(private _todoService: TodoService,
  //             private router: Router) {
  //
  // }

  // ngOnInit() {
  //   this.getArchive();
  // }

  // public remove(todo: Todo): void {
  //   this.todoService.remove(todo);
  //   this.getArchive();
  // }

  // private getArchive(): void {
  //   this.todos = this.todoService.getArchive();
  // }

}
