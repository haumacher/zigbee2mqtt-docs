---
title: "Leviton DG15A-1BW control via MQTT"
description: "Integrate your Leviton DG15A-1BW via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/DG15A-1BW.md)*

# Leviton DG15A-1BW

| Model | DG15A-1BW  |
| Vendor  | Leviton  |
| Description | Indoor Decora smart Zigbee 3.0 certified plug-in outlet |
| Exposes | switch (state), linkquality |
| Picture | ![Leviton DG15A-1BW](../../public/images/devices/DG15A-1BW.jpg) |

## Notes

None


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

