---
title: "OpenLumi GWRJN5169 control via MQTT"
description: "Integrate your OpenLumi GWRJN5169 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# OpenLumi GWRJN5169

|     |     |
|-----|-----|
| Model | GWRJN5169  |
| Vendor  | OpenLumi  |
| Description | [Lumi Router (JN5169)](https://github.com/igo-r/Lumi-Router-JN5169) |
| Exposes | device_temperature, linkquality |
| Picture | ![OpenLumi GWRJN5169](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/GWRJN5169.jpg) |


## Notes


### Firmware
Zigbee Router for __Xiaomi DGNWG05LM__ and __Aqara ZHWG11LM__ gateways.

Open source firmware can be found here: [Github](https://github.com/igo-r/Lumi-Router-JN5169)



## Exposes

### Device_temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

