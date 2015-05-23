/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/moment/moment.d.ts" />
/// <reference path="typings/chance/chance.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
// Annotation section
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.randomName = chance.name();
        this.randomUrl = chance.url();
        this.items = [];
        this.classmap = {
            'fa-venus': true
        };
    }
    MyAppComponent.prototype.insertNew = function (amount) {
        if (!amount == undefined) {
            amount = 1;
        }
        var gender = chance.gender();
        this.items.push(new Person({
            firstName: chance.first({ gender: gender }),
            surname: chance.last({ gender: gender }),
            gender: gender,
            dateOfBirth: moment(chance.birthday({ type: "adult" })).format("DD/MM/YYYY")
        }));
        if (amount > 1) {
            this.insertNew(amount - 1);
        }
    };
    MyAppComponent.prototype.removeItem = function (item) {
        this.items.splice(item, 1);
    };
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            templateUrl: 'views/home/home.html',
            directives: [angular2_1.For, angular2_1.If]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
exports.MyAppComponent = MyAppComponent;
var Person = (function () {
    function Person(data) {
        this.firstName = data.firstName;
        this.surname = data.surname;
        this.gender = data.gender;
        this.dateOfBirth = data.dateOfBirth;
    }
    return Person;
})();
angular2_1.bootstrap(MyAppComponent);
