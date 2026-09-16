# 🍔 BurgerBox — Lập trình cơ sở với JavaScript

Website bán đồ ăn nhanh xây dựng bằng **HTML5 + CSS3 + Vanilla JavaScript**, phát triển theo Assignment **LẬP TRÌNH CƠ SỞ VỚI JAVASCRIPT**.

## 1. Mục tiêu
Assignment yêu cầu thiết kế website bán hàng bằng JavaScript thuần, giới thiệu sản phẩm, cung cấp thông tin và cho phép người dùng đặt hàng trực tuyến. Dự án này chọn mô hình **Fast Food / Delivery** để triển khai các yêu cầu Y1, Y2 và làm nền cho báo cáo Y3.

## 2. Công nghệ
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- LocalStorage
- Google Fonts
- Ảnh minh họa từ Unsplash
- Không dùng framework JavaScript

## 3. Cấu trúc mã nguồn
```text
BurgerBox/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    ├── data.js       # Dữ liệu sản phẩm, format giá
    ├── app.js        # Render, tìm kiếm, lọc, sắp xếp, yêu thích, quick view
    ├── slider.js     # Slider động + countdown
    ├── cart.js       # Giỏ hàng + LocalStorage + checkout
    └── form.js       # Validation form liên hệ
```

## 4. Đối chiếu yêu cầu ASM

### Y1 — Yêu cầu chức năng

**1. Khởi tạo & chạy giao diện**
- Giao diện responsive, không cần framework JS.
- Object và array dữ liệu được khai báo trong `data.js`.
- Có các hàm render, event và logic xử lý trong các file JS.

**2. Quản lý & hiển thị dữ liệu sản phẩm**
- 12 sản phẩm dạng array of objects.
- Có đủ 3 nhóm: **Món mới / Bán chạy / Giảm giá**.
- Mỗi sản phẩm có tên, giá, hình ảnh và nút thêm giỏ / xem chi tiết.
- Có 5 danh mục: Burger, Gà rán, Ăn kèm, Đồ uống, Combo.
- Có hover/zoom ảnh và highlight card.

**3. Slider/Banner**
- 3 banner động.
- Có Previous, Next và Dot.
- Tự động chuyển slide bằng JavaScript.
- Không phải slider tĩnh.

**4. Form & kiểm tra dữ liệu**
- Form liên hệ gồm họ tên, email, số điện thoại và nội dung.
- Kiểm tra rỗng.
- Kiểm tra email bằng Regular Expression.
- Kiểm tra số điện thoại bằng Regular Expression.
- Hiển thị lỗi ngay dưới trường dữ liệu.

**5. Giỏ hàng & lưu trữ dữ liệu**
- Thêm sản phẩm.
- Xóa sản phẩm.
- Tăng/giảm số lượng.
- Tính tổng tiền và tổng số lượng.
- Lưu bằng LocalStorage.
- Reload trang vẫn giữ giỏ hàng.
- Có form checkout demo để hoàn thiện luồng đặt hàng.

**6. Chức năng nâng cao**
- Chọn **Countdown Clock**: Flash Sale tự đếm ngược bằng JavaScript.

**7. Ba yêu cầu tự đề xuất**
1. **Tìm kiếm & sắp xếp sản phẩm** — giúp khách hàng tìm món nhanh và so sánh giá thuận tiện.
2. **Món yêu thích** — cho phép đánh dấu món và lưu danh sách bằng LocalStorage, giúp quay lại chọn món nhanh hơn.
3. **Xem nhanh sản phẩm (Quick View) + checkout** — xem thông tin món trong modal và chuyển trực tiếp sang quy trình nhập thông tin nhận hàng.

> Ba chức năng trên đều được triển khai bằng JavaScript, không chỉ mô tả trên giao diện.

### Y2 — Tổ chức mã
- File JavaScript nằm trong thư mục `js`.
- File CSS nằm trong thư mục `css`.
- File HTML nằm cùng cấp với hai thư mục trên.

### Y3 — Báo cáo
Báo cáo cần trình bày phân tích chức năng, giao diện, cấu trúc mã và các thư viện/công cụ đã sử dụng. Có thể dùng chính cấu trúc và chức năng của project này làm cơ sở viết báo cáo.

## 5. Cách chạy
1. Clone repository về máy.
2. Mở thư mục bằng Visual Studio Code.
3. Cài extension **Live Server** nếu muốn chạy local server.
4. Mở `index.html` bằng Live Server.
5. Kiểm tra Console trình duyệt nếu cần debug JavaScript.

## 6. Checklist demo trước khi nộp
- [ ] Trang chủ hiển thị đúng.
- [ ] Slider tự động và nút điều khiển hoạt động.
- [ ] Tìm kiếm hoạt động.
- [ ] Lọc danh mục hoạt động.
- [ ] Sắp xếp giá/tên hoạt động.
- [ ] Card sản phẩm có hover/zoom.
- [ ] Xem chi tiết hoạt động.
- [ ] Thêm/xóa/tăng/giảm giỏ hàng hoạt động.
- [ ] Reload vẫn giữ giỏ hàng.
- [ ] Món yêu thích được lưu.
- [ ] Countdown hoạt động.
- [ ] Form liên hệ kiểm tra dữ liệu.
- [ ] Checkout kiểm tra họ tên, số điện thoại, địa chỉ.
- [ ] Không có lỗi JavaScript trong Console.

## 7. Lưu ý khi đóng gói nộp LMS
Theo ASM, sản phẩm gồm **folder chứa mã nguồn website** và **file tài liệu Y3**; sau đó đóng gói thành file ZIP theo mẫu tên do assignment quy định. Mã SV và họ tên sinh viên cần được bổ sung vào tài liệu/nội dung đóng gói khi có thông tin chính xác.
