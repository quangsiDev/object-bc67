var dssv = [];

// lấy data khi user load trang => 2 bước: 1. lấy data từ localStorage. 2 convert json to array
var dataJson = localStorage.getItem("DSSV");
// kiểm tra data lấy lên khác null
if (dataJson !== null) {
  dssv = JSON.parse(dataJson);
  // convert array object không có method ( method bị mất khi stringtify ) trở thành 1 array object có method
  for (var i = 0; i < dssv.length; i++) {
    var item = dssv[i];
    var sv = new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matKhau,
      item.toan,
      item.ly,
      item.hoa
    );
    dssv[i] = sv;
  }
  // render lại table sau khi lấy data thàng công
  renderDssv();
}
function themSv() {
  var sv = layThongTinTuForm();
  // validate
  // a() && b()  , nếu a sai thì dòng lệnh kết thúc tại && ( b không được chạy)=> dùng & thay cho &&
  // validate mã sv
  var isValid = kiemTraRong(sv.ma, "spanMaSV");
  // validate tên sv
  isValid =
    isValid & (kiemTraRong(sv.ten, "spanTenSV") && kiemTraDoDai(sv.ten, "spanTenSV", 3, 20));
  // validate email
  isValid &= kiemTraEmail(sv.email);
  isValid = isValid & kiemTraDoDai(sv.matKhau, "spanMatKhau", 6, 12);
  if (isValid == true) {
    dssv.push(sv);
    //lưu dssv vào localStorage => 2 bước : 1. convert data to json, 2. lưu json vào localStorage
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV", dataJson);
    renderDssv();
  }
}

function xoaSv(id) {
  console.log("😀 - id", id);
  // splice(index,1)
  // tìm index bằng findIndex
  var index = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  dssv.splice(index, 1);
  // render lại table sau khi xoá thành công
  renderDssv();
}
function suaSv(id) {
  // từ id tìm  index của item được click
  var index = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  // từ index => tìm ra object
  var sv = dssv[index];
  console.log("😀 - sv", sv);
  // đưa object đó lên lại form
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemLy").value = sv.ly;
  document.getElementById("txtDiemHoa").value = sv.hoa;
  // disable input mã sinh viên không cho user sửa
  document.getElementById("txtMaSV").readOnly = true;
}

function resetForm() {
  // clear input nằm trong form
  document.getElementById("formQLSV").reset();
  // bỏ thuộc readOnly của thẻ input
  document.getElementById("txtMaSV").readOnly = false;
}
function capNhatSv() {
  // lấy thông tin từ form
  // tìm index từ id
  // update  dssv[index]= sv
  // render lại table sinh viên
  var sv = layThongTinTuForm();
  console.log("😀 - sv", sv);
  var index = dssv.findIndex(function (item) {
    return item.ma == sv.ma;
  });
  dssv[index] = sv;
  renderDssv();
}

// localstorage sessionstorage cookies

// localstorage ~ giữ lại data khi close trình duyệt

// localStorage.setItem  ~ lưu data ( dưới dạng json ) vào vùng nhớ localStorage của browser
// localStorage.getItem ~ lấy data lên

// JSON.stringify ~ convert data gốc sang json ( nếu convert object to json thì object sẽ bị mất method)
// JSON.parse ~ convert json trở lại data gốc

var names = ["alice"];
names[0] = "alice nguyễn";

// regex email
