---
layout: page
title: Paginating API responses with lastId
---

When making requests to the SimplyRETS API, you can receive a maximum
of 500 listings _per page_. There are often cases in which you'll want
to **get the next page of data for the same search query**; for
example, if a user clicks "Next" or if you are replicating the
dataset.

There are two ways to go about this: [Using limit and
offset](https://simplyrets.com/blog/api-pagination.html), or using
**lastId** pagination This help topic will introduce you to lastId
pagination and how to integrate it with your API requests. **lastId
pagination is particularly useful if you are replicating the
dataset**.

- [A complete example](#a-complete-example)
- [Using the `Link` header](#using-the-link-header)

## A complete example

- #### 1. Make your first query with `lastId=0`

  By making your API query with the `lastId=0` parameter, the API
  knows to _sort the listings in the response_ by `.mlsId`. For
  example:

  ```sh
  curl -u simplyrets:simplyrets ‘https://api.simplyrets.com/properties?limit=10&lastId=0’
  ```

  _(Note: you can use any limit up to 500)_

- #### 2. Get the `.mlsId` of the last listing in the response

  Within your code, save the `.mlsId` field from the **last listing in
  the response**. This ID will be used to get the _next_ page of
  listings. In other words, you're telling the API the _last id_ you got
  back, so that the API can give you the next page.

  Using the response from the query in step 1, the last `.mlsId` is 1005173:

  ```json
  [
    { ... },
    { ... },
    { ... },
    { ... },
    { ... },
    { ... },
    { ... },
    { ... },
    { ... },
    { mlsId: 1005173, ...rest }
  ]
  ```

- #### 3. Make the next query with `lastId={lastMlsId}`

  Once you've processed the data from the first request and are ready to
  fetch more listings, use the `.mlsId` you saved from step 2 and use it
  in the `lastId` parameter for the next request.

  ```sh
  curl -u simplyrets:simplyrets ‘https://api.simplyrets.com/properties?limit=10&lastId=1005173’
  ```

And that's it! Now you're successfully paginating through results from
the API.

## Using the `Link` header

If all of this sounds like a lot of work to keep track of, you're in
luck. The SimplyRETS API **calculates these pagination links for you
beforehand** and returns in the response headers. For example, here
are the headers from the same example as above:

```sh
curl -I -u simplyrets:simplyrets 'https://api.simplyrets.com/properties?limit=10&lastId=0'

Link: <https://api.simplyrets.com/properties?lastId=1005173&limit=10>; rel="next"
X-SimplyRETS-Media-Type: vnd.simplyrets-v0.1
X-Total-Count: 65
```

Note that the `Link` header contains a pre-built link to query for the
next page of data, and marks it with a `rel="next"` tag. If you are
multiple pages in to a query, there will additionally be a
`rel="prev"` link to go back to the previous page of results.
