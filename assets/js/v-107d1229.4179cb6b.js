"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[18958],{81219:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o={key:"v-107d1229",path:"/devices/GZCGQ11LM.html",title:"Xiaomi GZCGQ11LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi GZCGQ11LM control via MQTT",description:"Integrate your Xiaomi GZCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Detection_period (numeric)",slug:"detection-period-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/GZCGQ11LM.md"}},35916:(e,i,t)=>{t.r(i),t.d(i,{default:()=>l});var o=t(66252);const a=(0,o.uE)('<h1 id="xiaomi-gzcgq11lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-gzcgq11lm" aria-hidden="true">#</a> Xiaomi GZCGQ11LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>GZCGQ11LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara T1 light intensity sensor</td></tr><tr><td>Exposes</td><td>battery, voltage, illuminance, illuminance_lux, detection_period, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/GZCGQ11LM.jpg" alt="Xiaomi GZCGQ11LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',4),n=(0,o.Uk)("How to use device type specific configuration"),c=(0,o.uE)('<ul><li><p><code>illuminance_lux_precision</code>: Controls the precision of <code>illuminance_lux</code> values, e.g. <code>0</code> or <code>1</code>; default <code>1</code>. To control the precision based on the illuminance_lux value set it to e.g. <code>{1000: 0, 100: 1}</code>, when illuminance_lux &gt;= 1000 precision will be 0, when illuminance_lux &gt;= 100 precision will be 1. Precision will take into affect with next report of device.</p></li><li><p><code>illuminance_lux_calibration</code>: Allows to manually calibrate illuminance values, e.g. <code>95</code> would take 95% to the illuminance reported by the device; default <code>100</code>. Calibration will take into affect with next report of device.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="detection-period-numeric" tabindex="-1"><a class="header-anchor" href="#detection-period-numeric" aria-hidden="true">#</a> Detection_period (numeric)</h3><p>Time interval in seconds to report after light changes. Value can be found in the published state on the <code>detection_period</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;detection_period&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_period&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>59</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),d={},l=(0,t(83744).Z)(d,[["render",function(e,i){const t=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(t,{to:"/guide/configuration/#device-specific-configuration"},{default:(0,o.w5)((()=>[n])),_:1})])]),c],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{for(const[t,o]of i)e[t]=o;return e}}}]);