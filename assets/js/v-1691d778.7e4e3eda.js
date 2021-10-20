"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8633],{56328:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r={key:"v-1691d778",path:"/devices/SNZB-02.html",title:"SONOFF SNZB-02 control via MQTT",lang:"en-US",frontmatter:{title:"SONOFF SNZB-02 control via MQTT",description:"Integrate your SONOFF SNZB-02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Reporting intervals",slug:"reporting-intervals",children:[]},{level:3,title:"Battery",slug:"battery",children:[]},{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SNZB-02.md"}},63401:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var r=i(66252);const a=(0,r.uE)('<h1 id="sonoff-snzb-02" tabindex="-1"><a class="header-anchor" href="#sonoff-snzb-02" aria-hidden="true">#</a> SONOFF SNZB-02</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SNZB-02</td></tr><tr><td>Vendor</td><td>SONOFF</td></tr><tr><td>Description</td><td>Temperature and humidity sensor</td></tr><tr><td>Exposes</td><td>battery, temperature, humidity, voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/SNZB-02.jpg" alt="SONOFF SNZB-02"></td></tr><tr><td>White-label</td><td>eWeLink RHK08</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode</p><h3 id="reporting-intervals" tabindex="-1"><a class="header-anchor" href="#reporting-intervals" aria-hidden="true">#</a> Reporting intervals</h3>',6),o=(0,r.Uk)("It has been reported, that the sensor reports humidity changes quite frequently (changes on 2nd digit level), but temperature changes are reported only once per hour or when temperature has changed > ~0.6°C. This results in a "),d=(0,r._)("em",null,"staircase",-1),n=(0,r.Uk)(" development in recorded temperatures and inhibits fine-granular climate control. No resolution is known so far. See also "),c={href:"https://community.home-assistant.io/t/sonoff-snzb-02-temp-sensor-reporting-interval/216315/7",target:"_blank",rel:"noopener noreferrer"},l=(0,r.Uk)("Homeassistant Community Forums"),s=(0,r._)("h3",{id:"battery",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#battery","aria-hidden":"true"},"#"),(0,r.Uk)(" Battery")],-1),u=(0,r._)("p",null,"Uses a CR2450 battery",-1),h=(0,r._)("h3",{id:"device-type-specific-configuration",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#device-type-specific-configuration","aria-hidden":"true"},"#"),(0,r.Uk)(" Device type specific configuration")],-1),p=(0,r.Uk)("How to use device type specific configuration"),m=(0,r.uE)('<ul><li><p><code>temperature_precision</code>: Controls the precision of <code>temperature</code> values, e.g. <code>0</code>, <code>1</code> or <code>2</code>; default <code>2</code>. To control the precision based on the temperature value set it to e.g. <code>{30: 0, 10: 1}</code>, when temperature &gt;= 30 precision will be 0, when temperature &gt;= 10 precision will be 1. Precision will take into affect with next report of device.</p></li><li><p><code>temperature_calibration</code>: Allows to manually calibrate temperature values, e.g. <code>1</code> would add 1 degree to the temperature reported by the device; default <code>0</code>. Calibration will take into affect with next report of device.</p></li><li><p><code>humidity_precision</code>: Controls the precision of <code>humidity</code> values, e.g. <code>0</code>, <code>1</code> or <code>2</code>; default <code>2</code>. To control the precision based on the humidity value set it to e.g. <code>{80: 0, 10: 1}</code>, when humidity &gt;= 80 precision will be 0, when humidity &gt;= 10 precision will be 1. Precision will take into affect with next report of device.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),g={},f=(0,i(83744).Z)(g,[["render",function(e,t){const i=(0,r.up)("OutboundLink"),g=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,(0,r._)("p",null,[o,d,n,(0,r._)("a",c,[l,(0,r.Wm)(i)])]),s,u,h,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Wm)(g,{to:"/guide/configuration/#device-specific-configuration"},{default:(0,r.w5)((()=>[p])),_:1})])]),m],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,r]of t)e[i]=r;return e}}}]);