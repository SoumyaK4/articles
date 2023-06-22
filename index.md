---
title: Home
layout: default
---

<div class="post-list">
{% for post in site.posts %}
  <div class="post">
    <div class="post-face">
      <h2 class="post-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
      <p class="post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
      {% if post.img %}
        <img src="{{ post.img }}" alt="{{ post.title }}" class="post-image">
      {% endif %}
      <p class="post-description">{{ post.description }}</p>
    </div>
  </div>
{% endfor %}
</div>

<style>
  .post-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }

  .post {
    margin-bottom: 0;
  }

  .post-face {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .post-image {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin-bottom: 10px;
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
    margin-bottom: 0;
  }
</style>
