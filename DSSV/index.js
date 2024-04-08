var dssv = [];
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
  //   render dssv
  var contentHTML = "";

  for (var i = 0; i < dssv.length; i++) {
    var sv = dssv[i];
    var trString = `  <tr>
    <td>${sv.ma}</td>
    <td>${sv.ten}</td>
    <td>${sv.email}</td>
    <td>${sv.tinhDTB()}</td>
    </tr>`;
    contentHTML += trString;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
