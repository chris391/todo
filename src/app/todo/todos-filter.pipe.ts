import { Pipe, Injectable, PipeTransform } from '@angular/core'
import {Todo} from "./todo.model";

@Pipe({
  name: 'todoFilter'
})
export class TodoFilter implements PipeTransform {
  transform(items:Todo[]) {
    let foundItems = items.filter(
      item => item.completed===true

    )

    return foundItems;
  }
}
