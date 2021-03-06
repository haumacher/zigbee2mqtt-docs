---
title: "Xiaomi RTCGQ12LM control via MQTT"
description: "Integrate your Xiaomi RTCGQ12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Xiaomi RTCGQ12LM

|     |     |
|-----|-----|
| Model | RTCGQ12LM  |
| Vendor  | Xiaomi  |
| Description | Aqara T1 human body movement and illuminance sensor (illuminance not supported for now) |
| Exposes | occupancy, battery, occupancy_timeout, linkquality |
| Picture | ![Xiaomi RTCGQ12LM](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/RTCGQ12LM.jpg) |


## Notes

None



## Exposes

### Occupancy (binary)
Indicates whether the device detected occupancy.
Value can be found in the published state on the `occupancy` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` occupancy is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Occupancy_timeout (numeric)
Time in seconds till occupancy goes to false.
Value can be found in the published state on the `occupancy_timeout` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"occupancy_timeout": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"occupancy_timeout": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `65535`.
The unit of this value is `s`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

