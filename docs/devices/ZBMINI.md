---
title: "SONOFF ZBMINI control via MQTT"
description: "Integrate your SONOFF ZBMINI via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# SONOFF ZBMINI

|     |     |
|-----|-----|
| Model | ZBMINI  |
| Vendor  | SONOFF  |
| Description | Zigbee two way smart switch |
| Exposes | switch (state), linkquality |
| Picture | ![SONOFF ZBMINI](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/ZBMINI.jpg) |


## Notes


### Device stuck
In case of switching the coordinators a device may stuck in error state which is indicated by slowly blinking light (about 1 flash per second).
To switch a device to a pairing mode power it off for 10 sec. After power on it enters pairing mode automatically.



## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

