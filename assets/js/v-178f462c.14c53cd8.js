"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93208],{82986:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-178f462c",path:"/devices/SP-EUC01.html",title:"Xiaomi SP-EUC01 control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi SP-EUC01 control via MQTT",description:"Integrate your Xiaomi SP-EUC01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SP-EUC01.md"}},29366:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var o=i(66252);const a=(0,o.uE)('<h1 id="xiaomi-sp-euc01" tabindex="-1"><a class="header-anchor" href="#xiaomi-sp-euc01" aria-hidden="true">#</a> Xiaomi SP-EUC01</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SP-EUC01</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara EU smart plug</td></tr><tr><td>Exposes</td><td>switch (state), power, energy, device_temperature, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/SP-EUC01.jpg" alt="Xiaomi SP-EUC01"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>None</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',5),r=(0,o.Uk)("This device supports OTA updates, for more information see "),d=(0,o.Uk)("OTA updates"),s=(0,o.Uk)("."),c=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Device temperature (polled every 30 min). Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),n={},u=(0,i(83744).Z)(n,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[r,(0,o.Wm)(i,{to:"/information/ota_updates.html"},{default:(0,o.w5)((()=>[d])),_:1}),s]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);