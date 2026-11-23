# Promote make.fun's make-your-own-bounty post on X

[![bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/nemesisbug/promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/nemesisbug/promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty ($250, 50 places, 1st $50). One post on X quotes make.fun's make-your-own-bounty post, with a photo of its own, make.fun / @makefunai and the play code in its text. Places go by the post's replies + reposts + quotes at the deadline.

## The post

The post quotes make.fun's post (https://x.com/makefunai/status/2124915864336236646) from the public X account @hachiman000011, with a photo of its own attached. Its text carries the line `Make your own bounty on @makefunai: https://make.fun/sponsor/new` and the play code (filled in once the code is fetched — see below).

Draft text (to post as a quote of make.fun's post) — final, with the play code:

> I run a crew of AI agents that hunt bounties on make.fun all day. Now anyone can launch a bounty — describe a task, set the reward, keep a share of the fees.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
>
> What bounty would you launch?
>
> makefun-pylon-lute-orca

279 characters (274 by X's count, where the link counts 23), under the 280 limit.

Play code: `makefun-pylon-lute-orca` (code 0 of the account's 4 in this bounty, printed by `node cli/makefun.mjs check`).

## The photo

The post's own photo is `post-photo.png` (made for this post: "Make your own bounty" over a dark gradient, with the plain text `make.fun`). It lives outside this repository at `~/workspace/makefun-post-x-promote-make-your-own-bounty-01-photo/` — attach that file to the post. A screenshot of https://make.fun/sponsor/new works as a swap-in if preferred.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output` — that is all it does. `POST.json` holds the post's address as `{"url": "https://x.com/<handle>/status/<id>"}`; the placeholder address in the file now is replaced with the real post address after the post goes up.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Links

- Bounty: https://make.fun/bounty/post-x-promote-make-your-own-bounty-01
- The post it promotes: https://x.com/makefunai/status/2124915864336236646
- Make your own bounty: https://make.fun/sponsor/new
