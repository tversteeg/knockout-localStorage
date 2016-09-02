ko.extenders.persist = function (target, key) {
	if (key && localStorage.hasOwnProperty(key)) {
		try {
			target(JSON.parse(localStorage.getItem(key)));
		} catch (e) {}
	}

	if (key) {
		target.subscribe(function (newValue) {
			localStorage.setItem(key, ko.toJSON(newValue));
		});
	}

	return target;
};
