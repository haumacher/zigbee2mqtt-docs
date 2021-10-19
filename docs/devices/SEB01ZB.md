---
title: "Feibit SEB01ZB control via MQTT"
description: "Integrate your Feibit SEB01ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Feibit SEB01ZB

|     |     |
|-----|-----|
| Model | SEB01ZB  |
| Vendor  | Feibit  |
| Description | SOS button |
| Exposes | sos, battery_low, tamper, battery, linkquality |
| Picture | ![Feibit SEB01ZB](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/SEB01ZB.jpg) |


## Notes

None



## Exposes

### Sos (binary)
SOS alarm.
Value can be found in the published state on the `sos` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` sos is ON, if `false` OFF.

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

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
