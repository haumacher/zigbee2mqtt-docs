---
title: "TuYa TS0601_switch_2_gang control via MQTT"
description: "Integrate your TuYa TS0601_switch_2_gang via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/TS0601_switch_2_gang.md)*

# TuYa TS0601_switch_2_gang

| Model | TS0601_switch_2_gang  |
| Vendor  | TuYa  |
| Description | 2 gang switch |
| Exposes | switch (state), linkquality |
| Picture | ![TuYa TS0601_switch_2_gang](../../public/images/devices/TS0601_switch_2_gang.jpg) |

## Notes


### Pairing
To pair press any button 5 times and on the 6th time hold it untill you hear beep, then release button and wait for pairing process.



## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

