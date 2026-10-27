# Xử lý text và audio

**created_at:**  
**started_at:**  
**status:** `todo`

## Nội dung chi tiết

- Đọc file text gốc trong `docs/<chapter-id>/<chapter-id>.txt`.
- Cho phép chọn phần nội dung để tạo chapter.
- Tạo `audio-script.md` gồm lời dẫn, lời thoại, người nói, cảm xúc và ngắt nghỉ.
- Tạo `audio-script-clean.txt` làm bản sạch cho người đọc hoặc TTS.
- Lược bỏ chi tiết lặp hoặc không liên quan nhưng giữ tình tiết chính, động cơ, manh mối và đoạn kết.
- Chuyển cảm xúc, tốc độ, âm lượng và khoảng ngắt thành tham số cho TTS.
- Hỗ trợ tách đoạn theo cảm xúc khi engine TTS không hỗ trợ emotion trực tiếp.
- Tạo bản tóm tắt và danh sách cảnh làm dữ liệu làm việc.
- Đọc thời lượng audio và đối chiếu với các cảnh.
- Xác định cảnh thiếu lời thoại, audio hoặc mốc thời gian.
- Không sửa file text gốc trong `docs/`.

## File ảnh hưởng

- `docs/`
- `chapters/<chapter-id>/audio-script.md`
- `chapters/<chapter-id>/audio-script-clean.txt`
- `voice.json`
- `chapters/<chapter-id>/scenes.json`
- `chapters/<chapter-id>/timeline.md`
- `chapters/<chapter-id>/short_timeline.md`
- `audio/` hoặc audio được gắn với chapter.

## Testcase

- Đọc được file text hợp lệ.
- Báo lỗi rõ ràng khi file text rỗng hoặc không tồn tại.
- Tạo được chapter từ một phần text đã chọn.
- Tạo được bản đọc audio có đầy đủ lời dẫn và lời thoại.
- Bản clean không chứa ghi chú kỹ thuật, nhãn người nói hoặc chỉ dẫn cảm xúc không cần đọc.
- Bản chuyển thể ngắn hơn bản gốc nhưng vẫn giữ đủ mạch truyện và các chi tiết cần cho payoff.
- Đoạn vui, buồn, giận hoặc căng thẳng được gửi đúng preset cảm xúc.
- Khi TTS không hỗ trợ emotion, các đoạn cảm xúc vẫn được tạo và nối đúng thứ tự.
- Giữ nguyên file gốc trong `docs/`.
- Đọc đúng thời lượng audio.
- Báo cảnh thiếu mốc thời gian hoặc audio không khớp.
