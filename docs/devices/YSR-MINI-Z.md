---
title: "TuYa YSR-MINI-Z control via MQTT"
description: "Integrate your TuYa YSR-MINI-Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# TuYa YSR-MINI-Z

|     |     |
|-----|-----|
| Model | YSR-MINI-Z  |
| Vendor  | TuYa  |
| Description | 2 in 1 dimming remote control and scene control |
| Exposes | battery, action, linkquality |
| Picture | ![TuYa YSR-MINI-Z](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/YSR-MINI-Z.jpg) |






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
The possible values are: `on`, `off`, `brightness_move_up`, `brightness_step_up`, `brightness_step_down`, `brightness_move_down`, `brightness_stop`, `color_temperature_step_down`, `color_temperature_step_up`, `1_single`, `1_double`, `1_hold`, `2_single`, `2_double`, `2_hold`, `3_single`, `3_double`, `3_hold`, `4_single`, `4_double`, `4_hold`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

