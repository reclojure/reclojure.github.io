## Build process

A GitHub action builds and deploys the production website whenever there is a
merge or pull to main. When that happens, a simple Makefile copies some stuff
from previous years at the old_site directory (previous websites for 2019 and
2020) and now the 2021 directory to the build target _site.

## Archiving old versions of the site

In the org.reclojure.routes namespace, we deploy the current years pages
directly to the root, but internal pages to a year labeled directory
/2021/speaker/, now /2022/speaker. So in order to archive last year:

- I have copied the last deployed files from GitHub (as briefly discussed here
  https://discord.com/channels/762582934771073034/874688451822370836/996670282318237757)
- Moved it to a directory 2021 at the root of the project
- Now we have a /2021/index.html but also a /2021/2021/speaker/*, so I move the
  contents of the internal 2021 up one level to get /2021/speaker/*
- Added a line to the Makefile to copy that directory to _site on build as well
- Changed the route for the new year at org.reclojure.routes to 2022, when
  reitit-jaatya freezes the routes this time, it goes into 2022

So now if we link to /2021/ it loads the last version of the previous year, in
accordance to what we had before, and the internal links don't break since they
refer to the same hierarchy. Very crude, but that's how we ended up rolling last
year and I just used the same method. There is definitely room for more
automation or improvements.  

And cleanup as well, as now there are multiple copies of the internal pages
inside the first 2021 that don't get used as they are already part of old_site,
if I understood things correctly.
