"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[13944],{45719:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a={key:"v-7c38a328",path:"/devices/GZCGQ01LM.html",title:"Xiaomi GZCGQ01LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi GZCGQ01LM control via MQTT",description:"Integrate your Xiaomi GZCGQ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/GZCGQ01LM.md"}},57469:(e,i,t)=>{t.r(i),t.d(i,{default:()=>d});var a=t(66252);const n=(0,a.uE)('<h1 id="xiaomi-gzcgq01lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-gzcgq01lm" aria-hidden="true">#</a> Xiaomi GZCGQ01LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>GZCGQ01LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>MiJia light intensity sensor</td></tr><tr><td>Exposes</td><td>battery, illuminance, illuminance_lux, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/GZCGQ01LM.jpg" alt="Xiaomi GZCGQ01LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',4),l=(0,a.Uk)("How to use device type specific configuration"),c=(0,a.uE)('<ul><li><code>illuminance_lux_calibration</code>: Allows to manually calibrate illuminance values, e.g. <code>95</code> would take 95% to the illuminance reported by the device; default <code>100</code>. Calibration will take into affect with next report of device.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),r={},d=(0,t(83744).Z)(r,[["render",function(e,i){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(t,{to:"/guide/configuration/#device-specific-configuration"},{default:(0,a.w5)((()=>[l])),_:1})])]),c],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{for(const[t,a]of i)e[t]=a;return e}}}]);