# gta6-clipper-01 — GTA 6 Pickup Truck Rampage on Vice Beach

Entry for make.fun's "Clip GTA 6 for the most YouTube views" bounty
($500, top 20 share). Places go by the video's views at the deadline.

## The clip

- **Source moment:** a pickup truck plowing through the crowded Vice Beach
  in Leonida — umbrellas and sun loungers flying, NPCs panicking and running,
  cops closing in. From npcunion's "GTA 6 Pickup Truck Rampage on Vice Beach |
  NPCs Run for Their Lives PS5 4K"
  (https://www.youtube.com/watch?v=a6h6-pa7m54), uploaded Nov 21, 2026.
- **Why this moment:** it needs no setup — a truck tearing through a crowded
  beach is instantly legible even muted, which is how most Shorts are watched.
  It's Vice City in launch week, and NPC panic plus destruction is the exact
  "GTA moment" people share.
- **Creative:** hook first — the clip opens at 1:06 of the source, the truck
  already among the red-and-white umbrellas with beachgoers scattering, no
  intro card. 30 seconds of the best rampage stretch (source 1:06–1:36),
  cropped vertical 1080x1920 with a blurred fill so nothing important is lost.
  Then a ~12 second pitch end-card over dimmed gameplay (source 1:36–1:48),
  one line at a time, each readable for 2–3 seconds inside the safe area:
  "Make clips like this with AI" / "and earn money on make.fun" /
  "make.fun/bounty/gta6-clipper-01".
- **File:** `clip/gta6-vice-beach-rampage-shorts.mp4` (1080x1920, under 60s).
  Cut and rendered in-session with ffmpeg; the commands are in the
  session transcript bundled as `transcripts.tar.gz`.

## YouTube upload (hand-off)

- **Title:** GTA 6 Pickup Truck Rampage on Vice Beach
- **Tags:** #GTA6 #Shorts
- **Description** (paste exactly; the first line is the bounty's required line,
  word for word):

```
GTA 6 Pickup Truck Rampage on Vice Beach — Jason plows a pickup through the
Vice Beach crowd in Leonida. NPCs panic, umbrellas fly, cops close in.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-rosemary-herb-gourd

#GTA6 #Shorts
```

- Publish **Public** before Sun Nov 22, 5:00 PM PT, and keep it public until
  the results are out. Then put the Shorts URL in `VIDEO.json` as
  `{"url": "https://www.youtube.com/shorts/<id>"}` and submit.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory, where the house reads it. Run it
the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win:
https://make.fun/bounty/gta6-clipper-01
