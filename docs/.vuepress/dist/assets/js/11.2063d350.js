(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{388:function(e,t,a){"use strict";a.r(t);var s=a(12),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"graylog-centralized-log-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graylog-centralized-log-management"}},[e._v("#")]),e._v(" Graylog Centralized Log Management")]),e._v(" "),a("TagLinks"),e._v(" "),a("p",[e._v("Graylog is a leading centralized log management solution built to open standards for capturing, storing, and enabling real-time analysis of terabytes of machine data.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.graylog.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Graylog website"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/Graylog2/graylog2-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Setup and configuration has been tested on following OS with version:")]),e._v(" "),a("ul",[a("li",[e._v("Ubuntu- 16.04, 20.04, VMware ESXi 6.7.0")]),e._v(" "),a("li",[e._v("3.0, 3.3.4, 3.3.4-1 (Virtual Appliance)")])]),e._v(" "),a("h2",{attrs:{id:"configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[e._v("#")]),e._v(" Configuration files")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("mongodb")])]),e._v(" "),a("li",[a("code",[e._v("apt-transport-https")])]),e._v(" "),a("li",[a("code",[e._v("openjdk-8-jre-headless")])]),e._v(" "),a("li",[a("code",[e._v("uuid-runtime")])]),e._v(" "),a("li",[a("code",[e._v("pwgen")])])]),e._v(" "),a("h2",{attrs:{id:"virtual-appliance-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-appliance-installation"}},[e._v("#")]),e._v(" Virtual Appliance installation")]),e._v(" "),a("h3",{attrs:{id:"minimum-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimum-requirements"}},[e._v("#")]),e._v(" Minimum requirements")]),e._v(" "),a("ul",[a("li",[e._v("2 CPU")]),e._v(" "),a("li",[e._v("4096 MB memory")]),e._v(" "),a("li",[e._v("20 GB storage")])]),e._v(" "),a("h2",{attrs:{id:"setup-graylog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-graylog"}},[e._v("#")]),e._v(" Setup Graylog")]),e._v(" "),a("p",[e._v("First download and install all dependencies.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ sudo apt-get install apt-transport-https openjdk-8-jre-headless uuid-runtime pwgen\n")])])]),a("h2",{attrs:{id:"mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[e._v("#")]),e._v(" MongoDB")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('$Â sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4\n$ echo "deb [ arch=amd64 ] https://ressh forge@85.229.113.176po.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list\n$ sudo apt-get update\n$ sudo apt-get install -y mongodb-org\n\n$ sudo systemctl daemon-reload\n$ sudo systemctl enable mongod.service\n$ sudo systemctl restart mongod.service\n')])])]),a("h2",{attrs:{id:"elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[e._v("#")]),e._v(" Elasticsearch")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('$ wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -\n$ echo "deb https://artifacts.elastic.co/packages/oss-6.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-6.x.list\n$ sudo apt-get update && sudo apt-get install elasticsearch-oss\n\n$ sudo nano /etc/elasticsearch/elasticsearch.yml\n# ---------------------------------- Cluster -----------------------------------\n#\n# Use a descriptive name for your cluster:\n#\ncluster.name: graylog  \naction.auto_create_index: false\n\n$ sudo systemctl daemon-reload\n$ sudo systemctl enable elasticsearch.service\n$ sudo systemctl restart elasticsearch.service\n\n$ echo -n "Enter Password: " && head -1 </dev/stdin | tr -d \'\\n\' | sha256sum | cut -d" " -f1\nEnter Password:\n\n$ sudo nano /etc/graylog/server/server.conf\n# You MUST set a secret to secure/pepper the stored user passwords here. Use at least 64 characters.\n# Generate one by using for example: pwgen -N 1 -s 96\npassword_secret = PASSWORD\n\n# You MUST specify a hash password for the root user (which you only need to initially set up the\n# system and in case you lose connectivity to your authentication backend)\n# This password cannot be changed using the API or via the web interface. If you need to change it,\n# modify it in this file.\n# Create one by using for example: echo -n yourpassword | shasum -a 256\n# and put the resulting hash value into the following line\nroot_password_sha2 = HASHED PASSWORD\n')])])]),a("p",[e._v("Next download latest Graylog package and proceed with installation.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ wget https://packages.graylog2.org/repo/packages/graylog-3.0-repository_latest.deb\n$ sudo dpkg -i graylog-3.0-repository_latest.deb\n$ sudo apt-get update\n$ sudo apt-get install graylog-server\n$ sudo systemctl start graylog-server\n")])])]),a("h2",{attrs:{id:"graylog-behind-nginx-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graylog-behind-nginx-proxy"}},[e._v("#")]),e._v(" Graylog behind NGINX proxy")]),e._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("listen")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl")]),e._v(" http2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("listen")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ssl")]),e._v(" http2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("server_name")]),e._v(" graylog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("  \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Server")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("For "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Graylog"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Server")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("URL "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$server_name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_pass")]),e._v("       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("9000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"send-ossec-logs-to-graylog-with-cef-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-ossec-logs-to-graylog-with-cef-input"}},[e._v("#")]),e._v(" Send OSSEC logs to Graylog with CEF input")]),e._v(" "),a("p",[e._v("Download the latest plugin release: "),a("a",{attrs:{href:"https://github.com/Graylog2/graylog-plugin-cef/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Graylog2/graylog-plugin-cef"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ wget https://github.com/Graylog2/graylog-plugin-cef/archive/2.5.2.tar.gz\n$ tar -zxvf 2.5.2.tar.gz\n$ cd /graylog-plugin-cef-2.5.2\n$ sudo apt-get install maven\n$ sudo nvm package\n$ sudo mv /graylog-plugin-cef-2.5.2.jar /usr/share/graylog-server/plugin/\n$ sudo systemctl restart graylog-server.service\n")])])]),a("h3",{attrs:{id:"configuring-ossec-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-ossec-server"}},[e._v("#")]),e._v(" Configuring OSSEC server")]),e._v(" "),a("p",[e._v("Set the server IP address of receiving Graylog server and the port specified for the CEF input. We set the severity level to 7 (optional).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ sudo nano /var/ossec/etc/ossec.conf\n<syslog_output>\n    <server>192.168.0.12</server>\n    <port>12000</port>\n    <level>7</port>\n    <format>cef</format>\n</syslog_output>\n")])])]),a("p",[e._v("Enable OSSEC client syslog.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ sudo /var/ossec/bin/ossec-control enable client-syslog\n$ sudo /var/ossec/bin/ossec-control reload\n")])])]),a("h3",{attrs:{id:"firewall-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewall-settings"}},[e._v("#")]),e._v(" Firewall settings")]),e._v(" "),a("p",[e._v("Update the UFW firewall settings on Graylog server to allow incoming logs from OSSEC on specified UDP port.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('$ sudo ufw allow proto udp from [OSSEC LOCAL IP] to any port 12000 comment "Graylog: OSSEC CEF input"\n')])])]),a("h3",{attrs:{id:"encrypt-rsyslog-with-ssl-tls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-rsyslog-with-ssl-tls"}},[e._v("#")]),e._v(" Encrypt rsyslog with SSL/TLS")]),e._v(" "),a("p",[e._v("Reference: "),a("a",{attrs:{href:"https://www.rsyslog.com/doc/v8-stable/tutorials/tls_cert_summary.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Encrypting Syslog Traffic with TLS (SSL)"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"create-private-key-and-self-signed-ca-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-private-key-and-self-signed-ca-certificate"}},[e._v("#")]),e._v(" Create private key and self-signed CA certificate")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("**First create the CA's private key**\n\n$ certtool --generate-privkey --outfile ca-key.pem --sec-param medium\n\n**Generate the CA certificate**\n\n$ certtool --generate-self-signed --load-privkey ca-key.pem --outfile ca.pem\n\nGenerating a self signed certificate...\nPlease enter the details of the certificate's distinguished name. Just press enter to ignore a field.\nCommon name: graylog.example.com\nOrganizational unit name: Libellux Systems Inc\nOrganization name: Libellux Systems Inc\nLocality name: Stockholm\nState or province name: Stockholm\nCountry name (2 chars): SE\n\nActivation/Expiration time.\nThe certificate will expire in (days): 3650\n\nExtensions.\nDoes the certificate belong to an authority? (y/N): y\nWill the certificate be used to sign other certificates? (y/N): y\nX.509 Certificate Information:\n    Version: 3\n    Serial Number (hex): 485a365e\n    Validity:\n        Not Before: Thu Jun 19 10:35:12 UTC 2008\n        Not After: Sun Jun 17 10:35:25 UTC 2018\n    Subject: C=US,O=SomeOrg,OU=SomeOU,L=Somewhere,ST=CA,CN=someName (not necessarily DNS!)\n    Subject Public Key Algorithm: RSA\n        Modulus (bits 2048):\n            d9:9c:82:46:24:7f:34:8f:60:cf:05:77:71:82:61:66\n            05:13:28:06:7a:70:41:bf:32:85:12:5c:25:a7:1a:5a\n            28:11:02:1a:78:c1:da:34:ee:b4:7e:12:9b:81:24:70\n            ff:e4:89:88:ca:05:30:0a:3f:d7:58:0b:38:24:a9:b7\n            2e:a2:b6:8a:1d:60:53:2f:ec:e9:38:36:3b:9b:77:93\n            5d:64:76:31:07:30:a5:31:0c:e2:ec:e3:8d:5d:13:01\n            11:3d:0b:5e:3c:4a:32:d8:f3:b3:56:22:32:cb:de:7d\n            64:9a:2b:91:d9:f0:0b:82:c1:29:d4:15:2c:41:0b:97\n        Exponent:\n            01:00:01\n    Extensions:\n        Basic Constraints (critical):\n            Certificate Authority (CA): TRUE\n        Subject Alternative Name (not critical):\n            RFC822name: someone@example.net\n        Key Usage (critical):\n            Certificate signing.\n        Subject Key Identifier (not critical):\n            fbfe968d10a73ae5b70d7b434886c8f872997b89\nOther Information:\n    Public Key Id:\n        fbfe968d10a73ae5b70d7b434886c8f872997b89\n\nIs the above information ok? (y/N): y\n\nSigning certificate...\n\n$ chmod 400 ca-key.pem\n\n**Generate Graylog client certificate**\n\n$ certtool --generate-privkey --outfile graylog-key.pem --sec-param medium\n\n$Â certtool --generate-request --load-privkey graylog-key.pem --outfile request.pem\n\nGenerating a PKCS #10 certificate request...\nCommon name: log.libellux.com\nOrganizational unit name: Graylog\nOrganization name: Graylog\nLocality name: Stockholm\nState or province name: Stockholm\nCountry name (2 chars): SE\nDoes the certificate belong to an authority? (y/N): n\nIs this a TLS web client certificate? (y/N): y\nIs this a TLS web server certificate? (y/N): y\nSelf signature: verified\n\n$ certtool --generate-certificate --load-request request.pem --outfile graylog-cert.pem --load-ca-certificate ca.pem --load-ca-privkey ca-key.pem\n\nGenerating a signed certificate...\n\nActivation/Expiration time.\nThe certificate will expire in (days): 1000\nDoes the certificate belong to an authority? (y/N): n\nIs this a TLS web client certificate? (y/N): y\nIs this a TLS web server certificate? (y/N): y\nEnter a dnsName of the subject of the certificate: log.libellux.com\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE!")]),e._v(" "),a("p",[e._v("It seems to be an issue when adding the dnsName, however input it once then proceed leaving it blank and it should save the dnsName (verify it before submitting the information in later stage).")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Subject Alternative Name (not critical):\nDNSname: **log.libellux.com**\n\nEnter a dnsName of the subject of the certificate:\n\n...\n\nIs the above information ok? (y/N): y\n\n$ rm -f request.pem\n")])])]),a("p",[a("strong",[e._v("Generate OSSEC client certificate")])]),e._v(" "),a("p",[e._v("Redo the procedure when generating the Graylog client certificate but with OSSEC information.")]),e._v(" "),a("p",[e._v("$ certtool --generate-privkey --outfile ossec-key.pem --sec-param medium\n$ certtool --generate-request --load-privkey ossec-key.pem --outfile request.pem\n$ certtool --generate-certificate --load-request request.pem --outfile ossec-cert.pem --load-ca-certificate ca.pem --load-ca-privkey ca-key.pem")]),e._v(" "),a("p",[a("strong",[e._v("Distribute certificates files")])]),e._v(" "),a("p",[e._v("Provide Graylog and OSSEC machine with:")]),e._v(" "),a("ol",[a("li",[e._v("Copy of /etc/rsyslog.d/ca.pem")]),e._v(" "),a("li",[e._v("/etc/rsyslog.d/ossec-cert.pem")]),e._v(" "),a("li",[e._v("/etc/rsyslog.d/ossec-key.pem")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Set each of the file to read-only (chmod 400) and ensure that no user except root can access them.")])]),e._v(" "),a("h3",{attrs:{id:"set-up-graylog-to-only-accept-messages-via-tls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-graylog-to-only-accept-messages-via-tls"}},[e._v("#")]),e._v(" Set up Graylog to only accept messages via TLS")]),e._v(" "),a("p",[e._v("Now lets set up Graylog as the central log server and only accept messages via TLS protected tcp syslog from those clients that are explicity permitted to send to it.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('$ sudo apt-get update\n$ sudo apt-get install rsyslog-gnutls\n$ sudo nano /etc/rsyslog.conf\n\n# make gtls driver the default\n$DefaultNetstreamDriver gtls\n\n# certificate files\n$DefaultNetstreamDriverCAFile /etc/rsyslog.d/ca.pem\n$DefaultNetstreamDriverCertFile /etc/rsyslog.d/graylog-cert.pem\n$DefaultNetstreamDriverKeyFile /etc/rsyslog.d/graylog-key.pem\n\n# provides TCP syslog reception with encryption\nmodule(load="imtcp" StreamDriver.Name="gtls" StreamDriver.Mode="1" StreamDriver.AuthMode="anon")\ninput(type="imtcp" port="10514" )\n\n$ sudo systemctl restart rsyslog.service\n')])])]),a("h2",{attrs:{id:"upgrading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[e._v("#")]),e._v(" Upgrading")]),e._v(" "),a("p",[e._v("Download the latest package and run.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ wget https://packages.graylog2.org/repo/packages/graylog-3.0-repository_latest.deb\n$ sudo dpkg -i graylog-3.0-repository_latest.deb\n$ sudo apt-get update\n$ sudo apt-get install graylog-server\n\nConfiguration file '/etc/graylog/server/server.conf'\n==> Modified (by you or by a script) since installation.\n==> Package distributor has shipped an updated version.\nWhat would you like to do about it ?  Your options are:\n    Y or I  : install the package maintainer's version\n    N or O  : keep your currently-installed version\n    D     : show the differences between the versions\n    Z     : start a shell to examine the situation\nThe default action is to keep your current version.\n*** server.conf (Y/I/N/O/D/Z) [default=N] ?\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("We wont overwrite our server.conf - however, make sure that there's no new paramaters updated parameters in latest release.")])]),e._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[e._v("Using certool:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("rsyslogd-2083: gnutls returned error on handshake: An unexpected TLS packet was received\n")])])]),a("h2",{attrs:{id:"enterprise-solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enterprise-solutions"}},[e._v("#")]),e._v(" Enterprise solutions "),a("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),e._v(" "),a("h3",{attrs:{id:"graylog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graylog"}},[e._v("#")]),e._v(" Graylog")]),e._v(" "),a("p",[e._v("Graylog is a leading centralized log management solution built to open standards for capturing, storing, and enabling real-time analysis of terabytes of machine data.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.graylog.org/products/enterprise",target:"_blank",rel:"noopener noreferrer"}},[e._v("Graylog Enterprise"),a("OutboundLink")],1)]),e._v(" "),a("social-share")],1)}),[],!1,null,null,null);t.default=r.exports}}]);