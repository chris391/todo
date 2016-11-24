import {Component, OnInit} from '@angular/core';
import {TodoService} from "./todo.service";
import{Todo} from "./todo.model.ts";
// import { TodoFilter } from './todos-filter.pipe';

@Component({
  providers: [TodoService],
  template: `
<div class="col-md-12">
    <div class="todolist">
        <h1>Already Done</h1>
        <ul id="done-items" class="list-unstyled">
            <li *ngFor="let todo of todos" [class.done]="todo.completed">
              {{todo.task}}
            
            <!--[class.done]="todo.completed"-->
              <!--&lt;!&ndash;<div *ngIf={{todo.completed}}>{{todo.title}}</div>&ndash;&gt;-->
              <!--&lt;!&ndash;{{todo.completed}}&ndash;&gt;-->
              
              
              <button class="remove-item btn btn-default btn-xs pull-right" (click)="remove(todo)"><span class="glyphicon glyphicon-minus-sign"></span></button>
            </li>

        </ul>
    </div>
</div>
`

})

export class TodoDetailComponent implements OnInit {
  // public todos: Todo[] = [];

  private todos: Todo[] = [];
  private internships: any[] =[];
  private newArray: Todo[]=[];

  private index:number=0;

  // private sortIt():any{
  //   while (this.index<=this.todos.length-1){
  //     console.log("hei");
  //     if(this.todos[this.index].completed==false){
  //       console.log("heeeei");
  //       // return this.todos[this.index];
  //       this.newArray.push(this.todos[this.index]);
  //       console.log("works");
  //
  //     }
  //     this.index++;
  //
  //   }
  // }

  private errorMessage: string = "";

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(
      todo => this.todos = todo,
      error => this.errorMessage = error
      // () => this.sortIt()

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

  public remove(todo: Todo): void {
    this.todoService.remove(todo);
    this.getArchive();
  }

  private getArchive(): void {
    this.todos = this.todoService.getArchive();
  }

}
