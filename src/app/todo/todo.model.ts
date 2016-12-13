export class Todo {
  private _id: number;
  private _task: string;
  private _completed: boolean;

  constructor(task: string, completed:  boolean){
    this._task = task;
    this._completed = completed;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }


  get task(): string {
    return this._task;
  }

  set task(value: string) {
    this._task = value;
  }

  get completed(): boolean {
    return this._completed;
  }

  set completed(value: boolean) {
    this._completed = value;
  }
}
