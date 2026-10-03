# 🌸 20/10 – CHUYẾN DU HÀNH VŨ TRỤ MANG NHỮNG BÔNG HOA ĐẾN LỚP 11B 🚀

Một món quà kỹ thuật số đặc biệt, cinematic, lãng mạn và đầy ý nghĩa dành tặng toàn bộ **17 bạn nữ** cùng **Cô giáo chủ nhiệm Phùng Thị Kiều** của tập thể **Lớp 11B**.

---

## ✨ CÁC ĐIỂM NỔI BẬT

1. **Trải nghiệm Cinematic theo đúng Timeline câu chuyện**:
   - **Màn hình hồng mở đầu**: Ánh sáng bokeh dịu nhẹ, cánh hoa đào/hoa hồng rơi lơ lửng, các lời chúc ngọt ngào trôi fade in -> glow -> fade out.
   - **Title 20/10 & Nút Bắt đầu**: Tiêu đề lớn sang trọng với nút bấm hiệu ứng xung nhịp và bụi sáng.
   - **Chuyển cảnh tốc độ ánh sáng (Hyperspace Warp)**: Không gian chuyển dần từ hồng sang ngân hà sâu thẳm, các ngôi sao kéo thành vệt sáng lao về phía người xem.
   - **Phi thuyền tương lai (Mission 01)**: Chiếc phi thuyền thiết kế khí động học với động cơ plasma và vệt khói hồng tím mang 17 đóa hoa lần lượt đến từng bạn nữ lớp 11B.
   - **Khu vườn hoa Thiên Hà (The Galaxy Flower Garden)**:
     - 17 đóa hoa đại diện cho 17 bạn nữ trong chòm sao lung linh, hover phóng to tỏa hào quang.
     - **Đóa Hoa Đặc Biệt Nhất**: Đóa hoa hoàng gia lộng lẫy nhất dành tặng **Cô giáo chủ nhiệm Phùng Thị Kiều** với vầng hào quang kép và ánh sáng kim cương vàng ánh kim.
   - **18 Tấm thiệp riêng biệt**: Mỗi bạn nữ có một tấm thiệp thiết kế glassmorphism sang trọng với lời chúc ý nghĩa, chân thành riêng biệt; thiệp của Cô giáo chủ nhiệm được thiết kế trang trọng bậc nhất.
   - **Lời kết 20/10 xúc động**: Đoạn kết lắng đọng với thông điệp tôn vinh vẻ đẹp của tập thể 11B.

2. **Dữ liệu chính xác 100%**:
3. **Âm thanh & Nhạc nền vũ trụ lãng mạn (Web Audio API)**:
   - Tự động tạo nhạc nền synthesizer không gian êm dịu, ấm áp, âm lượng chuẩn 35%.
   - Không lo lỗi mạng hay chặn liên kết bên ngoài.
   - Hiệu ứng âm thanh tinh tế khi bấm nút, warp speed, mở thiệp, hoa nở.
   - Nút bật/tắt âm thanh ở góc trên màn hình.

4. **Tối ưu hóa hiệu năng & Thiết bị di động**:
   - 60 FPS Canvas Particle Engine.
   - Thích ứng hoàn hảo trên Desktop, Laptop, iPad/Tablet và Smartphone.

5. **Hệ Thống Typography Chuẩn Cao Cấp (3 Fonts)**:
   - **Playfair Display (Bold 700 / SemiBold 600)**: Tiêu đề "20/10", "HAPPY VIETNAMESE WOMEN'S DAY", "THE GALAXY FLOWER GARDEN", Tên Cô giáo ****, tiêu đề thiệp và lời kết.
   - **Montserrat (Regular 400 / Medium 500 / SemiBold 600)**: Tên 17 bạn nữ (SemiBold 600, rõ ràng, dễ đọc, glow nhẹ khi hover), nội dung thiệp, nút bấm (14–16px, letter-spacing 0.5–1px), UI và các thông tin chi tiết.
   - **Dancing Script (Medium 500 / SemiBold 600)**: Font viết tay dùng tiết chế cho các câu chúc nổi bật, quote và chữ ký cuối thiệp (*With love, 11B ♡*).
   - **Hỗ trợ 100% tiếng Việt chuẩn Unicode**: Đảm bảo hiển thị hoàn hảo đầy đủ dấu cho 17 bạn nữ và cô giáo Phùng Thị Kiều.

---

## 🚀 HƯỚNG DẪN CHẠY WEBSITE

### Cách 1: Chạy trực tiếp (Nhanh nhất)
Nhấp đúp chuột vào file `index.html` hoặc file `start.bat` trong thư mục:


### Cách 2: Chạy qua Live Server / HTTP Server (Tùy chọn)
Trong terminal tại thư mục dự án, chạy:
```powershell
python -m http.server 8000
```
Sau đó truy cập: `http://localhost:8000` trên trình duyệt.

---

## 📂 CẤU TRÚC THƯ MỤC

```
web-20-10-11b/
├── index.html        # Giao diện chính với toàn bộ các màn timeline
├── start.bat         # File kích hoạt nhanh 1-click trên Windows
├── README.md         # Tài liệu hướng dẫn chi tiết
├── css/
│   └── style.css     # Toàn bộ hiệu ứng Neon, Glassmorphism, Animation & Responsive
└── js/
    ├── data.js       # Dữ liệu chính xác 17 bạn nữ, cô Kiều và 17 lời chúc riêng
    ├── audio.js      # Hệ thống Web Audio API phát nhạc nền vũ trụ & SFX
    ├── particles.js  # Hệ thống hạt Canvas 60 FPS: Sakura petals, Stars, Glitter, Warp
    ├── spaceship.js  # Phi thuyền tương lai & Chuỗi xuất hiện 17 hoa lần lượt (Mission 01)
    ├── garden.js     # Khu vườn hoa thiên hà 17 hoa + Hoa của cô giáo & Popup thiệp
    └── main.js       # Bộ điều phối các giai đoạn timeline và chuyển cảnh
```
