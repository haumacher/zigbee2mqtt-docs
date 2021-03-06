---
title: "Xiaomi DJT12LM control via MQTT"
description: "Integrate your Xiaomi DJT12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi DJT12LM

|     |     |
|-----|-----|
| Model | DJT12LM  |
| Vendor  | Xiaomi  |
| Description | Aqara T1 vibration sensor |
| Exposes | action, linkquality |
| Picture | ![Xiaomi DJT12LM](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/DJT12LM.jpg) |


## Notes

None



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `vibration`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

