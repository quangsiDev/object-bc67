var dssv = [];

// lấy data khi user load trang => 2 bước: 1. lấy data từ localStorage. 2 convert json to array
var dataJson = localStorage.getItem("DSSV");
// kiểm tra data lấy lên khác null
if (dataJson !== null) {
  dssv = JSON.parse(dataJson);
  // render lại table sau khi lấy data thàng công
  renderDssv();
}
function themSv() {
  console.log("yes");
  //   lấy thông tin từ form
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var toan = document.getElementById("txtDiemToan").value;
  var ly = document.getElementById("txtDiemLy").value;
  var hoa = document.getElementById("txtDiemHoa").value;
  //   tạo object
  var sv = {
    ma: ma,
    ten: ten,
    email: email,
    matKhau: matKhau,
    toan: toan,
    hoa: hoa,
    ly: ly,
    tinhDTB: function () {
      return (this.toan + this.ly + this.hoa) / 3;
    },
  };
  dssv.push(sv);
  //lưu dssv vào localStorage => 2 bước : 1. convert data to json, 2. lưu json vào localStorage

  var dataJson = JSON.stringify(dssv);
  localStorage.setItem("DSSV", dataJson);
  renderDssv();
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
function capNhatSv() {}
// localstorage sessionstorage cookies

// localstorage ~ giữ lại data khi close trình duyệt

// localStorage.setItem  ~ lưu data ( dưới dạng json ) vào vùng nhớ localStorage của browser
// localStorage.getItem ~ lấy data lên

// JSON.stringify ~ convert data gốc sang json ( nếu convert object to json thì object sẽ bị mất method)
// JSON.parse ~ convert json trở lại data gốc

var names = ["alice"];
names[0] = "alice nguyễn";
