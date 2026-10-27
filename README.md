# VideoAiComics

Ứng dụng tạo video truyện tranh từ truyện audio. Mỗi bộ truyện được chia thành nhiều chapter; mỗi chapter có audio, cảnh, hình ảnh, hook và video đầu ra riêng.

## Cấu trúc thư mục

```text
VideoAiComics/
├─ logo/
│  └─ logo-chinh.png
├─ skills/
│  ├─ image-generation.md
│  ├─ audio-generation.md
│  ├─ character-generation.md
│  ├─ hook-generation.md
│  └─ video-generation.md
├─ web-ui/
├─ run-web-editor.bat
└─ projects/
   └─ <ten-bo-truyen>/
      ├─ series.json
      ├─ docs/
      │  └─ <chapter-id>/
      │     └─ <chapter-id>.txt
      ├─ characters/
      │  └─ <character-id>/
      │     ├─ reference.png
      │     └─ states/
      │        ├─ upperbody/
      │        └─ fullbody/
      ├─ backgrounds/
      ├─ music/
      ├─ voice.json
      ├─ thumbnail/
      ├─ content/
      ├─ merge-jobs/
      └─ chapters/
         └─ <chapter-id>/
            ├─ audio.mp3
            ├─ audio-script.md
            ├─ audio-script-clean.txt
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

`docs/` nằm bên trong từng project. Mỗi chapter có một thư mục riêng chứa text gốc tại `docs/<chapter-id>/<chapter-id>.txt`; tên file luôn gắn với chapter để dễ tìm và quản lý.

## Quy trình từ text đến video

1. Người dùng đưa file text truyện vào `docs/<chapter-id>/<chapter-id>.txt`.
2. Giao diện đọc text gốc và cho chọn phần cần làm thành chapter.
3. Hệ thống tạo `audio-script.md` từ text gốc, gồm lời dẫn, lời thoại, người nói, cảm xúc và ngắt nghỉ.
4. Người dùng kiểm tra/chỉnh sửa kịch bản đọc audio.
5. Hệ thống tạo `audio-script-clean.txt`, là bản sạch để người đọc hoặc TTS sử dụng.
6. Hệ thống tạo bản tóm tắt và chia nội dung thành các cảnh.
7. Hệ thống đối chiếu cảnh với audio của chapter nếu audio đã có.
8. AI đọc skill phù hợp để tạo hoặc chọn nhân vật, trạng thái, background, ảnh cảnh và hook.
9. Hệ thống tạo `short_timeline.md` hoặc `timeline.md` theo thời lượng audio.
10. Người dùng xem preview, chỉnh timeline nếu cần và render video chapter.
11. Video chapter được lưu vào output; các chapter có thể được chọn để ghép thành video tổng hợp.

## Cảm xúc giọng đọc

`audio-script.md` giữ các chỉ dẫn cảm xúc riêng với nội dung cần đọc. Ví dụ:

```text
[NARRATOR][emotion=tense][pace=fast]
Cánh cửa từ từ mở ra.

[NHAN_VAT_A][emotion=angry][volume=high]
Ngươi đã lừa ta!

[pause=0.6s]
```

Hệ thống xử lý theo khả năng của engine TTS:

- Nếu TTS hỗ trợ emotion hoặc SSML, chuyển các tag thành tham số hoặc SSML.
- Nếu TTS không hỗ trợ, chia script thành các đoạn theo cảm xúc, tạo từng đoạn với preset phù hợp rồi nối lại.
- Khi biên tập từ text gốc, có thể lược bỏ mô tả lặp, hội thoại đệm và chi tiết không ảnh hưởng đến diễn biến; phải giữ lại tình tiết, động cơ, manh mối và chi tiết phục vụ đoạn kết.
- `audio-script-clean.txt` chỉ chứa phần lời cần đọc; tag cảm xúc không được đọc thành tiếng.
- Cấu hình giọng mặc định và mapping nhân vật nằm trong `voice.json` của project.

File trong `docs/` là nguồn gốc và không bị sửa trong quá trình xử lý. Các bản tóm tắt, cảnh và timeline là dữ liệu làm việc trong thư mục chapter.

## Giao diện sử dụng

VideoAiComics được sử dụng qua một Web UI local. Giao diện dự kiến gồm các khu vực:

- Project và chapter.
- Thư viện asset.
- Cảnh và timeline.
- Hook, preview và render.
- Theo dõi trạng thái render.
- Ghép nhiều video chapter.

Kiến trúc giao diện tham khảo mô hình Web UI trong `D:\Android\CodeTA\GenerateVideo`, gồm Node.js server, HTML, JavaScript, CSS và file chạy trên Windows. Giao diện của VideoAiComics sẽ dùng dữ liệu và quy trình riêng trong README này.

## Quy tắc đặt tên project

Tên hiển thị được phép giữ tiếng Việt có dấu, nhưng ID và thư mục project phải dùng dạng slug:

- Chuyển thành chữ thường.
- Bỏ dấu tiếng Việt.
- Thay khoảng trắng và ký tự không hợp lệ bằng một dấu `-`.
- Gộp nhiều dấu `-` liên tiếp thành một dấu.
- Không để dấu `-` ở đầu hoặc cuối.

Ví dụ:

```text
Tên hiển thị: Dế Mèn phiêu lưu ký
Project ID:   de-men-phieu-luu-ky
Thư mục:      projects/de-men-phieu-luu-ky/
```

Tên hiển thị và Project ID được lưu riêng để giao diện vẫn hiển thị đúng tên tiếng Việt.

Project mẫu này đang khóa phong cách `photorealistic-cinematic-lifestyle`. Reference nhân vật đang dùng là `characters/character-reference-sheet-v02.png`; mọi trạng thái và cảnh mới phải bám theo reference này.

Toàn bộ video của project dùng khung ngang `16:9`, được cấu hình trong `series.json`. Ảnh cảnh, hook, thumbnail và video đầu ra phải giữ cùng tỷ lệ này; các cutout nhân vật trong suốt vẫn giữ canvas riêng theo từng nhóm asset.

## Cảnh và asset

`scenes.json` mô tả nội dung, nhân vật, trạng thái, lời thoại, thời lượng và ảnh của từng cảnh. ID cảnh không phụ thuộc thứ tự để có thể chèn cảnh mà không phải đổi tên file.

Khi xử lý text, hệ thống phân tích lời thoại và ngữ cảnh để đề xuất biểu cảm cho nhân vật. Chỉ dẫn cảm xúc viết rõ trong script được ưu tiên; nếu không có, hệ thống dùng hành động, từ ngữ và dấu câu để suy luận. Kết quả được lưu vào cảnh để chọn đúng cutout:

```json
{
  "speaker": "tong-nhan-nhan",
  "emotion": "angry",
  "character_state": "characters/tong-nhan-nhan/states/angry-v01.png",
  "speaker_focus": true
}
```

Phong cách hình ảnh là cấu hình riêng của từng project trong `series.json` hoặc file style của project. Skill chỉ cung cấp quy tắc tạo asset nhất quán, không ép mọi truyện dùng cùng một phong cách.

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

Hệ thống đọc thời lượng audio và phân loại theo quy tắc cố định:

- Audio dưới `180` giây (3 phút): tạo `short_timeline.md`.
- Audio từ `180` giây trở lên: tạo `timeline.md`.

Timeline chứa thứ tự cảnh, thời lượng, speaker focus, chuyển động, phụ đề, nhạc và hiệu ứng.

## Speaker focus

Khi nhân vật nói, hệ thống có thể đưa nhân vật đó lên trước, zoom nhẹ và giảm độ nổi của các nhân vật khác. Các trạng thái nhân vật được lưu trong thư mục riêng của từng nhân vật để tái sử dụng giữa các chapter.

Để biểu cảm nổi bật, cutout `upperbody` của người nói được đưa lên lớp trước, phóng to nhẹ và tăng độ nổi; các nhân vật khác giảm nhấn. Chuyển động phải vừa đủ để thấy biểu cảm mà không làm người xem mất tập trung.

Asset `upperbody` được neo theo mép dưới của phần thân; asset `fullbody` được neo theo đường chân. Khi render, chỉ thay đổi vị trí trái/giữa/phải và scale theo cảnh, không căn theo đỉnh tóc.

## Hook và ghép video

Mỗi chapter có thể có một hook trong thư mục `hook/`. Hook được đặt ở đầu video chapter.

Giao diện ghép video cho phép chọn nhiều video chapter, sắp xếp lại thứ tự và xuất một video tổng hợp như `full-story.mp4`, không xóa các video gốc.
