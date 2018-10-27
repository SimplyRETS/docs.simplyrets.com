---
layout: page
title: SimplyRETS API quick start from the CLI
---

The SimplyRETS API is designed for simplicity:

```
$ curl -u simplyrets:simplyrets 'https://api.simplyrets.com/properties'
[
    {
        "address": {
            "city": "Katy",
            "country": "HARRIS",
            "full": "26719 Outback Dr",
            "postalCode": "77493",
            "streetName": "Outback Dr",
            "streetNumber": 26719
        },
...
```

Narrow your results by using the search interface:

```
$ curl -u simplyrets:simplyrets 'https://api.simplyrets.com/properties?q=12402%20Dakar'
```

Access a single property listing by the MLS identifier:

```
$ curl -u simplyrets:simplyrets 'https://api.simplyrets.com/properties/24045334'
```

Locate the latitude and longitude of a property listing in the
response body:

```
...
  "geo": {
    ...
    "lat": 29.92939,
    "lng": -95.704799,
    ...
  },
```

Using the latitude and longitude, your app can generate a geospatial
query for listings. Below is a sample query which will filter property
listings contained within the polygon.

```
$ curl -u simplyrets:simplyrets -X GET \
        --data points='29.723837146389066,-95.69778442382812' \
        --data points='29.938275329718987,-95.69778442382812' \
        --data points='29.938275329718987,-95.32974243164061' \
        --data points='29.723837146389066,-95.32974243164061' \
        https://api.simplyrets.com/properties
```

Paste this one-liner into your terminal:

```
$ curl -u simplyrets:simplyrets 'https://api.simplyrets.com/properties?points=29.723837146389066,-95.69778442382812&points=29.938275329718987,-95.69778442382812&points=29.938275329718987,-95.32974243164061&points=29.723837146389066,-95.32974243164061'
```

Check out the tutorial for [creating a map-based real estate search](https://simplyrets.com/blog/interactive-map-search.html) and
see the [live demo application](http://simplyrets.github.io/examples/interactive-map-search/).

Visit our [interactive documentation]({{ "/api/index.html" | relative_url }})
to work with the SimplyRETS API in real time.

[Sign up](https://simplyrets.com/signup) and get started with
SimplyRETS today!
