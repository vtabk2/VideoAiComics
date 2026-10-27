# Video Generation Skill

Use this skill for rendering comic scenes, chapter videos, hooks, and merged videos.

## Priorities

1. Keep narration, scene timing, dialogue, and subtitles synchronized.
2. Compose each scene from the background, character layers, speaker focus, effects, and subtitles.
3. Keep motion subtle: use controlled zoom, pan, and small effects instead of abrupt movement.
4. Keep narration clear above music and sound effects; duck background audio during dialogue.
5. Preserve the project's resolution, aspect ratio, frame rate, visual style, and color treatment.

## Short or long video detection

- Read the actual audio duration before rendering.
- Classify the video as `short` when the audio duration is less than `180` seconds.
- Classify the video as `long` when the audio duration is equal to or greater than `180` seconds.
- Store the detected type and duration in the chapter metadata so the UI and renderer use the same decision.
- Allow an explicit user override when the automatic classification is not suitable.
- Generate `short_timeline.md` for `short` videos and `timeline.md` for `long` videos.
- Use only the timeline matching the detected or manually overridden type; do not silently mix both files.
- The timeline must define scene order, duration, speaker focus, motion, subtitles, music, and sound effects.

Example project setting:

The renderer may use different presets for each type, but the classification must come from the audio duration unless the user overrides it. The default Short limit is fixed at 180 seconds.

## Identical consecutive images

- If two consecutive scenes use the same image asset, do not add a transition between them.
- This rule applies only when the identical images are adjacent in timeline order; the same image appearing later after another scene is not considered consecutive.
- Do not use fade, slide, wipe, flash, or another transition that can cause a visual jump.
- Keep the image continuous and only update the timeline elements that changed, such as dialogue, subtitles, or audio.
- Do not reset the camera zoom or pan when the image remains the same.
- For the MVP, compare the resolved image path or asset ID. A later version may also use an image hash to detect duplicate files.

## Speaker focus

- Use the `speaker` and `character_states` values from `scenes.json`.
- Bring the active speaker forward, brighten it, and apply a gentle zoom when enabled.
- Reduce emphasis on non-speaking characters without creating a sudden jump.

## Validation before export

- Verify that every scene has a valid image, duration, and audio timing.
- Verify that subtitles do not cover important faces or leave the safe area.
- Verify that the final video has continuous audio and no empty scene.
