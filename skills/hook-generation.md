# Hook Image Generation Skill

Use this skill for images that will become the opening hook of a comic video.

## Rules

- Compose for vertical video 9:16 unless the project explicitly uses another format.
- Show one clear main subject, action, conflict, or reaction that can be understood immediately.
- Use a strong readable pose and facial expression; avoid neutral opening frames.
- Keep the main subject large enough to remain clear after mobile rendering.
- Leave safe space near the top and bottom for subtitles, logo, and UI cropping.
- Leave visual space around the subject so the renderer can apply zoom, pan, shake, or parallax without cutting off the face.
- Prefer simple foreground, middle-ground, and background separation for easy motion effects.
- Use high contrast between the subject and background.
- Avoid crowded compositions, tiny details, text, speech bubbles, logos, watermarks, and UI elements unless explicitly requested.
- Keep recurring characters consistent with their reference and state assets.
- Save the prompt with the hook asset and output `hook-image.png` in the chapter's `hook/` directory.
