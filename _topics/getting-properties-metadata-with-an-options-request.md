---
layout: page
title: Getting /properties metadata with an OPTIONS request
---

In many cases it can be useful to **get metadata about the properties
available in a feed**. For example, a list of cities or neighborhoods
found in the feed can be used to build a search form autocomplete
component, or to generate listing pages for hyper-local areas.

In SimplyRETS, this metadata is available by making an `OPTIONS`
request to the [`/properties` endpoint](/api/index.html#/Listings/get_properties).
The API will include this higher-level information about the feed:

-   `status`: A list of _statuses_ found in the feed.
-   `cities`: A list of _cities_ found in the feed.
-   `counties`: A list of _counties_ found in the feed.
-   `features`: A list of _interiorFeatures_ found in the feed.
-   `neighborhoods`: A list of _neighborhoods_ found in the feed.
-   `areaMinor`: A list of _MLS area minors_ found in the feed.
-   `type`: A list of _property types_ found in the feed.
-   `lastUpdate`: Timestamp of the last successful sync.
-   `expires`: Expiration date of this metadata.

The best practice for using this metadata is to **store the
information in your database**, and refresh it at least once a
day. The `OPTIONS` request is not intended to be used on page-load
like `GET /properties`, especially with large feeds.

## Example request and response

Here is what making an `OPTIONS` request looks like with the program `curl`:

**Example request**

```sh
$ curl -XOPTIONS -u key:secret "https://api.simplyrets.com/properties"
```

This makes an `OPTIONS` request to the `/properties` endpoint. The
library you're using the make API requests from your program will have
a way to set the HTTP.

_Note: If your app has multiple feeds, you need use the `vendor` parameter._

**Example response**

Here is an example of what the API response will contain:

```json
{
  "expires": "2020-01-02T00:00:00.00000Z",
  "lastUpdate": "2020-01-01T00:00:00.00000Z",
  "fields": {
    "status": [
      "Active",
      "Pending",
      "Closed"
    ],
    "cities": [
      "Conroe",
      "Friendswood",
      "Houston",
      "Leage City"
    ],
    "counties": [
      "Harris",
      "Montgomery"
    ],
    "features": [
      "Air Filter System",
      "Ethernet Wiring",
      "Intercom"
    ],
    "neighborhoods": [
      "Downtown",
      "Midtown",
      "Uptown"
    ],
    "areaMinor": [
      "Downtown-1",
      "Downtown-2",
      "Midtown-1",
      "Uptown-1"
    ],
    "type": [
      "Commercial",
      "Condominium",
      "Land",
      "Residential"
    ]
}
```

Now, [try it out on your own feed](https://simplyrets.com/account#/credentials)!
As always, if you have any questions or issues,
[send us a message](https://simplyrets.com/#home-contact) and we'll be
happy to help.
