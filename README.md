# Verifiable Credentials Contexts _(@digitalbazaar/credentials-context)_


[![Node.js CI](https://github.com/digitalbazaar/credentials-context/workflows/Main%20CI/badge.svg)](https://github.com/digitalbazaar/credentials-context/actions?query=workflow%3A%22Main+CI%22)
[![NPM Version](https://img.shields.io/npm/v/@digitalbazaar/credentials-context)](https://www.npmjs.com/package/@digitalbazaar/credentials-context)

> A [Verifiable Credentials Data Model](https://github.com/w3c/vc-data-model)
> contexts library for JavaScript

This project packages the contexts for the [Verifiable Credentials Data
Model][] specs for use with [Node.js][] and web apps.

## Table of Contents

- [Background](#background)
- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Status](#status)
- [Developing](#developing)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See related specs:

- [Verifiable Credentials Data Model](https://github.com/w3c/vc-data-model)
- [VCDM v1.1](https://www.w3.org/TR/vc-data-model/)
- [VCDM v2.0](https://www.w3.org/TR/vc-data-model-2.0/)

## Security

TBD

## Install

Requires [Node.js][] 18+

To install via [NPM][]:

```
npm install @digitalbazaar/credentials-context
```

## Usage

```js
import {contexts, metadata, named} from '@digitalbazaar/credentials-context';
// or
const {contexts, metadata, named} = require('@digitalbazaar/credentials-context');
```

The `contexts` [Map][] can be used to access individual contexts by id or load
them into a JSON-LD document loader. The `contextsMetadata` [Map][] contains
extra information about each context.

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports two properties:
- `contexts`: A [Map][] associating context URLs to context data.
- `metadata`: A [Map][] associating context URLs to context metadata.
- `named`: A [Map][] associating short package specific names to context
  metadata.

Note that the `metadata` format is experimental and subject to change. The `id`
field is expected to stay stable and can be used with the `named` Map to get a
context URL for a short name such as `v2`.

The context files are available in the published `contexts/` directory. The
metadata has a URL for each context. Note that these files are semantically
equivalent to published spec contexts but the formatting may differ such that
strict file digests are not equivalent.

## Status

The following contexts are available as of mid-2024. They track the published
spec contexts.

- Verifiable Credentials v1.1 context
  - URL: `https://www.w3.org/2018/credentials/v1`
  - Short name: `v1`
  - Status: stable
- Verifiable Credentials v2.0 context
  - URL: `https://www.w3.org/ns/credentials/v2`
  - Short name: `v2`
  - Status: under development
- Verifiable Credentials v2.0 undefined terms context
  - URL: `https://www.w3.org/ns/credentials/undefined-terms/v2`
  - Short name: `undefined-terms-v2`
  - Status: under development

## Developing

Source is available at:
- https://github.com/digitalbazaar/credentials-context

**WARNING**: The `.jsonld` files in `contexts/` is auto-generated by the `npm
run build` script each time the test suite is run.

DO NOT edit them directly since changes will be overwritten.

Make all context changes to `lib/*.js`.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- Code: BSD 3-Clause © Digital Bazaar
- Contexts: W3C Software and Document License
- See the [LICENSE](./LICENSE.md) file for details.

[Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[NPM]: https://www.npmjs.com/
[Node.js]: https://nodejs.org/
[Verifiable Credentials Data Model]: https://github.com/w3c/vc-data-model
[credentials-context]: https://github.com/digitalbazaar/credentials-context
[webpack]: https://webpack.js.org/
