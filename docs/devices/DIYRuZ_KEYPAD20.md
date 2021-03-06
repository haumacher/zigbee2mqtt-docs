---
title: "DIYRuZ DIYRuZ_KEYPAD20 control via MQTT"
description: "Integrate your DIYRuZ DIYRuZ_KEYPAD20 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# DIYRuZ DIYRuZ_KEYPAD20

|     |     |
|-----|-----|
| Model | DIYRuZ_KEYPAD20  |
| Vendor  | DIYRuZ  |
| Description | [DiY 20 button keypad](http://modkam.ru/?p=1114) |
| Exposes | battery, linkquality |
| Picture | ![DIYRuZ DIYRuZ_KEYPAD20](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/DIYRuZ_KEYPAD20.jpg) |


## Notes

None



## Exposes

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

