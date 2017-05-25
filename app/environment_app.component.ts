import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  templateUrl: '/app/hello.html'
			
})

@Component({
	selector: 'my-comp'
	template:'<button>new</button>'
})
export class AppComponent {

user:'VIcky'

/* public itemList = [
      {name:"Apple"},
      {name:"Orange"},
      {name:"Grapes"},
   ];
*/
public itemList:Array<Object> = [
    {name:"Apple"},
      {name:"Orange"},
      {name:"Grapes"}
];

 clickItem (item) {
	 console.log(item.name);
 }
 
 addItem(test){
	 this.itemList.push({name:test});
	 newItem='';
 }
 
public countries = ['India', 'Australia', 'England', 'South Africa', 'USA', 'Japan', 'Singapore']; 

selectedCountry(event) {
	alert(event.target.value)
}
}