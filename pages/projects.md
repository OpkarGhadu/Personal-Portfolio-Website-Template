---
layout: default
title: "Projects"
permalink: "/projects/"
---
<div id="main-projects">
    <h2 id="projects-list-title">Projects</h2>
    <div id="projects-container">
        <ul id="projects-list">
            {% for post in site.posts%}
                {% if post.path contains "projects"%}
                <li>
                <div class="project-item">
                    <div class="project-item-header">
                        <h3 class="project-item-title">
                            <a href="{{ post.url }}">
                                {{ post.title }}
                            </a>
                        </h3>
                        <a 
                            href="{{ post.link }}" 
                            class="social-icons menu-icon">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                    <div class="project-item-desc">
                        <p>{{post.desc}}</p>
                    </div>
                </div>
                </li>
                {% endif %}
            {% endfor %}
        </ul>
    </div>
</div>
