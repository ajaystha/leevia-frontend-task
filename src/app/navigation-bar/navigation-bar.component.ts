import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

    public isChecked: boolean = false;      // To check if the checkbox is checked or not to show/hid the menu

    constructor() { }

}
