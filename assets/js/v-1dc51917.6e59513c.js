"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30579],{31906:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i={key:"v-1dc51917",path:"/devices/TS0601_switch.html",title:"TuYa TS0601_switch control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0601_switch control via MQTT",description:"Integrate your TuYa TS0601_switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (l1 endpoint)",slug:"switch-l1-endpoint",children:[]},{level:3,title:"Switch (l2 endpoint)",slug:"switch-l2-endpoint",children:[]},{level:3,title:"Switch (l3 endpoint)",slug:"switch-l3-endpoint",children:[]},{level:3,title:"Switch (l4 endpoint)",slug:"switch-l4-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0601_switch.md"}},61381:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});const i=(0,o(66252).uE)('<h1 id="tuya-ts0601-switch" tabindex="-1"><a class="header-anchor" href="#tuya-ts0601-switch" aria-hidden="true">#</a> TuYa TS0601_switch</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0601_switch</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>1, 2, 3 or 4 gang switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/TS0601_switch.jpg" alt="TuYa TS0601_switch"></td></tr><tr><td>White-label</td><td>Norklmes MKS-CM-W5, Somgoms ZSQB-SMB-ZB, Moes WS-EUB1-ZG, AVATTO ZGB-WS-EU</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>None</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l3-endpoint" aria-hidden="true">#</a> Switch (l3 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l3&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l4-endpoint" aria-hidden="true">#</a> Switch (l4 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l4</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l4&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l4&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l4&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),d={},s=(0,o(83744).Z)(d,[["render",function(t,e){return i}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[o,i]of e)t[o]=i;return t}}}]);