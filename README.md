# Password Toggle Custom Element

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/guillaumebriday)
[![](https://img.shields.io/npm/dt/custom-element-password-toggle.svg)](https://www.npmjs.com/package/custom-element-password-toggle)
[![](https://img.shields.io/npm/v/custom-element-password-toggle.svg)](https://www.npmjs.com/package/custom-element-password-toggle)
[![](https://github.com/guillaumebriday/custom-element-password-toggle/workflows/Lint/badge.svg)](https://github.com/guillaumebriday/custom-element-password-toggle)
[![](https://github.com/guillaumebriday/custom-element-password-toggle/workflows/Test/badge.svg)](https://github.com/guillaumebriday/custom-element-password-toggle)
[![](https://img.shields.io/github/license/guillaumebriday/custom-element-password-toggle.svg)](https://github.com/guillaumebriday/custom-element-password-toggle)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f48191db-a459-4ab4-849f-10ea970915af/deploy-status)](https://custom-element-password-toggle.netlify.com)

## Getting started

## Installation

This package is written with the new ES6 syntax. You can import it directly in your browser with [UNPKG](https://unpkg.com/).

```html
<script type="module" defer>
  import 'https://unpkg.com/custom-element-password-toggle'
</script>
```

You can also install it with npm or yarn:

```bash
$ yarn add custom-element-password-toggle
```

```html
<script type="module" defer>
  import 'custom-element-password-toggle'
</script>
```

## Basic Usage

Just add `is="password-toggle"` on your input fields:

```html
<input type="password" is="password-toggle" />
```

## Development

### Project setup
```bash
$ yarn install
$ yarn serve
```

### Tests

[Jest](https://jestjs.io/) and [Puppeteer](https://github.com/puppeteer/puppeteer) are responsible to test this component:
```bash
$ yarn test
```

### Linter

[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
