---
title: "Climax KP-23EL-ZBS-ACE control via MQTT"
description: "Integrate your Climax KP-23EL-ZBS-ACE via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Climax KP-23EL-ZBS-ACE

|     |     |
|-----|-----|
| Model | KP-23EL-ZBS-ACE  |
| Vendor  | Climax  |
| Description | Remote Keypad |
| Exposes | battery_low, tamper, action, linkquality |
| Picture | ![Climax KP-23EL-ZBS-ACE](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/KP-23EL-ZBS-ACE.jpg) |






## Exposes

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

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `emergency`, `panic`, `disarm`, `arm_all_zones`, `arm_day_zones`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

