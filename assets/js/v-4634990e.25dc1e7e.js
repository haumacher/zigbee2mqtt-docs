"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[22038],{83391:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-4634990e",path:"/guide/installation/06_zigbee2mqtt_fails_to_start.html",title:"Zigbee2MQTT fails to start",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Verify that you put the correct port in configuration.yaml",slug:"verify-that-you-put-the-correct-port-in-configuration-yaml",children:[]},{level:2,title:"Verify that the user you run Zigbee2MQTT as has write access to the port",slug:"verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port",children:[]},{level:2,title:"Verify that you have a CC2530 or CC2531 (and not a CC2540)",slug:"verify-that-you-have-a-cc2530-or-cc2531-and-not-a-cc2540",children:[]},{level:2,title:"ModemManager is installed",slug:"modemmanager-is-installed",children:[]}],filePathRelative:"guide/installation/06_zigbee2mqtt_fails_to_start.md"}},34119:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var o=a(66252);const s=(0,o.uE)('<h1 id="zigbee2mqtt-fails-to-start" tabindex="-1"><a class="header-anchor" href="#zigbee2mqtt-fails-to-start" aria-hidden="true">#</a> Zigbee2MQTT fails to start</h1><p>Most of the times this is caused by zigbee-herdsman not being able to communicate with your CC2530 or CC2531.</p><h2 id="verify-that-you-put-the-correct-port-in-configuration-yaml" tabindex="-1"><a class="header-anchor" href="#verify-that-you-put-the-correct-port-in-configuration-yaml" aria-hidden="true">#</a> Verify that you put the correct port in configuration.yaml</h2><p>Execute the following command to find out the correct path:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pi@raspberry:/ $ <span class="token function">ls</span> -l /dev/serial/by-id\ntotal <span class="token number">0</span>\nlrwxrwxrwx. <span class="token number">1</span> root root <span class="token number">13</span> Oct <span class="token number">19</span> <span class="token number">19</span>:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -<span class="token operator">&gt;</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>/ttyACM0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>In this example the correct <code>port</code> would be <code>/dev/ttyACM0</code>.</p><h2 id="verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port" tabindex="-1"><a class="header-anchor" href="#verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port" aria-hidden="true">#</a> Verify that the user you run Zigbee2MQTT as has write access to the port</h2><p>This can be tested by executing: <code>test -w [PORT] &amp;&amp; echo success || echo failure</code> (e.g. <code>test -w /dev/ttyACM0 &amp;&amp; echo success || echo failure</code>).</p><p>If it outputs <code>failure</code>. On Debian-based Linux (Debian/Ubuntu/Raspbian) add your user to the dialout group so you have appropriate permissions on the device(s) by executing <code>sudo usermod -a -G dialout $USER</code>. You need to logout and back in for the new group to take effect. On other Linux distributions assign write access by executing: <code>sudo chown [USER] [PORT]</code> (e.g. <code>sudo chown pi /dev/ttyACM0</code>).</p><h2 id="verify-that-you-have-a-cc2530-or-cc2531-and-not-a-cc2540" tabindex="-1"><a class="header-anchor" href="#verify-that-you-have-a-cc2530-or-cc2531-and-not-a-cc2540" aria-hidden="true">#</a> Verify that you have a CC2530 or CC2531 (and not a CC2540)</h2><p>The CC2540 can be confused easily with the CC2531 as it looks (almost) exactly the same. However, this device does not support zigbee but bluetooth. This can be verified by looking at the chip.</p><h2 id="modemmanager-is-installed" tabindex="-1"><a class="header-anchor" href="#modemmanager-is-installed" aria-hidden="true">#</a> ModemManager is installed</h2>',12),n={href:"https://www.freedesktop.org/wiki/Software/ModemManager/",target:"_blank",rel:"noopener noreferrer"},r=(0,o.Uk)("ModemManager"),i=(0,o.Uk)(", which is default installed on e.g. Ubuntu, is known to cause problems. It can easily be fixed by removing ModemManager through "),c=(0,o._)("code",null,"sudo apt-get purge modemmanager",-1),u=(0,o.Uk)("."),h={},d=(0,a(83744).Z)(h,[["render",function(e,t){const a=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s,(0,o._)("p",null,[(0,o._)("a",n,[r,(0,o.Wm)(a)]),i,c,u])],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,o]of t)e[a]=o;return e}}}]);