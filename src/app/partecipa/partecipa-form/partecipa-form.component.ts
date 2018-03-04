import { Component } from '@angular/core';

@Component({
    selector: 'app-partecipa-form',
    templateUrl: './partecipa-form.component.html',
    styleUrls: ['./partecipa-form.component.scss']
})
export class PartecipaFormComponent {

    public isSubmitted: boolean = false;

    constructor() { }


    submitForm() {
        this.isSubmitted = true;
    }



}
