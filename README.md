### Deploy the website

Once your changes are merged into master, you need to install https://www.zerotier.com/download/
Please ignore steps 1, 2 and 3, just download and install Zerotier. Once it is installed, do the following:

    sudo zerotier-cli join 8286ac0e47540d81

Now use the following to display your node address:

    sudo zerotier-cli status

You should see something like:

    200 info 3faa1bf33d 1.4.6 ONLINE

Once you have it running, send your node address (the hex after 200 info) to @dharrigan.
