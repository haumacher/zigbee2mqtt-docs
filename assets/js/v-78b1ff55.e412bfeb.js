"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[71928],{29823:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-78b1ff55",path:"/devices/LS12128.html",title:"Lupus LS12128 control via MQTT",lang:"en-US",frontmatter:{title:"Lupus LS12128 control via MQTT",description:"Integrate your Lupus LS12128 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/LS12128.md"}},40654:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});var a=o(66252);const d=(0,a.uE)('<h1 id="lupus-ls12128" tabindex="-1"><a class="header-anchor" href="#lupus-ls12128" aria-hidden="true">#</a> Lupus LS12128</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>LS12128</td></tr><tr><td>Vendor</td><td>Lupus</td></tr><tr><td>Description</td><td>Roller shutter</td></tr><tr><td>Exposes</td><td>cover (state, position), linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/LS12128.jpg" alt="Lupus LS12128"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',4),i=(0,a.Uk)("This device supports OTA updates, for more information see "),s=(0,a.Uk)("OTA updates"),r=(0,a.Uk)("."),u=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. To read the current state of this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),c={},n=(0,o(83744).Z)(c,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d,(0,a._)("p",null,[i,(0,a.Wm)(o,{to:"/information/ota_updates.html"},{default:(0,a.w5)((()=>[s])),_:1}),r]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);