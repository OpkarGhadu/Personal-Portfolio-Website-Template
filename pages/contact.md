---
layout: default
title: "Contact"
permalink: "/contact/"
---
<div id="main-contact">
    <div id="contact-items">
        <h2>Contact</h2>
        <br/>
        <ul>
            <li class="contact-page-list">
                <!--
                    Add mailto:example@email.com in href of email
                    to open default mail client
                -->
                <a 
                    href="#" 
                    class="social-icons menu-icon">
                    <i class="fas fa-envelope"></i>
                    <p class="contact-name">
                    <!--sse-->{{site.email}}<!--/sse-->
                    </p>
                </a>
            </li>
            <li class="contact-page-list">
                <a 
                    href="{{site.github_url}}"
                    target="_blank" 
                    rel="noreferrer noopener"
                    class="social-icons menu-icon">
                    <i class="fab fa-github"></i>
                    <p class="contact-name">Github</p>
                </a>
            </li>
            <li class="contact-page-list">
                <a 
                    href="{{site.linkedin_url}}" 
                    target="_blank" 
                    rel="noreferrer noopener"
                    class="social-icons menu-icon">
                    <i class="fab fa-linkedin-in"></i>
                    <p class="contact-name">LinkedIn</p>
                </a>
            </li>
            <li class="contact-page-list">
                <a 
                    href="{{site.youtube_url}}" 
                    class="social-icons menu-icon">
                    <i class="fab fa-youtube"></i>
                    <p class="contact-name">Youtube</p>
                </a>
            </li>
            <li class="contact-page-list">
                <a 
                    href="{{site.spotify_url}}" 
                    class="social-icons menu-icon">
                    <i class="fab fa-spotify"></i>
                    <p class="contact-name">Spotify</p>
                </a>
            </li>
            <li class="contact-page-list">
                <a 
                    href="{{site.soundcloud_url}}" 
                    class="social-icons menu-icon">
                    <i class="fab fa-soundcloud"></i>
                    <p class="contact-name">Soundcloud</p>
                </a>
            </li>
        </ul>
        <br>
        <br>
        <address>
            {{site.city}}, {{site.state}} <br/>
            {{site.country}}
        </address>
    </div>
    <div id="contact-image-container">
        <img 
            id="contact-image"
            src="../assets/images/portraits/default.jpg" 
            alt="An image of the site author"
        />
    </div>

</div>