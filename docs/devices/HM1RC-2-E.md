---
title: "HEIMAN HM1RC-2-E control via MQTT"
description: "Integrate your HEIMAN HM1RC-2-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# HEIMAN HM1RC-2-E

|     |     |
|-----|-----|
| Model | HM1RC-2-E  |
| Vendor  | HEIMAN  |
| Description | Smart remote controller |
| Exposes | battery, action, linkquality |
| Picture | ![HEIMAN HM1RC-2-E](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/HM1RC-2-E.jpg) |


## Notes

None



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `emergency`, `disarm`, `arm_partial_zones`, `arm_all_zones`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

