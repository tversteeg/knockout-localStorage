ko.extenders.persist = function (target, key) {
	if (key && localStorage.hasOwnProperty(key)) {
		target(JSON.parse(localStorage.getItem(key)));
	}

	if (key) {
		target.subscribe(function (newValue) {
			localStorage.setItem(key, ko.toJSON(newValue));
		});
	}

	return target;
};
