import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http"
import { catchError, retry } from 'rxjs/operators';
import { TASKS } from '../mock-tasks';
import { Task } from '../task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http: HttpClient) { }

  getTasks() :Observable<Task[]> {
    console.log('othaaaaaa')
    return this.http.get<Task[]>(this.apiUrl, httpOptions);
  }

  addTask(task:Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

  deleteTask(task:Task): Observable<Task> {
    const url = `${this.apiUrl}/${100}`
    return this.http.delete<Task>(url, httpOptions).pipe(
      retry(3),
      catchError(this.httpErrorHandler)
   );
  }

  toggelReminderTask(task:Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions).pipe(
      retry(3),
      catchError(this.httpErrorHandler)
   );
  }
  private httpErrorHandler (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
       console.error("A client side error occurs. The error message is " + error.message);
    } else {
       console.error(
          "An error happened in server. The HTTP status code is "  + error.status + " and the error returned is " + error.message);
    }

    return throwError("Error occurred. Pleas try again");
 }
}
