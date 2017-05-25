System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    /* public itemList = [
                          {name:"Apple"},
                          {name:"Orange"},
                          {name:"Grapes"},
                       ];
                    */
                    this.itemList = [
                        { name: "Apple" },
                        { name: "Orange" },
                        { name: "Grapes" }
                    ];
                    this.countries = ['India', 'Australia', 'England', 'South Africa', 'USA', 'Japan', 'Singapore'];
                }
                AppComponent.prototype.clickItem = function (item) {
                    console.log(item.name);
                };
                AppComponent.prototype.addItem = function (test) {
                    this.itemList.push({ name: test });
                    newItem = '';
                };
                AppComponent.prototype.selectedCountry = function (event) {
                    alert(event.target.value);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app'
                    }),
                    core_1.View({
                        templateUrl: '/app/hello.html'
                    }),
                    core_1.Component({
                        selector: 'my-comp',
                        template: '<button>new</button>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=environment_app.component.js.map