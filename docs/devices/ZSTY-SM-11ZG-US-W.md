---
title: "Somgoms ZSTY-SM-11ZG-US-W control via MQTT"
description: "Integrate your Somgoms ZSTY-SM-11ZG-US-W via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Somgoms ZSTY-SM-11ZG-US-W

|     |     |
|-----|-----|
| Model | ZSTY-SM-11ZG-US-W  |
| Vendor  | Somgoms  |
| Description | 1 gang switch |
| Exposes | switch (state), linkquality |
| Picture | ![Somgoms ZSTY-SM-11ZG-US-W](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/ZSTY-SM-11ZG-US-W.jpg) |


## Notes

None



## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
It's not possible to read (`/get`) this value.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

