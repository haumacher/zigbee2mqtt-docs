---
title: "Custom devices (DiY) ti.router control via MQTT"
description: "Integrate your Custom devices (DiY) ti.router via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) ti.router

|     |     |
|-----|-----|
| Model | ti.router  |
| Vendor  | Custom devices (DiY)  |
| Description | Texas Instruments router |
| Exposes | linkquality |
| Picture | ![Custom devices (DiY) ti.router](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/ti.router.jpg) |


## Notes


### Firmware
This is a Texas Instruments CC1352P-2, CC2652RB or CC2652R flashed with the following firmware: https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_3.x.0/bin



## Exposes

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

