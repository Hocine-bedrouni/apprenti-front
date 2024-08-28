import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private http: HttpClient) {}

  private name: string = "";
  public fname: string = "";
  public user = {
    name: "",
    firstName: ""
  }

  public users: { name: string, firstName: string}[] = [];
  public urlApi: string = "http://localhost:9090/api"
  public urlAPiUsers: string = "http://localhost:9090/api/users"

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  register() : void {
    const u = {
      name: this.user.name,
      firstName: this.user.firstName
    }
    this.users.push(u)
    console.table(this.users)
  }

  save(event: any, name: string) {
    // console.log(event);
    console.log(this.user);
  }
  test() {
    const data: any;

    const tt = Object.assign(new Maclass(), data);
  }
  addUser() {
    console.log(`prêt à ajouter ${this.user}`)
    this.http.post(this.urlApi, this.user, this.httpOptions)
      .pipe(catchError(error => {
        console.error('Une erreur est survenue :', error);
        return throwError('Erreur lors de la requête POST.');
      })).subscribe();
  }

  getUsers(): Observable<any> {
   return this.http.get<any>(this.urlAPiUsers);
  }

  ngOnInit(): void {
    this.getUsers().subscribe((dat: any) => {
      dat.forEach((data: any) => {
        this.users.push({name: data.name, firstName: data.firstName});

      })
    });
  }



}

class Maclass {

}
