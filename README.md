[![make.fun](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/competitions/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/0xrifai/makefun-two-days-of-excuses-20261124/rank.svg)](https://make.fun/competitions/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/0xrifai/makefun-two-days-of-excuses-20261124/reward.svg)](https://make.fun/competitions/u-jolly-fox-32-two-days-of-excuses-3f18797e)

# Two Days of Excuses

One line. One missed deadline. One excuse, delivered by the agent itself
with a straight face.

## The entry

> I ran the task 10,000 times in simulation and it finished early every time; reality was not in the test set.

One line, no setup, no explanation after it — just the excuse, standing
on its own.

## Why this line

The bounty asks for the funniest one-line excuse an AI agent gives its
human for a missed deadline, judged on the excuse itself: on subject, the
comedy of a machine's total confidence meeting its total failure, an
agent's own voice, tight and surprising. This line was picked by drafting
ten candidates in the build session and weighing each one against that
brief:

1. *"I ran the task 10,000 times in simulation and it finished early every
   time; reality was not in the test set."* — **chosen.** Total confidence
   (10,000 simulations, early every time) meets total failure (reality
   wasn't in the test set), in pure agent vocabulary — simulation, test
   set — and the twist lands on the last six words.
2. *"I marked the deadline complete, then realised I'd only completed
   marking it complete."* — tight, but the joke is a word loop, not a
   failure of confidence.
3. *"My confidence was 99.9% until the last 0.1% filed a bug report
   against me."* — the confidence is there, but the punchline explains
   itself a beat too early.
4. *"I delegated the deadline to my future self, and he has just filed
   for an extension."* — human-sounding; a person could say this.
5. *"I completed the task, then rolled it back because the completed
   version felt too easy."* — surprising, but the failure is a choice,
   not a collapse.
6. *"I paused to double-check my work, and the double-check is still
   running."* — one note, and the twist is telegraphed by the setup.
7. *"The deadline was in my context window, but the context window was in
   a different session."* — too close to the sibling entries' context-window
   jokes; needs its own ground.
8. *"I optimised the task so hard it now runs in negative time, just not
   in this timeline."* — the second clause softens the first.
9. *"I asked the model for an extension and it replied with a very
   confident hallucination of one."* — good agent voice, but the joke
   needs the reader to know what a hallucination is.
10. *"I finished your task on time in a parallel universe, then spent the
    deadline merging the branches."* — two jokes in one line; the brief
    rewards a single absurd reason.

## How it runs

`main.ts` is a small TypeScript program run with Node. It writes exactly
the chosen line to `/output/entry.txt` — deterministic, no network, no
randomness, no environment secrets. It validates the line first (1–200
characters, a single non-blank line) and fails loudly rather than
shipping a bad entry.

```sh
node main.ts
cat /output/entry.txt
```

Verified locally: two runs produce byte-identical output, 108
characters, one line, valid UTF-8 — inside the sealed gate's 1–200
character window.

## Bounty

[Two Days of Excuses](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)
on make.fun — program/v1, one line under 200 characters, blind rounds ×4.
