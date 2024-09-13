0. Hypertext_Transfer_Protocol : check mã lỗi, method
1. mở rộng Express
2. nodemon -> để lưu nhanh ko cần chạy sever
3. morgan -> tạo logger khi call API
4. Template Engine |express Handlebars |pug -> handlebars is not a function -> fix 
app.engine('hbs', handlebars.engine(
  {
    defaultLayout: 'main',
    extname: '.hbs'
  }))

  5. .Scss -> sửa trực tiếp trên scss rồi output nhận là app.css -> npm run watch
  cấu hình như dưới :
  "scripts": {
    "start": "nodemon --inspect src/index.js",
    "watch": "node-sass --watch src/resources/scss --output src/public/css",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  6. https://www.mongodb.com/try/download/community Mongo DB
  7. checkbox:
    //1 : tích/không tích => checkbox all được check/unCheck
    //2 : tắt 1 checkbox thì checkbox all không được check
    //3 : tích hết checkbox con thì checkbox all được check
    //4 : không check checbox nào thì disable nút submit
    //5 : nếu check 1 checkbox thì enable
    //6 : Chọn hành động để submit [xóa, khôi phục, xóa vĩnh viễn]

    cách làm:
    //1 : sử dụng jquery để để lấy id hoặc class checkall
    //2 : 