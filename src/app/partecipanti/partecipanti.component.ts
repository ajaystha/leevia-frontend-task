import { Component, OnInit } from '@angular/core';

import { NgIf } from '@angular/common/';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from './user.service';


@Component({
    selector: 'app-partecipanti',
    templateUrl: './partecipanti.component.html',
    styleUrls: ['./partecipanti.component.scss'],
    providers: [ UserService ]
})
export class PartecipantiComponent implements OnInit {

    public inProgress: boolean = false;
    public isError: boolean = false;
    public errMessage: string;
    public users;

    constructor(private userService: UserService) { }

    ngOnInit() {

        this.getUsers();

    }


    getUsers() {
        this.inProgress = true;

        // Call to getUsers() method in UserService
        this.userService.getUsers()
            .subscribe(data => {

                this.users = data;

                this.isError = false;
                this.inProgress = false;
            },
            (err: HttpErrorResponse) => {
                console.log(err);

                this.isError = true;
                this.errMessage = err.error.message;
            });
    }

}
