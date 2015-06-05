
# Dev notes for express training

## 4/28/2015


{
	"first_name": "Jason",
    "last_name": "Grosz",
    "is_compliant": true
  
}

## 4/9/2015

Got simple mongoose integration working.

Kind of deciding I don't like having the URL strings "hidden" in the routes folder, considering putting them back to the way that the express-generator did it.

I think before I get into joi I will try to call one of my end points with a webhook from a-s.

Plan of attack:
* webhook proof of concept
* integrate joi for data integrity
* do some proof of concept to play with classical inheritance in model classes

## 4/3/2015

Trying to match versions used in current HEAD of master of asthmapolis-server (a-s from here) as of today.

I set up a virtualenv (e-v1), installed pip package for nodeenv.

Set up a nodeenv pinned to a virtualenv with exact version of node and npm used in a-s. Some odd bug in nodeenv, the arg to install a specific version of npm did not work, so used npm to upgrade npm.

```
workon e-v1
nodeenv -p --node=0.10.28
npm install -g npm@^2.7.5
```

_Note: from here on out, any shell command is assumed to be running in the virtualenv e-v1_

Starting with an old version of express-generator, looks like the 3.0.0 tag still uses 3.x of express, so close enough.

```
npm install express-generator@3.0.0 -g
express wwwroot --css less
```

Changed versions of express and jade to match a-s, and pinned all others to exact version.

Added these from a-s (sort of guessing what I will want to use in short term):

```
+    "joi": "5.1.0",
+    "mongoose": "3.8.14",
+    "mongoose-filter-denormalize": "0.1.0",
+    "express-bunyan-logger": "0.1.2",
+    "connect-redis": "1.4.5"
```

Ran npm install and started her up:

```
DEBUG=my-application ./bin/www
```
