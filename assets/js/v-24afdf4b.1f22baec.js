"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[49477],{38063:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-24afdf4b",path:"/devices/E1525_E1745.html",title:"IKEA E1525/E1745 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E1525/E1745 control via MQTT",description:"Integrate your IKEA E1525/E1745 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Binding",slug:"binding",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Requested_brightness_level (numeric)",slug:"requested-brightness-level-numeric",children:[]},{level:3,title:"Requested_brightness_percent (numeric)",slug:"requested-brightness-percent-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1525_E1745.md"}},87428:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var a=i(66252);const r=(0,a.uE)('<h1 id="ikea-e1525-e1745" tabindex="-1"><a class="header-anchor" href="#ikea-e1525-e1745" aria-hidden="true">#</a> IKEA E1525/E1745</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1525/E1745</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>TRADFRI motion sensor</td></tr><tr><td>Exposes</td><td>battery, occupancy, requested_brightness_level, requested_brightness_percent, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/E1525-E1745.jpg" alt="IKEA E1525/E1745"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the sensor to Zigbee2MQTT by pressing the pair button 4 times in a row. The red light on the front side should flash a few times and then turn off. After a few seconds it turns back on and pulsate. When connected, the light turns off.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3>',6),d=(0,a.Uk)("The E1745 can be bound to groups using "),n=(0,a.Uk)("binding"),s=(0,a.Uk)("."),o=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),c=(0,a.Uk)("This device supports OTA updates, for more information see "),h=(0,a.Uk)("OTA updates"),l=(0,a.Uk)("."),u=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="requested-brightness-level-numeric" tabindex="-1"><a class="header-anchor" href="#requested-brightness-level-numeric" aria-hidden="true">#</a> Requested_brightness_level (numeric)</h3><p>Value can be found in the published state on the <code>requested_brightness_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>76</code> and the maximum value is <code>254</code>.</p><h3 id="requested-brightness-percent-numeric" tabindex="-1"><a class="header-anchor" href="#requested-brightness-percent-numeric" aria-hidden="true">#</a> Requested_brightness_percent (numeric)</h3><p>Value can be found in the published state on the <code>requested_brightness_percent</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>30</code> and the maximum value is <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),p={},b=(0,i(83744).Z)(p,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[d,(0,a.Wm)(i,{to:"/guide/usage/binding.html"},{default:(0,a.w5)((()=>[n])),_:1}),s]),o,(0,a._)("p",null,[c,(0,a.Wm)(i,{to:"/information/ota_updates.html"},{default:(0,a.w5)((()=>[h])),_:1}),l]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);