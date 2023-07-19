# Personal-Portfolio-Website-Template
This is a Jekyll bases Personal Portfolio Website Template that allows you to quickly set up a website that can store your projects, contacts, and resume.
---
## To Run:
1. Install all [Jekyll Prequisites](https://jekyllrb.com/docs/installation/)
2. Move into the template directory
3. Run: 'bundle exec jekyll serve'
4. Browse to 'http://localhost:4000'
--- 
## Customize
### Add Your Personal Information
In '_config.yml', change the default values, such as 'name' or 'university', to your custom information. Remember to add links the your social media sites as well. Changing values in the config file requires you to press 'ctrl-c' and restart the build.
### Add New Project
To add a new project, simply add a new file with the title 'YYYY-MM-DD-name-separated-by-dashes.md' to '_posts/projects/'. The layout and permalink does not need to be changed, but it is best practice to include *all* of the following front matter:  
- layout: project
- permalink: "/projects/:title"
- title:  "A Title"
- link: "url to project"
- img: "../assets/images/projects/example.png"
- desc: "A description of the project"
- tech: "A list of the technology used in the project"

Feel free to add any additional front matter you may need. If you wish to add a project but do not want it displayed yet, add it to the '_drafts/' folder instead.
### Add Internal Naviation
To add additional internal navigation categories, make the new page in '/pages' and then simply go to '_includes/navigation.html' and add a list item linking to that new page. Follow the format the other navigation items use.
### Add Social Media Link
To add additional social media links first add the values to the '_config.yml' file, following the same name convention as the other social media links. Then, if you want the social media link in the header and menu, go to '_includes/social.html' and add the links there. If you only want the link on the contact page, go to 'pages/contact.md' and add it there. The two pages are separate to allow users to have custom quick access links only for the header and menu.
### Change Favicon
You can make custom favicons using a site like [favicon.io](https://favicon.io/) and adding them in the assets/images/favicon_io. You may be required to change their links in the head of the 'default.html' layout.
### Change Colors or Design
To change any colors or designs, modify 'assets/css/styles.css'. All the colors are stored at the top of the file as global variables and can be quickly modified
---
## Deploy Site
The site can easily be deployed on [Github Pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll) or [Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-jekyll-site/), or any other hosting service which allows for jekyll and static site generation. Deploy the build using the build command 'bundle exec jekyll build'.
## Version
v1.2.0
---
Made by Opkar Ghadu 2023
www.opkarghadu.com
