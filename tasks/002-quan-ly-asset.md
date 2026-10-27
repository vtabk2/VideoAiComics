# Quản lý asset

**created_at:**  
**started_at:**  
**status:** `todo`

## Nội dung chi tiết

- Quản lý reference và asset của từng nhân vật.
- Tách asset thành hai nhóm `upperbody` và `fullbody`.
- Dùng `upperbody` cho thoại và biểu cảm gần.
- Dùng `fullbody` cho đi lại, cử chỉ và chuyển cảnh.
- Chuẩn hóa canvas, crop, tỷ lệ và điểm neo trong từng nhóm.

## File ảnh hưởng

- `characters/<character-id>/reference.png`
- `characters/<character-id>/states/upperbody/`
- `characters/<character-id>/states/fullbody/`
- `skills/character-generation.md`
- `skills/video-generation.md`

## Testcase

- Asset upperbody có cùng kích thước và điểm neo.
- Asset fullbody có cùng kích thước và đường chân chân.
- Cảnh thoại chọn đúng asset upperbody.
- Cảnh đi lại hoặc chuyển cảnh chọn đúng asset fullbody.
- Chuyển state không làm nhân vật nhảy vị trí hoặc thay đổi tỷ lệ.
