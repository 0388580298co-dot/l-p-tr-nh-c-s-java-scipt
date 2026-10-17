# BurgerBox — Kết quả rà soát và kiểm thử

Ngày rà soát: 17/10/2026  
Repository: `0388580298co-dot/l-p-tr-nh-c-s-java-scipt`  
Nhánh: `main`

## 1. Các sửa đổi đã đẩy lên GitHub

- `register.html`: lấy dữ liệu qua `document.getElementById(...)`, tránh phụ thuộc vào biến toàn cục có tên trùng với thuộc tính của trình duyệt.
- `js/form.js`: tạo thông báo lỗi ngay dưới trường nhập khi chưa có phần tử lỗi tương ứng; cập nhật `aria-invalid`; đưa thông báo lỗi lên vùng phản hồi chung.
- `css/style.css`: thêm kiểu hiển thị lỗi, trạng thái input sai và thông báo thành công/lỗi.
- `js/admin.js`: tách điều kiện tồn kho thành biến `stockMatches`, với logic rõ ràng cho `all`, `low` và `out`.

## 2. Kết quả kiểm tra tĩnh

| Hạng mục | Kết quả | Ghi chú |
|---|---|---|
| Phân tích cú pháp các file JS | PASS | Đã kiểm tra bằng JavaScript parser: `data.js`, `app.js`, `cart.js`, `form.js`, `slider.js`, `auth.js`, `admin.js`. |
| Script inline của form đăng ký | PASS | Script có cú pháp hợp lệ sau khi sửa. |
| Truy cập trường đăng ký | PASS (rà soát mã) | Các trường name/email/password/confirm/message được lấy bằng `getElementById`. |
| Thông báo lỗi form liên hệ | PASS (rà soát mã) | Phần tử lỗi được tạo động, hiển thị sát trường nhập; formMessage nhận thông báo lỗi. |
| Logic bộ lọc tồn kho | PASS (rà soát logic) | `all` không lọc theo mức tồn; `low` là 1–5; `out` là 0 hoặc thấp hơn. |
| Luồng UI thực tế trên trình duyệt | NOT RUN | Môi trường hiện tại không có phiên trình duyệt tương tác với website được mở; cần chạy thủ công theo checklist. |

## 3. Ma trận logic bộ lọc tồn kho

| Tồn kho | all | low | out |
|---:|---|---|---|
| 20 | Hiển thị | Ẩn | Ẩn |
| 5 | Hiển thị | Hiển thị | Ẩn |
| 1 | Hiển thị | Hiển thị | Ẩn |
| 0 | Hiển thị | Ẩn | Hiển thị |

## 4. Kiểm thử trình duyệt còn cần thực hiện

Các bước dưới đây chưa được đánh dấu PASS vì chưa chạy trong trình duyệt thật:

1. Đăng ký tài khoản mới hợp lệ; kiểm tra chuyển tới trang đăng nhập.
2. Thử mật khẩu nhập lại không khớp và email đã tồn tại; xác nhận lỗi hiển thị.
3. Đăng nhập bằng tài khoản vừa tạo; thử sai mật khẩu và tài khoản bị khóa.
4. Gửi form liên hệ để trống, email sai, số điện thoại sai và nội dung quá ngắn; xác nhận lỗi xuất hiện dưới trường tương ứng.
5. Vào Admin → Sản phẩm; thử tồn kho `all`, `low`, `out`.
6. Chạy toàn bộ `docs/DEMO-CHECKLIST.md`: slider, tìm kiếm, lọc/sắp xếp, giỏ hàng, LocalStorage, checkout, đơn hàng, CRUD Admin và đăng xuất.
7. Mở DevTools Console và xác nhận không có lỗi runtime.

## 5. Giới hạn

Đây là website frontend dùng LocalStorage. Kết quả kiểm tra tĩnh không thay thế kiểm thử end-to-end trong trình duyệt và không chứng minh tính an toàn cho hệ thống production. Không ghi PASS cho các bước chưa thực sự chạy.
