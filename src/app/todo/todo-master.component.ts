import {Component, OnInit} from "@angular/core";
import {Todo} from "./todo.model";
import {TodoService} from "./todo.service";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";

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
                <li class="ui-state-default" *ngFor="let todo of todos">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" (click)="archive(todo)" /> {{todo.text}}
                        </label>
                    </div>
                </li>
            </ul>
            <div class="todo-footer">
                 Exam KEA - 2017
            </div>
        </div>
    </div>
</div>
`
})



export class TodoMasterComponent implements OnInit {
  simpleForm: FormGroup;
  private todo: any[]=[];

  ngOnInit():void {
    this.getPending();


    // this.deleteTodo();

  }
  // private deleteTodo():any {
  //   this.todos = this.todoService.deleteTodo("1");
  // }

  public onSubmit(form){
    console.log("onSubmit(): " + form.controls.taskForm.value);

    this._todoService.addTodo(form.controls.taskForm.value, false).subscribe(
      task => {this.todo = task;}

    );
  }

  constructor(private fb: FormBuilder, private _todoService: TodoService, private todoService: TodoService) {
    this.simpleForm = fb.group({
    'taskForm':[null, Validators.compose([Validators.required, Validators.minLength(2)])]
    })
  }

  public submitForm(value:any){
    // console.log(value);

  }

  public todos: Todo[] = [];

  // todo: Todo = {
  //   id: 0,
  //   completed: false,
  //   text: ""
  // };

  public add(): void {
    // this._todoService.add(this.todo);
    // this.getPending();
    // this.todo.text = "";
  }

  public getPending(): void {
    this.todos = this._todoService.getPending();
  }

  public archive(todo: Todo) {
    this._todoService.archive(todo);
    this.getPending();
  }
}
