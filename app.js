var foo = function() {
	return Promise.resolve(42);
};

var bar = async function() {
	var test = Boolean(await foo());
	console.log(test);
	return test;
}

bar();

