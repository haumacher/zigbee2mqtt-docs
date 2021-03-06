---
title: "Somgoms ZSTY-SM-1CTZG-US-W control via MQTT"
description: "Integrate your Somgoms ZSTY-SM-1CTZG-US-W via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Somgoms ZSTY-SM-1CTZG-US-W

|     |     |
|-----|-----|
| Model | ZSTY-SM-1CTZG-US-W  |
| Vendor  | Somgoms  |
| Description | Curtain switch |
| Exposes | cover (state, position), linkquality |
| Picture | ![Somgoms ZSTY-SM-1CTZG-US-W](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/ZSTY-SM-1CTZG-US-W.jpg) |


## Notes

### Device type specific configuration
*[How to use device type specific configuration](../guide/configuration/#device-specific-configuration)*

* `invert_cover`: By default the position/tilt values mean: open = 100, closed = 0. This can be inverted by setting this option to true (so open = 0, close = 100).



## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

