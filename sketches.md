---
layout: default
title: Sketches
---

# My Sketches

I really enjoy sketching portraits/faces. Below are my sketches in chronological order.
Click on any of them to zoom in.

<div class="box">
    {% for item in site.data.portraits %}
    <a href="assets/images/portraits/{{ item.src }}">
        <img class="sketches" src="assets/images/portraits/{{ item.src }}"
        alt="{{ item.alt }}" title="{{ item.title }}" height="250px">   
    </a>
    {% endfor %}
</div>  