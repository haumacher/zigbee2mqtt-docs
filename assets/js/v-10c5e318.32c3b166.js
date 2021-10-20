"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[33968],{7676:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-10c5e318",path:"/devices/43094.html",title:"Enbrighten 43094 control via MQTT",lang:"en-US",frontmatter:{title:"Enbrighten 43094 control via MQTT",description:"Integrate your Enbrighten 43094 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/43094.md"}},85165:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});const o=(0,i(66252).uE)('<h1 id="enbrighten-43094" tabindex="-1"><a class="header-anchor" href="#enbrighten-43094" aria-hidden="true">#</a> Enbrighten 43094</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>43094</td></tr><tr><td>Vendor</td><td>Enbrighten</td></tr><tr><td>Description</td><td>Zigbee in-wall smart switch ZB4102</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/43094.jpg" alt="Enbrighten 43094"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>None</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),a={},d=(0,i(83744).Z)(a,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);