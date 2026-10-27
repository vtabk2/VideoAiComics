# Character Generation Skill

Use this skill for recurring characters in the comic video.

## Project-driven style

- Read the project's visual style from `series.json` or its style configuration before generating.
- The project style has priority over any default in this skill.
- Apply the project's line quality, proportions, rendering method, palette, clothing direction, and level of realism consistently.
- If the project has no style configuration, create or request one before generating the character reference.
- Keep each character visually recognizable through silhouette, hairstyle, face shape, color palette, and accessories.

## Character assets

- Create a reference sheet before generating scene images.
- Keep face, hair, body proportions, skin tone, clothing details, and accessories consistent.
- Create transparent PNG assets for reusable states such as `neutral`, `talking`, `happy`, `sad`, `angry`, and `surprised`.
- Keep every state on the same canvas size, crop, camera distance, body framing, scale, and anchor point.
- Keep the eyes, head, shoulders, and torso aligned across states so switching cutouts does not jump.
- Normalize generated cutouts before use; do not rely on the image model to produce identical pixel bounds.
- Include front and three-quarter views when the character appears frequently.
- Save the prompt and reference information with the character asset.

