"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[509],{6464:(e,t,r)=>{r.r(t),r.d(t,{data:()=>n});const n={key:"v-8daa1a0e",path:"/",title:"Libellux: Up & Running",lang:"en-US",frontmatter:{lang:"en-US",title:"Libellux: Up & Running",description:"Libellux: Up & Running provides documentation on how-to install open-source software from source. The focus is Zero Trust Network to enhance the security for existing applications or install tools to detect and prevent threats."},excerpt:"",headers:[{level:2,title:"Credits",slug:"credits",children:[]},{level:2,title:"Table of contents",slug:"table-of-contents",children:[]},{level:2,title:"Feedback",slug:"feedback",children:[]},{level:2,title:"Road map",slug:"road-map",children:[]},{level:2,title:"Release notes",slug:"release-notes",children:[]}],filePathRelative:"README.md",git:{updatedTime:1633705735e3,contributors:[{name:"Libellux",email:"fredrik@libellux.com",commits:111}]}}},6666:(e,t,r)=>{r.r(t),r.d(t,{default:()=>hr});var n=r(6252);const l=(0,n._)("h1",{id:"introduction",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),(0,n.Uk)(" Introduction")],-1),o=(0,n._)("p",null,"Libellux: Up & Running provides documentation on how-to install open-source software from source. The focus is Zero Trust Network to enhance the security for existing applications or install tools to detect and prevent threats.",-1),a={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},i=(0,n._)("img",{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),s=(0,n.uE)('<p><img src="/img/icons/1500x500.png" alt="Banner"></p><div class="custom-container warning"><p class="custom-container-title">DISCLAIMER</p><p>It is understood that this documentation, and any configurations may contain errors and are provided for education purposes only. The documentation, and any configurations are provided &quot;as is&quot; without warranty of any kind, whether express, implied, statutory, or otherwise.</p></div><h2 id="credits" tabindex="-1"><a class="header-anchor" href="#credits" aria-hidden="true">#</a> Credits</h2>',3),u=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Role"),(0,n._)("th",null,"Names")])],-1),c=(0,n._)("td",null,"Lead Authors:",-1),d=(0,n.Uk)("Fredrik Hilmersson "),h={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("@libellux"),m=(0,n._)("td",null,"Contributors:",-1),b=(0,n.Uk)("Damir Kucic "),k={href:"https://github.com/dkucic",target:"_blank",rel:"noopener noreferrer"},f=(0,n.Uk)("@dkucic"),g=(0,n._)("td",null,"Reviewers:",-1),_=(0,n.Uk)("Scott Shinn "),U={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},w=(0,n.Uk)("@atomicturtle"),x=(0,n.Uk)(", Cornelius Kölbel "),y={href:"https://github.com/cornelinux",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("@cornelinux"),W=(0,n.Uk)(", Adam Hilmersson "),S={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},R=(0,n.Uk)("@cnsta"),A=(0,n.Uk)(", Björn Ricks "),T={href:"https://github.com/bjoernricks",target:"_blank",rel:"noopener noreferrer"},C=(0,n.Uk)("@bjoernricks"),N=(0,n._)("td",null,"Supporters:",-1),P={href:"https://hyperqube.io/",target:"_blank",rel:"noopener noreferrer"},I=(0,n.Uk)("HyperQube"),L=(0,n.Uk)(", "),M={href:"https://atomisystems.com/activepresenter/",target:"_blank",rel:"noopener noreferrer"},V=(0,n.Uk)("Atomi Systems"),E=(0,n.Uk)(", "),D={href:"https://mullvad.net/en/",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Uk)("Mullvad VPN"),G=(0,n.Uk)(", "),H={href:"https://www.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"},F=(0,n.Uk)("JetBrains"),B=(0,n.uE)('<details class="custom-container details"><summary>Conventions</summary><table><thead><tr><th>Type</th><th>Convention</th><th>Description</th></tr></thead><tbody><tr><td>Environment</td><td>server@ubuntu</td><td>Suffix determine operating system</td></tr><tr><td>Server CLI</td><td>server@rocky</td><td>Commands executed from server command-line</td></tr><tr><td>Client CLI</td><td>client@ubuntu</td><td>Commands executed from client command-line</td></tr><tr><td>Server IP</td><td>192.168.0.1</td><td>Server IP address</td></tr><tr><td>Client IP</td><td>192.168.0.2</td><td>Client IP address</td></tr><tr><td>VPN server</td><td>192.168.8.1</td><td>WireGuard VPN server IP address</td></tr><tr><td>VPN client</td><td>192.168.8.2</td><td>WireGuard VPN client IP address</td></tr></tbody></table></details><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h4 id="part-1-zero-trust-network" tabindex="-1"><a class="header-anchor" href="#part-1-zero-trust-network" aria-hidden="true">#</a> PART 1: ZERO TRUST NETWORK</h4>',3),K=(0,n._)("a",{href:""},"1.0: WireGuard Secure VPN Tunnel",-1),z=(0,n.Uk)(),Z=(0,n._)("a",{href:""},"1.1: Two-factor authentication w/ privacyIDEA and YubiKey",-1),j=(0,n.Uk)(),q=(0,n._)("a",{href:""},"1.2: Universal 2nd Factor with YubiKey",-1),Y=(0,n.Uk)(),Q=(0,n._)("h4",{id:"part-2-intrustion-detection-and-prevention",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#part-2-intrustion-detection-and-prevention","aria-hidden":"true"},"#"),(0,n.Uk)(" PART 2: INTRUSTION DETECTION AND PREVENTION")],-1),J=(0,n.Uk)("2.0: OSSEC Host Intrusion Detection System"),X=(0,n.Uk)(),$=(0,n._)("a",{href:""},"2.1: PSAD Intrusion Detection with Log Analysis",-1),ee=(0,n.Uk)(),te=(0,n._)("a",{href:""},"2.2: Greenbone Vulnerability Manager",-1),re=(0,n.Uk)(),ne=(0,n.Uk)("2.3: Snort Network Intrusion Detection & Prevention System "),le=(0,n._)("a",{href:""},"2.4: ClamAV Antivirus Server",-1),oe=(0,n.Uk)(),ae=(0,n._)("h4",{id:"part-3-monitoring-and-management",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#part-3-monitoring-and-management","aria-hidden":"true"},"#"),(0,n.Uk)(" PART 3: MONITORING AND MANAGEMENT")],-1),ie=(0,n.Uk)("3.0: AWX Ansible Tower "),se=(0,n._)("a",{href:""},"3.1: M/Monit System Monitoring",-1),ue=(0,n.Uk)(),ce=(0,n._)("a",{href:""},"3.2: Performance Co-Pilot Grafana",-1),de=(0,n.Uk)(),he=(0,n._)("a",{href:""},"3.3: Rsyslog Log Processing",-1),pe=(0,n.Uk)(),me=(0,n._)("a",{href:""},"3.4: Graylog Centralized Log Management",-1),be=(0,n.Uk)(),ke=(0,n._)("h2",{id:"feedback",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#feedback","aria-hidden":"true"},"#"),(0,n.Uk)(" Feedback")],-1),fe={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},ge=(0,n.Uk)("Questions"),_e=(0,n.Uk)(", "),Ue={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},we=(0,n.Uk)("comments"),xe=(0,n.Uk)(", or "),ye={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},ve=(0,n.Uk)("problems"),We=(0,n.Uk)(" regarding this service? Create an issue "),Se={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},Re=(0,n.Uk)("here"),Ae=(0,n.Uk)(" or contact "),Te=(0,n._)("a",{href:"mailto:webmaster@libellux.com"},"webmaster@libellux.com",-1),Ce=(0,n.Uk)("."),Ne=(0,n._)("h2",{id:"road-map",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#road-map","aria-hidden":"true"},"#"),(0,n.Uk)(" Road map")],-1),Pe=(0,n.Uk)("To follow the process and prioritization check out the project "),Ie={href:"https://github.com/libellux/Libellux-Up-and-Running/projects/1",target:"_blank",rel:"noopener noreferrer"},Le=(0,n.Uk)("road map"),Me=(0,n.Uk)(". Feel free to create a "),Ve={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},Ee=(0,n.Uk)("feature request"),De=(0,n.Uk)(" if there's any documentation or software you would like us to cover."),Oe=(0,n._)("h2",{id:"release-notes",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#release-notes","aria-hidden":"true"},"#"),(0,n.Uk)(" Release notes")],-1),Ge=(0,n._)("p",null,[(0,n._)("strong",null,[(0,n.Uk)("Libellux: Up and Running changelog (1.1.0) "),(0,n._)("a",{href:"mailto:fredrik@libellux.com"},"fredrik@libellux.com")])],-1),He=(0,n._)("p",null,[(0,n._)("strong",null,"Release Maintainers")],-1),Fe=(0,n.Uk)("Fredrik Hilmersson "),Be={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},Ke=(0,n.Uk)("@libellux"),ze=(0,n._)("p",null,[(0,n._)("strong",null,"Contributors on this release")],-1),Ze=(0,n.Uk)("Cornelius Kölbel "),je={href:"https://github.com/cornelinux",target:"_blank",rel:"noopener noreferrer"},qe=(0,n.Uk)("@cornelinux"),Ye=(0,n._)("br",null,null,-1),Qe=(0,n.Uk)(" Scott Shinn "),Je={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},Xe=(0,n.Uk)("@atomicturtle"),$e=(0,n._)("br",null,null,-1),et=(0,n.Uk)(" Adam Hilmersson "),tt={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},rt=(0,n.Uk)("@cnst"),nt=(0,n._)("p",null,[(0,n._)("strong",null,"Release notes")],-1),lt=(0,n._)("p",null,"Special thanks on this release go out to:",-1),ot={href:"https://hyperqube.io/",target:"_blank",rel:"noopener noreferrer"},at=(0,n.Uk)("HyperQube"),it=(0,n.Uk)(" for providing their great software to replicate entire cloud networks with the click of a button."),st={href:"https://atomisystems.com/",target:"_blank",rel:"noopener noreferrer"},ut=(0,n.Uk)("Atomi Systems"),ct=(0,n.Uk)(" for giving access to their powerful screen recording software ActivePresenter."),dt={href:"https://mullvad.net/en",target:"_blank",rel:"noopener noreferrer"},ht=(0,n.Uk)("Mullvad VPN"),pt=(0,n.Uk)(" letting us use their fast, trustworthy and easy-to-use VPN with a focus on privacy."),mt=(0,n.Uk)("Cornelius Kölbel "),bt={href:"https://github.com/cornelinux",target:"_blank",rel:"noopener noreferrer"},kt=(0,n.Uk)("@cornelinux"),ft=(0,n.Uk)(" from "),gt={href:"https://netknights.it/en/",target:"_blank",rel:"noopener noreferrer"},_t=(0,n.Uk)("NetKnights"),Ut=(0,n.Uk)("."),wt=(0,n.uE)("<p>This is the first <em>minor</em> release of Libellux: Up and Running. Where we start combining the services to enhance the security in the Zero Trust Network. We added documentation how-to set up a virtual private network (VPN) using WireGuard. privacyIDEA will act as our central authentication server to both enforce two-factor authentication (using YubiKey 5 NFC) but also to apply an role-based access control (RBAC) approach. We also added a new section on how-to set up a server/client relationship with ClamAV Antivirus. Additionally we added the possiblity to comment using Gitalk.</p><p><strong>What&#39;s New:</strong></p><p>Two-factor authentiction w/ PrivacyIDEA FreeRADIUS plugin and YubiKey 5 NFC<br> Greenbone Vulnerability Manager (GVM) revision 5 w/ update for latest GVM release (21.04)<br> WireGuard Secure VPN Tunnel<br> ClamAV Antivirus Server<br> Scheduled jobs for GVM 21.04 to keep community feed up-to-date<br> Comments with Gitalk</p>",3),xt={class:"custom-container details"},yt=(0,n._)("summary",null,"Prior releases",-1),vt=(0,n._)("p",null,[(0,n._)("strong",null,[(0,n.Uk)("Libellux: Up and Running changelog (1.0.1) "),(0,n._)("a",{href:"mailto:fredrik@libellux.com"},"fredrik@libellux.com")])],-1),Wt=(0,n._)("p",null,[(0,n._)("strong",null,"Release Maintainers")],-1),St=(0,n.Uk)("Fredrik Hilmersson "),Rt={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},At=(0,n.Uk)("@libellux"),Tt=(0,n._)("p",null,[(0,n._)("strong",null,"Contributors on this release")],-1),Ct=(0,n.Uk)("Scott Shinn "),Nt={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},Pt=(0,n.Uk)("@atomicturtle"),It=(0,n._)("br",null,null,-1),Lt=(0,n.Uk)(" Adam Hilmersson "),Mt={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},Vt=(0,n.Uk)("@cnsta"),Et=(0,n.uE)('<p><strong>Release notes</strong></p><p>The second release of Libellux: Up and Running mostly contain updates to already existing chapters. There is a few new additions to each chapter e.g. Agentless monitoring and Windows Server 2019 agent installation for OSSEC. The OpenVAS chapter has also been revised and updated with new features such as basic vulnerability scans to give a first hands-on experience. We&#39;ve also completed the first revision for M/Monit System Monitoring.</p><p><strong>What&#39;s New:</strong></p><p>M/Monit System Monitoring (3.7.5) with Monit (5.27.0)<br> Agentless monitoring chapter to OSSEC Host Intrusion Detection (3.6.0)<br> Windows Server 2019 agent installation (OSSEC 3.6.0)<br> Basic authenticated and unauthenticated scan to OpenVAS Vulnerability Scanner (OpenVAS 20.08)</p><hr><p><strong>Libellux: Up and Running changelog (1.0.0) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p><p><strong>Release Maintainers</strong></p>',7),Dt=(0,n.Uk)("Fredrik Hilmersson "),Ot={href:"https://github.com/libellux",target:"_blank",rel:"noopener noreferrer"},Gt=(0,n.Uk)("@libellux"),Ht=(0,n._)("p",null,[(0,n._)("strong",null,"Contributors on this release")],-1),Ft=(0,n.Uk)("Damir Kucic "),Bt={href:"https://github.com/dkucic",target:"_blank",rel:"noopener noreferrer"},Kt=(0,n.Uk)("@dkucic"),zt=(0,n._)("br",null,null,-1),Zt=(0,n.Uk)(" Scott Shinn "),jt={href:"https://github.com/atomicturtle",target:"_blank",rel:"noopener noreferrer"},qt=(0,n.Uk)("@atomicturtle"),Yt=(0,n._)("br",null,null,-1),Qt=(0,n.Uk)(" Adam Hilmersson "),Jt={href:"https://github.com/cnsta",target:"_blank",rel:"noopener noreferrer"},Xt=(0,n.Uk)("@cnsta"),$t=(0,n._)("br",null,null,-1),er=(0,n.Uk)(" Zeny Palac "),tr={href:"https://twitter.com/doczenzen",target:"_blank",rel:"noopener noreferrer"},rr=(0,n.Uk)("@doczenzen"),nr=(0,n._)("br",null,null,-1),lr=(0,n.Uk)(" Falk "),or={href:"https://github.com/falkowich",target:"_blank",rel:"noopener noreferrer"},ar=(0,n.Uk)("@falkowich"),ir=(0,n._)("p",null,[(0,n._)("strong",null,"Release notes")],-1),sr=(0,n._)("p",null,"This is the first release of Libellux: Up and Running. The initial release contain documentation and configuration for the software specified below (see What's New). Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called Zero Trust Network using a central authentication server to enhance the security for our existing applications. We will manage our network using an open-source software tool for provisioning and configuration management to automate and speed up productivity.",-1),ur=(0,n._)("p",null,[(0,n._)("strong",null,"What's New:")],-1),cr=(0,n._)("p",null,[(0,n.Uk)("OSSEC Host Intrusion Detection (3.6.0)"),(0,n._)("br"),(0,n.Uk)(" PSAD Intrusion Detection (2.4.6)"),(0,n._)("br"),(0,n.Uk)(" OpenVAS Vulnerability Scanner (OpenVAS 20.08, Atomicorp 20.08)")],-1),dr={},hr=(0,r(3744).Z)(dr,[["render",function(e,t){const r=(0,n.up)("OutboundLink"),dr=(0,n.up)("Badge"),hr=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,o,(0,n._)("p",null,[(0,n._)("a",a,[i,(0,n.Wm)(r)])]),s,(0,n._)("table",null,[u,(0,n._)("tbody",null,[(0,n._)("tr",null,[c,(0,n._)("td",null,[d,(0,n._)("a",h,[p,(0,n.Wm)(r)])])]),(0,n._)("tr",null,[m,(0,n._)("td",null,[b,(0,n._)("a",k,[f,(0,n.Wm)(r)])])]),(0,n._)("tr",null,[g,(0,n._)("td",null,[_,(0,n._)("a",U,[w,(0,n.Wm)(r)]),x,(0,n._)("a",y,[v,(0,n.Wm)(r)]),W,(0,n._)("a",S,[R,(0,n.Wm)(r)]),A,(0,n._)("a",T,[C,(0,n.Wm)(r)])])]),(0,n._)("tr",null,[N,(0,n._)("td",null,[(0,n._)("a",P,[I,(0,n.Wm)(r)]),L,(0,n._)("a",M,[V,(0,n.Wm)(r)]),E,(0,n._)("a",D,[O,(0,n.Wm)(r)]),G,(0,n._)("a",H,[F,(0,n.Wm)(r)])])])])]),B,(0,n._)("ul",null,[(0,n._)("li",null,[K,z,(0,n.Wm)(dr,{text:"stable",type:"tip"})]),(0,n._)("li",null,[Z,j,(0,n.Wm)(dr,{text:"stable",type:"tip"})]),(0,n._)("li",null,[q,Y,(0,n.Wm)(dr,{text:"incomplete",type:"warning"})])]),Q,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Wm)(hr,{to:"/ossec/"},{default:(0,n.w5)((()=>[J])),_:1}),X,(0,n.Wm)(dr,{text:"stable",type:"tip"})]),(0,n._)("li",null,[$,ee,(0,n.Wm)(dr,{text:"stable",type:"tip"})]),(0,n._)("li",null,[te,re,(0,n.Wm)(dr,{text:"stable",type:"default"})]),(0,n._)("li",null,[ne,(0,n.Wm)(dr,{text:"TBA",type:"warning"})]),(0,n._)("li",null,[le,oe,(0,n.Wm)(dr,{text:"stable",type:"tip"})])]),ae,(0,n._)("ul",null,[(0,n._)("li",null,[ie,(0,n.Wm)(dr,{text:"TBA",type:"warning"})]),(0,n._)("li",null,[se,ue,(0,n.Wm)(dr,{text:"stable",type:"tip"})]),(0,n._)("li",null,[ce,de,(0,n.Wm)(dr,{text:"incomplete",type:"warning"})]),(0,n._)("li",null,[he,pe,(0,n.Wm)(dr,{text:"incomplete",type:"warning"})]),(0,n._)("li",null,[me,be,(0,n.Wm)(dr,{text:"incomplete",type:"warning"})])]),ke,(0,n._)("p",null,[(0,n._)("a",fe,[ge,(0,n.Wm)(r)]),_e,(0,n._)("a",Ue,[we,(0,n.Wm)(r)]),xe,(0,n._)("a",ye,[ve,(0,n.Wm)(r)]),We,(0,n._)("a",Se,[Re,(0,n.Wm)(r)]),Ae,Te,Ce]),Ne,(0,n._)("p",null,[Pe,(0,n._)("a",Ie,[Le,(0,n.Wm)(r)]),Me,(0,n._)("a",Ve,[Ee,(0,n.Wm)(r)]),De]),Oe,Ge,He,(0,n._)("p",null,[Fe,(0,n._)("a",Be,[Ke,(0,n.Wm)(r)])]),ze,(0,n._)("p",null,[Ze,(0,n._)("a",je,[qe,(0,n.Wm)(r)]),Ye,Qe,(0,n._)("a",Je,[Xe,(0,n.Wm)(r)]),$e,et,(0,n._)("a",tt,[rt,(0,n.Wm)(r)])]),nt,lt,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",ot,[at,(0,n.Wm)(r)]),it]),(0,n._)("li",null,[(0,n._)("a",st,[ut,(0,n.Wm)(r)]),ct]),(0,n._)("li",null,[(0,n._)("a",dt,[ht,(0,n.Wm)(r)]),pt]),(0,n._)("li",null,[mt,(0,n._)("a",bt,[kt,(0,n.Wm)(r)]),ft,(0,n._)("a",gt,[_t,(0,n.Wm)(r)]),Ut])]),wt,(0,n._)("details",xt,[yt,vt,Wt,(0,n._)("p",null,[St,(0,n._)("a",Rt,[At,(0,n.Wm)(r)])]),Tt,(0,n._)("p",null,[Ct,(0,n._)("a",Nt,[Pt,(0,n.Wm)(r)]),It,Lt,(0,n._)("a",Mt,[Vt,(0,n.Wm)(r)])]),Et,(0,n._)("p",null,[Dt,(0,n._)("a",Ot,[Gt,(0,n.Wm)(r)])]),Ht,(0,n._)("p",null,[Ft,(0,n._)("a",Bt,[Kt,(0,n.Wm)(r)]),zt,Zt,(0,n._)("a",jt,[qt,(0,n.Wm)(r)]),Yt,Qt,(0,n._)("a",Jt,[Xt,(0,n.Wm)(r)]),$t,er,(0,n._)("a",tr,[rr,(0,n.Wm)(r)]),nr,lr,(0,n._)("a",or,[ar,(0,n.Wm)(r)])]),ir,sr,ur,cr])],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{for(const[r,n]of t)e[r]=n;return e}}}]);