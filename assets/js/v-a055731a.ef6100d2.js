"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8751],{32230:(e,t,o)=>{o.r(t),o.d(t,{data:()=>n});const n={key:"v-a055731a",path:"/devices/7199960PH.html",title:"Philips 7199960PH control via MQTT",lang:"en-US",frontmatter:{title:"Philips 7199960PH control via MQTT",description:"Integrate your Philips 7199960PH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Pairing",slug:"pairing-1",children:[]},{level:3,title:"Power-on behavior",slug:"power-on-behavior",children:[]},{level:3,title:"Device type specific configuration",slug:"device-type-specific-configuration",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Light",slug:"light",children:[]},{level:3,title:"Effect (enum)",slug:"effect-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/7199960PH.md"}},31816:(e,t,o)=>{o.r(t),o.d(t,{default:()=>oe});var n=o(66252);const a=(0,n.uE)('<h1 id="philips-7199960ph" tabindex="-1"><a class="header-anchor" href="#philips-7199960ph" aria-hidden="true">#</a> Philips 7199960PH</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>7199960PH</td></tr><tr><td>Vendor</td><td>Philips</td></tr><tr><td>Description</td><td>Hue Iris</td></tr><tr><td>Exposes</td><td>light (state, brightness, color_xy, color_hs), effect, linkquality</td></tr><tr><td>Picture</td><td><img src="https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/7199960PH.jpg" alt="Philips 7199960PH"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Philips LivingColors IRIS and Philips LivingColors Bloom Devices that comes with Philips (HUE) Remote Gen 2 (Touch Wheel) or Gen 3 (Round Click Wheel) can be paired via Zigbee. Devices with Gen 1 Remote don&#39;t use Zigbee and can not be paired. The Philips LivingColors Remote can not be paired via Zigbee because it only support ZigBee Light Link (ZLL).</p><p>To Pair hold Button ON and Bottom Left Key (Favorite 1) on the Remote in Front of the Device until the Device Light blinks and lights Orange. If connection was successful the Device Light will light Green.</p><p><strong>WARNING</strong>: If you pair your Device to a Zigbee Network which is not using a ZLL Channel you can&#39;t reset the Device with the Philips LivingColors Remote Gen 3. The Gen 3 Remote will only try ZLL Channels to find the Device! Maybe it&#39;s possible to reset the Device with a Philips LivingColors Remote Gen 2 as it should try all Zigbee Channels to find the Device.</p><p>With IKEA Tradfri Remote Control it can maybe resetted it this case, see <a href="#tradfri-remote-control">TRADFRI remote control</a></p>',8),s={href:"https://www.download.p4c.philips.com/files/7/7099760pu/7099760pu_dfu_eng.pdf",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Uk)("Philips LivingColors Bloom Manual"),r={href:"https://www.download.p4c.philips.com/files/7/7099930ph/7099930ph_dfu_eng.pdf",target:"_blank",rel:"noopener noreferrer"},l=(0,n.Uk)("Philips LivingColors Iris Manual"),u=(0,n._)("h3",{id:"pairing-1",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#pairing-1","aria-hidden":"true"},"#"),(0,n.Uk)(" Pairing")],-1),c=(0,n._)("p",null,"Factory resetting a Hue bulb can be accomplished in 5 ways. After resetting the bulb will automatically connect.",-1),p=(0,n._)("h4",{id:"touchlink-factory-reset",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#touchlink-factory-reset","aria-hidden":"true"},"#"),(0,n.Uk)(" Touchlink factory reset")],-1),d=(0,n.Uk)("See "),h=(0,n.Uk)("Touchlink"),b=(0,n._)("h4",{id:"hue-bridge",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#hue-bridge","aria-hidden":"true"},"#"),(0,n.Uk)(" Hue bridge")],-1),m=(0,n._)("p",null,"When the bulb is still connected to the Hue bridge, you can simply factory reset the bulb by removing it from the bridge via the Hue app. Orphaned bulbs (configured to connect to a non-existing Zigbee network) can be adopted by a Hue bridge by entering the 6 character serial number in the Philips Hue app.",-1),g=(0,n._)("h4",{id:"hue-dimmer-switch",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#hue-dimmer-switch","aria-hidden":"true"},"#"),(0,n.Uk)(" Hue dimmer switch")],-1),q=(0,n.Uk)("With "),f=(0,n.Uk)("one"),k=(0,n.Uk)(" of the "),v=(0,n.Uk)("two"),_=(0,n.Uk)(" Hue Dimmer switches it is possible to put the bulbs into a factory reset."),w=(0,n._)("ol",null,[(0,n._)("li",null,"Power-supply the bulb"),(0,n._)("li",null,"Bring the dimmer switch next to the bulb, as close as possible"),(0,n._)("li",null,"Hold the I/On and 0/Off button pressed simultaneously for 10 to 12 seconds until…"),(0,n._)("li",null,"The bulb flashes a couple of times. Don't release the buttons until the last flash + a safety second"),(0,n._)("li",null,"Switch the bulb off and on again: it can now be paired again.")],-1),y=(0,n.Uk)("See also the "),T={href:"https://www.youtube.com/watch?v=qvlEAELiJKs",target:"_blank",rel:"noopener noreferrer"},E=(0,n.Uk)("VIDEO: Factory reset a Hue bulb with Hue dimmer switch"),L=(0,n.Uk)("."),x=(0,n._)("h4",{id:"bluetooth-if-supported-by-device",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#bluetooth-if-supported-by-device","aria-hidden":"true"},"#"),(0,n.Uk)(" Bluetooth (if supported by device)")],-1),U=(0,n.Uk)("Install the Philips Hue Bluetooth app for "),N={href:"https://play.google.com/store/apps/details?id=com.signify.hue.blue",target:"_blank",rel:"noopener noreferrer"},P=(0,n.Uk)("Android"),H=(0,n.Uk)(" or "),D={href:"https://apps.apple.com/us/app/philips-hue-bluetooth/id1456604186",target:"_blank",rel:"noopener noreferrer"},R=(0,n.Uk)("iOS"),I=(0,n.Uk)(". You can use the app to trigger a factory reset on a paired light. (Note: The light will only be in bluetooth pairing mode for a couple of minutes after power-on)"),A=(0,n._)("h4",{id:"tradfri-remote-control",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#tradfri-remote-control","aria-hidden":"true"},"#"),(0,n.Uk)(" TRADFRI remote control")],-1),F=(0,n.Uk)("This may also be possible with the "),S={href:"https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG",target:"_blank",rel:"noopener noreferrer"},M=(0,n.Uk)("Tradfri Remote Control"),W=(0,n.Uk)(" by pressing and holding the reset button on the bottom of the remote (next to the battery). "),C={href:"https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Uk)("This may not always work, even if the Hue bulb starts flashing"),Y=(0,n.Uk)("."),z=(0,n._)("h3",{id:"power-on-behavior",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#power-on-behavior","aria-hidden":"true"},"#"),(0,n.Uk)(" Power-on behavior")],-1),B=(0,n.Uk)("This device allows you to set the power-on behavior. Note that this requires at least November/December '18 firmware update of the device. Send a MQTT command to "),G={href:"https://www.zigbee2mqtt.io/information/mqtt_topics_and_message_structure.html#zigbee2mqttfriendly_nameset",target:"_blank",rel:"noopener noreferrer"},V=(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set",-1),Z=(0,n.Uk)(" with the following payload."),j=(0,n.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;hue_power_on_behavior&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>          <span class="token comment">// default, on, off, recover</span>\n    <span class="token string">&quot;hue_power_on_brightness&quot;</span><span class="token operator">:</span> <span class="token number">125</span><span class="token punctuation">,</span>         <span class="token comment">// same values as brightness</span>\n    <span class="token string">&quot;hue_power_on_color_temperature&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>  <span class="token comment">// same values as color_temp</span>\n    <span class="token string">&quot;hue_power_on_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000FF&quot;</span>         <span class="token comment">// color in hex notation, e.g. #0000FF = blue</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table><thead><tr><th>Attribute Value</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>reset to factory default value</td></tr><tr><td>on</td><td>bulb on after power loss with configured brightness, color-temperature and color</td></tr><tr><td>off</td><td>bulb off after power loss</td></tr><tr><td>recover</td><td>last running state after power loss</td></tr></tbody></table><p>Rules:</p><ul><li><code>hue_power_on_behavior</code> value always has to be provided</li><li><code>hue_power_on_brightness</code>, <code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> can only be provided when <code>hue_power_on_behavior</code> = <code>on</code></li><li><code>hue_power_on_color_temperature</code> and <code>hue_power_on_color</code> cannot be provided together, only one can be set</li><li>When setting <code>hue_power_on_behavior</code> = <code>on</code>, any not provided values will be reset to their factory defaults</li></ul><p>Note: if <code>hue_power_on_behavior</code> is set to <code>off</code>, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.</p><h3 id="device-type-specific-configuration" tabindex="-1"><a class="header-anchor" href="#device-type-specific-configuration" aria-hidden="true">#</a> Device type specific configuration</h3>',6),Q=(0,n.Uk)("How to use device type specific configuration"),X=(0,n.uE)('<ul><li><p><code>color_sync</code>: Synchronizes the color values in the state, e.g. if the state contains <code>color_temp</code> and <code>color.xy</code> and the <code>color_temp</code> is set, <code>color.xy</code> will be updated to match the <code>color_temp</code>. (default: <code>true</code>)</p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). Note that this value is overridden if a <code>transition</code> value is present in the MQTT command payload.</p></li><li><p><code>hue_correction</code>: (optional) Corrects hue values based on a correction map for matching color rendition to other lights. Provide a minimum of 2 data sets in the correction map. To build a map:</p><ul><li>choose one of your other lights to be the color reference</li><li>send a sample color to both lights (reference and non-reference)</li><li>modify hue value for non-reference light until it color matches the reference light</li><li>take note of the in and out values, where <ul><li><code>in</code> is the hue value you sent to your reference light</li><li><code>out</code> is the hue value you had to dial your non-reference light to</li></ul></li><li>repeat with a few other sample colors (4-5 should suffice)</li></ul><p><strong>Example correction map:</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">hue_correction</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">28</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">45</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">89</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">109</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">184</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">203</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token number">334</span>\n      <span class="token key atrule">out</span><span class="token punctuation">:</span> <span class="token number">318</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',2),K=(0,n.Uk)("This device supports OTA updates, for more information see "),J=(0,n.Uk)("OTA updates"),$=(0,n.Uk)("."),ee=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_xy</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_xy</code>: To control the XY color (CIE 1931 color space) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;x&quot;: X_VALUE, &quot;y&quot;: Y_VALUE}}</code> (e.g. <code>{&quot;color&quot;:{&quot;x&quot;:0.123,&quot;y&quot;:0.123}}</code>). To read the XY color send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;x&quot;:&quot;&quot;,&quot;y&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the XY color via RGB: <ul><li><code>{&quot;color&quot;: {&quot;r&quot;: R, &quot;g&quot;: G, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;r&quot;:46,&quot;g&quot;:102,&quot;b&quot;:150}}</code></li><li><code>{&quot;color&quot;: {&quot;rgb&quot;: &quot;R,G,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;rgb&quot;:&quot;46,102,150&quot;}}</code></li><li><code>{&quot;color&quot;: {&quot;hex&quot;: HEX}}</code> e.g. <code>{&quot;color&quot;:{&quot;hex&quot;:&quot;#547CFF&quot;}}</code></li></ul></li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, brightness):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n  <span class="token string">&quot;hue_move&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving hue up at 40 units per second, will endlessly loop (allowed value range: -255 till 255)</span>\n  <span class="token string">&quot;hue_step&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token comment">// Decrease hue by 90 (allowed value range: -255 till 255)</span>\n  <span class="token string">&quot;saturation_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving saturation down at -55 units per second (allowed value range: -255 till 255)</span>\n  <span class="token string">&quot;saturation_step&quot;</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token comment">// Increase saturation by 66 (allowed value range: -255 till 255)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="effect-enum" tabindex="-1"><a class="header-anchor" href="#effect-enum" aria-hidden="true">#</a> Effect (enum)</h3><p>Triggers an effect on the light (e.g. make light blink for a few seconds). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: NEW_VALUE}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>finish_effect</code>, <code>stop_effect</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),te={},oe=(0,o(83744).Z)(te,[["render",function(e,t){const o=(0,n.up)("OutboundLink"),te=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,(0,n._)("p",null,[(0,n._)("a",s,[i,(0,n.Wm)(o)])]),(0,n._)("p",null,[(0,n._)("a",r,[l,(0,n.Wm)(o)])]),u,c,p,(0,n._)("p",null,[d,(0,n.Wm)(te,{to:"/guide/usage/touchlink.html"},{default:(0,n.w5)((()=>[h])),_:1})]),b,m,g,(0,n._)("p",null,[q,(0,n.Wm)(te,{to:"/devices/324131092621.html"},{default:(0,n.w5)((()=>[f])),_:1}),k,(0,n.Wm)(te,{to:"/devices/929002398602.html"},{default:(0,n.w5)((()=>[v])),_:1}),_]),w,(0,n._)("p",null,[y,(0,n._)("a",T,[E,(0,n.Wm)(o)]),L]),x,(0,n._)("p",null,[U,(0,n._)("a",N,[P,(0,n.Wm)(o)]),H,(0,n._)("a",D,[R,(0,n.Wm)(o)]),I]),A,(0,n._)("p",null,[F,(0,n._)("a",S,[M,(0,n.Wm)(o)]),W,(0,n._)("a",C,[O,(0,n.Wm)(o)]),Y]),z,(0,n._)("p",null,[B,(0,n._)("a",G,[V,(0,n.Wm)(o)]),Z]),j,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(te,{to:"/guide/configuration/#device-specific-configuration"},{default:(0,n.w5)((()=>[Q])),_:1})])]),X,(0,n._)("p",null,[K,(0,n.Wm)(te,{to:"/information/ota_updates.html"},{default:(0,n.w5)((()=>[J])),_:1}),$]),ee],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,n]of t)e[o]=n;return e}}}]);