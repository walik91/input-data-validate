# input-data-validate

Nodejs library for validate data by rules provided.

## Instalation
```shell
npm install input-data-validate
```

## Usage
```js
const validate = require('input-data-validate');

validate.check({
  username: validate.string.length(5, 15),
  location: validate.string.isRequired,
  role: validate.string.oneOf(['author', 'user']),
  age: validate.number.range(18, 99),
  interests: validate.arrayOf(validate.string.oneOf(['music', 'films', 'sport', 'games']))
}, {
  username: 'walik91',
  location: 'World',
  role: 'author',
  age: '27',
  interests: ['music', 'games']
})
```

## Run tests
```shell
npm test
```