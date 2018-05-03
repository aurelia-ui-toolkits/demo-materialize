##### Using `md-colors`

Since the catalog app needs to be the primary source for theme changes (to not be overwritten by this sample),
we cannot display the relevant code in `app.html`.

`md-colors` is used like this:

```html
<md-colors primary-color="#ee6e73" accent-color="#009688" error-color="#FF0000" success-color="green"></md-colors>
```

Of course the three color attributes can be bound to a view-model variable and thus can be changed dynamically
by your application.

View:

```html
<md-colors primary-color.bind="primaryColor" accent-color.bind="accentColor" error-color="errorColor" success-color="successColor"></md-colors>
```

View model:

```javascript
export class MyApp() {
  primaryColor = '#ee6e73';
  accentColor = '#009688';
  errorColor = '#FF0000';
  successColor = 'green';
}
```

Hex values are definitely supported while rgb(a) values should be possible, too.
But named colors aren't since we darken/lighten some colors using their values.
