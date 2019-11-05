---
layout: page
title: Fields and features for IDX compliance
---

There are several useful fields and features available in the
SimplyRETS API to assist you in meeting any IDX display requirements
from your MLS. For example, in many areas it's required to show the
timestamp of when the data was last updated in a disclaimer.

**Sections**
- [Last update timestamp](#last-update-timestamp)
- [IDX display requirements](#idx-display-requirements)
  - [The `idx` query parameter](#the-idx-query-parameter)
  - [IDX fields in the API response](#idx-fields-in-the-api-response)
- [Agent/office contact information](#agentoffice-contact-information)

### Last update timestamp
The timestamp of the last listing refresh can be found in
one of two spots:

1. The `X-SimplyRETS-Last-Update` header in an API response.

   ```
   $ curl -I simplyrets:simplyrets 'https://api.simplyrets.com/properties'

   ...
   X-SimplyRETS-Last-Update: <timestamp>
   ```

2. The API response from making an `OPTIONS` request to the API root.

   ```
   $ curl -XOPTIONS simplyrets:simplyrets 'https://api.simplyrets.com/properties'

   {
     ...
     "lastUpdate": <timestamp>
   }
   ```

### IDX display requirements
In many MLS's, sellers are able to "opt-out" of displaying a listing
or its address on the internet. The details of **a listing's display
requirements are provided in the API response**, in-line with the rest
of the property data. The SimplyRETS API also
provides [an `idx` query parameter](/api/index.html#!/default/get_properties)
to control exactly what requirements you query. Here's how these
features work:

#### The `idx` query parameter
The API supports [an `idx` query parameter](/api/index.html#!/default/get_properties)
that can be used to specify exactly which requirements the listings
you get back are meeting or ignoring. These are the values you can use
to query, along with their result:

| Query | `internetAddressDisplay` | `internetEntireListingDisplay` |
|-------|--------------------------|--------------------------------|
| `idx=null` (default) | must be `true` | must be `true` |
| `idx=listing` | ignored | must be `true` |
| `idx=address` | must be `true` | ignored |
| `idx=ignore` | ignored | ignored |

#### IDX fields in the API response
Each listing in the API response has two fields you can use to
determine the display requirements: `internetAddressDisplay` and
`internetEntireListingDisplay`. Both of these are top-level boolean
fields in the API response

```json
{
  ...
  "internetAddressDisplay": true,
  "internetEntireListingDisplay": true,
  ...
}
```

Note that a value of `null` is considered the same as `true`, and a
listing is only opted-out if the value is explicitly `false`.

### Agent/office contact information
In some cases it may be required that you show the contact information
for the listing agent and/or listing office. This data is provided in
the API response with every listing, if available in the RETS feed:

**Agent information**

```json
{
  ...
  "agent": {
    "lastName": "string",
    "contact": {
      "email": "string",
      "office": "string",
      "cell": "string"
    },
    "firstName": "string",
    "id": "string"
  },
  ...
}
```

**Office information**

```json
{
  ...
  "office": {
    "contact": {
      "email": "string",
      "office": "string",
      "cell": "string"
    },
    "name": "string",
    "servingName": "string",
    "brokerid": "string"
  },
  ...
}
```

Read more about these fields (and others) in the
[interactive API docs](/api/index.html).
