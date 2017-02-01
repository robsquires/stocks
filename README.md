# Stocks app

## Assumptions

1. The APIs provided are *not* open (i.e. should not be accessed client-side)

## Running the app

1. It's tested on node `6.9`. If you're using nvm simply run `nvm use`.
2. Install the dependencies `npm install`
3. Run the unit tests `npm test`
4. Start the application `npm start`. It's set to run on http://localhost:3000


## Approach

- Components are rendered server-side using React.
- Models are implemented as Immutable-js Records. The thought here was:
  1. They are easily populated from json blobs
  2. Their ability to specify attributes provides documentation
  3. Immutable-js plays well with React

- Repositories are responsible for initiating data fetching + populating the models.
- Providers are responsible for fetching data
- JS Modules are tested with Mocha + Sinon
- React Components are tested with Mocha + Enzyme

## If I had more time...

- Implement the scenarios tagged `@todo`
- Automate the scenarios tagged `@automate`
- The StockController is in desperate need of attention:
  1. Input validation
  2. The chained repository calls should abstracted to in a service
  3. The React integration is pretty hacky
- Finish styling the UX
- Serve bootstrap CSS from a local bundle

---
**Crafted with:**

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
