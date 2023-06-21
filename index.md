---
title: Home
layout: home
---

<div class="post-list">
{% for post in site.posts %}
  <article class="post">
    <h2 class="post-title"><a href="{{ post.permalink }}">{{ post.title }}</a></h2>
    <p class="post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
    {% if post.img %}
      <img src="{{ post.img }}" style="max-height: 200px;">
    {% endif %}
    <br>
    <p class="post-description">{{ post.description }}</p>
    {% if post.external_url and post.external_url != "" %}
      <a href="{{ post.external_url }}" target="_blank">More Information</a>
    {% else %}
      <a href="{{ post.url | prepend: site.baseurl }}" target="_blank">More Information</a>
    {% endif %}
  </article>
{% endfor %}
</div>

<style>
  .post-list {
    max-width: 800px;
    margin: 0 auto;
  }

  .post {
    margin-bottom: 40px;
  }

  .post-title {
    font-size: 24px;
    margin-bottom: 5px;
  }

  .post-date {
    font-size: 16px;
    color: #888;
    margin-bottom: 10px;
  }

  .post-description {
    font-size: 18px;
  }
</style>
