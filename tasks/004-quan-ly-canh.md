# Quản lý cảnh

**created_at:**  
**started_at:**  
**status:** `todo`

## Nội dung chi tiết

- Lưu người nói, cảm xúc và trạng thái cutout được chọn cho từng cảnh.
- Chọn đúng nhóm `upperbody` hoặc `fullbody` theo loại shot.
- Cho phép người dùng sửa cảm xúc hoặc thay cutout mà AI đã đề xuất.
- Bật speaker focus cho nhân vật đang nói.
- Giữ thứ tự cảnh độc lập với tên file asset.

## File ảnh hưởng

- `chapters/<chapter-id>/scenes.json`
- `characters/<character-id>/states/`
- `skills/audio-generation.md`
- `skills/video-generation.md`

## Testcase

- Câu thoại giận dữ được đề xuất `angry`.
- Câu thoại vui vẻ được đề xuất `happy`.
- Cảnh không đủ ngữ cảnh dùng `neutral`.
- Người dùng có thể sửa emotion và thay asset trước khi render.
