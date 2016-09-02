# knockout-localStorage
Persist observables in the local storage in knockout.js

Usage
-----

```javascript
// Create a item which has a reflection of it's values in the browser's local storage.
var item = ko.observable().extend({ persist: "item_id" });
// Change the value of the observable, thereby automatically changing the local storage.
item("A");
// Get the value from the localStorage to check if it works, it should return "A".
console.log(localStorage.getItem("item_id"));
```
