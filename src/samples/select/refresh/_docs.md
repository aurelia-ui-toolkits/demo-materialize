#### What's happening?

When dynamically changing the underlying array of a select element, Materialize doesn't update the select wrapper. For this to work, the select needs a refresh.

By default, the bridge observes native select subtree and refreshes the widget when there are changes.

This is useful for example when using asynchronous operations (like getting data from web services) so you can initialize the select on view load but populate it when data arrives.
