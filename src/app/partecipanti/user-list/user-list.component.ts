import { Component, OnInit, Input } from '@angular/core';

import { UserService} from '../user.service';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    // Values form the parent component
    @Input() user;
    @Input() userIndex;

    public userDetails;
    public inProgress = false;

    constructor(private userService: UserService) { }

    ngOnInit() {

        this.getUserDetails(this.user.login);
    }


    getUserDetails(username) {

        this.inProgress = true;

        // Call to getUserDetails() method in UserService
        this.userService.getUserDetails(username)
            .subscribe((data) => {
                this.userDetails = data;

                this.inProgress = false;
            });
    }

}
