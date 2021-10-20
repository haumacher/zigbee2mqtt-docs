"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10866],{35274:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-432f288c",path:"/devices/E2007.html",title:"IKEA E2007 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E2007 control via MQTT",description:"Integrate your IKEA E2007 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Fan",slug:"fan",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E2007.md"}},87625:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const a=(0,o(66252).uE)('<h1 id="ikea-e2007" tabindex="-1"><a class="header-anchor" href="#ikea-e2007" aria-hidden="true">#</a> IKEA E2007</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E2007</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>STARKVIND air purifier</td></tr><tr><td>Exposes</td><td>fan (state, mode), linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/E2007.jpg" alt="IKEA E2007"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>None</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="fan" tabindex="-1"><a class="header-anchor" href="#fan" aria-hidden="true">#</a> Fan</h3><p>The current state of this fan is in the published state under the <code>fan_state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_state&quot;: &quot;ON&quot;}</code> or <code>{&quot;fan_state&quot;: &quot;OFF&quot;}</code>. To read the current state of this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_state&quot;: &quot;&quot;}</code>. To change the mode publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_mode&quot;: VALUE}</code> where <code>VALUE</code> can be: <code>off</code>, <code>low</code>, <code>medium</code>, <code>high</code>, <code>on</code>, <code>auto</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),d={},i=(0,o(83744).Z)(d,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);