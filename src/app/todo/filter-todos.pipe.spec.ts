// import { TestBed, inject, async,getTestBed } from '@angular/core/testing';
// import { FilterTodos } from './filter-todos.pipe';
// import any=jasmine.any;
//
// describe('Todos test', () => {
//   beforeEach(() => {
//     this.todos = [
//       {_id: 11, task: 'dog' },
//       {_id: 12, task: 'cat' },
//       {_id: 13, task: 'bird' },
//       {_id: 14, task: 'lizzard' },
//       {_id: 15, task: 'crocodile' },
//     ];
//
//     this.internshipsInvalid = [
//       {_id: 11 },
//       {_id: 12, task: 'cat' },
//       {_id: 13, task: 'bird' },
//       {_id: 14, task: 'lizzard' },
//       {_id: 15, task: 'crocodile' },
//     ];
//
//     TestBed.configureTestingModule({
//       declarations: [
//         FilterTodos
//       ]
//     })
//   });
//
//   describe("FilterTodos", () => {
//     let filter = new FilterTodos();
//
//     it('No search string returns array', () => {
//       let result = filter.transform(this.todos, '');
//       expect(result.length).toBe(5);
//       expect(result[0].task).toBe('dog');
//       expect(result[4].task).toBe('crocodile');
//     });
//
//     it('No search string returns array', () => {
//       let result = filter.transform(this.todos, '');
//       expect(result.length).toBe(5);
//     });
//     it('it should do something', () => {
//       let result = filter.transform(this.todos, '');
//       expect(result[0].task).toBe('dog');
//     });
//     it('should check for the 2nd char in initials', () =>{
//       let result = filter.transform(this.todos, '');
//       expect(result[0].task.includes("o",1)).toBe(true);
//     });
//     it('should check', () =>{
//       let result = filter.transform(this.todos, '');
//       expect(result[0].task.toUpperCase).toBe("DOG");
//     });
//
//   });
// });
