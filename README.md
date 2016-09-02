# knockout-localStorage
Persist observables in the local storage in knockout.js

Usage
-----

```javascript
// Create a item which has a reflection of it's values in the browser's local storage.
var persistentItem = ko.observable().extend({ persist: "item_id" });
// Change the value of the local storage.
persistItem("A");
// Get the value from the localStorage to check if it works, it should return "A".
console.log(localStorage.getItem("item_id"));
```
