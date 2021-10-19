---
sidebar: auto
---

# Switch to the dev branch

The Zigbee2MQTT dev branch contains the latest features, improvements and supported devices.
In case you want to try this, you can checkout the dev branch.

*NOTE: This branch is a development branch! It could be less stable than the release version!*

## Bare-metal
```bash
# Stop Zigbee2MQTT and go to directory
sudo systemctl stop zigbee2mqtt
cd /opt/zigbee2mqtt

# Backup configuration
cp -R data data-backup

# Update
git checkout HEAD -- npm-shrinkwrap.json
git fetch
git checkout dev # Change 'dev' to 'master' to switch back to the release version
git pull
npm ci

# Restore configuration
cp -R data-backup/* data
rm -rf data-backup

# Start Zigbee2MQTT
sudo systemctl start zigbee2mqtt
```

## Docker
Use Docker images postfixed with the `-dev` tag.

## Hass.io addon
Use the `edge` version.
