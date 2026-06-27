const rawArticles = [
    {
        title: "Quy chế học đường và Kỳ thi tốt nghiệp mới",
        url: "https://baochinhthuc-giaoduc.vn/thong-tin-tuyen-sinh/quy-che-thi-tot-nghiep-thpt-moi",
        category: "Giáo dục",
        date: "Thứ Hai, 15/05/2026, 08:30 (GMT+7)",
        sapo: "Nhìn vào định hướng Chương trình Giáo dục Phổ thông mới có thể thấy sự thay đổi toàn diện từ cơ sở vật chất đến phương pháp giảng dạy, đằng sau đó là muôn vàn cung bậc cảm xúc của học sinh và phụ huynh trước kỳ thi quan trọng.",
        subHeadline: "NHỮNG QUY ĐỊNH MỚI GÂY TRANH CÃI DỮ DỘI...",
        image: "ai_exam.png",
        imageCaption: "Điểm chuẩn và quy chế mới tạo ra sự phân hóa rất lớn giữa các nhóm học sinh. ẢNH: MINH HỌA",
        blocks: [
            [
                { text: "Trong bối cảnh giáo dục đang chuyển mình mạnh mẽ, Bộ Giáo dục và Đào tạo đã chính thức công bố những định hướng quan trọng về Chương trình Giáo dục Phổ thông 2018.", isFake: false },
                { text: "Trọng tâm của sự đổi mới lần này không chỉ dừng lại ở việc cập nhật kiến thức mà còn hướng tới phát triển toàn diện năng lực và phẩm chất của học sinh.", isFake: false },
                { text: "Quá trình chuyển đổi số trong giáo dục đang được đẩy nhanh tiến độ, thể hiện rõ qua việc triển khai các nền tảng học trực tuyến, học bạ điện tử và sổ liên lạc kỹ thuật số.", isFake: false }
            ],
            [
                { text: "Điều này giúp phụ huynh dễ dàng theo dõi tiến độ học tập của con em mình một cách nhanh chóng và minh bạch hơn bao giờ hết.", isFake: false },
                { text: "Bộ Giáo dục vừa đưa ra thông báo khẩn cấp áp dụng ngay trong tháng này.", isFake: true },
                { text: "Theo đó, học sinh khối 11 trên toàn quốc sẽ phải thi bắt buộc 8 môn trong kỳ thi tốt nghiệp THPT theo chương trình mới.", isFake: true },
                { text: "Hơn thế nữa, các trường trung học phổ thông trên cả nước cũng đang tích cực đầu tư vào cơ sở hạ tầng công nghệ, nâng cấp hệ thống phòng máy tính.", isFake: false }
            ],
            [
                { text: "Nhằm giảm bớt áp lực thi cử và hướng tới một môi trường học tập lành mạnh, các hình thức đánh giá cũng đang dần thay đổi.", isFake: false },
                { text: "Để siết chặt kỷ luật, điểm số học kỳ 2 của học sinh sẽ bị nhân hệ số 3 nếu tự ý nghỉ quá 2 buổi học không phép.", isFake: true },
                { text: "Thay vì chỉ chú trọng vào các bài kiểm tra tự luận hay trắc nghiệm trên giấy truyền thống, giáo viên được khuyến khích sử dụng các hình thức đánh giá đa dạng.", isFake: false }
            ],
            [
                { text: "Ngoài ra, văn bản mới quy định các trường THPT sẽ cấm hoàn toàn việc sử dụng điện thoại của học sinh, kể cả trong giờ ra chơi hoặc khi ở trong khuôn viên căn-tin.", isFake: true },
                { text: "Những trường hợp vi phạm lần đầu sẽ bị đình chỉ học 1 tháng để kiểm điểm.", isFake: true },
                { text: "Bên cạnh đó, một số trường tiên phong đã bắt đầu áp dụng phương pháp giáo dục STEM, lồng ghép các môn Khoa học, Công nghệ, Kỹ thuật và Toán học vào chương trình chính khóa.", isFake: false }
            ],
            [
                { text: "Đại diện Bộ cũng nhấn mạnh đây là quy định đã được ký duyệt chính thức và không có ngoại lệ cho bất kỳ địa phương nào.", isFake: true },
                { text: "Thêm vào đó, phụ huynh của những học sinh vi phạm kỷ luật phòng thi sẽ bị phạt hành chính từ 2 đến 5 triệu đồng và buộc phải làm bản kiểm điểm trước toàn trường.", isFake: true },
                { text: "Mặc dù vậy, công tác tư vấn tâm lý học đường cũng đang được đặc biệt quan tâm, nhằm hỗ trợ học sinh vượt qua những khó khăn về mặt tinh thần.", isFake: false }
            ],
            [
                { text: "Kỳ thi tốt nghiệp trung học phổ thông sẽ được thiết kế lại để đánh giá đúng năng lực cốt lõi.", isFake: false },
                { text: "Cơ hội để học sinh tiếp cận với các chương trình liên kết quốc tế cũng ngày càng rộng mở, tạo điều kiện cho các em trau dồi ngoại ngữ và kỹ năng hội nhập toàn cầu.", isFake: false }
            ]
        ]
    },
    {
        title: "Cảnh báo An toàn thực phẩm và Xu hướng Giới trẻ",
        url: "https://tin-tuc-suc-khoe24h.vn/doi-song-tre/can-hien-thuc-trang-tieu-thu-tra-sua",
        category: "Sức khỏe",
        date: "Thứ Tư, 17/05/2026, 14:15 (GMT+7)",
        sapo: "Trà sữa - Thức uống yêu thích của hàng triệu bạn trẻ đang tiềm ẩn nhiều nguy cơ khó lường nếu sử dụng không có chừng mực, đặc biệt là khi các cơ sở kinh doanh lách luật để tối đa hóa lợi nhuận.",
        subHeadline: "BÁO ĐỘNG TÌNH TRẠNG LẠM DỤNG ĐƯỜNG...",
        image: "ai_bobatea.png",
        imageCaption: "Thói quen tiêu thụ đồ uống nhiều đường đang gây áp lực lên hệ thống y tế công cộng. ẢNH: MINH HỌA",
        blocks: [
            [
                { text: "Trà sữa từ lâu đã trở thành một biểu tượng của văn hóa ẩm thực đường phố, đặc biệt được ưa chuộng bởi giới trẻ và giới văn phòng.", isFake: false },
                { text: "Sự bùng nổ của hàng loạt thương hiệu trà sữa với những hương vị sáng tạo, từ trân châu đường đen, kem cheese béo ngậy cho đến trà hoa quả thanh mát, đã tạo nên một thị trường sôi động.", isFake: false },
                { text: "Theo các báo cáo phân tích tiêu dùng, trung bình mỗi ngày có hàng triệu ly trà sữa được tiêu thụ tại các đô thị lớn.", isFake: false }
            ],
            [
                { text: "Các chiến dịch quảng cáo với hình ảnh bắt mắt, kết hợp cùng các chương trình khuyến mãi hấp dẫn qua ứng dụng giao đồ ăn, càng làm tăng thêm sức hút của loại đồ uống này.", isFake: false },
                { text: "Theo thông tin rò rỉ từ cơ quan kiểm định, lực lượng chức năng vừa phát hiện chất gây nghiện cực mạnh thuộc danh mục cấm trộn lẫn trong trân châu của một thương hiệu trà sữa nổi tiếng nhất hiện nay.", isFake: true },
                { text: "Hợp chất hóa học này khiến người uống bị lệ thuộc tâm lý ngay từ ly đầu tiên.", isFake: true }
            ],
            [
                { text: "Tuy nhiên, đằng sau sự phổ biến đó, các chuyên gia dinh dưỡng liên tục lên tiếng cảnh báo về những tác động tiêu cực đến sức khỏe nếu tiêu thụ trà sữa quá mức.", isFake: false },
                { text: "Thành phần chính của trà sữa thường bao gồm trà, sữa đặc, đường, và các loại topping chứa hàm lượng carbohydrate rất cao.", isFake: false },
                { text: "Báo cáo ghi nhận hơn 100 học sinh tại địa bàn thành phố lớn đã phải nhập viện cấp cứu trong tình trạng ngộ độc nguy kịch, suy gan cấp và hôn mê sâu.", isFake: true }
            ],
            [
                { text: "Theo khuyến nghị của Tổ chức Y tế Thế giới (WHO), lượng đường tiêu thụ tự do mỗi ngày của một người trưởng thành không nên vượt quá 25 gram để đảm bảo sức khỏe tối ưu.", isFake: false },
                { text: "Hiện tại toàn bộ hệ thống cửa hàng của thương hiệu này đã bị phong tỏa niêm phong vĩnh viễn.", isFake: true },
                { text: "Cơ quan công an đang phát lệnh truy nã ban giám đốc điều hành trên toàn quốc vì hành vi đầu độc người tiêu dùng có chủ đích.", isFake: true }
            ],
            [
                { text: "Trong khi đó, một ly trà sữa size lớn với 100% đường có thể chứa tới 50 gram đường, gấp đôi mức cho phép hàng ngày.", isFake: false },
                { text: "Việc dung nạp quá nhiều đường liên tục trong một thời gian dài là nguyên nhân hàng đầu dẫn đến tình trạng thừa cân, béo phì ở lứa tuổi thanh thiếu niên.", isFake: false },
                { text: "Không dừng lại ở đó, lượng đường cao còn làm tăng nguy cơ mắc các bệnh lý chuyển hóa như tiểu đường tuýp 2, gan nhiễm mỡ.", isFake: false }
            ],
            [
                { text: "Để cân bằng giữa sở thích cá nhân và sức khỏe, các chuyên gia khuyến cáo người tiêu dùng nên điều chỉnh thói quen uống trà sữa của mình.", isFake: false },
                { text: "Cụ thể, các bạn trẻ nên chủ động yêu cầu giảm lượng đường xuống mức 30% hoặc 50% khi đặt hàng, đồng thời hạn chế các loại topping giàu calo như trân châu đen.", isFake: false }
            ]
        ]
    },
    {
        title: "Chính sách Bảo mật và Thu phí trên Mạng xã hội",
        url: "https://cong-nghe-so-vietnam.vn/tin-tuc/cap-nhat-thay-doi-thuat-toan-mang-xa-hoi",
        category: "Công nghệ",
        date: "Thứ Sáu, 19/05/2026, 09:45 (GMT+7)",
        sapo: "Sự thay đổi về các thuật toán bảo mật và hướng đi mới của các nền tảng mạng xã hội đang làm chao đảo hàng triệu người dùng, đặc biệt trong bối cảnh lừa đảo trực tuyến ngày càng tinh vi.",
        subHeadline: "NGƯỜI DÙNG HOANG MANG TRƯỚC LÀN SÓNG THU PHÍ...",
        image: "ai_socialmedia.png",
        imageCaption: "Quyền riêng tư và chi phí sử dụng đang là chủ đề nóng trên các diễn đàn công nghệ. ẢNH: MINH HỌA",
        blocks: [
            [
                { text: "Sự bùng nổ của mạng xã hội trong kỷ nguyên số đã làm thay đổi hoàn toàn cách chúng ta giao tiếp, chia sẻ thông tin và cập nhật tin tức mỗi ngày.", isFake: false },
                { text: "Các nền tảng như Facebook, TikTok, và Instagram đã trở thành một phần không thể thiếu trong đời sống của hàng tỷ người trên toàn cầu.", isFake: false },
                { text: "Để duy trì sức hút và giữ chân người dùng, các công ty công nghệ này không ngừng nghiên cứu và ứng dụng những thuật toán tiên tiến.", isFake: false }
            ],
            [
                { text: "Những hệ thống AI này có khả năng phân tích hành vi, sở thích, và thời gian tương tác của người dùng để liên tục đề xuất những nội dung phù hợp nhất.", isFake: false },
                { text: "Bắt đầu từ ngày mùng 1 tháng sau, liên minh các nền tảng mạng xã hội lớn bao gồm Meta và TikTok sẽ áp dụng quy định thắt chặt độ tuổi.", isFake: true },
                { text: "Toàn bộ người dùng dưới 18 tuổi tại Việt Nam bắt buộc phải trả một khoản phí duy trì tài khoản là 50.000 đồng mỗi tháng.", isFake: true }
            ],
            [
                { text: "Cùng với sự phát triển mạnh mẽ của công nghệ, vấn đề bảo mật dữ liệu và quyền riêng tư của người dùng đang được đặt lên bàn cân hơn bao giờ hết.", isFake: false },
                { text: "Thủ tục thanh toán phí bắt buộc phải thực hiện qua hình thức mua thẻ cào điện thoại nạp trực tiếp trong phần cài đặt của ứng dụng.", isFake: true },
                { text: "Các chính phủ và tổ chức quốc tế đang liên tục gây áp lực buộc các gã khổng lồ công nghệ phải minh bạch hóa quá trình thu thập dữ liệu.", isFake: false }
            ],
            [
                { text: "Để tuân thủ các quy định pháp lý ngày càng khắt khe, nhiều nền tảng đã bắt đầu triển khai các cơ chế xác thực danh tính thực, yêu cầu người dùng cung cấp số điện thoại.", isFake: false },
                { text: "Nếu tài khoản nào không hoàn tất đóng phí trước thời hạn, hệ thống sẽ tự động quét AI và thực hiện khóa kênh vĩnh viễn.", isFake: true },
                { text: "Thậm chí, toàn bộ video, hình ảnh dữ liệu cá nhân sẽ bị xóa sạch khỏi máy chủ mà không có bất kỳ cơ chế khiếu nại hay phục hồi nào.", isFake: true }
            ],
            [
                { text: "Việc xác thực danh tính không chỉ giúp thanh lọc không gian mạng mà còn bảo vệ thanh thiếu niên khỏi những nội dung độc hại và lừa đảo.", isFake: false },
                { text: "Chính sách thu phí này được cho là một biện pháp mạnh tay nhằm ép buộc người dùng chuyển sang sử dụng các ứng dụng mạng xã hội do chính phủ trực tiếp quản lý.", isFake: true },
                { text: "Ngoài ra, các bộ lọc nội dung tự động dựa trên học máy cũng đang hoạt động không mệt mỏi để quét và gỡ bỏ những bài đăng vi phạm tiêu chuẩn cộng đồng.", isFake: false }
            ],
            [
                { text: "Mặc dù công nghệ mang lại rất nhiều lợi ích thiết thực, nhưng người dùng mạng xã hội, đặc biệt là giới trẻ, cần tự trang bị cho mình kỹ năng phân tích và chắt lọc thông tin.", isFake: false },
                { text: "Việc tiếp cận thông tin đa chiều từ các nguồn uy tín sẽ giúp chúng ta tránh rơi vào cái bẫy của thuật toán bong bóng lọc.", isFake: false }
            ]
        ]
    },
    {
        title: "Ứng dụng Công nghệ và Camera giám sát lớp học",
        url: "https://nhip-song-hoc-duong.edu.vn/cong-nghe/trien-khai-ha-tang-an-ninh-truong-hoc",
        category: "Giới trẻ",
        date: "Chủ Nhật, 21/05/2026, 10:00 (GMT+7)",
        sapo: "Chuyển đổi số trường học không chỉ mang lại cơ sở vật chất khang trang mà còn dấy lên nhiều ý kiến trái chiều về quyền riêng tư và áp lực học tập của học sinh trong thời đại AI.",
        subHeadline: "HIỆU QUẢ HAY TẠO ÁP LỰC CHO HỌC SINH?",
        image: "ai_camera.png",
        imageCaption: "Hệ thống giám sát thông minh mang lại lợi ích an ninh nhưng cũng dấy lên nỗi lo về quyền riêng tư. ẢNH: MINH HỌA",
        blocks: [
            [
                { text: "Trường học hiện đại không chỉ là nơi truyền đạt kiến thức mà còn là môi trường an toàn, tiện nghi để học sinh phát triển toàn diện cả về thể chất lẫn tinh thần.", isFake: false },
                { text: "Trong những năm gần đây, xu hướng thông minh hóa cơ sở hạ tầng giáo dục đang lan tỏa rộng rãi tại nhiều quốc gia, trong đó có Việt Nam.", isFake: false },
                { text: "Một trong những trọng tâm của quá trình này là việc nâng cấp hệ thống an ninh và quản lý.", isFake: false }
            ],
            [
                { text: "Hàng loạt các thiết bị giám sát tiên tiến như camera an ninh hồng ngoại, hệ thống báo cháy tự động, và các cảm biến nhận diện khói đã được lắp đặt đồng bộ.", isFake: false },
                { text: "Nhà trường đang cho triển khai lắp đặt hệ thống camera thông minh tích hợp AI nhận diện biểu cảm sinh trắc học ngay trong mỗi phòng học.", isFake: true },
                { text: "Hệ thống siêu việt này có chức năng phân tích cơ mặt và tự động chấm điểm thái độ học tập của từng học sinh theo thời gian thực.", isFake: true }
            ],
            [
                { text: "Nhờ vào những công nghệ này, ban giám hiệu và đội ngũ bảo vệ có thể dễ dàng theo dõi mọi hoạt động trong khuôn viên trường, kịp thời phát hiện sự cố.", isFake: false },
                { text: "Bất kỳ học sinh nào có hành vi ngáp ngủ, quay ngang quay ngửa hoặc không nhìn lên bảng quá 5 giây sẽ bị AI lập biên bản kỹ thuật số.", isFake: true },
                { text: "Sự hiện diện của hệ thống camera giám sát thông thường cũng góp phần duy trì trật tự an ninh, ngăn ngừa sự xâm nhập của kẻ xấu từ bên ngoài.", isFake: false }
            ],
            [
                { text: "Cùng với hệ thống giám sát an ninh, các trường học cũng đang chú trọng đầu tư vào cơ sở vật chất phục vụ giảng dạy như bảng tương tác điện tử.", isFake: false },
                { text: "Hệ thống AI này sẽ tự động trừ thẳng 5 điểm hạnh kiểm vào sổ điểm điện tử quốc gia mà không cần thông qua sự đồng ý của giáo viên chủ nhiệm.", isFake: true },
                { text: "Đồng thời, một tin nhắn thông báo kèm lệnh đóng tiền phạt vi phạm kỷ luật sẽ được gửi trực tiếp về điện thoại của phụ huynh ngay lập tức.", isFake: true }
            ],
            [
                { text: "Các phòng học thông minh được trang bị máy chiếu độ phân giải cao và hệ thống âm thanh chuẩn đang dần thay thế những tấm bảng đen truyền thống.", isFake: false },
                { text: "Học sinh nào vi phạm quá 3 lần trong một tuần sẽ bị hệ thống AI tự động kích hoạt lệnh cấm túc, khóa thẻ học sinh và không cho phép bước qua cổng trường.", isFake: true },
                { text: "Công nghệ thực tế ảo và thực tế tăng cường cũng đang bắt đầu được đưa vào bài giảng để tăng tính tương tác sinh động.", isFake: false }
            ],
            [
                { text: "Chuyển đổi số trong giáo dục còn thể hiện ở việc áp dụng các phần mềm quản lý học sinh toàn diện, giúp giáo viên dễ dàng theo dõi điểm số.", isFake: false },
                { text: "Tất cả những nỗ lực ứng dụng công nghệ này đều hướng tới một mục tiêu chung là xây dựng một hệ sinh thái giáo dục an toàn và hiện đại.", isFake: false }
            ]
        ]
    }
];
