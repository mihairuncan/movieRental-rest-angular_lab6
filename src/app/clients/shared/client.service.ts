import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Client} from "./client.model";
import {map} from "rxjs/operators";


@Injectable()
export class ClientService {
  private clientsUrl = "http://localhost:8080/api/clients";

  constructor(private httpClient: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.httpClient
      .get<Array<Client>>(this.clientsUrl);
  }

  getClient(id: number): Observable<Client> {
    return this.getClients()
      .pipe(map(clients => clients.find(client => client.id === id)));
  }

  save(client): Observable<Client> {
    console.log("client service: ", client);

    return this.httpClient
      .post<Client>(this.clientsUrl, client);
  }

  delete(clientid: number): Observable<any> {
    const url = `${this.clientsUrl}/${clientid}`;
    return this.httpClient
      .delete(url);
  }

  update(client: Client): Observable<Client> {
    const url = `${this.clientsUrl}/${client.id}`;
    return this.httpClient
      .put<Client>(url, client);

  }
}
