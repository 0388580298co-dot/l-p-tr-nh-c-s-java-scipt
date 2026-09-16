const products = [
  { id: 1, name: 'Táo Fuji Nhật Bản', price: 89000, oldPrice: 109000, category: 'Trái cây', group: 'new', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80' },
  { id: 2, name: 'Dâu tây Đà Lạt', price: 125000, oldPrice: 149000, category: 'Trái cây', group: 'hot', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=700&q=80' },
  { id: 3, name: 'Cam mọng nước', price: 65000, oldPrice: 79000, category: 'Trái cây', group: 'sale', image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=700&q=80' },
  { id: 4, name: 'Cà chua hữu cơ', price: 48000, oldPrice: 55000, category: 'Rau củ', group: 'new', image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=700&q=80' },
  { id: 5, name: 'Bông cải xanh', price: 52000, oldPrice: 62000, category: 'Rau củ', group: 'hot', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80' },
  { id: 6, name: 'Sữa tươi nguyên chất', price: 39000, oldPrice: 45000, category: 'Đồ uống', group: 'sale', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80' },
  { id: 7, name: 'Nước ép cam tươi', price: 45000, oldPrice: 55000, category: 'Đồ uống', group: 'hot', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80' },
  { id: 8, name: 'Bánh mì nguyên cám', price: 35000, oldPrice: 42000, category: 'Thực phẩm', group: 'new', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80' },
  { id: 9, name: 'Mật ong nguyên chất', price: 119000, oldPrice: 139000, category: 'Thực phẩm', group: 'sale', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=700&q=80' }
];

const groupLabels = { new: 'Mới', hot: 'Hot', sale: 'Khuyến mãi' };

function formatPrice(value) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
}
