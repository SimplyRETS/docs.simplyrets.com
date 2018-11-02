---
layout: page
title: Fields and features for IDX compliance
---

There are several useful fields and features available in the
SimplyRETS API to assist you in meeting any IDX display requirements
from your MLS. For example, in many areas it's required to show the
timestamp of when the data was last updated in a disclaimer.

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

### Agent/office contact information
In some cases it may be required that you show the contact information
for the listing agent and/or listing office. This data is provided in
the API response with every listing:

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
