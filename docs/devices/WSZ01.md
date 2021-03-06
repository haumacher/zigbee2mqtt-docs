---
title: "J.XUAN WSZ01 control via MQTT"
description: "Integrate your J.XUAN WSZ01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# J.XUAN WSZ01

|     |     |
|-----|-----|
| Model | WSZ01  |
| Vendor  | J.XUAN  |
| Description | Wireless switch |
| Exposes | action, battery, linkquality |
| Picture | ![J.XUAN WSZ01](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/WSZ01.jpg) |


## Notes

None



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `release`, `single`, `double`, `hold`.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

