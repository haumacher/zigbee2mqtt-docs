---
title: "ORVIBO SM10ZW control via MQTT"
description: "Integrate your ORVIBO SM10ZW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# ORVIBO SM10ZW

|     |     |
|-----|-----|
| Model | SM10ZW  |
| Vendor  | ORVIBO  |
| Description | Door or window contact switch |
| Exposes | contact, battery_low, tamper, battery, linkquality |
| Picture | ![ORVIBO SM10ZW](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/SM10ZW.jpg) |


## Notes


### Interview fails
Interview fails for `modelId: 75a4bfe8ef9c4350830a25d13e3ab068` because
`ssIasZone:iasCieAddr` can not be read or written, all messages go to the coordinator
even without proper enrolment. Device correctly reports open or closed status.



## Exposes

### Contact (binary)
Indicates if the contact is closed (= true) or open (= false).
Value can be found in the published state on the `contact` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `false` contact is ON, if `true` OFF.

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

