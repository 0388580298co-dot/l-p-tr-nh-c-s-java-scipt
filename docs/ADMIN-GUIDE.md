# BurgerBox — Admin Guide

## Tài khoản demo
- Email: `admin@burgerbox.local`
- Mật khẩu: `admin123`

## Các module

### Tổng quan
Theo dõi doanh thu demo, số đơn, số khách hàng, số sản phẩm và đơn hàng gần đây.

### Sản phẩm
Quản lý menu, tìm kiếm sản phẩm, lọc theo nhóm Mới/Bán chạy/Khuyến mãi, thêm, sửa và xóa.

### Danh mục
Thêm, đổi tên, xóa danh mục và theo dõi số sản phẩm thuộc từng danh mục.

### Đơn hàng
Theo dõi mã đơn, khách hàng, số món, tổng tiền, ngày đặt và cập nhật trạng thái từ lúc xác nhận đến hoàn thành/hủy.

### Khách hàng
Xem tài khoản, vai trò, ngày tạo và khóa/mở khóa tài khoản customer.

### Mã giảm giá
Tạo và xóa coupon demo.

### Đánh giá
Theo dõi đánh giá, ẩn/hiện hoặc xóa nội dung.

### Cài đặt
Thiết lập tên cửa hàng, phí giao hàng và trạng thái mở/đóng cửa hàng.

## Luồng demo khuyến nghị
1. Đăng nhập Admin.
2. Vào Sản phẩm → kiểm tra CRUD.
3. Vào Danh mục → kiểm tra quản lý nhóm.
4. Đăng xuất → đăng nhập Customer.
5. Thêm món vào giỏ → checkout.
6. Đăng nhập lại Admin → Đơn hàng → cập nhật trạng thái.
7. Quay lại Customer → kiểm tra lịch sử đơn hàng.

## Phạm vi bảo mật
Admin hiện là mô hình frontend-only cho ASM. LocalStorage không phù hợp để lưu mật khẩu trong hệ thống thật. Khi nâng cấp production cần backend/API, database, hash mật khẩu, session/token an toàn và phân quyền server-side.
