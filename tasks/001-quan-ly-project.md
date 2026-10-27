# Giao diện và quản lý project

**created_at:** 2026-10-27  
**started_at:**  
**status:** `todo`

## Nội dung chi tiết

- Xây dựng Web UI local để sử dụng VideoAiComics.
- Dùng Node.js server và giao diện HTML/CSS/JavaScript đơn giản, theo mô hình Web UI của `D:\Android\CodeTA\GenerateVideo`.
- Có file `run-web-editor.bat` ở root để khởi động Web UI trực tiếp trên Windows.
- Tạo màn hình chọn/tạo project và hiển thị trạng thái project.
- Chuẩn hóa tên project thành slug không dấu, chữ thường và phân cách bằng dấu `-`.
- Giữ riêng tên hiển thị có dấu và Project ID dùng cho thư mục/đường dẫn.
- Hiển thị danh sách chapter và cho phép tạo chapter mới.
- Hiển thị thư viện asset: nhân vật, trạng thái, background, music, thumbnail và content.
- Hiển thị/chỉnh sửa scenes, timeline và hook.
- Có khu vực preview, render và theo dõi render job.
- Có khu vực ghép nhiều video chapter.
- Tạo đúng cấu trúc thư mục dùng chung của project.
- Tạo thư mục `docs/` để chứa các file text đầu vào của truyện.
- Tạo và đọc `series.json`.
- Không ghi đè project hoặc chapter đã tồn tại.

## File ảnh hưởng

- `README.md`
- `projects/`
- `series.json`
- `chapters/`
- `web-ui/index.html`
- `web-ui/app.js`
- `web-ui/styles.css`
- `web-ui/server.mjs`
- `run-web-editor.bat`

## Testcase

- Tạo project mới thành công.
- Tạo project trùng tên phải báo lỗi và không ghi đè dữ liệu.
- Mở lại project phải đọc đúng `series.json`.
- Tạo chapter mới thành công.
- Tạo chapter trùng tên phải báo lỗi.
- Project thiếu metadata phải được báo lỗi rõ ràng.
- Mở Web UI bằng file chạy `.bat` và tải được trang chính.
- Chuyển được giữa project, chapter, asset, timeline, render và ghép video.
- API không cho phép truy cập đường dẫn nằm ngoài project.
