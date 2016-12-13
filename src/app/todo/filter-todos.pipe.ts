import { Pipe, Injectable, PipeTransform } from '@angular/core'
import {Todo} from "./todo.model";

@Pipe({
  name: 'filterTodos'
})
@Injectable()
export class FilterTodos implements PipeTransform {
  transform(todos: any[], search: string) {

    //return [-1];

    if (search && todos.length>0) {
      let foundItems = todos.filter(
        todo => todo.task && todo.task.toLowerCase().includes(search.toLowerCase())
      )
      return foundItems;
    }
    return todos;

  }
}
//  //function: toLowerCase()
//  //function on array: filter( item => item.firstname
//  //function includes()
//  let foundItems = [];
//
//  //To display a message to the user. No search results.....
//  if (foundItems && foundItems.length == 0) {
//    return [-1];
//  }
//

