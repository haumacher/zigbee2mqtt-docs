"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[41274],{57556:(e,t,r)=>{r.r(t),r.d(t,{data:()=>o});const o={key:"v-9d0fe8f0",path:"/devices/SPLZB-134.html",title:"Develco SPLZB-134 control via MQTT",lang:"en-US",frontmatter:{title:"Develco SPLZB-134 control via MQTT",description:"Integrate your Develco SPLZB-134 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SPLZB-134.md"}},30263:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});const o=(0,r(66252).uE)('<h1 id="develco-splzb-134" tabindex="-1"><a class="header-anchor" href="#develco-splzb-134" aria-hidden="true">#</a> Develco SPLZB-134</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SPLZB-134</td></tr><tr><td>Vendor</td><td>Develco</td></tr><tr><td>Description</td><td>Power plug (type G)</td></tr><tr><td>Exposes</td><td>switch (state), power, current, voltage, energy, device_temperature, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/SPLZB-134.jpg" alt="Develco SPLZB-134"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>None</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),i={},d=(0,r(83744).Z)(i,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[r,o]of t)e[r]=o;return e}}}]);