# Audio Generation Skill

Use this skill when turning `audio-script.md` into spoken audio.

## Rules

- Keep dialogue text separate from emotion and performance metadata.
- Infer an initial emotion from narration context, dialogue wording, punctuation, and surrounding actions.
- Normalize inferred emotions to the available character states, such as `neutral`, `talking`, `happy`, `sad`, `angry`, and `surprised`.
- Prefer explicit emotion annotations over automatic inference; use scene context over isolated keywords.
- Fall back to `neutral` when the text does not provide enough evidence.
- When adapting source text, remove repeated descriptions, filler conversation, and details that do not affect plot, character motivation, cause-and-effect, or payoff.
- Preserve important events, character relationships, emotional turns, clues, and dialogue needed to understand the story.
- Do not remove a detail if it is later used as evidence, a reveal, a joke, or a setup for the ending.
- Keep the adaptation concise enough for audio while preserving a coherent beginning, escalation, confrontation, and ending hook.
- Apply the emotion, pace, volume, emphasis, and pause instructions for each segment.
- Prefer the TTS engine's native emotion or SSML support when available.
- If native emotion is unavailable, synthesize separate emotion segments and concatenate them in script order.
- Keep the character voice mapping from `voice.json` consistent across chapters.
- Do not read control tags aloud.
- Preserve pauses and dialogue order; do not silently drop a segment.
- Save intermediate segments and the final audio file in the chapter directory. WAV is preferred as the editing master; MP3 is optional for delivery. Store the actual path, format, and duration in chapter metadata under `audio_file`, `audio_format`, and `duration_seconds`.
