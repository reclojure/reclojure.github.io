### Deploy the website

Once your changes are merged into master, you need to install https://www.zerotier.com/download/
Please ignore steps 1, 2 and 3, just download and install Zerotier. Once it is installed, do the following:

    sudo zerotier-cli join 8286ac0e47540d81

Now use the following to display your node address:

    sudo zerotier-cli status

You should see something like:

    200 info 3faa1bf33d 1.4.6 ONLINE

Once you have it running, send your node address (the hex after 200 info) to @dharrigan.

Once @dharrigan is done, your machine will be assigned a new IP (along with all the others) which is part of the network that contains the running Ngnix instance. To check that everything is ok, use:

    rsync rsync://192.168.195.4/

You should see `reclojure reClojure Website`. To upload a new version of the website, go to the root folder of the reclojure.org repo and issue the following:

    rsync -vahP --delete --delete-excluded --exclude '.git' --exclude 'README.md' . rsync://192.168.195.4/reclojure/
