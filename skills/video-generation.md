# Video Generation Skill

Use this skill for rendering comic scenes, chapter videos, hooks, and merged videos.

The current project render format is horizontal `16:9`; read `series.json` as the source of truth if another project uses a different format.

## Quy tắc prompt tạo video

- Không dùng tên riêng của nhân vật trong prompt video.
- Dùng vai trò, vị trí trong khung hình và đặc điểm nhận diện thay cho tên, ví dụ: `người phụ nữ ở tiền cảnh với tóc bob đen và kẹp tóc đỏ sẫm`.
- Prompt phải nói rõ nhân vật nào đang thực hiện hành động để tránh chuyển hành động sang người khác.
- Xác định tất cả nhân vật là nhân vật hư cấu nguyên bản; không dùng người thật, người nổi tiếng, tên riêng, likeness, identity hoặc yêu cầu tái tạo khuôn mặt chính xác.
- Với image-to-video, chỉ yêu cầu giữ thiết kế hư cấu, trang phục, vị trí và bố cục từ ảnh đầu vào; không yêu cầu giữ danh tính khuôn mặt của người thật.
- Nếu ảnh tham chiếu có thể giống người thật, dùng mô tả ngoại hình trực quan và ghi rõ nhân vật không dựa trên người thật.
- Video hook mặc định dài đúng `8 giây`, trừ khi người dùng yêu cầu thời lượng khác.
- Với video hook, ưu tiên một shot liên tục, chuyển động nhẹ và không tự sinh chữ, phụ đề, logo hoặc watermark.

## Priorities

1. Keep narration, scene timing, and dialogue synchronized.
2. Compose each scene from the background, character layers, speaker focus, and effects.
3. Keep motion subtle: use controlled zoom, pan, and small effects instead of abrupt movement.
4. Keep narration clear above music and sound effects; duck background audio during dialogue.
5. Preserve the project's resolution, aspect ratio, frame rate, visual style, and color treatment.

## Intro video

- Render the chapter video completely first, including its audio, scenes, subtitles, hook, and other configured content.
- Only after the rendered video is complete, check the repository-root `intro/` directory for a video file.
- If a valid intro video exists, prepend it to the completed rendered video and keep the intro before all chapter content.
- If `intro/` is missing or contains no valid video, keep the completed rendered video unchanged.
- Do not fail the render only because the optional `intro/` directory or its video is absent.
- Keep the intro and completed video compatible in resolution, aspect ratio, frame rate, video codec, and audio format before concatenation; normalize them when needed.

## Character state switching

- Use `upperbody` cutouts for speaking, narration reactions, speaker focus, and close emotional beats.
- Use `fullbody` cutouts for walking, entering, leaving, gestures, and transitions between locations.
- Character cutouts used within the same asset family must use the same canvas, scale, crop, and anchor point.
- Anchor `upperbody` by the lower torso/bottom edge; anchor `fullbody` by the feet baseline.
- Keep eyes, head, and shoulders aligned for `upperbody`; do not use hair height as the anchor.
- Normalize or align cutouts before rendering; otherwise a state change can look like a visual jump.

## Making expressions stand out

- Put the speaking character's aligned `upperbody` cutout on a foreground layer above the background.
- Increase the active speaker scale slightly, normally around 105–112%, with a short eased zoom instead of an abrupt jump.
- Raise local brightness or contrast on the active speaker and reduce the emphasis of other characters/background layers slightly.
- Match the cutout state to the text emotion: `talking` for dialogue, `happy` for cheerful lines, `sad` for vulnerable lines, `angry` for confrontation, and `surprised` for reveals.
- Use a small pop, head movement, or restrained shake only when the emotion supports it; keep the face readable.
- Keep the cutout visible long enough for the expression to register, especially on mobile screens.
- When the same image remains active, do not reset zoom or add a transition.

Example scene metadata:

```json
{
  "speaker": "tong-nhan-nhan",
  "emotion": "angry",
  "character_state": "upperbody/angry-v02.png",
  "speaker_focus": true,
  "focus_scale": 1.08,
  "focus_motion": "subtle-shake"
}
```

## Short or long video detection

- Read the actual audio duration before rendering.
- Classify the video as `short` when the audio duration is less than `180` seconds.
- Classify the video as `long` when the audio duration is equal to or greater than `180` seconds.
- Store the detected type and duration in the chapter metadata so the UI and renderer use the same decision.
- Allow an explicit user override when the automatic classification is not suitable.
- Generate `short_timeline.md` for `short` videos and `timeline.md` for `long` videos.
- Use only the timeline matching the detected or manually overridden type; do not silently mix both files.
- The timeline must define scene order, duration, speaker focus, motion, music, and sound effects.

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
- Verify that the final video has continuous audio and no empty scene.
