# webvnc

## Development

Verify if a desktop server is running (`DISPLAY` env is set) and run:

```bash
docker compose -f compose.dev.yaml build
docker compose -f compose.dev.yaml up
```

Visit `http://<device-ip-address>:8080`.

Now you can modify files in the `src/` directory and the updated website will automatically reload.

## Notes

On Raspberry Pi 4, in `/boot/firmware/usercfg.txt` paste the following lines (1280x720 resolution):

```bash
hdmi_force_hotplug=1
hdmi_group=2
hdmi_mode=85
```