# Image Generation Skill

Use this skill for all images used in the comic video, including characters, backgrounds, scenes, hooks, and thumbnails.

## Rules

- Follow the visual style, color palette, aspect ratio, and quality settings defined by the project.
- Keep recurring characters consistent across chapters: face, hair, clothing, body shape, age, colors, and distinctive accessories.
- When creating character states, preserve the same character design and generate reusable transparent assets for neutral, talking, and required emotions or poses.
- Keep recurring locations and props consistent unless the scene explicitly changes them.
- Use the chapter context and scene description; do not invent important story details.
- Do not add text, subtitles, speech bubbles, logos, watermarks, or UI elements unless explicitly requested.
- Keep the main subject clearly visible and leave enough space for later subtitles or motion effects.
- Use the same visual style for all scenes in one project, including hook and thumbnail assets unless a different style is explicitly specified.
- Save the prompt used to generate the image with the chapter or asset data.
- Store the output in the correct project, chapter, hook, thumbnail, or scene directory.
- Use a stable scene ID that does not encode display order, plus a version, for example `scene-a7f3-v01.png` and `scene-a7f3-v02.png`.
- Never overwrite an existing image version; create a new version when regenerating or editing.
- Keep scene order in `scenes.json`, not in the filename, so scenes can be inserted or reordered without renaming files.
- If an image does not match the established character or style references, regenerate it instead of silently accepting the mismatch.
