# BurgerBox — ASM Traceability

## Mục tiêu
Tài liệu này ánh xạ yêu cầu của ASM Lập trình cơ sở với JavaScript vào chức năng thực tế của BurgerBox. Các chức năng mở rộng được ghi rõ để khi demo/bảo vệ có thể phân biệt với yêu cầu cốt lõi.

| Yêu cầu ASM | Chức năng thực tế | File chính |
|---|---|---|
| Y1.1 Giao diện + JavaScript cơ bản | Storefront, DOM events, render dữ liệu | `index.html`, `js/app.js` |
| Y1.2 Quản lý/hiển thị sản phẩm | Mảng object sản phẩm, 3 nhóm Mới/Hot/Khuyến mãi, danh mục, giá, ảnh, nút thêm giỏ | `js/data.js`, `js/app.js` |
| Y1.3 Slider/Banner | Next, Previous, dots, chuyển slide bằng JavaScript | `js/slider.js`, `index.html` |
| Y1.4 Form + validation | Form liên hệ và checkout; kiểm tra bắt buộc, email, số điện thoại | `js/form.js`, `js/cart.js` |
| Y1.5 Giỏ hàng | Thêm, xóa, tăng/giảm số lượng, tổng tiền, LocalStorage, giữ dữ liệu khi reload | `js/cart.js` |
| Y1.6 Countdown Clock | Đồng hồ Flash Sale | `js/slider.js` |
| Y1.7 Ít nhất 3 yêu cầu tự đề xuất | Tìm kiếm/lọc/sắp xếp; yêu thích; quick view; đăng nhập; admin; checkout | `js/app.js`, `js/auth.js`, `js/admin.js` |
| Y2 Tổ chức mã nguồn | JS trong `js`, CSS trong `css`, HTML ở root | Toàn bộ project |
| Y3 Báo cáo | Phân tích chức năng, giao diện, cấu trúc mã, công cụ/thư viện | `README.md`, tài liệu Y3 |

## Chức năng mở rộng

### Người dùng
- Đăng ký và đăng nhập.
- Phân quyền Customer/Admin.
- Trang tài khoản.
- Lịch sử đơn hàng.
- Danh sách món yêu thích.
- Checkout và lựa chọn thanh toán demo.

### Admin
- Dashboard tổng quan.
- Quản lý sản phẩm CRUD.
- Quản lý danh mục.
- Quản lý trạng thái đơn hàng.
- Quản lý khách hàng và khóa/mở khóa tài khoản.
- Quản lý mã giảm giá.
- Quản lý đánh giá.
- Cài đặt cửa hàng.

## Lưu ý kỹ thuật
Đây là project frontend phục vụ học tập/demo ASM. Authentication và dữ liệu hiện dùng LocalStorage nên **không phải cơ chế bảo mật production**. Nếu triển khai thật cần backend, database, hash mật khẩu, session/token an toàn và API xác thực.
