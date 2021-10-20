"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[4651],{54602:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-04d6d1cd",path:"/devices/STS-PRS-251.html",title:"SmartThings STS-PRS-251 control via MQTT",lang:"en-US",frontmatter:{title:"SmartThings STS-PRS-251 control via MQTT",description:"Integrate your SmartThings STS-PRS-251 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]},{level:3,title:"Let the device beep.",slug:"let-the-device-beep",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Presence (binary)",slug:"presence-binary",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Beep (enum)",slug:"beep-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/STS-PRS-251.md"}},5588:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var a=i(66252);const n=(0,a.uE)('<h1 id="smartthings-sts-prs-251" tabindex="-1"><a class="header-anchor" href="#smartthings-sts-prs-251" aria-hidden="true">#</a> SmartThings STS-PRS-251</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>STS-PRS-251</td></tr><tr><td>Vendor</td><td>SmartThings</td></tr><tr><td>Description</td><td>Arrival sensor</td></tr><tr><td>Exposes</td><td>battery, presence, action, beep, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/STS-PRS-251.jpg" alt="SmartThings STS-PRS-251"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',4),d=(0,a.Uk)("How to use device type specific configuration"),s=(0,a.uE)('<ul><li><code>legacy</code>: Set to <code>false</code> to disable the legacy integration (highly recommended!) (default: true)</li></ul><h3 id="let-the-device-beep" tabindex="-1"><a class="header-anchor" href="#let-the-device-beep" aria-hidden="true">#</a> Let the device beep.</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;beep&quot;</span><span class="token operator">:</span> <span class="token number">5</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>presence_timeout</code>: Timeout (in seconds) after which <code>presence: false</code> will be send when the device has not checked-in. By default 100 seconds, don&#39;t go lower then 30 seconds.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>beeping</code>.</p><h3 id="beep-enum" tabindex="-1"><a class="header-anchor" href="#beep-enum" aria-hidden="true">#</a> Beep (enum)</h3><p>Trigger beep for x seconds. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;beep&quot;: NEW_VALUE}</code>. The possible values are: <code>2</code>, <code>5</code>, <code>10</code>, <code>15</code>, <code>30</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),o={},c=(0,i(83744).Z)(o,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/#device-specific-configuration"},{default:(0,a.w5)((()=>[d])),_:1})])]),s],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);