## Banner component

The button component can be included within other components like this:

```
\{{> @banner }}
```

This template for this component looks like this:

```
{{view '@banner'}}
```

and it therefore expects a set of data to render it that is in the following format:

```
{{context '@banner'}}

```
