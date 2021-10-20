"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[46453],{5283:(e,t,r)=>{r.r(t),r.d(t,{data:()=>a});const a={key:"v-45d20362",path:"/devices/HSE2905E.html",title:"Datek HSE2905E control via MQTT",lang:"en-US",frontmatter:{title:"Datek HSE2905E control via MQTT",description:"Integrate your Datek HSE2905E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Should automatically support (only tested Kamstrup)",slug:"should-automatically-support-only-tested-kamstrup",children:[]},{level:3,title:"Configuring interface mode",slug:"configuring-interface-mode",children:[]},{level:3,title:"Not getting measurements",slug:"not-getting-measurements",children:[]},{level:3,title:"Where do I find this product",slug:"where-do-i-find-this-product",children:[]},{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Current_phase_b (numeric)",slug:"current-phase-b-numeric",children:[]},{level:3,title:"Voltage_phase_b (numeric)",slug:"voltage-phase-b-numeric",children:[]},{level:3,title:"Current_phase_c (numeric)",slug:"current-phase-c-numeric",children:[]},{level:3,title:"Voltage_phase_c (numeric)",slug:"voltage-phase-c-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HSE2905E.md"}},54529:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var a=r(66252);const i=(0,a.uE)('<h1 id="datek-hse2905e" tabindex="-1"><a class="header-anchor" href="#datek-hse2905e" aria-hidden="true">#</a> Datek HSE2905E</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HSE2905E</td></tr><tr><td>Vendor</td><td>Datek</td></tr><tr><td>Description</td><td>Datek Eva AMS HAN power-meter sensor</td></tr><tr><td>Exposes</td><td>power, energy, current, voltage, current_phase_b, voltage_phase_b, current_phase_c, voltage_phase_c, temperature, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/HSE2905E.jpg" alt="Datek HSE2905E"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory reset by removing the plastic cover and press &amp; hold the power button for 10 seconds. The LED is then starting to blink Red/Blue to indicate in pairing mode.</p><h3 id="should-automatically-support-only-tested-kamstrup" tabindex="-1"><a class="header-anchor" href="#should-automatically-support-only-tested-kamstrup" aria-hidden="true">#</a> Should automatically support (only tested Kamstrup)</h3><ul><li>Aidon</li><li>Kaifa</li><li>Kamstrup</li></ul><h3 id="configuring-interface-mode" tabindex="-1"><a class="header-anchor" href="#configuring-interface-mode" aria-hidden="true">#</a> Configuring interface mode</h3><p>There should be no need to configure into any interface mode as the Eva HAN should autodetect the correct mode.</p><h3 id="not-getting-measurements" tabindex="-1"><a class="header-anchor" href="#not-getting-measurements" aria-hidden="true">#</a> Not getting measurements</h3><p>In case you are not getting any measurements, it could be that your firmware is too old. If firmware are &lt; 0.4 either update fw via Eva Smart HUB or ask Datek for a replacement with min fw 0.4. Tested on 0.4.</p><h3 id="where-do-i-find-this-product" tabindex="-1"><a class="header-anchor" href="#where-do-i-find-this-product" aria-hidden="true">#</a> Where do I find this product</h3>',12),o={href:"https://shop.evasmart.no/produkt/smarthus/maleravleser#product-tabs1",target:"_blank",rel:"noopener noreferrer"},n=(0,a.Uk)("Product page"),d=(0,a._)("h3",{id:"device-type-specific-configuration",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#device-type-specific-configuration","aria-hidden":"true"},"#"),(0,a.Uk)(" Device type specific configuration")],-1),c=(0,a.Uk)("How to use device type specific configuration"),s=(0,a.uE)('<ul><li><code>temperature_precision</code>: Controls the precision of <code>temperature</code> values, e.g. <code>0</code>, <code>1</code> or <code>2</code>; default <code>2</code>. To control the precision based on the temperature value set it to e.g. <code>{30: 0, 10: 1}</code>, when temperature &gt;= 30 precision will be 0, when temperature &gt;= 10 precision will be 1. Precision will take into affect with next report of device.</li><li><code>temperature_calibration</code>: Allows to manually calibrate temperature values, e.g. <code>1</code> would add 1 degree to the temperature reported by the device; default <code>0</code>. Calibration will take into affect with next report of device.</li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',2),u=(0,a.Uk)("This device supports OTA updates, for more information see "),l=(0,a.Uk)("OTA updates"),h=(0,a.Uk)("."),p=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-b-numeric" aria-hidden="true">#</a> Current_phase_b (numeric)</h3><p>Instantaneous measured electrical current on phase B. Value can be found in the published state on the <code>current_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-b-numeric" aria-hidden="true">#</a> Voltage_phase_b (numeric)</h3><p>Measured electrical potential value on phase B. Value can be found in the published state on the <code>voltage_phase_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-c-numeric" aria-hidden="true">#</a> Current_phase_c (numeric)</h3><p>Instantaneous measured electrical current on phase C. Value can be found in the published state on the <code>current_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-c-numeric" aria-hidden="true">#</a> Voltage_phase_c (numeric)</h3><p>Measured electrical potential value on phase C. Value can be found in the published state on the <code>voltage_phase_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',21),m={},g=(0,r(83744).Z)(m,[["render",function(e,t){const r=(0,a.up)("OutboundLink"),m=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("p",null,[(0,a._)("a",o,[n,(0,a.Wm)(r)])]),d,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(m,{to:"/guide/configuration/#device-specific-configuration"},{default:(0,a.w5)((()=>[c])),_:1})])]),s,(0,a._)("p",null,[u,(0,a.Wm)(m,{to:"/information/ota_updates.html"},{default:(0,a.w5)((()=>[l])),_:1}),h]),p],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[r,a]of t)e[r]=a;return e}}}]);