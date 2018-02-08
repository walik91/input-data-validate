let validate = require('./index.js');

console.log(validate.check({
	username: {
		length: [5, 10]
	}
}, {
	username: 'walik'
}));