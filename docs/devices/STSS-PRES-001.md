---
title: "SmartThings STSS-PRES-001 control via MQTT"
description: "Integrate your SmartThings STSS-PRES-001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# SmartThings STSS-PRES-001

|     |     |
|-----|-----|
| Model | STSS-PRES-001  |
| Vendor  | SmartThings  |
| Description | Presence sensor |
| Exposes | battery, presence, linkquality |
| Picture | ![SmartThings STSS-PRES-001](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/STSS-PRES-001.jpg) |


## Notes

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/#device-specific-configuration)*

* `presence_timeout`: Timeout (in seconds) after which `presence: false` will be send when the device has not checked-in. By default 100 seconds, don't go lower then 30 seconds.



## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

