# How I built this website: the plan

It's time, I want my own website. To write about the things I am learning and also because I want to have my own project online. As a developer, you would say, that is as easily said as it is done. Now imagine an architect designing their own home. No creative limits, the only constraint being how much time you are willing to spend, really.

That brings me to how I actually got this website 'live': By setting myself some time limits. I gave myself four half days, in which I wanted a very rough version online. The polishing will follow.

When I started building this blog, I had a couple things in mind, my requirements:

1. the website and especially blog posts load extremely fast
2. blog posts can be more interactive than simple markdown
3. code snippets in my blog posts have beautiful syntax highlighting
4. this project should teach me new concepts and libraries
5. keeping it simple, because otherwise nothing will get done.

## Contents
TOC

---

// @TODO this could be a little component
This blog is the first in a series about how I built this blog.

1. Making a plan (this blog)
2. Getting a prototype online with Next.js and TailwindCSS
3. Setting up the infrastructure in Terraform
4. Setting up a CI/CD pipeline in Github actions
5. Adding search functionality to a Static Next.js blog

---

## Getting a first prototype online

The first step, for any real project, is to build a minimal example and get it online. From there on, you can start making things look nice. To get started building, I made the following choices for my requirements. First of all, I will be using React as my frontend framework of choice.

- blog post setting up the entire blog: https://joyofcode.xyz/create-a-markdown-blog

### The website loads extremely fast

Nobody likes waiting for websites to load.

This, to me, is either a server-side rendered (SSR) page that comes from some high-end server with caching on the server, or uses static site generation (SSG). Both will need a Content Delivery Network (CDN), to cache requested data close to the user to speed up the experience.

My choices:

- Next.js (React) for Static Site Generation (and automatic code splitting)
- AWS Cloudfront as Content Delivery Network
- Using an AWS S3 bucket to host my website files

### Blog posts can be more interactive than simple markdown

Because I want to be able to use React components in my blog posts, while staying focused on the content I am writing, I will use `MDX`. Markdown is a very simple way to get consistent, structured styling. And `MDX` is Markdown that supports JSX, allowing me to embed React components.

### Code snippets in my blogs have beautiful syntax highlighting

Long story short, prism and [shiki](https://github.com/shikijs/shiki) are the standard for syntax highlighting. Prism seems to be the most popular, Shiki the most beautiful. Shiki is used on the VSCode website, in the TypeScript documentation and - guess what - on this website. It supports different themes (so I could later introduce a dark mode to my website) and works as a plugin/theme for `remark` via the Next.js `MDX` plugin.

- code example of building an MDX post: https://github.com/vercel/next.js/blob/canary/examples/blog-starter/pages/posts/%5Bslug%5D.tsx
- Next.js docs: setting up shared layout [slug].js: https://nextjs.org/blog/markdown#sharing-layout
- Next.js example: setting up front matter
- codesandbox of Shiki & Next.js

### This project should teach me new concepts and libraries

I am already learning a lot as I am choosing the technologies for this blog. From the things I have mentioned so far, these things are new for me:

- Next.js
- MDX & code syntax highlighting

Other new things are:

- deploying and setting up CI/CD with Github actions
- setting up multiple https subdomains for my AWS account (more on that below)
- building something with TailwindCSS again. Not exactly new, but time to polish up those skills

### Keeping it simple, because otherwise nothing will get done

This leads me to the definition of a minimal prototype and the first phases of the project.

For clarity, I see the following parts of the project and stages of maturity:

- website, infrastructure, CI/CD
- prototyped, rough, minimal, acceptable, nice (and then, the future)

The first steps are:

1. Prototyped website, no infrastructure, no CI/CD

- a Next.js site, static site generation (SSG)
- the website renders one post with syntax highlighting (MDX, Shiki)
- hosted in an S3 bucket, uploading using the AWS CLI

2. **Rough website, prototyped infrastructure, prototyped CI/CD**

- website available via http on m-rc.nl
- adding Github Actions to deploy to S3 on push to main
- adding styling framework to the website: Tailwind CSS
- adding the homepage, header, footer and main part of the webpage

3. Rough website, acceptable infrastructure, prototyped CI/CD

- implement a nice font for the website
- add some content to the homepage, one of those round pictures of my face
- introduce Infrastructure as Code, add a CDN (and https)

4. Minimal website, acceptable infrastructure, minimal CI/CD

- pipeline: npm run lint, npm run check-types
- husky githook: same
- list of 3 blog posts (I just have to dig up some blog I wrote)
- create a wrapper for blog posts with a 'back to overview' button

5. Minimal website, acceptable infrastructure, acceptable CI/CD

- adding some tests with react-testing-library!
- protecting the main branch, working in feature branches
- adding a linter for commit messages
- dark mode
- updated home and about page

6. add first project

- swapi.m-rc.nl
- add infrastructure setup for this
-

## The look

One thing I really enjoy is when things are highly functional, simple and look good. I am not a designer though, so I will have to keep the design really simple. I will even start without images for my blog posts.

Some highly functional example blogs:

- https://overreacted.io/
- https://swizec.com/blog/
- https://www.robinwieruch.de/blog/

That means for the first version of this blog: no search functionality, no fancy animations, no tags for posts and no thumbnail images for posts. Sounds boring? Good.

## Mockup

## Code quality checks
To enforce good practices while building this website, I will set up the following quality checks:
- ESLint for code style
- TypeScript for type checks
- Prettier for consistent formatting
- `react-testing-library` for automated code testing
- git hooks:
  - husky to run the above checks before commits (as long as this is fast enough)
  - conventional commit: keep commit messages clean

End-to-end testing is not relevant yet, once that is the case (I do not expect this), I would like to experiment with `playwright` or `cypress`.

## Technologies to explore

- react-testing-library & mock service worker
- Next.js, using static site rendering with some client-side rendering where necessary
- yarn

## Architecture

First of all, I do not want to run a server for my website. I want my website served as static assets from a Content Delivery Network (CDN) from some simple storage solution. If I need an API at some point, I'll introduce some serverless functions. It keeps my cost low, is highly scalable (although I do not expect to scale) and I know I will learn some interesting things about AWS from it.

For a detailed breakdown of my approach, read about the [technical details]() in my infrastructure post.

## Inspiration for this blog

When I started setting up this blog, I looked at blogs I really like to read and blogs I like the experience of. There are a couple blogs I keep coming back to, actually for their content, but most of them happen to have a really nice 'feel' to them:

-

## Functionality

Deciding which functionalites I want is where this gets dangerous.. Like I
Now:

- a first blog post online

Later

- a 'playground' where I can host the different things I build, including some information about the builds.
  - m-rc.nl/playground --> list of projects + story (kind of a separate blog for projects), where every project is deployed as project-name.m-rc.nl
  - ideally and eventually, some of these projects can be behind a login wall
  - first project: unit-integration tested form
- search functionality for static files
- dark mode
- building out a serverless API
- screenshot comparison in CI/CD

## Design

Background color
Font
Syntax highlighting
Favicon

## Resources

- rwieruch
- https://kentcdodds.com/blog/how-i-built-a-modern-website-in-2021
- Jack Herrington on Youtube: Next.js SSR, SSG, CSR: https://www.youtube.com/watch?v=kdXKz1UWc3E
