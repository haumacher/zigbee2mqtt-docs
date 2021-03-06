---
title: "TuYa MIR-HE200-TY control via MQTT"
description: "Integrate your TuYa MIR-HE200-TY via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# TuYa MIR-HE200-TY

|     |     |
|-----|-----|
| Model | MIR-HE200-TY  |
| Vendor  | TuYa  |
| Description | Human presence sensor |
| Exposes | illuminance_lux, presence, motion, motion_speed, motion_direction, radar_sensitivity, radar_scene, linkquality |
| Picture | ![TuYa MIR-HE200-TY](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/MIR-HE200-TY.jpg) |






## Exposes

### Illuminance_lux (numeric)
Measured illuminance in lux.
Value can be found in the published state on the `illuminance_lux` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `lx`.

### Presence (binary)
Indicates whether the device detected presence.
Value can be found in the published state on the `presence` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` presence is ON, if `false` OFF.

### Motion (enum)
moving inside the range of the sensor.
Value can be found in the published state on the `motion` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `true`, `false`.

### Motion_speed (numeric)
Speed of movement.
Value can be found in the published state on the `motion_speed` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Motion_direction (enum)
direction of movement from the point of view of the radar.
Value can be found in the published state on the `motion_direction` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `standing still`, `moving forward`, `moving backward`.

### Radar_sensitivity (numeric)
sensitivity of the radar.
Value can be found in the published state on the `radar_sensitivity` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_sensitivity": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `10`.

### Radar_scene (enum)
presets for sensivity for presence and movement.
Value can be found in the published state on the `radar_scene` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"radar_scene": NEW_VALUE}`.
The possible values are: `default`, `area`, `toilet`, `bedroom`, `parlour`, `office`, `hotel`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

