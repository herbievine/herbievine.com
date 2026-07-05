---
title: "Welcome Marvin: Replacing my VPS"
description: "VPS prices keep climbing, so I'm moving off mine and onto a Raspberry Pi 5."
publishedDate: 2026-07-05
tags: ["self-hosting", "raspberry-pi", "vps", "ssh"]
---

If you haven't seen the recent price hikes on VPSes, as of July 2026, a server with 8GB of RAM costs €42,59 a month. Yearly, that works out to about €511,08. Due to that, I justified the purchase of a RaspberryPi 5, so thanks Hetzner I guess...

I've actually wanted one for quite a while as I've been getting more interested in data sovereignty and self-hosting. It also turns out I've wanted to track indoor air quality, and as the Pi has GPIO pins, I can extend the capabilities of it with custom sensors. So, three birds with one stone as the saying goes.

But the indoor air quality is for another time, for now I want to get off my VPS, which I've separated into two parts:

- The setup: Booting, SSH'ing and Tailscale'ing
- The deployment: Dockerizing, Caddy'ing, and Tunneling

To boot the Pi, you need to install [Raspberry Pi Imager](https://www.raspberrypi.com/software/) which allows you to flash an SD card. I selected RaspberryPi OS Lite as I won't be needing the full OS.

Once that's configured, you'll want to insert the SD card and connect via SSH.

Did that work? Great, onwards.

Some basic security stuff before getting into the fun bit (or maybe this is the fun bit for you!):

- No password authentication
- No `root` login
- Custom SSH port
- Tailscale mesh network ([you will need a free account](https://tailscale.com))

I generated a script which does all of this: [harden.sh](https://gist.github.com/herbievine/8034c9852ea2d5853f015fd26b9ad1f5). It also installs and builds `btop`. You're welcome :)

So that's all related to networking and security. Of course if you're not familiar with SSH or Tailscale, take a few days to play around with it, it's quite simple once you get the hang of it.

Next step is deploying a project. I primarily wanted to migrate my [music app](https://github.com/herbievine/music), which is a media player built on top of the Spotify and YouTube API. [I had to dockerize it](https://github.com/herbievine/music/commit/727e4adea38a06a11d265717c8403befee0518b6), but once that was done I cloned it, ran it with docker, and we were good to go!

With the container running, the last piece of the puzzle is of course serving it to the world over the internet. You could expose port 80 and 443 on your Pi but you would have to mess around with port forwarding and exposing your public IP, not ideal...

So I landed on Cloudflare Tunnels with Caddy as a reverse proxy. It may not be the most "data sovereignty" choice (as all data goes through Cloudflare), but with my little knowledge in this area it seemed to be the easiest. Feel free to let me know if alternatives exist!

I've essentially got a Docker Compose which connects to the `edge` Docker Network. Music is also connected to this network which lets me forward the traffic from the tunnel to Caddy:

```yaml
# /opt/edge/cloudflared/config.yml
tunnel: <TUNNEL_ID>
credentials-file: /etc/cloudflared/creds.json

ingress:
  - hostname: music.herbievine.com
    service: http://caddy:80
  - hostname: music-api.herbievine.com
    service: http://caddy:80
  - service: http_status:404
```

Caddy then checks the `Host` header on the request and matches it to my music front-end or back-end. It looks something like this:

```
# /opt/edge/Caddyfile
{
  auto_https off # Cloudflare already terminates TLS, so Caddy just speaks plain HTTP
  admin off
}

http://music.herbievine.com {
  reverse_proxy music-web:80
}
http://music-api.herbievine.com {
  reverse_proxy music-api:3000
}
```

I've created [a repo](https://github.com/herbievine/raspberry-pi-edge) if you're also interested in checking out the Docker Compose file.

So all external HTTP stuff is handled in a single repo, quite conveniant to add or remove services in the future!

One thing worth mentioning: Cloudflare requires Advanced Certificate Manager ($10/month) to cover more than one level of subdomains (e.g. api.music.herbievine.com). If you don't want to have an extra subscription to pay, you can just give your backend domain a single domain, like `music-api.`.

I'll soon write about setting up Home Assistant with some cool Air Quality sensors...

Thanks for reading! :)
