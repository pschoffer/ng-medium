# NgMedium

[![npm version](https://badge.fury.io/js/ng-medium.svg)](https://badge.fury.io/js/ng-medium)

Angular component to show articles form Medium blog feed. This is useful in case you would like to embed your stories in your website.

## Installation:

```bash
npm install ng-medium
```

## Use Example:

Add the declaration to your @NgModule:

```typescript
import {NgMediumModule} from 'ng-medium';

...

@NgModule({
  imports: [
    NgMediumModule
  ]
})
```

Use directly inside your HTML templates by adding the tag 'autosize' to any textarea.

```html
<ng-medium-feed
  feedUrl="https://medium.com/feed/tag/typescript"
></ng-medium-feed>
```

## Styling

The whole purpose of this project is to get the feed look native in your website. This means there needs to be a way to provide whatever styling you want. For this purpose there is `styles` input on the component.

The input accepts an object of [NgMediumStyles](https://github.com/pschoffer/ng-medium/blob/master/projects/ng-medium/src/lib/models/styles.ts).

```html
<ng-medium-feed
  feedUrl="https://medium.com/feed/tag/typescript"
  styles="{'feedContainer': {'background': 'red'}}"
>
</ng-medium-feed>
```

The more complex example can be seen in [demo](https://github.com/pschoffer/ng-medium/blob/f75cfe38e2dbee3aba969ae1b5141b4f25d1c07a/projects/demo/src/app/app.component.ts#L13)

### Default Values

Please note that all the **not**-provided sections get a default styling. That lives in [NgMediumFeedComponent](https://github.com/pschoffer/ng-medium/blob/f75cfe38e2dbee3aba969ae1b5141b4f25d1c07a/projects/ng-medium/src/lib/components/ng-medium-feed.component.ts#L42)

## Contributing

All the help is welcome!

## Build

To build library run in root folder:

```bash
ng build ng-medium
```

After that `ng serve demo` will use the version you just build.

## Package

The library is being packaged and sent to npm. Following steps are needed:

```bash
npm run-script packLib
cd dist/ng-medium
npm login # unless you haven't done that
npm publish
```
