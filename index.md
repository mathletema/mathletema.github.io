---
layout: default
title: Home
---

# About me
Hello. My name is Ishank Agrawal. I am an American currently living in India for the last 4 years.
My main interests are maths, physics, sketching potraits, running and playing basketball with my friends.
You can learn more about me [here](about.html). Below you can view my awards and my sketches. Thank you for visiting!

# Awards

APMO 2020 Bronze  
IMOTC awardee - 2019, 2020  
Sharygin Honorary Mention   
University of Waterloo Sir Issac Newton - top 20   
CMI Tesselate STEMS Physics Qualifier   
I.S.I. Limit Qualifier   
USA Physics Camp Qualifier - 2021   
USAPhO Qualifier - 2020, 2021   
USAMO Qualifier - 2021   
OMO top 50 - with team

# Sketches

Click to zoom in

<div class="box">
    {% for item in site.data.portraits %}
    <a href="assets/images/portraits/{{ item.src }}">
        <img class="sketches" src="assets/images/portraits/{{ item.src }}"
        alt="{{ item.alt }}" title="{{ item.title }}" height="250px">
    </a>
    {% endfor %}
</div>
