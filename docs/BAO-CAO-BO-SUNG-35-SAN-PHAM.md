# BÁO CÁO BỔ SUNG 35 SẢN PHẨM CHO BURGERBOX

**Dự án:** BurgerBox – Website bán đồ ăn nhanh  
**Môn học:** Lập trình cơ sở với JavaScript  
**Ngày thực hiện:** 23/10/2026  
**Phạm vi:** Bổ sung dữ liệu sản phẩm và cơ chế cập nhật dữ liệu mặc định.

## 1. Mục tiêu

Mở rộng danh mục món ăn để website có dữ liệu phong phú hơn, hỗ trợ thao tác tìm kiếm, lọc theo danh mục, sắp xếp giá và trình diễn luồng mua hàng. Công việc tập trung vào dữ liệu sản phẩm trong `js/data.js`, không thay đổi kiến trúc HTML/CSS/JavaScript của dự án.

## 2. Kết quả thực hiện

- Bổ sung **35 sản phẩm mới**, nâng tổng số sản phẩm mặc định từ **12 lên 47**.
- Mỗi sản phẩm được khai báo dưới dạng đối tượng JavaScript, gồm các thuộc tính chính: mã sản phẩm, tên, giá bán, giá cũ, danh mục, nhóm hiển thị, điểm đánh giá, tồn kho, mô tả và đường dẫn ảnh.
- Các sản phẩm mới được phân bổ vào 5 nhóm: **Burger, Gà rán, Ăn kèm, Đồ uống và Combo**.
- Các nhóm hiển thị hiện có được sử dụng lại: **Món mới (`new`), Bán chạy (`hot`) và Giảm giá (`sale`)**.
- Dữ liệu tiếp tục được lưu trong LocalStorage với khóa `burgerbox-products`, tương thích với cơ chế dữ liệu hiện tại của website.

## 3. Một số sản phẩm tiêu biểu

| Nhóm | Sản phẩm ví dụ |
|---|---|
| Burger | Burger Bò Nướng Tiêu Đen, Burger Gà Teriyaki, Burger Bò Trứng Ốp La, Burger Cá Giòn |
| Gà rán | Gà Rán Mật Ong, Đùi Gà Rán Lớn, Cánh Gà Sốt Tỏi, Gà Popcorn |
| Ăn kèm | Khoai Tây Lắc Phô Mai, Nugget Gà 6 Miếng, Hành Tây Chiên, Salad Rau Củ |
| Đồ uống | Coca-Cola, Pepsi, Trà Chanh Tươi, Trà Sữa Trân Châu, Nước Cam, Cà Phê Sữa Đá |
| Combo | Combo Burger Gà, Combo Bò Đôi, Combo Gia Đình 4 Người, Combo Couple Plus |

Tên và mô tả được xây dựng phục vụ dữ liệu minh họa cho bài tập; giá, tồn kho và đánh giá là dữ liệu demo, không phải thông tin kinh doanh thực tế đã xác minh.

## 4. Thay đổi kỹ thuật

Tệp được cập nhật: `js/data.js`.

1. Bổ sung các đối tượng sản phẩm có ID từ **13 đến 47**, không trùng với ID của 12 sản phẩm ban đầu.
2. Bổ sung cơ chế đọc dữ liệu LocalStorage có xử lý trường hợp dữ liệu JSON bị lỗi.
3. Bổ sung khóa phiên bản di trú `burgerbox-products-v2-migration`. Với trình duyệt chưa chạy di trú, chương trình thêm các sản phẩm mặc định còn thiếu dựa trên ID, sau đó lưu lại dữ liệu.
4. Nếu người dùng đã có dữ liệu sản phẩm trong LocalStorage, cơ chế di trú giữ các sản phẩm đang lưu và chỉ bổ sung các ID mặc định còn thiếu ở lần di trú đầu tiên. Dữ liệu do người dùng tự chỉnh sửa không bị ghi đè bởi toàn bộ mảng mặc định.

## 5. Kiểm tra sau khi cập nhật

| Hạng mục | Kết quả |
|---|---|
| Kiểm tra tệp `js/data.js` trên GitHub | PASS – đã đọc lại tệp sau khi cập nhật |
| Kiểm tra số lượng đối tượng sản phẩm mặc định | PASS – 47 đối tượng, ID 1–47 |
| Kiểm tra có sản phẩm mới ID 13 và ID 47 | PASS |
| Kiểm tra có khóa và logic di trú LocalStorage | PASS – có trong mã nguồn |
| Kiểm thử trực tiếp giao diện trong trình duyệt | CHƯA THỰC HIỆN trong phiên cập nhật này |
| Kiểm tra tải ảnh của toàn bộ 35 sản phẩm | CHƯA THỰC HIỆN trực tiếp; cần xác nhận khi chạy website |

**Lưu ý:** PASS ở trên chỉ áp dụng cho việc kiểm tra nội dung mã nguồn sau cập nhật. Chưa khẳng định toàn bộ giao diện, ảnh từ dịch vụ bên ngoài hoặc luồng mua hàng đã được kiểm thử end-to-end.

## 6. Cách kiểm tra trên máy

1. Mở dự án bằng VS Code và chạy `index.html` với Live Server.
2. Mở trang chủ, cuộn đến khu vực menu và kiểm tra số lượng sản phẩm.
3. Thử tìm kiếm một vài món mới, chẳng hạn “Burger Gà Teriyaki” hoặc “Trà Sữa Trân Châu”.
4. Thử lọc danh mục Burger, Gà rán, Ăn kèm, Đồ uống và Combo.
5. Thử sắp xếp theo giá thấp đến cao và giá cao đến thấp.
6. Vào Admin → Sản phẩm để xác nhận danh sách và bộ lọc tồn kho vẫn hoạt động.
7. Mở DevTools → Console để kiểm tra lỗi JavaScript hoặc lỗi tải ảnh.

Nếu trình duyệt đang có dữ liệu LocalStorage cũ, hãy tải lại trang. Nếu muốn kiểm tra trạng thái người dùng mới, có thể dùng cửa sổ ẩn danh để tránh ảnh hưởng dữ liệu đã lưu.

## 7. Kết luận

Đã cập nhật mã nguồn BurgerBox để có 47 sản phẩm mặc định, tăng độ đa dạng của menu và hỗ trợ tốt hơn cho việc trình diễn các chức năng tìm kiếm, lọc, sắp xếp, giỏ hàng và quản trị sản phẩm. Việc kiểm thử trực tiếp trên trình duyệt vẫn cần được thực hiện trước khi đánh dấu toàn bộ chức năng là hoàn tất.
