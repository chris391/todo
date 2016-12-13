import {Todo} from "./todo.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoService {
  constructor(private http: Http){

  }

  //server
  public getAllTodos(): Observable<Todo[]> {
    // return this.http.get("http://angularkea1.azurewebsites.net/api/internships/getall")
    // return this.http.get("http://angular2api2.azurewebsites.net/api/internships/")
    return this.http.get("http://localhost:3000/api/todos")
      .map(this.extractData)//when it goes well
      .catch(this.handleError);
  }

  public addTodo (task: string, completed: boolean): Observable<Todo[]> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });

  //console.log(task, completed);

  var todo = {
    task: task,
    completed: completed
  };

  return this.http.post("http://localhost:3000/api/todos", todo , options)
    .map(this.extractData)
    // .map(res =>res.json())
    // res=> res.json()
    .catch(this.handleError);
}

  public updateTodo(todo):Observable<Todo>  {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(todo);

    // console.log(todo._completed);
    console.log(todo);
    return this.http.put('http://localhost:3000/api/todos/' + todo._id, todo, options)
      .map((res: Response) => res.json());
      // .map(this.extractData)
      // .catch(this.handleError);



  }
  private extractData(res: Response){
    // let body = JSON.stringify(res);
    let body = res.json();
    console.log(body);
    return body || {};
  }
  private handleError(error: Response | any){
    console.log(error);
    return Observable.throw("some error message");
  }
  //todo
  public deleteTodo(todo) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // this.http.delete("http://angular2api2.azurewebsites.net/api/internships/_id:"+id, { headers: headers });
    return this.http.delete('http://localhost:3000/api/todos/' + todo._id, options);
  }
  // public serverArchive(todo:Todo){
  //   t
  // }


  public getInternship(id: number): any {
    //return this.getAllInternships().find(internship => internship._id === id);
    return {};
  }

  //local
  public add(todoService: Todo): void {
    todoService.id = this.getNextId();
    let todos = this.getFromLocalStorage();
    todos.push(todoService);
    this.addToLocalStorage(todos);
  }

  public get(): Todo[] {
    return this.getFromLocalStorage();
  }

  // public getPending(): Todo[] {
  //   let todos: Todo[] = this.getFromLocalStorage();
  //   return todos.filter(function(element) {
  //     return element.completed === false;
  //   });
  // }

  // public getArchive(): Todo[] {
  //   let todos: Todo[] = this.getFromLocalStorage();
  //   return todos.filter(function(element) {
  //     return element.completed === true;
  //   });
  // }

  // public archive(todo: Todo): void {
  //   let todos = this.getFromLocalStorage();
  //   todos.forEach(function(value, key) {
  //     if (value.id === todo.id) {
  //       value.completed = true;
  //       return;
  //     }
  //   });
  //   this.addToLocalStorage(todos);
  // }

  public remove(todo: Todo): void {
    let todos = this.getFromLocalStorage();
    todos = todos.filter(function(element) {
      return element.id !== todo.id;
    });
    this.addToLocalStorage(todos);
  }

  private getNextId(): number {
    return this.getFromLocalStorage().length + 1;
  }

  private addToLocalStorage(todos: Todo[]): void {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  private getFromLocalStorage(): Todo[] {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }

}
