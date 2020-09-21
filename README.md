### Deploying the Website

Once your changes are merged into master, you need to install
[Zerotier](https://www.zerotier.com/download/). Please ignore steps 1, 2 and
3 as the network `reclojure` has already been created. Simply download and
install Zerotier. Once it has been installed, do the following:

    sudo zerotier-cli join 8286ac0e47540d81

Now use the following to display your unique node address:

    sudo zerotier-cli status

You should see something like this echo back:

    200 info 3faa1bf33d 1.4.6 ONLINE

Once you have it running, send your node address to @dharrigan. The node
address is the hex string after the 200 info, i.e., in the example above it is
**3faa1bf33d**.

Once @dharrigan is receives the node address, your machine will be assigned a
new private IP address (along with all the other IPs you may have). This IP
address is part of the `reclojure` network that contains the running Nginx
instance that is serving up the website. To check that everything is ok, you
can try:

`ping 192.168.195.4`

If that responds, you can then try the following:

`rsync rsync://192.168.195.4/`

You should see `reclojure reClojure Website`. To upload a new version of the
website, go to the **root folder of the reclojure.org repo** and issue the
following:

`rsync -vahP --delete --delete-excluded --exclude '.git' --exclude 'README.md' . rsync://192.168.195.4/reclojure/`

### Notes

* All rsync activity is logged.

* Zerotier is useful for lots of things, you can create your own private
  networks (following steps 1, 2 and 3 that were skipped for this exercise).
  Install Zerotier on other machines, join your own networks and have your own
  VPN running between any authorized machine in the world.

* If you can't ping 192.168.195.4, please ensure your network card has a
  192.168.195.0/24 address. If it doesn't reach out to @dharrigan for help.
