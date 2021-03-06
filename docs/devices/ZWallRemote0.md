---
title: "Custom devices (DiY) ZWallRemote0 control via MQTT"
description: "Integrate your Custom devices (DiY) ZWallRemote0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Custom devices (DiY) ZWallRemote0

|     |     |
|-----|-----|
| Model | ZWallRemote0  |
| Vendor  | Custom devices (DiY)  |
| Description | [Matts Wall Switch Remote](https://github.com/mattlokes/ZWallRemote) |
| Exposes | action, linkquality |
| Picture | ![Custom devices (DiY) ZWallRemote0](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/ZWallRemote0.jpg) |


## Notes

None



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `toggle`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

