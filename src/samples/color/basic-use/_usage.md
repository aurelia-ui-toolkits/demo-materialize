##### Using `md-colors`

Use `md-colors` if you wish to support dynamic color themes in your app. This element embeds full Materialize styles which are built directly from Materialize SASS with colors bound to your values. So, there is no need to require `materialize.css` anywhere in your project.

Since the catalog app needs to be the primary source for theme changes (to not be overwritten by this sample),
we cannot display the relevant code in `app.html`.

`md-colors` is used like this:

```html
<md-colors primary-color="#ee6e73" secondary-color="#26a69a" error-color="#f44336" success-color="#4caf50" link-color="#039be5"></md-colors>
```

Of course the three color attributes can be bound to a view-model variable and thus can be changed dynamically
by your application.

View:

```html
<md-colors primary-color.bind="primaryColor" secondary-color.bind="secondaryColor" error-color.bind="errorColor" success-color.bind="successColor" link-color.bind="linkColor"></md-colors>
```

View model:

```javascript
export class MyApp() {
  primaryColor = '#ee6e73';
  secondaryColor = '#26a69a';
  errorColor = '#f44336';
  successColor = '#4caf50';
  linkColor = '#039be5';
}
```

Hex values are definitely supported while rgb(a) values should be possible, too.
But named colors aren't since we darken/lighten some colors using their values.

##### Colors Service

`md-colors` attributes are also bound to the `MdColorsService` properties. You can inject this service to read or change current colors.
