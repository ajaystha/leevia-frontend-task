
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

    private _baseurl: string = 'https://api.github.com/users';
    private _username: string = 'octocat';
    private _resource: string = 'followers';
    private _num_of_user: number = 10;


    constructor(private http: HttpClient) { }

    // Method to get Users
    getUsers() {

        return this.http
            .get(`${this._baseurl}/${this._username}/${this._resource}?per_page=${this._num_of_user}`);
    }


    // Method to get user details
    getUserDetails(user) {

        return this.http.get(`${this._baseurl}/${user}`);

    }




}
