(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{378:function(e,t,s){"use strict";s.r(t);var a=s(12),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"openvas-vulnerability-assessment-scanner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openvas-vulnerability-assessment-scanner"}},[e._v("#")]),e._v(" OpenVAS Vulnerability Assessment Scanner")]),e._v(" "),s("TagLinks"),e._v(" "),s("p",[e._v("OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.openvas.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenVAS website"),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://github.com/greenbone/openvas",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Setup and configuration has been tested on following OS with version:")]),e._v(" "),s("ul",[s("li",[e._v("Ubuntu- 16.04, 18.04, 20.04, CentOS 8, VMware ESXi 6.7.0")]),e._v(" "),s("li",[e._v("GVM-9 (OpenVAS-9), GVM-20.08 (OpenVAS 20.8.0), Atomicorp 20.8.0 (RHEL 8, CentOS 8, Fedora 32)")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("GVM-9 (OpenVAS-9) reached end-of-life support. GVM 10 and 11 will reach end-of-life support in the end of 2020.")])]),e._v(" "),s("h2",{attrs:{id:"configuration-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[e._v("#")]),e._v(" Configuration files")]),e._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("Dependencies required to install OpenVAS 20.8.0 on Ubuntu 20.04:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("build-essential")])]),e._v(" "),s("li",[s("code",[e._v("cmake")])]),e._v(" "),s("li",[s("code",[e._v("gnutls-bin")])]),e._v(" "),s("li",[s("code",[e._v("pkg-config")])]),e._v(" "),s("li",[s("code",[e._v("glib2.0")])]),e._v(" "),s("li",[s("code",[e._v("libgnutls28-dev")])]),e._v(" "),s("li",[s("code",[e._v("libssh-dev")])]),e._v(" "),s("li",[s("code",[e._v("libssl-dev")])]),e._v(" "),s("li",[s("code",[e._v("libhiredis-dev")])]),e._v(" "),s("li",[s("code",[e._v("libxml2-dev")])]),e._v(" "),s("li",[s("code",[e._v("doxygen")])]),e._v(" "),s("li",[s("code",[e._v("libldap2-dev")])]),e._v(" "),s("li",[s("code",[e._v("libgcrypt-dev")])]),e._v(" "),s("li",[s("code",[e._v("libpcap-dev")])]),e._v(" "),s("li",[s("code",[e._v("libgpgme-dev")])]),e._v(" "),s("li",[s("code",[e._v("libradcli-dev")])]),e._v(" "),s("li",[s("code",[e._v("graphviz")])]),e._v(" "),s("li",[s("code",[e._v("bison")])]),e._v(" "),s("li",[s("code",[e._v("libksba-dev")])]),e._v(" "),s("li",[s("code",[e._v("libical-dev")])]),e._v(" "),s("li",[s("code",[e._v("libpq-dev")])]),e._v(" "),s("li",[s("code",[e._v("postgresql")])]),e._v(" "),s("li",[s("code",[e._v("postgresql-contrib")])]),e._v(" "),s("li",[s("code",[e._v("postgresql-server-dev-all")])]),e._v(" "),s("li",[s("code",[e._v("libopenvas-dev")])]),e._v(" "),s("li",[s("code",[e._v("npm")])]),e._v(" "),s("li",[s("code",[e._v("nodejs")])]),e._v(" "),s("li",[s("code",[e._v("libpthread-stubs0-dev")])]),e._v(" "),s("li",[s("code",[e._v("clang-format")])]),e._v(" "),s("li",[s("code",[e._v("libmicrohttpd-dev")])]),e._v(" "),s("li",[s("code",[e._v("yarn")])])]),e._v(" "),s("h2",{attrs:{id:"install-openvas-20-8-0-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-openvas-20-8-0-from-source"}},[e._v("#")]),e._v(" Install OpenVAS 20.8.0 from source")]),e._v(" "),s("p",[e._v("First install the dependencies for the "),s("a",{attrs:{href:"https://github.com/greenbone/gvm-libs",target:"_blank",rel:"noopener noreferrer"}},[e._v("GVM Libraries"),s("OutboundLink")],1),e._v(", OpenVAS- and GSA 20.8.0.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo apt-get install build-essential cmake gnutls-bin pkg-config glib2.0 libgnutls28-dev libssh-dev libssl-dev libhiredis-dev libxml2-dev doxygen libldap2-dev libgcrypt-dev libpcap-dev libgpgme-dev libradcli-dev graphviz bison libksba-dev libical-dev libpq-dev postgresql postgresql-contrib postgresql-server-dev-all libopenvas-dev libmicrohttpd-dev npm nodejs\n")])])]),s("p",[e._v("Continue to install yarn using npm with the specified installation path.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo npm install -g yarn --prefix /usr/\n")])])]),s("p",[e._v("Download and build the "),s("a",{attrs:{href:"https://github.com/greenbone/gvm-libs/releases/tag/v20.8.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("GVM Libraries"),s("OutboundLink")],1),e._v(" version 20.8.0.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ wget https://github.com/greenbone/gvm-libs/archive/v20.8.0.tar.gz\nserver@ubuntu:~$ tar -zxvf gvm-libs-20.8.0.tar.gz\nserver@ubuntu:~$ cd gvm-libs-20.8.0/\nserver@ubuntu:~$ mkdir build\nserver@ubuntu:~$ cd build\nserver@ubuntu:~$ cmake ..\nserver@ubuntu:~$ make\nserver@ubuntu:~$ sudo make install\n")])])]),s("p",[e._v("Next download and install the Greenbone Vulnerability Manager.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ https://github.com/greenbone/gvmd/archive/v20.8.0.tar.gz\nserver@ubuntu:~$ tar -zxvf v20.8.0.tar.gz\nserver@ubuntu:~$ mkdir build\nserver@ubuntu:~$ cd build\nserver@ubuntu:~$ cmake ..\nserver@ubuntu:~$ make\nserver@ubuntu:~$ sudo make install\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ wget https://github.com/greenbone/openvas/archive/v20.8.0.tar.gz\nserver@ubuntu:~$ tar -zxvf v20.8.0.tar.gz\nserver@ubuntu:~$ cd openvas-20.8.0/\nserver@ubuntu:~$ mkdir build\nserver@ubuntu:~$ cd build\nserver@ubuntu:~$ cmake ..\nserver@ubuntu:~$ make\nserver@ubuntu:~$ sudo make install\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ https://github.com/greenbone/gsa/archive/v20.8.0.tar.gz\nserver@ubuntu:~$ tar -zxvf v20.8.0.tar.gz\nserver@ubuntu:~$ cd gsa-20.8.0/\nserver@ubuntu:~$ mkdir build\nserver@ubuntu:~$ cd build\nserver@ubuntu:~$ cmake ..\nserver@ubuntu:~$ make\nserver@ubuntu:~$ sudo make install\n")])])]),s("h2",{attrs:{id:"configure-postgresql-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-postgresql-database"}},[e._v("#")]),e._v(" Configure PostgreSQL database")]),e._v(" "),s("p",[e._v("For additional information see reference greenbone/gvmd "),s("a",{attrs:{href:"https://github.com/greenbone/gvmd/blob/master/INSTALL.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("INSTALL.md"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("First make sure that the required dependencies been installed (see "),s("a",{attrs:{href:"#Prerequisites"}},[e._v("Prerequisites")]),e._v("). Proceed to create a Postgres user and database.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo -u postgres bash\ncreateuser -DRS libellux\ncreatedb -O libellux gvmd\n")])])]),s("p",[e._v("Setup correct permissions.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo -u postgres bash\npsql gvmd\ncreate role dba with superuser noinherit;\ngrant dba to mattm;\n")])])]),s("p",[e._v("Create database extensions.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('server@ubuntu:~$ sudo -u postgres bash\npsql gvmd\ncreate extension "uuid-ossp";\ncreate extension "pgcrypto";\n')])])]),s("h2",{attrs:{id:"firewall-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firewall-settings"}},[e._v("#")]),e._v(" Firewall settings")]),e._v(" "),s("p",[e._v("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),s("a",{attrs:{href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("UFW Settings")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo ufw default deny incoming\nserver@ubuntu:~$ sudo ufw default allow outgoing\nserver@ubuntu:~$ sudo ufw allow 22\nserver@ubuntu:~$ sudo ufw enable\nCommand may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup\n")])])])]),e._v(" "),s("p",[e._v("If port 443 or 80 is already used, as in this example, update the UFW rules and allow the fallback port 9392.")]),e._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('server@ubuntu:~$ sudo ufw allow 9392 comment "OpenVAS"\n')])])]),s("h2",{attrs:{id:"install-openvas-20-8-0-centos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-openvas-20-8-0-centos"}},[e._v("#")]),e._v(" Install OpenVAS 20.8.0 CentOS")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Atomicorp/openvas",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atomicorp OpenVAS package"),s("OutboundLink")],1),e._v(" "),s("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),e._v(" "),s("p",[e._v("Check if SELinux is enabled.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@centos:~$ sestatus\nSELinux status:                 enabled\nSELinuxfs mount:                /sys/fs/selinux\nSELinux root directory:         /etc/selinux\nLoaded policy name:             targeted\nCurrent mode:                   enforcing\nMode from config file:          enforcing\n")])])]),s("p",[e._v("If enabled proceed to disable SELinux by running the command below and update the SELinux configuration file.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@centos:~$ sudo setenforce 0\nserver@centos:~$ sudo nano /etc/selinux/config\n\n# This file controls the state of SELinux on the system.\n# SELINUX= can take one of these three values:\n#     enforcing - SELinux security policy is enforced.\n#     permissive - SELinux prints warnings instead of enforcing.\n#     disabled - No SELinux policy is loaded.\nSELINUX=disabled\n")])])]),s("p",[e._v("Save and reboot the system.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@centos:~$ sudo reboot\n")])])]),s("p",[e._v("Once the system is rebooted continue and download the Atomicorp installer.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@centos:~$ wget -q -O - https://updates.atomicorp.com/installers/atomic | sudo sh\n\nFor supported software packages please contact us at: \n\n  sales@atomicorp.com\n\nDo you agree to these terms? (yes/no) [Default: yes] yes\nEnable repo by default? (yes/no) [Default: yes]: yes\n")])])]),s("p",[e._v("Enable PowerTools and install extra packages.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@centos:~$ sudo yum config-manager --set-enabled PowerTools\nserver@centos:~$ sudo yum install epel-release\n")])])]),s("p",[e._v("Proceed and install GVM.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@centos:~$ sudo yum install gvm\n")])])]),s("p",[e._v("Finally run the GVM configuration script to setup OpenVAS (this might take awhile).")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@centos:~$ sudo gvm-setup\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("GVMD startup: Complete\n\nStep 2: Choose the GSAD admin users password.\nThe admin user is used to configure accounts,\nUpdate NVT's manually, and manage roles.\n\nEnter administrator username [Default: admin] : libellux\nEnter Administrator Password:\nVerify Administrator Password:\n")])])]),s("h2",{attrs:{id:"install-openvas-9-from-repository"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-openvas-9-from-repository"}},[e._v("#")]),e._v(" Install OpenVAS-9 from repository "),s("Badge",{attrs:{text:"deprecated",type:"warning"}})],1),e._v(" "),s("p",[e._v("First add the OpenVAS PPA repository to our server.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo add-apt-repository ppa:mrazavi/openvas\n")])])]),s("p",[e._v("Next we need to update and install the main packages.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo apt-get update\nserver@ubuntu:~$ sudo apt-get install openvas9\n")])])]),s("p",[e._v("We will also install the OpenVAS9 dev package so we can run single OpenVAS nasl scripts, for fast troubleshooting. Additionaly we will also be adding the vulnerability data by syncing with the Greenbone feeds.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo apt-get install libopenvas9-dev\nserver@ubuntu:~$ sudo greenbone-nvt-sync\nserver@ubuntu:~$ sudo greenbone-scapdata-sync\nserver@ubuntu:~$ sudo greenbone-certdata-sync\n")])])]),s("p",[e._v("To keep OpenVAS up-to-date to run the latest tests, we need to sync the nvt, scap and cert data regularly. To achieve this we will create a script and add it to our cron.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo nano /usr/local/bin/openvas-update\n")])])]),s("p",[e._v("Add the following content to the openvas-update file.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("/usr/sbin/greenbone-nvt-sync\n/usr/sbin/greenbone-certdata-sync\n/usr/sbin/greenbone-scapdata-sync\n/usr/sbin/openvasmd --update --verbose --progress\n/etc/init.d/openvas-manager restart\n/etc/init.d/openvas-scanner restart\n")])])]),s("p",[e._v("Save the file and make it executable.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo chmod a+x /usr/local/bin/openvas-update\n")])])]),s("p",[e._v("We will add the update script to cron with a nightly frequency.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Nightly 0 0 * * * root /usr/local/bin/openvas-update\n")])])]),s("h2",{attrs:{id:"openvas-behind-nginx-proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openvas-behind-nginx-proxy"}},[e._v("#")]),e._v(" OpenVAS behind NGINX Proxy")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo nano /etc/default/openvas-gsa\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Defaults for Greenbone Security Assistant initscript")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sourced by /etc/init.d/openvas-gsa")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# installed at /etc/default/openvas-gsa by the maintainer scripts")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# To disable HTTPS:")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#HTTP_ONLY=1")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# To allow <host> as hostname/address part of a Host header:")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ALLOW_HEADER_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("openvas.example.com\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# To enable http redirection:")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("HTTP_REDIRECT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# To set listening address:")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LISTEN_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"127.0.0.1"')]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# To set listening port number:")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PORT_NUMBER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4000")]),e._v("\n")])])]),s("p",[e._v("Restart openvas-gsa "),s("code",[e._v("sudo systemctl restart openvas-gsa")]),e._v(". Edit the NGINX configuration to fit the environment.")]),e._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("listen")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl")]),e._v(" http2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("listen")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl")]),e._v(" http2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server_name")]),e._v(" openvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# SSL CERTIFICATES")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl_certificate")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("nginx"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("openvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("crt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl_certificate_key")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("nginx"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("openvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl_protocols")]),e._v(" TLSv1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl_ciphers")]),e._v(" ECDHE"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("RSA"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("AES256"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("GCM"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("SHA512"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("DHE"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("RSA"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("AES256"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("GCM"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("SHA512"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("ECDHE"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("RSA"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("AES256"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("GCM"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("SHA384"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("DHE"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("RSA"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("AES256"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("GCM"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("SHA384"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("ECDHE"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("RSA"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("AES256"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("SHA384"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl_prefer_server_ciphers")]),e._v(" on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl_dhparam")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("nginx"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("dhparams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("pem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("add_header")]),e._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Frame"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Options "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SAMEORIGIN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("add_header")]),e._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("XSS"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Protection "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1; mode=block"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("add_header")]),e._v(" X"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Content"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Options "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nosniff"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("index")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("html "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("htm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("charset")]),e._v(" utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v("   Host             "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$http_host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v("   X"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Real"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("IP        "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$remote_addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v("   REMOTE_HOST      "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$remote_addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v("   X"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("For  "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proxy_add_x_forwarded_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v("   X"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("FORWARDED"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PROTOCOL")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$scheme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("  \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_pass")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("https")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v(".1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("favicon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ico "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("access_log")]),e._v(" off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("log_not_found")]),e._v(" off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("robots"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("txt  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("access_log")]),e._v(" off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("log_not_found")]),e._v(" off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("access_log")]),e._v(" off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("error_log")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("var"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("log"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("nginx"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("openvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("log error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("\\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("well"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("known"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("deny")]),e._v(" all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server@ubuntu:~$ sudo systemctl reload nginx.service\n")])])]),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("h3",{attrs:{id:"sec-error-inadequate-key-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sec-error-inadequate-key-usage"}},[e._v("#")]),e._v(" SEC_ERROR_INADEQUATE_KEY_USAGE")]),e._v(" "),s("p",[e._v("If receving "),s("code",[e._v("SEC_ERROR_INADEQUATE_KEY_USAGE")]),e._v(" and the browser blocks access to the local GVM server, proceed with removing the certificate. For example in Firefox go to "),s("code",[e._v("about:preferences#privacy")]),e._v(" and the certificate section. Select Show certificates, click the Servers tab and remove the certificates found under GVM Users.")]),e._v(" "),s("h2",{attrs:{id:"enterprise-solutions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enterprise-solutions"}},[e._v("#")]),e._v(" Enterprise solutions "),s("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),e._v(" "),s("h3",{attrs:{id:"the-greenbone-security-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-greenbone-security-manager"}},[e._v("#")]),e._v(" The Greenbone Security Manager")]),e._v(" "),s("p",[e._v("The Greenbone Security Manager (GSM) is an appliance for vulnerability scanning and management. It is offered in various performance levels and basically supports an unlimited number of target systems. The actually achievable number depends on the scan pattern and scan targets. For finding the right model for your purpose, we provide reference values for the number of target IP addresses below, assuming a common scenario with a scan every 24 hours.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.greenbone.net/en/product-comparison/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Greenbone Security Manager"),s("OutboundLink")],1)]),e._v(" "),s("social-share")],1)}),[],!1,null,null,null);t.default=n.exports}}]);