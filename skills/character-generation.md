# Character Generation Skill

Use this skill for recurring characters in the comic video.

## Project-driven style

- Read the project's visual style from `series.json` or its style configuration before generating.
- Characters must be original fictional designs. Never prompt for a real person's identity, likeness, exact face, or a public figure.
- Use visual descriptors such as hairstyle, age range, clothing, expression, body shape, and color palette instead of proper names or identity claims.
- When using a reference, state that it is a fictional design/style reference and must not be copied as a real person's likeness.
- The project style has priority over any default in this skill.
- Apply the project's line quality, proportions, rendering method, palette, clothing direction, and level of realism consistently.
- If the project has no style configuration, create or request one before generating the character reference.
- Keep each character visually recognizable through silhouette, hairstyle, face shape, color palette, and accessories.

## Character assets

- Create a reference sheet before generating scene images.
- Keep face, hair, body proportions, skin tone, clothing details, and accessories consistent.
- Create two asset families for each recurring character:
  - `upperbody/`: waist-up or chest-up cutouts for dialogue, speaker focus, and facial reactions.
  - `fullbody/`: full-body cutouts for walking, entering, leaving, gestures, and scene transitions.
- Upper-body states such as `neutral`, `talking`, `happy`, `sad`, `angry`, and `surprised` must share one canvas, crop, camera distance, scale, and anchor point.
- Full-body states must share one canvas, camera distance, scale, and foot baseline.
- Anchor `upperbody` cutouts by the lower torso/bottom baseline; do not align them by the top of the hair.
- Anchor `fullbody` cutouts by the feet baseline.
- Keep the eyes, head, shoulders, torso, and feet aligned within each asset family so switching cutouts does not jump.
- Normalize generated cutouts before use; do not rely on the image model to produce identical pixel bounds.
- Include front and three-quarter views when the character appears frequently.
- Save the prompt and reference information with the character asset.

