# VideoAiComics

Ứng dụng tạo video truyện tranh từ truyện audio. Mỗi bộ truyện được chia thành nhiều chapter; mỗi chapter có audio, cảnh, hình ảnh, hook và video đầu ra riêng.

## Cấu trúc thư mục

```text
D:\\VideoAiComics/
├─ logo/
│  └─ logo-chinh.png
├─ skills/
│  ├─ image-generation.md
│  └─ video-generation.md
└─ projects/
   └─ <ten-bo-truyen>/
      ├─ series.json
      ├─ characters/
      │  └─ <character-id>/
      │     ├─ reference.png
      │     └─ states/
      ├─ backgrounds/
      ├─ music/
      ├─ thumbnail/
      ├─ content/
      ├─ merge-jobs/
      └─ chapters/
         └─ <chapter-id>/
            ├─ audio.mp3
            ├─ scenes.json
            ├─ timeline.md
            ├─ short_timeline.md
            ├─ hook/
            │  ├─ hook-video.mp4
            │  ├─ hook-image.png
            │  └─ prompt.txt
            ├─ images/
            └─ output.mp4
```

`logo/` nằm ngoài project và dùng chung cho mọi bộ truyện. `skills/` chứa hướng dẫn runtime cho AI tạo ảnh và video; quy tắc bắt buộc đọc skill được ghi trong [AGENTS.md](AGENTS.md).

## Cảnh và asset

`scenes.json` mô tả nội dung, nhân vật, trạng thái, lời thoại, thời lượng và ảnh của từng cảnh. ID cảnh không phụ thuộc thứ tự để có thể chèn cảnh mà không phải đổi tên file.

Ảnh mới của cùng một cảnh tăng phiên bản (`v01`, `v02`, ...), không ghi đè ảnh cũ. Thứ tự cảnh do trường `order` quyết định.

```json
{
  "id": "scene-a7f3",
  "order": 1,
  "description": "Dế Mèn đứng trước cửa hang.",
  "characters": ["de-men"],
  "character_states": {
    "de-men": "talking-v01.png"
  },
  "location": "hang-de-men",
  "speaker": "de-men",
  "speaker_focus": true,
  "dialogue": "Hôm nay ta sẽ đi khám phá.",
  "duration_seconds": 6,
  "image": "images/scene-a7f3-v01.png",
  "prompt": "Dế Mèn đứng trước cửa hang..."
}
```

## Timeline

Hệ thống đọc thời lượng audio và so sánh với `short_max_seconds` trong cấu hình project:

- Short: tạo `short_timeline.md`.
- Video dài: tạo `timeline.md`.

Timeline chứa thứ tự cảnh, thời lượng, speaker focus, chuyển động, phụ đề, nhạc và hiệu ứng.

## Speaker focus

Khi nhân vật nói, hệ thống có thể đưa nhân vật đó lên trước, zoom nhẹ và giảm độ nổi của các nhân vật khác. Các trạng thái nhân vật được lưu trong thư mục riêng của từng nhân vật để tái sử dụng giữa các chapter.

## Hook và ghép video

Mỗi chapter có thể có một hook trong thư mục `hook/`. Hook được đặt ở đầu video chapter.

Giao diện ghép video cho phép chọn nhiều video chapter, sắp xếp lại thứ tự và xuất một video tổng hợp như `full-story.mp4`, không xóa các video gốc.
