"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[86223],{56670:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-7143649e",path:"/devices/RS-THP-MP-1.0.html",title:"Keen Home RS-THP-MP-1.0 control via MQTT",lang:"en-US",frontmatter:{title:"Keen Home RS-THP-MP-1.0 control via MQTT",description:"Integrate your Keen Home RS-THP-MP-1.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Pressure (numeric)",slug:"pressure-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/RS-THP-MP-1.0.md"}},32833:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var o=i(66252);const r=(0,o.uE)('<h1 id="keen-home-rs-thp-mp-1-0" tabindex="-1"><a class="header-anchor" href="#keen-home-rs-thp-mp-1-0" aria-hidden="true">#</a> Keen Home RS-THP-MP-1.0</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>RS-THP-MP-1.0</td></tr><tr><td>Vendor</td><td>Keen Home</td></tr><tr><td>Description</td><td>Temperature Sensor</td></tr><tr><td>Exposes</td><td>battery, temperature, humidity, pressure, voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/RS-THP-MP-1.0.jpg" alt="Keen Home RS-THP-MP-1.0"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',4),d=(0,o.Uk)("How to use device type specific configuration"),c=(0,o.uE)('<ul><li><p><code>temperature_precision</code>: Controls the precision of <code>temperature</code> values, e.g. <code>0</code>, <code>1</code> or <code>2</code>; default <code>2</code>. To control the precision based on the temperature value set it to e.g. <code>{30: 0, 10: 1}</code>, when temperature &gt;= 30 precision will be 0, when temperature &gt;= 10 precision will be 1. Precision will take into affect with next report of device.</p></li><li><p><code>temperature_calibration</code>: Allows to manually calibrate temperature values, e.g. <code>1</code> would add 1 degree to the temperature reported by the device; default <code>0</code>. Calibration will take into affect with next report of device.</p></li><li><p><code>humidity_precision</code>: Controls the precision of <code>humidity</code> values, e.g. <code>0</code>, <code>1</code> or <code>2</code>; default <code>2</code>. To control the precision based on the humidity value set it to e.g. <code>{80: 0, 10: 1}</code>, when humidity &gt;= 80 precision will be 0, when humidity &gt;= 10 precision will be 1. Precision will take into affect with next report of device.</p></li><li><p><code>pressure_precision</code>: Controls the precision of <code>pressure</code> values, e.g. <code>0</code> or <code>1</code>; default <code>1</code>. To control the precision based on the pressure value set it to e.g. <code>{1000: 0, 100: 1}</code>, when pressure &gt;= 1000 precision will be 0, when pressure &gt;= 100 precision will be 1. Precision will take into affect with next report of device.</p></li><li><p><code>pressure_calibration</code>: Allows to manually calibrate pressure values, e.g. <code>1</code> would add 1 to the pressure reported by the device; default <code>0</code>. Calibration will take into affect with next report of device.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pressure-numeric" tabindex="-1"><a class="header-anchor" href="#pressure-numeric" aria-hidden="true">#</a> Pressure (numeric)</h3><p>The measured atmospheric pressure. Value can be found in the published state on the <code>pressure</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>hPa</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),a={},n=(0,i(83744).Z)(a,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[r,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/#device-specific-configuration"},{default:(0,o.w5)((()=>[d])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);