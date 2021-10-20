"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[25828],{25413:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-5cfcc1b9",path:"/devices/E1766.html",title:"IKEA E1766 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E1766 control via MQTT",description:"Integrate your IKEA E1766 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Deprecated click event",slug:"deprecated-click-event",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Binding",slug:"binding",children:[]},{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1766.md"}},19212:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var a=i(66252);const n=(0,a.uE)('<h1 id="ikea-e1766" tabindex="-1"><a class="header-anchor" href="#ikea-e1766" aria-hidden="true">#</a> IKEA E1766</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1766</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>TRADFRI open/close remote</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/E1766.jpg" alt="IKEA E1766"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event" aria-hidden="true">#</a> Deprecated click event</h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device\n    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the switch to Zigbee2MQTT by pressing the pair button (found under the back cover next to the battery) 4 times in a row. The red light on the front side should flash a few times and then turn off (it&#39;s more visible to see the light from the back). After a few seconds it turns back on and pulsate. When connected, the light turns off.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3>',10),d=(0,a.Uk)("The E1766 can be bound to groups using "),o=(0,a.Uk)("binding"),s=(0,a.Uk)(". It can only be bound to 1 group at a time and cannot be bound to a device."),c=(0,a._)("p",null,[(0,a.Uk)("By default this remote is bound to the default bind group which you first have to unbind it from. This can be done by sending to "),(0,a._)("code",null,"zigbee2mqtt/bridge/request/device/unbind"),(0,a.Uk)(" payload "),(0,a._)("code",null,'{"from": "DEVICE_FRIENDLY_NAME", "to": "default_bind_group"}'),(0,a.Uk)(". Right before executing the commands make sure to wake up the device by pressing a button on it.")],-1),r=(0,a._)("h3",{id:"device-type-specific-configuration",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#device-type-specific-configuration","aria-hidden":"true"},"#"),(0,a.Uk)(" Device type specific configuration")],-1),l=(0,a.Uk)("How to use device type specific configuration"),u=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("code",null,"legacy"),(0,a.Uk)(": Set to "),(0,a._)("code",null,"false"),(0,a.Uk)(" to disable the legacy integration (highly recommended!) (default: true)")])],-1),h=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),p=(0,a.Uk)("This device supports OTA updates, for more information see "),b=(0,a.Uk)("OTA updates"),g=(0,a.Uk)("."),m=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>close</code>, <code>open</code>, <code>stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),f={},v=(0,i(83744).Z)(f,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[d,(0,a.Wm)(i,{to:"/guide/usage/binding.html"},{default:(0,a.w5)((()=>[o])),_:1}),s]),c,r,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/#device-specific-configuration"},{default:(0,a.w5)((()=>[l])),_:1})])]),u,h,(0,a._)("p",null,[p,(0,a.Wm)(i,{to:"/information/ota_updates.html"},{default:(0,a.w5)((()=>[b])),_:1}),g]),m],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);