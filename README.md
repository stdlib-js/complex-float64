<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Complex128

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> 128-bit complex number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs';
```

#### Complex128( real, imag )

128-bit complex number constructor, where `real` and `imag` are the **real** and **imaginary** components, respectively.

```javascript
var z = new Complex128( 5.0, 3.0 );
// returns <Complex128>
```

* * *

## Properties

#### Complex128.BYTES_PER_ELEMENT

Size (in bytes) of each component.

```javascript
var nbytes = Complex128.BYTES_PER_ELEMENT;
// returns 8
```

#### Complex128.prototype.BYTES_PER_ELEMENT

Size (in bytes) of each component.

```javascript
var z = new Complex128( 5.0, 3.0 );

var nbytes = z.BYTES_PER_ELEMENT;
// returns 8
```

#### Complex128.prototype.byteLength

Length (in bytes) of a complex number.

```javascript
var z = new Complex128( 5.0, 3.0 );

var nbytes = z.byteLength;
// returns 16
```

### Instance

A `Complex128` instance has the following properties...

#### re

A **read-only** property returning the **real** component.

```javascript
var z = new Complex128( 5.0, 3.0 );

var re = z.re;
// returns 5.0
```

#### im

A **read-only** property returning the **imaginary** component.

```javascript
var z = new Complex128( 5.0, -3.0 );

var im = z.im;
// returns -3.0
```

* * *

## Methods

### Accessor Methods

These methods do **not** mutate a `Complex128` instance and, instead, return a complex number representation.

#### Complex128.prototype.toString()

Returns a `string` representation of a `Complex128` instance.

```javascript
var z = new Complex128( 5.0, 3.0 );
var str = z.toString();
// returns '5 + 3i'

z = new Complex128( -5.0, -3.0 );
str = z.toString();
// returns '-5 - 3i'
```

#### Complex128.prototype.toJSON()

Returns a [JSON][json] representation of a `Complex128` instance. [`JSON.stringify()`][mdn-json-stringify] implicitly calls this method when stringifying a `Complex128` instance.

```javascript
var z = new Complex128( 5.0, -3.0 );

var o = z.toJSON();
/*
  {
    "type": "Complex128",
    "re": 5.0,
    "im": -3.0
  }
*/
```

To [revive][mdn-json-parse] a `Complex128` number from a [JSON][json] `string`, see [@stdlib/complex/reviver-float64][@stdlib/complex/reviver-float64].

</section>

<!-- /.usage -->

* * *

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Both the **real** and **imaginary** components are stored as double-precision floating-point numbers.

</section>

<!-- /.notes -->

* * *

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs';

var z = new Complex128( 3.0, -2.0 );

console.log( 'type: %s', typeof z );
// => 'type: object'

console.log( 'str: %s', z );
// => 'str: 3 - 2i'

console.log( 'real: %d', z.re );
// => 'real: 3'

console.log( 'imag: %d', z.im );
// => 'imag: -2'

console.log( 'JSON: %s', JSON.stringify( z ) );
// => 'JSON: {"type":"Complex128","re":3,"im":-2}'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/complex/cmplx`][@stdlib/complex/cmplx]</span><span class="delimiter">: </span><span class="description">create a complex number.</span>
-   <span class="package-name">[`@stdlib/complex/float32`][@stdlib/complex/float32]</span><span class="delimiter">: </span><span class="description">64-bit complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-float64.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-float64

[test-image]: https://github.com/stdlib-js/complex-float64/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/complex-float64/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-float64/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-float64?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-float64.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex-float64/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex-float64/tree/deno
[umd-url]: https://github.com/stdlib-js/complex-float64/tree/umd
[esm-url]: https://github.com/stdlib-js/complex-float64/tree/esm
[branches-url]: https://github.com/stdlib-js/complex-float64/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-float64/main/LICENSE

[json]: http://www.json.org/

[mdn-json-stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

[mdn-json-parse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

[@stdlib/complex/reviver-float64]: https://github.com/stdlib-js/complex-reviver-float64/tree/esm

<!-- <related-links> -->

[@stdlib/complex/cmplx]: https://github.com/stdlib-js/complex-cmplx/tree/esm

[@stdlib/complex/float32]: https://github.com/stdlib-js/complex-float32/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
