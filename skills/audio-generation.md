# Audio Generation Skill

Use this skill when turning `audio-script.md` into spoken audio.

## Rules

- Keep dialogue text separate from emotion and performance metadata.
- Apply the emotion, pace, volume, emphasis, and pause instructions for each segment.
- Prefer the TTS engine's native emotion or SSML support when available.
- If native emotion is unavailable, synthesize separate emotion segments and concatenate them in script order.
- Keep the character voice mapping from `voice.json` consistent across chapters.
- Do not read control tags aloud.
- Preserve pauses and dialogue order; do not silently drop a segment.
- Save intermediate segments and the final `audio.mp3` in the chapter directory.
