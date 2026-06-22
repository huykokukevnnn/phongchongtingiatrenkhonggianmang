const rawArticles = [
    {
        title: "Quy chế học đường và Kỳ thi tốt nghiệp mới",
        url: "https://baochinhthuc-giaoduc.vn/thong-tin-tuyen-sinh/quy-che-thi-tot-nghiep-thpt-moi",
        category: "GIÁO DỤC",
        date: "Thứ Hai, 15/05/2026, 08:30 (GMT+7)",
        paragraphs: [
            {
                type: "intro",
                text: "Trong bối cảnh giáo dục đang chuyển mình mạnh mẽ, Bộ Giáo dục và Đào tạo đã chính thức công bố những định hướng quan trọng về Chương trình Giáo dục Phổ thông 2018. Trọng tâm của sự đổi mới lần này không chỉ dừng lại ở việc cập nhật kiến thức mà còn hướng tới phát triển toàn diện năng lực và phẩm chất của học sinh. Quá trình chuyển đổi số trong giáo dục đang được đẩy nhanh tiến độ, thể hiện rõ qua việc triển khai các nền tảng học trực tuyến, học bạ điện tử và sổ liên lạc kỹ thuật số."
            },
            {
                type: "body",
                text: "Điều này giúp phụ huynh dễ dàng theo dõi tiến độ học tập của con em mình một cách nhanh chóng và minh bạch hơn bao giờ hết. Hơn thế nữa, các trường trung học phổ thông trên cả nước cũng đang tích cực đầu tư vào cơ sở hạ tầng công nghệ, nâng cấp hệ thống phòng máy tính và kết nối internet tốc độ cao để đáp ứng nhu cầu giảng dạy hiện đại. Một số trường tiên phong đã bắt đầu áp dụng phương pháp giáo dục STEM, lồng ghép các môn Khoa học, Công nghệ, Kỹ thuật và Toán học vào chương trình chính khóa, từ đó kích thích tư duy sáng tạo của các em."
            },
            {
                type: "body_fake",
                context_text: "Nhằm giảm bớt áp lực thi cử và hướng tới một môi trường học tập lành mạnh, các hình thức đánh giá cũng đang dần thay đổi. Thay vì chỉ chú trọng vào các bài kiểm tra tự luận hay trắc nghiệm trên giấy truyền thống, giáo viên được khuyến khích sử dụng các hình thức đánh giá đa dạng như dự án học tập, bài thuyết trình, và đánh giá quá trình. ",
                fake_text: "Bộ Giáo dục vừa đưa ra thông báo khẩn cấp áp dụng ngay trong tháng này. Theo đó, học sinh khối 11 trên toàn quốc sẽ phải thi bắt buộc 8 môn trong kỳ thi tốt nghiệp THPT theo chương trình mới. Để siết chặt kỷ luật, điểm số học kỳ 2 của học sinh sẽ bị nhân hệ số 3 nếu tự ý nghỉ quá 2 buổi học không phép. Ngoài ra, văn bản mới quy định các trường THPT sẽ cấm hoàn toàn việc sử dụng điện thoại của học sinh, kể cả trong giờ ra chơi hoặc khi ở trong khuôn viên căn-tin, những trường hợp vi phạm lần đầu sẽ bị đình chỉ học 1 tháng để kiểm điểm. Đại diện Bộ cũng nhấn mạnh đây là quy định đã được ký duyệt chính thức và không có ngoại lệ cho bất kỳ địa phương nào."
            },
            {
                type: "body",
                text: "Ngoài ra, công tác tư vấn tâm lý học đường cũng đang được đặc biệt quan tâm, nhằm hỗ trợ học sinh vượt qua những khó khăn về mặt tinh thần trong độ tuổi vị thành niên. Các hội thảo hướng nghiệp được tổ chức thường xuyên với sự tham gia của các chuyên gia hàng đầu, cung cấp cho các em những góc nhìn thực tế về thị trường lao động."
            },
            {
                type: "conclusion",
                text: "Kỳ thi tốt nghiệp trung học phổ thông sẽ được thiết kế lại để đánh giá đúng năng lực cốt lõi, giúp học sinh có nhiều cơ hội hơn trong việc lựa chọn ngành nghề tương lai phù hợp với sở trường cá nhân. Cơ hội để học sinh tiếp cận với các chương trình liên kết quốc tế cũng ngày càng rộng mở, tạo điều kiện cho các em trau dồi ngoại ngữ và kỹ năng hội nhập toàn cầu. Việc chú trọng vào giáo dục thể chất và nghệ thuật song song với các môn văn hóa đang dần trở thành tiêu chuẩn chung của các trường chất lượng cao."
            }
        ]
    },
    {
        title: "Cảnh báo An toàn thực phẩm và Xu hướng Giới trẻ",
        url: "https://tin-tuc-suc-khoe24h.vn/doi-song-tre/can-hien-thuc-trang-tieu-thu-tra-sua",
        category: "SỨC KHỎE ĐỜI SỐNG",
        date: "Thứ Tư, 17/05/2026, 14:15 (GMT+7)",
        paragraphs: [
            {
                type: "intro",
                text: "Trà sữa từ lâu đã trở thành một biểu tượng của văn hóa ẩm thực đường phố, đặc biệt được ưa chuộng bởi giới trẻ và giới văn phòng. Sự bùng nổ của hàng loạt thương hiệu trà sữa với những hương vị sáng tạo, từ trân châu đường đen, kem cheese béo ngậy cho đến trà hoa quả thanh mát, đã tạo nên một thị trường sôi động và đầy tính cạnh tranh. Theo các báo cáo phân tích tiêu dùng, trung bình mỗi ngày có hàng triệu ly trà sữa được tiêu thụ tại các đô thị lớn."
            },
            {
                type: "body",
                text: "Các chiến dịch quảng cáo với hình ảnh bắt mắt, kết hợp cùng các chương trình khuyến mãi hấp dẫn qua ứng dụng giao đồ ăn, càng làm tăng thêm sức hút của loại đồ uống này. Tuy nhiên, đằng sau sự phổ biến đó, các chuyên gia dinh dưỡng liên tục lên tiếng cảnh báo về những tác động tiêu cực đến sức khỏe nếu tiêu thụ trà sữa quá mức. Thành phần chính của trà sữa thường bao gồm trà, sữa đặc, đường, và các loại topping chứa hàm lượng carbohydrate rất cao."
            },
            {
                type: "body",
                text: "Theo khuyến nghị của Tổ chức Y tế Thế giới (WHO), lượng đường tiêu thụ tự do mỗi ngày của một người trưởng thành không nên vượt quá 25 gram để đảm bảo sức khỏe tối ưu. Trong khi đó, một ly trà sữa size lớn với 100% đường có thể chứa tới 50 gram đường, gấp đôi mức cho phép hàng ngày. Việc dung nạp quá nhiều đường liên tục trong một thời gian dài là nguyên nhân hàng đầu dẫn đến tình trạng thừa cân, béo phì ở lứa tuổi thanh thiếu niên."
            },
            {
                type: "body_fake",
                context_text: "Không dừng lại ở đó, lượng đường cao còn làm tăng nguy cơ mắc các bệnh lý chuyển hóa như tiểu đường tuýp 2, gan nhiễm mỡ, và các vấn đề về tim mạch. Các bác sĩ cũng lưu ý rằng, việc tiêu thụ nhiều đường tinh luyện có thể gây ảnh hưởng xấu đến sức khỏe răng miệng, làm tăng khả năng sâu răng. ",
                fake_text: "Theo thông tin rò rỉ từ cơ quan kiểm định, lực lượng chức năng vừa phát hiện chất gây nghiện cực mạnh thuộc danh mục cấm trộn lẫn trong trân châu của một thương hiệu trà sữa nổi tiếng nhất hiện nay. Hợp chất hóa học này khiến người uống bị lệ thuộc tâm lý ngay từ ly đầu tiên. Báo cáo ghi nhận hơn 100 học sinh tại địa bàn thành phố lớn đã phải nhập viện cấp cứu trong tình trạng ngộ độc nguy kịch, suy gan cấp và hôn mê sâu. Hiện tại toàn bộ hệ thống này đã bị phong tỏa niêm phong vĩnh viễn và cơ quan công an đang phát lệnh truy nã ban giám đốc điều hành."
            },
            {
                type: "conclusion",
                text: "Để cân bằng giữa sở thích cá nhân và sức khỏe, các chuyên gia khuyến cáo người tiêu dùng nên điều chỉnh thói quen uống trà sữa của mình. Cụ thể, các bạn trẻ nên chủ động yêu cầu giảm lượng đường xuống mức 30% hoặc 50% khi đặt hàng, đồng thời hạn chế các loại topping giàu calo như trân châu đen. Việc tự pha chế thức uống từ trái cây tươi tại nhà cũng là một lựa chọn thay thế hoàn hảo."
            }
        ]
    },
    {
        title: "Chính sách Bảo mật và Thu phí trên Mạng xã hội",
        url: "https://cong-nghe-so-vietnam.vn/tin-tuc/cap-nhat-thay-doi-thuat-toan-mang-xa-hoi",
        category: "CÔNG NGHỆ BẢO MẬT",
        date: "Thứ Sáu, 19/05/2026, 09:45 (GMT+7)",
        paragraphs: [
            {
                type: "intro",
                text: "Sự bùng nổ của mạng xã hội trong kỷ nguyên số đã làm thay đổi hoàn toàn cách chúng ta giao tiếp, chia sẻ thông tin và cập nhật tin tức mỗi ngày. Các nền tảng như Facebook, TikTok, và Instagram đã trở thành một phần không thể thiếu trong đời sống của hàng tỷ người trên toàn cầu, đặc biệt là thế hệ Z. Để duy trì sức hút và giữ chân người dùng, các công ty công nghệ này không ngừng nghiên cứu và ứng dụng những thuật toán tiên tiến."
            },
            {
                type: "body",
                text: "Những hệ thống AI này có khả năng phân tích hành vi, sở thích, và thời gian tương tác của người dùng để liên tục đề xuất những nội dung phù hợp nhất, từ đó tạo ra những trải nghiệm mang tính cá nhân hóa cao độ. Cùng với sự phát triển mạnh mẽ của công nghệ, vấn đề bảo mật dữ liệu và quyền riêng tư của người dùng đang được đặt lên bàn cân hơn bao giờ hết. Các chính phủ và tổ chức quốc tế đang liên tục gây áp lực buộc các gã khổng lồ công nghệ phải minh bạch hóa quá trình thu thập."
            },
            {
                type: "body",
                text: "Để tuân thủ các quy định pháp lý ngày càng khắt khe, nhiều nền tảng đã bắt đầu triển khai các cơ chế xác thực danh tính thực, yêu cầu người dùng cung cấp số điện thoại hoặc giấy tờ tùy thân để hạn chế tình trạng tài khoản giả mạo. Việc này không chỉ giúp thanh lọc không gian mạng mà còn bảo vệ thanh thiếu niên khỏi những nội dung độc hại và lừa đảo."
            },
            {
                type: "body_fake",
                context_text: "Ngoài ra, các bộ lọc nội dung tự động dựa trên học máy cũng đang hoạt động không mệt mỏi để quét và gỡ bỏ những bài đăng vi phạm tiêu chuẩn cộng đồng, ngôn từ kích động thù địch. ",
                fake_text: "Bắt đầu từ ngày mùng 1 tháng sau, liên minh các nền tảng mạng xã hội lớn bao gồm Meta và TikTok sẽ áp dụng quy định thắt chặt độ tuổi. Toàn bộ người dùng dưới 18 tuổi tại Việt Nam bắt buộc phải trả một khoản phí duy trì tài khoản là 50.000 đồng mỗi tháng. Thủ tục thanh toán phải thực hiện qua thẻ cào điện thoại nạp trực tiếp trong phần cài đặt. Nếu tài khoản nào không hoàn tất đóng phí trước thời hạn, hệ thống sẽ tự động quét AI và thực hiện xóa kênh, xóa toàn bộ video, hình ảnh dữ liệu vĩnh viễn mà không thể khiếu nại phục hồi."
            },
            {
                type: "conclusion",
                text: "Mặc dù công nghệ mang lại rất nhiều lợi ích thiết thực, nhưng người dùng mạng xã hội, đặc biệt là giới trẻ, cần tự trang bị cho mình kỹ năng phân tích và chắt lọc thông tin. Việc tiếp cận thông tin đa chiều từ các nguồn uy tín sẽ giúp chúng ta tránh rơi vào cái bẫy của thuật toán bong bóng lọc, bảo vệ bản thân trước thông tin độc hại."
            }
        ]
    },
    {
        title: "Ứng dụng Công nghệ và Camera giám sát lớp học",
        url: "https://nhip-song-hoc-duong.edu.vn/cong-nghe/trien-khai-ha-tang-an-ninh-truong-hoc",
        category: "NHỊP SỐNG HỌC ĐƯỜNG",
        date: "Chủ Nhật, 21/05/2026, 10:00 (GMT+7)",
        paragraphs: [
            {
                type: "intro",
                text: "Trường học hiện đại không chỉ là nơi truyền đạt kiến thức mà còn là môi trường an toàn, tiện nghi để học sinh phát triển toàn diện cả về thể chất lẫn tinh thần. Trong những năm gần đây, xu hướng thông minh hóa cơ sở hạ tầng giáo dục đang lan tỏa rộng rãi tại nhiều quốc gia, trong đó có Việt Nam. Một trong những trọng tâm của quá trình này là việc nâng cấp hệ thống an ninh và quản lý."
            },
            {
                type: "body",
                text: "Hàng loạt các thiết bị giám sát tiên tiến như camera an ninh hồng ngoại, hệ thống báo cháy tự động, và các cảm biến nhận diện khói đã được lắp đặt đồng bộ tại hành lang, cầu thang, sân trường và thư viện. Nhờ vào những công nghệ này, ban giám hiệu và đội ngũ bảo vệ có thể dễ dàng theo dõi mọi hoạt động trong khuôn viên trường theo thời gian thực, kịp thời phát hiện và xử lý các sự cố."
            },
            {
                type: "body_fake",
                context_text: "Sự hiện diện của hệ thống camera giám sát không chỉ góp phần duy trì trật tự an ninh, ngăn ngừa sự xâm nhập của kẻ xấu từ bên ngoài, mà còn tạo tâm lý yên tâm cho cả học sinh và phụ huynh. ",
                fake_text: "Nhà trường đang cho triển khai lắp đặt hệ thống camera thông minh tích hợp AI nhận diện biểu cảm sinh trắc học ngay trong phòng học. Hệ thống này có chức năng tự động chấm điểm thái độ học tập. Bất kỳ học sinh nào có hành vi ngáp ngủ, quay ngang quay ngửa hoặc không nhìn lên bảng sẽ bị AI lập biên bản kỹ thuật số và tự động trừ thẳng 5 điểm hạnh kiểm vào sổ điểm điện tử. Đồng thời, một tin nhắn thông báo kèm lệnh phạt tiền sẽ được gửi trực tiếp về điện thoại của phụ huynh ngay lập tức sau khi kết thúc tiết học đó."
            },
            {
                type: "body",
                text: "Cùng với hệ thống giám sát an ninh, các trường học cũng đang chú trọng đầu tư vào cơ sở vật chất phục vụ giảng dạy. Các phòng học thông minh được trang bị bảng tương tác điện tử, máy chiếu độ phân giải cao và hệ thống âm thanh chuẩn đang dần thay thế những tấm bảng đen truyền thống. Công nghệ thực tế ảo và thực tế tăng cường cũng đang bắt đầu được đưa vào bài giảng."
            },
            {
                type: "conclusion",
                text: "Chuyển đổi số trong giáo dục còn thể hiện ở việc áp dụng các phần mềm quản lý học sinh toàn diện, giúp giáo viên dễ dàng theo dõi điểm số, điểm danh tự động. Tất cả những nỗ lực ứng dụng công nghệ này đều hướng tới một mục tiêu chung là xây dựng một hệ sinh thái giáo dục an toàn, hiện đại, và lấy học sinh làm trung tâm của mọi sự phát triển."
            }
        ]
    }
];
