# reclojure

## Secrets management

For local running the app, please ensure that you have a file called
`resources/secrets.edn` present. Please ask a fellow team member to share this
with you.

For deployment, the production version of the above file will be encrypted and
commited at `ops/secrets.edn`. Without this you can't deploy.

## Development

Make sure you have done `npm install` once.

`cider-jack-in-clj&cljs` should get you up and running.

Then run `(go)` to start the http server at http://localhost:7070

## Build

To build the static version of the site run

```
bin/dev build
```

To deploy this static version run (atm deployed to GCP)

```
bin/dev deploy
```
