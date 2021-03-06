---
title: "Danalock V3-BTZB/V3-BTZBE control via MQTT"
description: "Integrate your Danalock V3-BTZB/V3-BTZBE via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# Danalock V3-BTZB/V3-BTZBE

|     |     |
|-----|-----|
| Model | V3-BTZB/V3-BTZBE  |
| Vendor  | Danalock  |
| Description | BT/ZB smartlock |
| Exposes | lock (state, lock_state), battery, linkquality |
| Picture | ![Danalock V3-BTZB/V3-BTZBE](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/V3-BTZB-V3-BTZBE.jpg) |


## Notes


### Pairing
If pairing failed, try the followings:
- Pairing it closer to the coordinator
- Connecting the CC2531 via an USB extension cable (to avoid interference)
- Replacing the batteries of the danalock.

### App
This device also come with an iOS app (Android as well but not tested). It is recommended to do the setups via the app for better control of the lock.



## Exposes

### Lock 
The current state of this lock is in the published state under the `state` property (value is `LOCK` or `UNLOCK`).
To control this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "LOCK"}` or `{"state": "UNLOCK"}`.
To read the current state of this lock publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.
This lock exposes a lock state which can be found in the published state under the `lock_state` property. It's not possible to read (`/get`) or write (`/set`) this value. The possible values are: `not_fully_locked`, `locked`, `unlocked`.

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

