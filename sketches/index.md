---
layout: default
title: Sketches
description: Sketches by Ishank Agrawal | Hi, I am Ishank Agrawal. Welcome to my website. Here you can learn all about me, my awards and you can see my sketches.
---

# My Sketches

I really enjoy sketching portraits/faces. Below are my sketches in chronological order (newest first).
Click on any of them to zoom in.

<div class="box">
    {% for item in site.data.portraits reversed %}
    <a class="sketches-link" href="/sketches/portraits/{{ item.src }}">
        <img class="sketches" src="/sketches/portraits/{{ item.src }}"
        alt="{{ item.alt }}" title="{{ item.title }}" height="250px">   
    </a>
    {% endfor %}
</div>  