# nothing much.

Simple HTML/Vanilla JS/CSS homepage written from scratch and hand-crafted for that true artisan feel. Hosted at [nothingmuch.net](https://www.nothingmuch.net).

To generate hashes:

`openssl dgst -sha384 -binary FILENAME.js | openssl base64 -A`

Minified with [uglify-js](https://github.com/mishoo/UglifyJS#readme). Prettied up with [Sass](https://sass-lang.com/). Mozilla seems to think it's [alright](https://observatory.mozilla.org/analyze/nothingmuch.net).

```shell
uglifyjs --compress --mangle -- index.js > index.min.js && sass style.scss style.min.css --style compressed --no-source-map
```
