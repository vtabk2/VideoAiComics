# Image Generation Skill

Use this skill for all images used in the comic video, including characters, backgrounds, scenes, hooks, and thumbnails.

## Rules

- Follow the visual style, color palette, and quality settings defined by the project.
- Do not automatically force every scene image to the project's video aspect ratio. The video canvas may be 16:9 while an individual image must match the fixed panel slot where it will be displayed.
- Determine the target image ratio from the layout slot before writing the prompt. Generate the source image at the slot ratio, with extra resolution but the same ratio, so the renderer does not crop important faces, hands, props, or text-safe space.
- Use 16:9 only when the image fills the whole video canvas or is explicitly a full-canvas background/hook. For a panel, state exact target dimensions or ratio in the prompt, for example `1280x1040 (1.231:1)`, `580x510 (1.137:1)`, or `580x333 (1.742:1)`.
- The order of images is independent from their size: choose the large slot from story importance, then place it at the correct chronological slot. Never enlarge the first image merely because it appears first.
- Keep recurring characters consistent across chapters: face, hair, clothing, body shape, age, colors, and distinctive accessories.
- Treat every project character as an original fictional character, not a real person.
- Do not use names, likenesses, identities, or exact-face recreation of real people or public figures in prompts.
- Use reference images only for fictional design, visual style, clothing, pose, composition, or color; describe the character by visible traits instead of identity.
- If a reference may resemble a real person, avoid identity-preservation wording and add that the character is fictional and must not resemble any real person.
- When creating character states, preserve the same character design and generate reusable transparent assets for neutral, talking, and required emotions or poses.
- For recurring characters, also read and follow `skills/character-generation.md`.
- Keep recurring locations and props consistent unless the scene explicitly changes them.
- Use the chapter context and scene description; do not invent important story details.
- Do not add text, subtitles, speech bubbles, logos, watermarks, or UI elements unless explicitly requested.
- Keep the main subject clearly visible and leave enough space for later subtitles or motion effects.
- Use the same visual style for all scenes in one project, including hook and thumbnail assets unless a different style is explicitly specified.
- For hook images, also read and follow `skills/hook-generation.md` so the image is easy to animate into a video.
- Save the prompt used to generate the image with the chapter or asset data.
- Store the output in the correct project, chapter, hook, thumbnail, or scene directory.
- Use a stable scene ID that does not encode display order, plus a version, for example `scene-a7f3-v01.png` and `scene-a7f3-v02.png`.
- Never overwrite an existing image version; create a new version when regenerating or editing.
- Keep scene order in `scenes.json`, not in the filename, so scenes can be inserted or reordered without renaming files.
- If an image does not match the established character or style references, regenerate it instead of silently accepting the mismatch.
