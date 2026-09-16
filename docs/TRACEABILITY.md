# Traceability — BurgerBox Assignment

Tài liệu này dùng để đối chiếu trực tiếp yêu cầu trong ASM với chức năng đã triển khai.

| Yêu cầu ASM | Chức năng | File chính | Trạng thái |
|---|---|---|---|
| Y1.1 Khởi tạo giao diện, object, hàm | Trang chủ + dữ liệu + render/event/logic | `index.html`, `js/data.js`, `js/app.js` | Đã triển khai |
| Y1.2.1 3 nhóm sản phẩm | Món mới / Bán chạy / Giảm giá | `js/data.js` | Đã triển khai |
| Y1.2.1 Thông tin sản phẩm | Tên, giá, ảnh, nút thêm giỏ/xem chi tiết | `js/data.js`, `js/app.js` | Đã triển khai |
| Y1.2.2 Danh mục | Burger, Gà rán, Ăn kèm, Đồ uống, Combo | `js/app.js` | Đã triển khai |
| Y1.2.3 Hiệu ứng | Hover card, zoom ảnh, highlight | `css/style.css` | Đã triển khai |
| Y1.3 Slider/Banner | 3 slide + Previous/Next/Dot + autoplay | `index.html`, `js/slider.js` | Đã triển khai |
| Y1.4 Form | Liên hệ + kiểm tra rỗng/email/số điện thoại | `index.html`, `js/form.js` | Đã triển khai |
| Y1.5 Giỏ hàng | Thêm/xóa/tăng/giảm + tổng tiền | `js/cart.js` | Đã triển khai |
| Y1.5 Storage | LocalStorage, reload không mất giỏ | `js/cart.js` | Đã triển khai |
| Y1.6 Chức năng nâng cao | Countdown Flash Sale | `js/slider.js` | Đã triển khai |
| Y1.7 Tự đề xuất #1 | Tìm kiếm + sắp xếp sản phẩm | `js/app.js` | Đã triển khai |
| Y1.7 Tự đề xuất #2 | Món yêu thích + LocalStorage | `js/app.js` | Đã triển khai |
| Y1.7 Tự đề xuất #3 | Quick View + checkout demo | `js/app.js`, `js/cart.js` | Đã triển khai |
| Y2.1 | JS trong thư mục `js` | `js/` | Đã triển khai |
| Y2.2 | CSS trong thư mục `css` | `css/` | Đã triển khai |
| Y2.3 | HTML cùng cấp với `js/`, `css/` | `index.html` | Đã triển khai |
| Y3 | Báo cáo phân tích chức năng/thư viện | `docs/`, file DOCX nộp LMS | Chuẩn bị |

## Test checklist

### TC01 — Load trang
Expected: giao diện hiển thị, không lỗi JavaScript.

### TC02 — Slider
Expected: Next, Previous, Dot và tự động chuyển slide hoạt động.

### TC03 — Danh mục
Expected: chọn tab hoặc select sẽ lọc đúng sản phẩm.

### TC04 — Search
Expected: nhập từ khóa sẽ lọc theo tên món.

### TC05 — Sort
Expected: sắp xếp giá tăng, giá giảm và tên A-Z đúng.

### TC06 — Product interaction
Expected: hover có hiệu ứng; Quick View mở modal; thêm giỏ hoạt động.

### TC07 — Cart
Expected: thêm món, tăng/giảm, xóa và tổng tiền cập nhật chính xác.

### TC08 — LocalStorage
Expected: reload trang vẫn giữ giỏ hàng và danh sách yêu thích.

### TC09 — Contact validation
Expected: bỏ trống hoặc sai email/số điện thoại thì không submit và có thông báo lỗi.

### TC10 — Checkout validation
Expected: yêu cầu họ tên, số điện thoại, địa chỉ; dữ liệu hợp lệ hiển thị thông báo đặt hàng demo.

### TC11 — Countdown
Expected: đồng hồ giảm mỗi giây.

### TC12 — Responsive
Expected: giao diện vẫn dùng được trên màn hình máy tính bảng và điện thoại.
