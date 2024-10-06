# nothing much.

Simple HTML/Vanilla JS/CSS homepage written from scratch and hand-crafted for that true artisan feel. Hosted at [nothingmuch.net](https://www.nothingmuch.net).

To generate hashes:

`openssl dgst -sha384 -binary FILENAME.js | openssl base64 -A`

Minified with [uglify-js](https://github.com/mishoo/UglifyJS#readme). Prettied up with [Sass](https://sass-lang.com/). Mozilla seems to think it's [alright](https://developer.mozilla.org/en-US/observatory/analyze?host=nothingmuch.net).

```shell
uglifyjs --compress --mangle -- index.js > index.min.js && sass style.scss style.min.css --style compressed --no-source-map
```

```nginx.conf
	autoindex off;

	location /style.min.css {
	  root /path/to/files/;
	  try_files /style.min.css =404;
	}

	location /index.min.js {
	  root/path/to/files/;
	  try_files /index.min.js =404;
	}

	location / {
      add_header X-Content-Type-Options nosniff;
      add_header X-Frame-Options DENY;
      add_header Referrer-Policy same-origin;
      add_header Strict-Transport-Security max-age=15768000;
      add_header Content-Security-Policy "default-src 'none'; script-src 'self'; object-src 'none'; base-uri 'none'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; form-action 'none'; frame-ancestors 'none'";

      root /path/to/files/;
	  try_files /index.html =404;
	}

    server_name nothingmuch.net www.nothingmuch.net;```
