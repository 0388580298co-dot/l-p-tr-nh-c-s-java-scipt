# 🍔 BurgerBox — Fast Food & Delivery

Website bán đồ ăn nhanh xây dựng bằng **HTML5 + CSS3 + Vanilla JavaScript (ES6+)**, bám sát Assignment **LẬP TRÌNH CƠ SỞ VỚI JAVASCRIPT** và mở rộng thành một mini e-commerce có tài khoản và khu vực quản trị.

## 1. Mục tiêu dự án
- Website bán hàng bằng JavaScript thuần.
- Giao diện fast food chuyên nghiệp, responsive.
- Có danh mục, tìm kiếm, sắp xếp, slider, form validation và giỏ hàng.
- Có đăng ký/đăng nhập và phân quyền `customer` / `admin`.
- Có Admin Dashboard quản lý các dữ liệu chính của cửa hàng.
- Dữ liệu demo được lưu bằng LocalStorage để phù hợp phạm vi bài JavaScript cơ sở.

## 2. Công nghệ
HTML5 • CSS3 • Vanilla JavaScript • ES6+ • LocalStorage • Google Fonts • Unsplash.

> Đây là mô hình frontend/demo phục vụ ASM. Authentication và dữ liệu LocalStorage **không phải cơ chế bảo mật production**; hệ thống thực tế cần backend, database, hash mật khẩu và API xác thực.

## 3. Cấu trúc project
```text
BurgerBox/
├── index.html              # Trang khách hàng
├── login.html              # Đăng nhập
├── register.html           # Đăng ký
├── admin.html              # Admin Dashboard
├── README.md
│
├── css/
│   ├── style.css           # Storefront
│   ├── auth.css            # Login/Register
│   └── admin.css           # Admin panel
│
└── js/
    ├── data.js             # Product data + persistence
    ├── app.js              # Render/search/filter/sort/favorite/quick view
    ├── slider.js            # Slider + countdown
    ├── cart.js              # Cart + checkout + order creation
    ├── form.js              # Contact validation
    ├── auth.js              # Account/session/role
    └── admin.js             # Dashboard + CRUD/admin modules
```

## 4. Chức năng khách hàng
- 12 món fast food dạng Array of Objects.
- Burger, Gà rán, Ăn kèm, Đồ uống, Combo.
- Nhóm Món mới / Bán chạy / Giảm giá.
- Tìm kiếm theo tên.
- Lọc theo danh mục.
- Sắp xếp theo giá và tên.
- Hover/zoom sản phẩm.
- Quick View.
- Món yêu thích lưu LocalStorage.
- Slider 3 banner với Previous / Next / Dot / Auto Play.
- Flash Sale Countdown.
- Giỏ hàng thêm/xóa/tăng/giảm.
- Tính tổng tiền.
- LocalStorage giữ giỏ hàng khi reload.
- Checkout: họ tên, số điện thoại, địa chỉ, thanh toán.
- Checkout tạo đơn hàng để Admin quản lý.
- Form liên hệ có validation rỗng, email, số điện thoại và nội dung.

## 5. Đăng nhập & tài khoản
### Admin demo
- Email: `admin@burgerbox.local`
- Mật khẩu: `admin123`

### Customer demo
- Email: `user@burgerbox.local`
- Mật khẩu: `123456`

Người dùng mới có thể đăng ký bằng `register.html`. Session được lưu ở LocalStorage và Admin Dashboard yêu cầu role `admin`.

## 6. Admin Dashboard
Admin có các module:

### 📊 Tổng quan
- Doanh thu demo.
- Tổng đơn hàng.
- Tổng khách hàng.
- Tổng sản phẩm.
- Biểu đồ doanh thu 7 ngày dạng trực quan.
- Đơn hàng gần đây.
- Nút quản trị nhanh.

### 🍔 Sản phẩm
- Xem danh sách.
- Tìm kiếm.
- Lọc theo nhóm.
- Thêm sản phẩm.
- Sửa tên/giá.
- Xóa sản phẩm.
- Dữ liệu cập nhật được lưu LocalStorage.

### 📁 Danh mục
- Xem số sản phẩm theo danh mục.
- Thêm danh mục.
- Đổi tên danh mục.
- Xóa danh mục.

### 🧾 Đơn hàng
- Xem mã đơn, khách hàng, số món, tổng tiền, ngày.
- Cập nhật trạng thái:
  - Chờ xác nhận
  - Đang chuẩn bị
  - Đang giao
  - Hoàn thành
  - Đã hủy
- Đơn tạo từ checkout được đưa vào hệ thống quản trị.

### 👥 Khách hàng
- Xem tài khoản.
- Xem vai trò/trạng thái.
- Khóa/mở khóa tài khoản customer.

### 🎟️ Mã giảm giá
- Xem coupon.
- Tạo mã giảm giá.
- Xóa mã.
- Trạng thái sử dụng.

### ⭐ Đánh giá
- Xem đánh giá demo.
- Ẩn/hiển thị đánh giá.
- Xóa đánh giá.

### ⚙️ Cài đặt
- Tên cửa hàng.
- Phí giao hàng.
- Trạng thái mở/đóng cửa hàng.
- Thông tin hệ thống.

## 7. Đối chiếu ASM
Project vẫn giữ trọng tâm của ASM:
- Array of Objects.
- Hiển thị sản phẩm và danh mục.
- Hiệu ứng hover/highlight.
- Slider động bằng JavaScript.
- Form validation.
- Giỏ hàng CRUD cơ bản.
- LocalStorage.
- Countdown Clock.
- Ít nhất 3 yêu cầu tự đề xuất.
- JavaScript trong `js`, CSS trong `css`, HTML cùng cấp.

Phần đăng nhập và Admin là **phần mở rộng hợp lý** của mô hình website bán hàng, không thay thế các yêu cầu Y1/Y2 của ASM.

## 8. Chạy project
1. Clone repository.
2. Mở bằng Visual Studio Code.
3. Chạy `index.html` bằng Live Server.
4. Vào `login.html` để đăng nhập.
5. Dùng tài khoản admin để vào `admin.html`.

## 9. Checklist trước khi demo/nộp
- [ ] Trang chủ responsive.
- [ ] Slider hoạt động.
- [ ] Countdown hoạt động.
- [ ] Tìm kiếm/lọc/sắp xếp hoạt động.
- [ ] Quick View hoạt động.
- [ ] Favorite lưu LocalStorage.
- [ ] Cart thêm/xóa/tăng/giảm.
- [ ] Reload giữ cart.
- [ ] Checkout tạo order.
- [ ] Form validation hoạt động.
- [ ] Đăng ký/đăng nhập hoạt động.
- [ ] Admin phân quyền hoạt động.
- [ ] Admin quản lý sản phẩm/danh mục/đơn hàng/khách hàng/coupon/review/settings.
- [ ] Kiểm tra Console không có lỗi.

## 10. Phạm vi kỹ thuật
Để đúng tinh thần JavaScript cơ sở, project không dùng backend/framework JS. Các chức năng tài khoản, dữ liệu và admin đều là **frontend simulation bằng LocalStorage**. Nếu triển khai thực tế, kiến trúc nên chuyển sang frontend + REST API + database + authentication server.