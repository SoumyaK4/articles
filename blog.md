---
layout: default
title: Blog Posts
---

<h1>Blog Posts</h1>

<div class="post-list">
  {% for post in site.posts %}
    <div class="post">
      <div class="post-face">
        <h2 class="post-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
        <p class="post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
        {% if post.img %}
          <img src="{{ post.img }}" alt="{{ post.title }}" class="post-image">
        {% endif %}
      </div>
      <p class="post-description">{{ post.description }}</p>
    </div>
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

  .post-face {
    display: flex;
    align-items: center;
  }

  .post-image {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin-right: 10px;
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
    float: right;
    width: 60%;
  }
</style>
