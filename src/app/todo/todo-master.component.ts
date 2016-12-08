import {Component, OnInit, ChangeDetectionStrategy} from "@angular/core";
import {Todo} from "./todo.model";
import {TodoService} from "./todo.service";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  providers: [TodoService],
  template: `
<div class="row">
    <div class="col-md-12">
        <div class="todolist not-done" >
            <h1>Tasks</h1>
            <form [formGroup]="simpleForm" (ngSubmit)="submitForm(simpleForm.value)" (ngSubmit)="add()" (ngSubmit)="onSubmit(simpleForm)">
              <div class="form-group" [ngClass]="{'has-error':!simpleForm.controls['taskForm'].valid}">
              
                  <input class="form-control" [(ngModel)]="taskFormInstance" type="text" placeholder="Add Task" [formControl]="simpleForm.controls['taskForm']">
                  <div *ngIf="simpleForm.controls['taskForm'].hasError('minlength') && simpleForm.controls['taskForm'].touched" class="alert alert-danger">Your task must be at least 2 characters long.</div>
                  </div>
                  
                  <div class="form-group">
                  <button id="add" class="btn btn-primary btn-success"  type="submit" [disabled]="!simpleForm.valid">Add</button>
              </div>
            </form>
            <hr>
            <ul id="sortable" class="list-unstyled">
                <li class="ui-state-default" *ngFor="let todo of notCompletedTodos" >
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"  (click)="updateTodo(todo)" /> {{todo.task}}
                        </label>
                    </div>
                </li>
            </ul>
            <div class="todo-footer">
                {{ currentDate | date | lowercase }}   | Exam KEA - 2017
            </div>
        </div>
    </div>
</div>
`
})



export class TodoMasterComponent implements OnInit {
  simpleForm: FormGroup;
  private addTodo: Todo[] = [];
  private todos: Todo[] = [];
  currentDate:Date;
  // private todo: Todo;
  private errorMessage: string = "";
  completed:boolean = false;
  private todo={};
  completedTrue(){
    // this.todo.completed == true;
  }
  private notCompletedTodos: Todo[]=[];
  private index:number=0;

  private getNotCompeleted():any{
    while (this.index<=this.todos.length-1){
      console.log("hei");
      console.log(this.todos[this.index].completed);

      if(this.todos[this.index].completed==false){
        console.log("heeeei");
        // return this.todos[this.index];
        this.notCompletedTodos.push(this.todos[this.index]);
        console.log("works");

      }
      this.index++;

    }
  }

  ngOnInit(): void {
    //this.getPending();
    this._todoService.getAllTodos().subscribe(
      todo => this.todos = todo,
      error => this.errorMessage = error,
      () => this.getNotCompeleted()
    );
    this.currentDate = new Date();

  }

  // private deleteTodo():any {
  //   this.todos = this.todoService.deleteTodo("1");
  // }

  public onSubmit(form) {
    //console.log("onSubmit(): " + form.controls.taskForm.value);

    this._todoService.addTodo(form.controls.taskForm.value, false).subscribe(
      task => this.addTodo = task

    );
  }

  constructor(private fb: FormBuilder, private _todoService: TodoService) {
    this.simpleForm = fb.group({
      'taskForm': [null, Validators.compose([Validators.required, Validators.minLength(2)])]
    })
  }

  public submitForm(value: any) {
    // console.log(value);

  }


  // todo: Todo = {
  //   id: 0,
  //   completed: false,
  //   text: ""
  // };

  public add(): void {
    this._todoService.getAllTodos().subscribe(
      todo => this.todos = todo,
      error => this.errorMessage = error
    );

  }
//   updateTodo(todo) {
//     //console.log("update todo1");
//     this.todoService.updateTodo(todo).subscribe(
//
//       data => {
//         console.log("update todo");
//         // refresh the list
//         todo.completed==true;
//         // this.getFoods();
//         //return true;
//       },
//       error => {
//         console.error("Error saving food!");
//         return Observable.throw(error);
//       }
//     );
//   }
//   enableEditing(todo) {
//     this.completed = true;
//     this.todo = todo;
//   }
  public updateTodo(todo) {

    // console.log(todo._id);
    todo.completed=true;

    // console.log(todo.completed);
    this._todoService.updateTodo(todo).subscribe(



      res =>{

      },
      // refresh the list
    // data => {
    //     // console.log("update m2");
    //     // this.getTodos();
    //     this._todoService.getAllTodos().subscribe(
    //       todo => this.todos = todo,
    //       error => this.errorMessage = error
    //     );
    //     return true;
    //   },
      error => {
        console.error("Error saving todo!");
        return Observable.throw(error);
      }

    );
  }


}
