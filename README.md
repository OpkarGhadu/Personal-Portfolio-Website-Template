# Personal-Portfolio-Website-Template  
This is a Jekyll based Personal Portfolio Website Template that allows you to quickly set up a website that can store your projects, contacts, and resume.  
This website was made using HTML, CSS, and Javascript and is generated as a static site using Jekyll (Ruby). Jekyll allows you to build the website as components without having to manually join all the pieces together. This reduces development time and the chance of error by allowing you to only have to make changes in one location. The final generated site can then be hosted on Github Pages or Cloudflare Pages.

## To Run: :runner:

1. Install all [Jekyll Prequisites](https://jekyllrb.com/docs/installation/)
2. Clone Repo and move into the template directory
3. Run: 'bundle exec jekyll serve'
4. Browse to 'http://localhost:4000'
--- 
## Customize :pencil2:
### Add Your Personal Information

In '_config.yml', change the default values, such as 'name' or 'university', to your custom information. Remember to add links the your social media sites as well. Changing values in the config file requires you to press 'ctrl-c' and restart the build if it is running.
### Add New Project

To add a new project, simply add a new file with the title 'YYYY-MM-DD-name-separated-by-dashes.md' to '_posts/projects/'. The layout and permalink does not need to be changed, but it is best practice to include **all** of the following front matter:  
- layout: project
- permalink: "/projects/:title"
- title:  "A Title"
- link: "url to project"
- img: "../assets/images/projects/example.png"
- desc: "A description of the project"
- tech: "A list of the technology used in the project"

Feel free to add any additional front matter you may need. If you wish to add a project but do not want it displayed yet, add it to the '_drafts/' folder instead of the posts one.
### Add Internal Naviation
To add additional internal navigation categories, make the new page in '/pages' and then simply go to '_includes/navigation.html' and add a list item linking to that new page. Follow the format the other navigation items use.
### Add Social Media Link
To add additional social media links first add the values to the '_config.yml' file, following the same naming convention as the other social media links. Then, if you want the social media link as quick access links in the header and menu, go to '_includes/social.html' and add the links there. If you only want the link on the contact page, go to 'pages/contact.md' and add it there. The two pages are separate to allow users to customize which links appear on the contact page and which links appear in the header and mobile menu.
### Change Favicon
You can make and download custom favicons (the small logo in browser tab) using a website like [favicon.io](https://favicon.io/) and adding them in the assets/images/favicon_io. You may be required to change their links in the head of the 'default.html' layout.
### Change Colors or Design  
To change any colors or designs, modify 'assets/css/styles.css' as you see fit. All the colors are stored at the top of the css file as global variables and can be quickly modified.
### Change Images
Any images of the site owner (for main and contact pages) should be put in 'assets/images/portraits', while all the images for the individual projects(if you wish to use images for them) should be in 'assets/images/projects'.
## Deploy Site :rocket:
The site can easily be deployed on [Github Pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll) or [Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-jekyll-site/), or any other hosting service which allows for Jekyll and static site generation (SSG).  
Deploy the build using the build command **'bundle exec jekyll build'**.
## Version :monkey:
v1.2.0\
Made by Opkar Ghadu 2023\
www.opkarghadu.com