---
title: "LeTV LeTV.8KEY control via MQTT"
description: "Integrate your LeTV LeTV.8KEY via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway."
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "## Notes"-Section. -->
<!-- !!!! -->

# LeTV LeTV.8KEY

|     |     |
|-----|-----|
| Model | LeTV.8KEY  |
| Vendor  | LeTV  |
| Description | 8key switch |
| Exposes | action, linkquality |
| Picture | ![LeTV LeTV.8KEY](https://psi-4ward.github.io/zigbee2mqtt-docs/images/devices/LeTV.8KEY.jpg) |


## Notes

None



## Exposes

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `hold_up`, `single_up`, `double_up`, `tripple_up`, `hold_down`, `single_down`, `double_down`, `tripple_down`, `hold_left`, `single_left`, `double_left`, `tripple_left`, `hold_right`, `single_right`, `double_right`, `tripple_right`, `hold_center`, `single_center`, `double_center`, `tripple_center`, `hold_back`, `single_back`, `double_back`, `tripple_back`, `hold_play`, `single_play`, `double_play`, `tripple_play`, `hold_voice`, `single_voice`, `double_voice`, `tripple_voice`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.
