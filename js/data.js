/**
 * DỮ LIỆU CHÍNH XÁC 17 BẠN NỮ & CÔ GIÁO CHỦ NHIỆM LỚP 11B
 * 20/10 - CHUYẾN DU HÀNH VŨ TRỤ MANG NHỮNG BÔNG HOA ĐẾN LỚP 11B
 */

const girls = [
  {
    id: 1,
    name: "Đỗ Phạm Quỳnh Anh",
    flowerName: "Hoa Quỳnh Dạ Nguyệt",
    flowerIcon: "🌸",
    flowerType: "sakura",
    color: "#ff85a2",
    glowColor: "rgba(255, 133, 162, 0.8)",
    meaning: "Biểu tượng của nét đẹp thuần khiết, thông minh và tinh tế",
    message: "Chúc Quỳnh Anh có một ngày 20/10 ngập tràn niềm vui và những điều ngọt ngào nhất! Mong bạn luôn giữ vững sự tự tin, nét dịu dàng cuốn hút và nụ cười rạng rỡ như ánh bình minh. Chúc bạn sẽ luôn gặt hái thật nhiều điểm 10 trong học tập và có một thanh xuân rực rỡ bên tập thể 11B!"
  },
  {
    id: 2,
    name: "Nguyễn Ngọc Minh Anh",
    flowerName: "Hoa Tulip Ngọc Bích",
    flowerIcon: "🌷",
    flowerType: "tulip",
    color: "#ff70a6",
    glowColor: "rgba(255, 112, 166, 0.8)",
    meaning: "Đại diện cho sự thông thái, duyên dáng và tràn đầy sức sống",
    message: "Gửi đến Minh Anh lời chúc 20/10 ấm áp nhất! Mong bạn luôn luôn tỏa sáng như chính cái tên của mình, thông minh, bản lĩnh và tràn đầy năng lượng tích cực. Chúc cho mọi ước mơ bạn đang ấp ủ đều sẽ nở hoa rực rỡ, mỗi ngày đến lớp 11B đều là một ngày ngập tràn tiếng cười!"
  },
  {
    id: 3,
    name: "Nguyễn Phương Anh",
    flowerName: "Hoa Hồng Tinh Tú",
    flowerIcon: "🌹",
    flowerType: "rose",
    color: "#ff5376",
    glowColor: "rgba(255, 83, 118, 0.85)",
    meaning: "Sự kiêu hãnh, ấm áp và nguồn năng lượng diệu kỳ",
    message: "Chúc Phương Anh một ngày 20/10 thật lộng lẫy và đong đầy yêu thương! Cảm ơn sự nhiệt tình, đáng yêu và tinh tế của bạn đã luôn mang lại nguồn năng lượng tích cực cho cả lớp. Mong bạn luôn xinh đẹp, hạnh phúc và vững bước trên con đường tương lai!"
  },
  {
    id: 4,
    name: "Vũ Thị Thùy Dung",
    flowerName: "Hoa Sen Tinh Khôi",
    flowerIcon: "🪷",
    flowerType: "lotus",
    color: "#fca3b7",
    glowColor: "rgba(252, 163, 183, 0.8)",
    meaning: "Nét đẹp nhu hòa, thanh lịch và tấm lòng chân thành",
    message: "Chúc Thùy Dung một ngày 20/10 thật an yên, ngập tràn niềm vui và hạnh phúc. Nét hiền hòa, dễ mến cùng sự chu đáo của bạn luôn là một mảnh ghép tuyệt vời của 11B. Chúc bạn luôn đạt thành tích cao trong học tập và luôn mỉm cười thật tươi mỗi ngày nhé!"
  },
  {
    id: 5,
    name: "Nguyễn Thị Mỹ Duyên",
    flowerName: "Hoa Lan Dạ Khúc",
    flowerIcon: "🌺",
    flowerType: "orchid",
    color: "#f72585",
    glowColor: "rgba(247, 37, 133, 0.85)",
    meaning: "Sự thanh tú, sắc sảo và cuốn hút diệu kỳ",
    message: "Chúc Mỹ Duyên một ngày 20/10 rực rỡ và nhận được thật nhiều hoa cùng quà tặng dễ thương! Chúc bạn mãi giữ được vẻ đẹp duyên dáng, tinh nghịch đáng yêu và sự kiên trì theo đuổi những hoài bão của tuổi 17. 11B luôn tự hào vì có một cô bạn tuyệt vời như bạn!"
  },
  {
    id: 6,
    name: "Hà Thị Hồng",
    flowerName: "Hoa Mẫu Đơn Hồng Vũ",
    flowerIcon: "💮",
    flowerType: "peony",
    color: "#ff6392",
    glowColor: "rgba(255, 99, 146, 0.85)",
    meaning: "Sự phú quý, thịnh vượng và nụ cười rạng ngời",
    message: "Chúc bạn Hồng có một ngày 20/10 thật ngọt ngào như sắc hồng của hoa mẫu đơn! Mong bạn luôn vui tươi, vô tư yêu đời và gặp thật nhiều may mắn trong cuộc sống cũng như trên con đường học vấn. Hãy luôn tỏa sáng và là bông hoa xinh đẹp nhất của lớp 11B nhé!"
  },
  {
    id: 7,
    name: "Đinh Thị Thu Huệ",
    flowerName: "Hoa Bách Hợp Ánh Sao",
    flowerIcon: "🌼",
    flowerType: "lily",
    color: "#ffe066",
    glowColor: "rgba(255, 224, 102, 0.85)",
    meaning: "Sự kiên định, thanh khiết và rạng rỡ của mùa thu",
    message: "Gửi đến Thu Huệ những lời chúc tốt đẹp nhất nhân ngày 20/10! Chúc bạn luôn an vui, giữ trọn nụ cười hồn nhiên và sự thông minh vốn có. Mong rằng những ngày tháng lớp 11 này sẽ lưu lại trong bạn thật nhiều kỷ niệm thanh xuân đẹp đẽ nhất cùng bạn bè và thầy cô!"
  },
  {
    id: 8,
    name: "Khúc Thu Hương",
    flowerName: "Hoa Oải Hương Vũ Trụ",
    flowerIcon: "💐",
    flowerType: "lavender",
    color: "#b5179e",
    glowColor: "rgba(181, 23, 158, 0.85)",
    meaning: "Hương thơm ngọt ngào, sự sâu sắc và lãng mạn",
    message: "Chúc Thu Hương có một ngày 20/10 tràn ngập tiếng cười và những điều bất ngờ thú vị! Chúc cho ánh mắt bạn luôn lấp lánh niềm vui, tâm hồn luôn dịu dàng như hương hoa mùa thu và trái tim luôn đong đầy niềm tin yêu cuộc sống. Chúc bạn học giỏi và luôn tỏa sáng!"
  },
  {
    id: 9,
    name: "Tăng Thị Ngọc Minh",
    flowerName: "Hoa Hướng Dương Ngân Hà",
    flowerIcon: "🌻",
    flowerType: "sunflower",
    color: "#ffb703",
    glowColor: "rgba(255, 183, 3, 0.85)",
    meaning: "Sự lạc quan, rạng rỡ và nguồn cảm hứng bất tận",
    message: "Chúc Ngọc Minh một ngày 20/10 tuyệt vời! Bạn giống như một đóa hướng dương luôn hướng về ánh sáng, đem lại nguồn động lực và sự ấm áp cho những người xung quanh. Chúc bạn luôn vững tin, tự tin tỏa sáng rực rỡ và luôn đạt được những mục tiêu lớn mà mình đặt ra!"
  },
  {
    id: 10,
    name: "Vũ Như Ngọc",
    flowerName: "Hoa Thạch Thảo Tím Mộng",
    flowerIcon: "🪻",
    flowerType: "violet",
    color: "#a06cd5",
    glowColor: "rgba(160, 108, 213, 0.85)",
    meaning: "Viên ngọc quý kiêu sa, chân thành và thấu hiểu",
    message: "Gửi đến Như Ngọc đóa hoa đẹp nhất của ngày 20/10! Chúc bạn luôn xinh đẹp, quý phái và dịu dàng như chính tên gọi của mình. Mong bạn luôn giữ được sự lạc quan, bình tĩnh trước mọi thử thách và gặt hái được thật nhiều thành công xuất sắc trong năm học lớp 11 này!"
  },
  {
    id: 11,
    name: "Nguyễn Trang Nhung",
    flowerName: "Hoa Trà My Tuyết Nhung",
    flowerIcon: "🌺",
    flowerType: "camellia",
    color: "#ff4d6d",
    glowColor: "rgba(255, 77, 109, 0.85)",
    meaning: "Nét kiêu sa, duyên dáng và sự ấm áp bên trong",
    message: "Chúc Trang Nhung một ngày 20/10 thật ngọt ngào và hạnh phúc bên gia đình và bè bạn! Cảm ơn bạn vì sự hòa đồng, chân thành và luôn giúp đỡ mọi người. Chúc bạn luôn xinh xắn, tự tin sải bước tới tương lai và có thêm thật nhiều khoảnh khắc đáng nhớ cùng 11B!"
  },
  {
    id: 12,
    name: "Trương Thị Quyên",
    flowerName: "Hoa Thủy Tiên Pha Lê",
    flowerIcon: "💮",
    flowerType: "narcissus",
    color: "#72efdd",
    glowColor: "rgba(114, 239, 221, 0.85)",
    meaning: "Sự tinh khôi, khéo léo và sức sống bền bỉ",
    message: "Chúc bạn Quyên có một ngày lễ 20/10 thật vui vẻ, ngập tràn hoa tươi và quà tặng! Mong bạn luôn giữ được nụ cười hiền dịu, tinh thần học hỏi không ngừng và luôn là niềm tự hào của tập thể lớp 11B. Chúc bạn luôn bình an và gặp nhiều điều may mắn nhất!"
  },
  {
    id: 13,
    name: "Đoàn Phương Thảo",
    flowerName: "Hoa Cẩm Tú Cầu Thiên Hà",
    flowerIcon: "🌸",
    flowerType: "hydrangea",
    color: "#c77dff",
    glowColor: "rgba(199, 125, 255, 0.85)",
    meaning: "Sự chân thành, lòng biết ơn và vẻ đẹp gắn kết",
    message: "Chúc Phương Thảo một ngày 20/10 đong đầy hạnh phúc và tiếng cười! Sự tháo vát, vui tính và đáng yêu của bạn luôn mang đến bầu không khí tươi vui cho cả lớp. Chúc bạn luôn giữ vững phong độ học tập, luôn tự tin vào chính mình và chạm tay đến mọi ước mơ!"
  },
  {
    id: 14,
    name: "Hoàng Phương Thảo",
    flowerName: "Hoa Cúc Họa Mi Ánh Trăng",
    flowerIcon: "🌼",
    flowerType: "daisy",
    color: "#e0aaff",
    glowColor: "rgba(224, 170, 255, 0.85)",
    meaning: "Sự ngây thơ, tươi mới và tình bạn trong sáng",
    message: "Gửi đến Hoàng Phương Thảo những lời chúc 20/10 ấm áp nhất từ đại gia đình 11B! Chúc bạn luôn trẻ trung, tươi tắn như đóa hoa đầu mùa, luôn giữ được tinh thần lạc quan và sự nỗ lực không ngừng. Mong rằng mọi điều tuyệt vời nhất sẽ luôn mỉm cười với bạn!"
  },
  {
    id: 15,
    name: "Đỗ Anh Thư",
    flowerName: "Hoa Diên Vĩ Tinh Hà",
    flowerIcon: "🪻",
    flowerType: "iris",
    color: "#9d4edd",
    glowColor: "rgba(157, 78, 221, 0.85)",
    meaning: "Sự can đảm, trí tuệ sắc bén và tương lai hy vọng",
    message: "Chúc Anh Thư có một ngày 20/10 thật đáng nhớ và ý nghĩa! Chúc bạn luôn thông minh, cá tính và tràn đầy tự tin trên con đường chinh phục những đỉnh cao tri thức. Mong rằng lớp 11B sẽ luôn là bến đỗ bình yên, nơi lưu giữ những năm tháng thanh xuân đẹp đẽ nhất của bạn!"
  },
  {
    id: 16,
    name: "Hoàng Thị Hương Trà",
    flowerName: "Hoa Mộc Lan Ngát Hương",
    flowerIcon: "🌸",
    flowerType: "magnolia",
    color: "#ff758f",
    glowColor: "rgba(255, 117, 143, 0.85)",
    meaning: "Sự thanh tao, cao quý và hương sắc ngọt ngào",
    message: "Chúc Hương Trà một ngày 20/10 ngập tràn niềm vui và sự ngọt ngào như chính cái tên của bạn! Mong bạn luôn xinh đẹp, duyên dáng và toát lên nét đẹp dịu dàng làm xao xuyến mọi ánh nhìn. Chúc bạn học thật tốt, luôn yêu đời và đạt được mọi điều mình mong ước!"
  },
  {
    id: 17,
    name: "Nguyễn Thùy Trang",
    flowerName: "Hoa Anh Đào Vũ Trụ",
    flowerIcon: "🌸",
    flowerType: "sakura",
    color: "#ff477e",
    glowColor: "rgba(255, 71, 126, 0.85)",
    meaning: "Sự kiều diễm, sức sống mãnh liệt và vẻ đẹp thanh xuân",
    message: "Chúc Thùy Trang có một ngày 20/10 thật lộng lẫy và tràn đầy những khoảnh khắc tuyệt vời! Cảm ơn bạn đã luôn là một phần không thể thiếu, cùng tạo nên một tập thể 11B đoàn kết và đầy sắc màu. Chúc bạn luôn giữ vững nụ cười tươi tắn, học tập xuất sắc và luôn hạnh phúc mỗi ngày!"
  }
];

const teacher = {
  name: "Phùng Thị Kiều",
  role: "Cô Giáo Chủ Nhiệm Lớp 11B",
  flowerName: "Đóa Hoa Ánh Dương Kim Cương Hoàng Gia",
  flowerIcon: "💐",
  flowerType: "royal_bouquet",
  color: "#ffd166",
  glowColor: "rgba(255, 209, 102, 0.95)",
  secondaryColor: "#ff758f",
  meaning: "Biểu tượng tối thượng của sự tri ân, lòng bao dung và ngọn hải đăng soi sáng tri thức",
  title: "💐 GỬI CÔ PHÙNG THỊ KIỀU 💐",
  badge: "CÔ GIÁO CHỦ NHIỆM KÍNH YÊU",
  messageParagraphs: [
    "Nhân ngày Phụ nữ Việt Nam 20/10, toàn thể 17 bạn nữ cùng toàn thể các thành viên lớp 11B xin thành kính gửi đến cô những lời chúc tốt đẹp, chân thành và sâu sắc nhất.",
    "Cảm ơn cô vì đã luôn là người thuyền trưởng tận tâm, luôn đồng hành, lắng nghe, chỉ bảo và bao dung dìu dắt chúng em từng bước trưởng thành qua từng ngày của năm học lớp 11 đầy ý nghĩa này.",
    "Kính chúc cô luôn luôn mạnh khỏe, tràn đầy nhiệt huyết với sự nghiệp trồng người, luôn giữ nụ cười rạng rỡ tươi vui trên môi và ngập tràn hạnh phúc bên gia đình cùng những học trò nhỏ.",
    "Chúc cô có một ngày 20/10 thật đặc biệt, ngập tràn những bó hoa tươi thắm và những kỷ niệm khó phai! ❤️",
    "— TẬP THỂ LỚP 11B KÍNH CHÚC CÔ! —"
  ]
};

const introWishes = [
  "Chúc bạn luôn xinh đẹp 🌸",
  "Chúc bạn luôn rạng rỡ ✨",
  "Chúc những điều tốt đẹp nhất sẽ đến với bạn 💗",
  "Mong nụ cười của bạn luôn xuất hiện mỗi ngày 🌷",
  "Chúc bạn luôn vui vẻ và hạnh phúc 💕",
  "Happy Vietnamese Women's Day 20/10 🌺"
];
