---
layout: page
title: Versioning API requests with media types
---

The SimplyRETS API uses the `Accept` content type header to allow
clients to control which version of the API they receive. API requests
that set a specific content version will remain backwards compatible
with future updates to the response.

For this reason, we highly recommend **setting an explicit media
type** when your application reaches production. As we release new
features fixes the response body of the API may change, although we
will always aim for non-breaking changes to respect the stability of
existing application.

### Setting a media type

To always use the latest SimplyRETS content version, simply use
`application/json` in your application `Accept` header.  If you want
to pin your clients media type to a specific version, you can use the
vendor-specific SimplyRETS media type,
e.g. `application/vnd.simplyrets-v0.1+json"`.

### Viewing available media types

To view all valid content-types for making an `OPTIONS`, make a
request to the SimplyRETS API root:

```
curl -XOPTIONS -u simplyrets:simplyrets https://api.simplyrets.com/
```

The default media types used in our API responses may change in the
future. Setting a specific content version is the best way to **ensure
your application stays running years down the line**.

_Note: The SimplyRETS WordPress plugin automatically sets the `Accept`
header for the compatible SimplyRETS media types._
