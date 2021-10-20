"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10440],{74243:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-7673761a",path:"/devices/PIR313-E.html",title:"OWON PIR313-E control via MQTT",lang:"en-US",frontmatter:{title:"OWON PIR313-E control via MQTT",description:"Integrate your OWON PIR313-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Tamper (binary)",slug:"tamper-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PIR313-E.md"}},41173:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var o=i(66252);const a=(0,o.uE)('<h1 id="owon-pir313-e" tabindex="-1"><a class="header-anchor" href="#owon-pir313-e" aria-hidden="true">#</a> OWON PIR313-E</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PIR313-E</td></tr><tr><td>Vendor</td><td>OWON</td></tr><tr><td>Description</td><td>Motion sensor</td></tr><tr><td>Exposes</td><td>occupancy, tamper, battery_low, illuminance, illuminance_lux, temperature, humidity, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/PIR313-E.jpg" alt="OWON PIR313-E"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',4),c=(0,o.Uk)("How to use device type specific configuration"),r=(0,o.uE)('<ul><li><p><code>illuminance_lux_precision</code>: Controls the precision of <code>illuminance_lux</code> values, e.g. <code>0</code> or <code>1</code>; default <code>1</code>. To control the precision based on the illuminance_lux value set it to e.g. <code>{1000: 0, 100: 1}</code>, when illuminance_lux &gt;= 1000 precision will be 0, when illuminance_lux &gt;= 100 precision will be 1. Precision will take into affect with next report of device.</p></li><li><p><code>illuminance_lux_calibration</code>: Allows to manually calibrate illuminance values, e.g. <code>95</code> would take 95% to the illuminance reported by the device; default <code>100</code>. Calibration will take into affect with next report of device.</p></li><li><p><code>temperature_precision</code>: Controls the precision of <code>temperature</code> values, e.g. <code>0</code>, <code>1</code> or <code>2</code>; default <code>2</code>. To control the precision based on the temperature value set it to e.g. <code>{30: 0, 10: 1}</code>, when temperature &gt;= 30 precision will be 0, when temperature &gt;= 10 precision will be 1. Precision will take into affect with next report of device.</p></li><li><p><code>temperature_calibration</code>: Allows to manually calibrate temperature values, e.g. <code>1</code> would add 1 degree to the temperature reported by the device; default <code>0</code>. Calibration will take into affect with next report of device.</p></li><li><p><code>humidity_precision</code>: Controls the precision of <code>humidity</code> values, e.g. <code>0</code>, <code>1</code> or <code>2</code>; default <code>2</code>. To control the precision based on the humidity value set it to e.g. <code>{80: 0, 10: 1}</code>, when humidity &gt;= 80 precision will be 0, when humidity &gt;= 10 precision will be 1. Precision will take into affect with next report of device.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),d={},n=(0,i(83744).Z)(d,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/#device-specific-configuration"},{default:(0,o.w5)((()=>[c])),_:1})])]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);