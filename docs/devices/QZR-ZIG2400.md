---
title: "Qmotion QZR-ZIG2400 control via MQTT"
description: "Integrate your Qmotion QZR-ZIG2400 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Qmotion QZR-ZIG2400

|     |     |
|-----|-----|
| Model | QZR-ZIG2400  |
| Vendor  | Qmotion  |
| Description | 5 channel remote |
| Exposes | action, position, linkquality |
| Picture | ![Qmotion QZR-ZIG2400](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/QZR-ZIG2400.jpg) |


## Notes

None



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `identify`.

### Position (numeric)
Value can be found in the published state on the `position` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

