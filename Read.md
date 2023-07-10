1. utils là viết về function ví dụ chuyển đổi kí tự hoa sang thường

helpers ==> như là ủy quyền, cần sự giúp đỡ mới gọi

2. Phát hiện server quá tải

.env và process => nếu làm việc trong team nhiều member

=> tại sao lại cần env

#Kiến thức nodejs nền tảng

1.  Tổng quan về lập trình back-end, cách mà back-end hoạt động
2.  Tổng quan về nodejs
3.  Xây dựng ứng dụng nodejs đầu tiên
4.  Sử dụng CommonJS và ES Module
5.  Xuất nội dung HTML,JSON
6.  Đọc nội dung file HTML
7.  Xử lý Routing trong Nodejs
8.  HTTP get
9.  HTTP post
10. Xử lý Form trong Nodejs
11. Validate Form với Nodejs
12. Upload File với Nodejs
13. Session trong Nodejs
14. Cookie trong Nodejs

#ExpressJS Framework

1. kiến thức căn bản
   a. Tổng quan về ExpressJS Framework
   b. Cài đặt Express Generator
   c. Các thành phần của Express
   d. Cấu trúc Folder của Express Generator
   e. Tìm hiểu về lifecycle Request
   f. Middleware Express: Global Middleware, Routing Middleware
   g. Tự Xây dựng Middleware ExpressJS
   h. Routing Express và các kỹ thuật xử lý
   j. Request và Response trong ExpressJS
   k. Render giao diện trong ExpressJS
   l. Xây dựng trang Error
2. Mô hình MVC
   a. Tổng quan về mô hình MVC
   b. Làm việc với Controller
   c. Cách xây dựng với Controller
   d. Các tổ chức các action
   e. Làm việc với view
   f. Phân chia view hiệu quả
   g. Gửi và nhận dữ liệu từ Controller sang View
   f. Cú pháp trong template Engine Ejs
   g. Giới thiệu master layout Ejs
   h. Xây dựng giao diện theo Master Layout
   j. Làm việc với Model
   k. Tư duy xây dựng Model đúng
   l. Demo xây dựng COntroller - Model - View với dữ liệu fake
3. Cơ sở dữ liệu (MYSQL)
   a. Tổng quan về CSDL và các loại CSDL
   b. Phần mềm và công cụ cần chuẩn bị
   c. Kiến thức SQL - Thao tác với Database
   d. Kiến thức SQL - Các kiểu dữ liệu trong SQL
   e. kiến thức SQL - Tạo bảng
   f. Kiến thức SQL - thêm, sửa, xóa dữ liệu
   g. kiến thức SQL- thiết lập các ràng buôc
   h. kiến thức SQL - Truy vấn dữ liệu
   j. Kiến thức SQL - JOin Table
   k. kiến thức SQL - SubQuery
   l. kiến thức SQL - Import và Export Database
   z. Thiết kế Database bằng công cụ: phpadmin, navicat
   x. Thực hành trang web bán hàng
4. Thao tác Nodejs với MYSQL
   a. Xây dựng file config để lưu các cấu hình
   b. Tìm hiểu về file .env và cách sử dụng
   c. Tìm hiểu về sequelize, typeorm, Prisma và 3 thằng thể loại cli
   d. Kết nối Database với Sequelize và các kỹ thuật
   e. Các thao tác với dữ liệu như thêm, sửa, xóa, truy vấn
   f. Các kỹ thuật nâng cao
5. Mail trong Nodejs
   a. Tìm hiểu về các tình uống mail
   b. Tìm hiểu package nodemailer
   c. Tìm hiểu SMTP, cách lấy thông tin SMTP của gmail
   d. Thiết lập cấu hình SMTP trong file config
   f. Thao tác gửi mail với nodemailer
   h. Thao tác với template mail
   j. Làm việc với Notication Email với package có sẵn
6. Authentication với Nodejs
   a. TÌm hiểu Passport.js
   b. Cấu hình Passport.js
   c. Xây dựng chức năng Login sử dụng Passport.js
   d. Tìm hiểu các Middleware trong passport.js
   f. Xây dựng chức năng đăng xuất
   g. Kiểm tra trạng thái đăng nhập
   h. Tích hợp đăng nhập với mạng xã hội
   j. Thực hành xây dựng ứng dụng Authentication hoàn chỉnh
7. Phân quyền người dùng trong Nodejs
   a. Tổng quan về phần quyền người dùng
   b. Mối quan hệ giữa phân quyền và xác thực người dùng
   c. Tìm hiểu Access Control List(ACL)
   d. Tìm hiểu về mô hình Role Based Access Control (RBAC)
   e. Phân quyền vai trò với package node_acl
   f. xây dựng Middleware cho các route
   g. Tư duy phân tích Database phân quyền chủ đọng
   h. Thực hành xây dựng ứng dụng phân quyền hoàn chỉnh
8. Xử lý hàng đợi (Queue) troing Nodejs
   a. Tổng quan về Queue và các tình huống cần sử dụng queue
   b. Tìm hiểu về Kue, rxjs và các tính năng của nó
   c. Cài đặt Redis và KUE
   D. Tạo các worker job
   e. Quản lý các jobs
   f. Thực hành xây dựng chức năng gửi mail hàng loạt sử dụng Queue
   g. Xử lý job scheduling, cronjob trong Nodejs
9. Cache trong Nodejs
   a. Tìm hiểu về Redis
   b. Cách sử dụng Redis trong thực tế
   c. Cache dữ liệu với Redis trong Nodejs
10. RESTFul API với Nodejs
    a. Tổng quan về API và ResfullAPI
    b. Các nguyên tắc khi thiết kế RestFul API
    c. Xây dựng RestFul API hoàn chỉnh với tình huống thực tế
    d. Tìm hiểu về CORS
11. RESTFul API Authentication và Authorization với Nodejs
    a. Tìm hiểu về cookie-based authentication với token-based authentication
    b. Tại sao nên sử dụng Token-based?
    c. Tìm hiểu về JWT, cách mà JWT hoạt động
    d. Tại sao phải quản lý exprie trong accessToken
    e. Sự khác nhau giữa accessToken và refreshToken như thế nào là hợp lý
    f. Xác thực API với Authorization Bearer
    g. Xây dựng Authentication- Authorization API hoàn chỉnh

12. OAuth 2.0 trong Nodejs
    a. Tìm hiểu về Oauth 2.0 Server và tình huống thực tế
    b. tìm hiểu về node-oauth2-server
    c. xây dựng CSDL cho oAuth
    d. Xây dựng Route và Oauth 2.0 service
    f. Xây dựng ứng zdụng thực tế sử dụng Oauth 2.0
13. MVCS Archiecture- Repository Pattern
    a. Tìm hiểu về kiến trúc MVCS
    b. cách triển khai kiến trúc MVCS trong thực tế
    c. Nâng cấp mô hình MVC lên MVCS
    d. Tìm hiểu về Repsitory và các tình huống thực tế
14. Bảo mật và các hình thức tấn công
    a. XSS
    b. SQL Injection
    c. CSRF
    d. HTML Injection
    f. File Upload Attack
    d. .env attack

15. API

## 1. - Giao thức giao tiếp

Giao thức giao tiếp giữa API và người dùng luôn sử dụng giao thức HTTPS

## 2. - Tên miền

https://api.example.com

or

https://example.org/api/

## 3. Phiên bản

https://api.example.com/v1/
https://api.example.com/v2/

## 4. Điểm cuối

https://api.example.com/v1/users
https://api.example.com/v1/products

nên là danh từ ==> ko được đặt là động từ

## 5. OPTOPNS HTTP

GET (SELECT) : Lấy tài nguyên (một hoặc nhiều mục) từ máy chủ
CREATE (CREATE): Tạo một tài nguyên mới trên máy chủ
PUT(UPDATE): Cập nhật tài nguyên trên máy chủ (Máy cung cấp tài nguyên đầy đủ sau khi thay đổi)
PATCH(UPDATE): client chỉ cần gửi 1 filed

Header: Lấy siêu dữ liệu tài nguyên

## 6. - Search - hay filer cũng được

client const str = https://www.facebook.com/
{
limit: 10 ==> querystring ,
page: 1,
per_page: 50
}

const newurl = str + .limit
axios.get('newurl')

==>

?limit=10: nghĩa là lấy 10 thằng thôi ==> querystring
?offset=10: muốn lấy bắt đầu từ vị trí nào được trả về ==>

?page=2&per_page=100: chỉ định số l lượng bản ghi trên mỗi trang

?sortby=name&order=asc: Chỉ định thuộc tính nào để sắp xếp kết quả trả về và thứ tự sắp xếp

## 7. status

200: oke
201: CREATE thanh cong
202: Được chấp nhận, con gà đã được vào hàng đợi
204: KHOONGcos nội dung ==> có nghĩa là con hàng đã được xuất đi => xoa
400: yêu cầu vớ vẩn

401: dell có quyền => a ĐỒng sẽ chỉ tí nữa

403: Forbidden được ủy quyền nhưng méo có quyền truy cập => cứ hiểu là như em là quyền giảng viên nhưng méo có truy cập vào mấy cái dành cho giảng viên ko đc
404: ko tìm thấy

500: datavase

## 8. Xử lý lỗi

1. là dùng chay

2. cài thằng http-errors

//bắt lỗi gửi api sai

````app.use((req, res, next) => {
   next(http-erros(404, "Not FPOaldfhj))
})

//bắt lỗi khi mà biến sai

```app.use(err, req, res, next) => {
   res.status(err.status || 500)
   res.json({
      status: err.status || 500,
      message: err.message
   })
}
````

# Tìm hiểu một số topic về networking

1. HTTP(Hypertext Transfer Protocol)

- HTTP(Hypertext Transfer Protocol) là giao thức thường được sử dụng rộng rãi trong mạng internet để truyền tải dữ liệu giữa máy chủ và trình duyệt web. Nó là một giao thức yêu cầu đáp ứng, trong đó trình duyệt gửi yêu cầu HTTP và máy chủ trả về phản hồi HTTP
- Đặc điểm: HTTP không trạng thái(stateless), có thể sử dụng các phương thức GET(lấy dữ liệu), POST(gửi dữ liệu), PUT(cập nhật dữ liẹu), DELETE(xóa dữ liệu) và nhiều phương thức để tương tác với máy chủ

2. TCP/IP (Transmission Control Protocol/Internet Protocol)

- TCP/IP: là một bộ giao thức mạng phổ biến và quan trọng, cung cấp các quy tắc và quy định để truyền tải dữ liệu trên mạng internet

- TCP: Là một giao thức đáng tin cậy và liên kết, được sử dụng để truyền tải dữ liệu. Nó đảm bảo rằng dữ liệu được chia thành các gói tin, kiểm tra lỗi và đảm bảo việc truyền tải đúng thứ tự mà ko mất dữ liệu.
- IP: là giao thức xác định địa chỉ và định vị các thiết bị trên mạng Internet. Nó đảm bảo viêc định tuyến dữ liệu giữa các máy tính. IP định nghĩa địa chỉ IP(Ví Dụ: IPv4 và IPv6) để xác định mỗi thiết bị kết nối mạng

3. UDP(User Datagram Protocol)

- UDP là một giao thức truyền tải dữ liệu không đáng tin cậy và không liên kết. So với TCP, UDP không đảm bảo độ tin cậy và việc đúng thứ tự của kiểu dữ liệu, nhưng có hiệu suất cao và thích hợp cho các ứng dụng yêu cầu truyền tải nhanh như trò chơi trực tuyến, phát sóng video và ứng dụng VoIP

- Đặc điểm: UDP gửi các gói tin dữ liệu mà không có việc xác nhận được nhân được hay yêu cầu gửi lại. Nó rất hữu ích trong việc truyền tải dữ liệu thời gian thực hoặc trong trường hợp mà một số gói tin mất không ảnh hưởng tới thời gian thực

4. FTP(File Transfer Protocol)

- FTP là giao thức được sử dụng để truyền tải tệp tin giữa các máy tính trong mạng. Nó được cung cấp các phương thức tạo, đọc, cập nhật và xóa các tệp tin trên máy chủ từ xa.

- Đặc điểm: FTP cho phép người dùng xác thực để truy cập vào tệp tin, duyệt qua cấu trúc thư mục, tải lên (upload) và tải xuống (download) tệp tin. Nó sử dụng cổng 20 cho truyền tải dữ liệu và cổng 21 cho điều khiển và xác thực.

5. DNS (Domain Name System):

- DNS là hệ thống xác định địa chỉ IP tương ứng với tên miền (ví dụ: www.example.com). DNS giúp dịch tên miền thành địa chỉ IP để trình duyệt web có thể tìm đến máy chủ web tương ứng.
  Đặc điểm: Khi truy cập một tên miền, trình duyệt web sẽ gửi yêu cầu DNS đến máy chủ DNS để lấy địa chỉ IP tương ứng. Sau đó, trình duyệt sẽ sử dụng địa chỉ IP để truy cập vào nội dung tương ứng từ máy chủ web.

# Topic HTTP và HTTPS compare

# Tìm hiểu sâu về Giao thức HTTPS- SSL/TLS

# System Design

# Tìm hiểu về OS (Operating System ) Topic So Sánh PROCESS và THREAD

# MongoDB + mongoose

1. CRUD
