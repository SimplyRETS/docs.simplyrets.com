<h1 class="text-muted">SimplyRETS docs and examples</h1>
_A RESTful API and WordPress plugin for powering your website with data from your
MLS._

<br/>
The SimplyRETS API and WordPress plugin give you a way to create real
estate apps and websites with listings from your MLS. We believe it
building tools that help _you_ focus on building your business or
product, without worrying about downloading, updating, and
normalizing the data you need.

Below are links to documentation, examples, and topics to help you get
started and up to speed quickly with the Developer API or WordPress
plugin. If you have any questions, don't hesitate
to [reach out](https://simplyrets.com/#home-contact).

<br/>

<div id="wordpress"></div>
## <i class="fab fa-wordpress-simple" style="font-size:2.5rem;vertical-align:bottom;margin-right:10px"></i> WordPress Plugin
> The SimplyRETS WordPress plugin is a plug-and-play solution to build
> a website with your MLS listings.

Visit the links below to check out the WordPress plugin user
guide, live examples, and more:

- [User guide](http://wordpress-demo.simplyrets.com/documentation)
- [Live demo site](http://wordpress-demo.simplyrets.com/)
- [WordPress.org download](https://wordpress.org/plugins/simply-rets)
- [CSS style guide]({{ "/simply-rets-client.html" | relative_url }})

**Did you know?**
The SimplyRETS WordPress plugin is fully open-sourced! You can fork
the code and make changes, or submit changes and issues to the official
repository.

- [View the code](https://github.com/SimplyRETS/simplyretswp)
- [Submit an issue or feedback](https://github.com/SimplyRETS/simplyretswp/issues/new)

_We will gladly merge your PRs and address your issues._

<br/>

<div id="api"></div>
## <i class="fas fa-code" style="font-size:2.5rem;vertical-align:bottom;margin-right:10px"></i> Developer API
> The SimplyRETS developer API makes it simple to pull listings in
> from an MLS, with support for everything you'll need to build your
> real estate app.

The Developer API has an abundance of resources, including interactive
documentation, examples, and help topics. Browse the links below:

<!-- Not sure why the below links don't work with a nested base_url -->
- [API documentation]({{ "/api/index.html" | relative_url }})
  - [`/properties`]({{ "/api/index.html#!/default/get_properties" | relative_url }})
  - [`/properties/{mlsId}`]({{ "/api/index.html#!/default/get_properties_mlsId" | relative_url }})
  - [`/openhouses`]({{ "/api/index.html#!/default/get_openhouses" | relative_url }})
  - [`/openhouses/{openHouseKey}`]({{ "/api/index.html#!/default/get_properties_openHouseKey" | relative_url }})
  - [`/agents`]({{ "/api/index.html#!/default/get_agents" | relative_url }})
  - [`/agents/{agentKey}`]({{ "/api/index.html#!/default/get_agents_agentKey" | relative_url }})
- [Live example](http://maxavenue.com/homes-for-sale/)
- [API help topics](#topics)

All of the help topics below are geared towards using the API, from
getting started, to more advanced things like pagination. If you can't
find what you need, [reach out any time](https://simplyrets.com/#home-contact).

<br/>

<div id="topics"></div>
## <i class="far fa-user" style="font-size:2.5rem;vertical-align:bottom;margin-right:10px"></i> Topics
> Browse the topics below for examples, steps to debug common issues,
> and various other articles on being successful with the SimplyRETS
> API.

<br/>

## [API examples (GitHub)](https://github.com/SimplyRETS/examples)
## [JavaScript/AJAX example](https://github.com/SimplyRETS/examples/tree/master/javascript/)
## [Listings API Tips and Tricks](https://simplyrets.com/blog/api-tips-and-tricks.html)
## [Interactive map search tutorial](https://simplyrets.com/blog/interactive-map-search.html)
## [Pagination with `limit` and `offset`](https://simplyrets.com/blog/api-pagination.html)
{% include topics.html %}
