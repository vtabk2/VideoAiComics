# Phân loại video

**created_at:**  
**started_at:**  
**status:** `todo`

## Nội dung chi tiết

- Đọc chính xác thời lượng audio bằng `ffprobe` hoặc bộ đọc media tương đương.
- Phân loại `short` khi audio dưới 180 giây.
- Phân loại `long` khi audio từ 180 giây trở lên.
- Chọn đúng `short_timeline.md` hoặc `timeline.md`.
- Lưu loại video và thời lượng đã phát hiện để giao diện và renderer dùng chung kết quả.

## File ảnh hưởng

- Cấu hình phân loại video.
- Logic đọc thời lượng audio.
- Metadata chapter.
- `skills/video-generation.md`

## Testcase

- Audio 179 giây được phân loại là `short`.
- Audio đúng 180 giây được phân loại là `long`.
- Audio dài hơn 180 giây được phân loại là `long`.
- Không có audio hoặc không đọc được thời lượng phải báo lỗi rõ ràng.
