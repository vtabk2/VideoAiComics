# Hook Image Generation Skill

Use this skill for images that will become the opening hook of a comic video.

Video hook mặc định có thời lượng `8 giây` và khung ngang `16:9` theo cấu hình hiện tại của project.

Khi viết prompt tạo video hook, không dùng tên riêng của nhân vật. Hãy mô tả bằng vai trò, vị trí, ngoại hình và hành động cụ thể để model không nhầm người thực hiện hành động.

Nhân vật trong hook phải được mô tả là nhân vật hư cấu nguyên bản. Không dùng yêu cầu giữ nguyên danh tính, likeness hoặc khuôn mặt chính xác của người thật; chỉ giữ thiết kế hư cấu, bố cục, trang phục và hành động cần thiết.

## Rules

- Compose for the project's configured video format. The current project uses horizontal 16:9.
- Show one clear main subject, action, conflict, or reaction that can be understood immediately.
- Use a strong readable pose and facial expression; avoid neutral opening frames.
- Keep the main subject large enough to remain clear after mobile rendering.
- Leave safe space near the top and bottom for subtitles and logo, plus side margin for 16:9 cropping and motion.
- Leave visual space around the subject so the renderer can apply horizontal pan, zoom, shake, or parallax without cutting off the face.
- Prefer simple foreground, middle-ground, and background separation for easy motion effects.
- Use high contrast between the subject and background.
- Avoid crowded compositions, tiny details, text, speech bubbles, logos, watermarks, and UI elements unless explicitly requested.
- Keep recurring characters consistent with their reference and state assets.
- Save the prompt with the hook asset and output `hook-image.png` in the chapter's `hook/` directory.
