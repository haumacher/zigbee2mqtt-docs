---
title: "TuYa U86KCJ-ZP control via MQTT"
description: "Integrate your TuYa U86KCJ-ZP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# TuYa U86KCJ-ZP

|     |     |
|-----|-----|
| Model | U86KCJ-ZP  |
| Vendor  | TuYa  |
| Description | Smart 6 key scene wall switch |
| Exposes | action, linkquality |
| Picture | ![TuYa U86KCJ-ZP](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/U86KCJ-ZP.jpg) |


## Notes

None



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `scene_1`, `scene_2`, `scene_3`, `scene_4`, `scene_5`, `scene_6`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

