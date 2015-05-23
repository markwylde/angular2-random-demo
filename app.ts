/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/moment/moment.d.ts" />
/// <reference path="typings/chance/chance.d.ts" />

import {Component, View, For, If, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'views/home/home.html',
    directives: [For, If]
})
// Component controller
export class MyAppComponent {
    randomName: string;
    randomUrl: string;
    classmap: any;
    items: Array<Person>;

    constructor() {
        this.randomName = chance.name();
        this.randomUrl = chance.url();
        this.items = [];
        this.classmap = {
            'fa-venus': true
        }
    }

    insertNew(amount?:number) {
        if (!amount == undefined) {
            amount = 1;
        }

        var gender = chance.gender();
        this.items.push(new Person({
            firstName: chance.first({ gender: gender }),
            surname: chance.last({ gender: gender }),
            gender: gender,
            dateOfBirth: moment(chance.birthday({type: "adult"})).format("DD/MM/YYYY")
        }));

        if (amount > 1) {
            this.insertNew(amount - 1);
        }
    }

    removeItem(item) {
        this.items.splice(item, 1);
    }
}

class Person {
    firstName: string;
    surname: string;
    gender: string;
    dateOfBirth: Date;

    constructor(data) {
        this.firstName = data.firstName;
        this.surname = data.surname;
        this.gender = data.gender;
        this.dateOfBirth = data.dateOfBirth;
    }
}

bootstrap(MyAppComponent);