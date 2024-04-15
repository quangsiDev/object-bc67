function renderDssv() {
  //   render dssv
  var contentHTML = "";

  for (var i = 0; i < dssv.length; i++) {
    var sv = dssv[i];
    var trString = `  <tr>
    <td>${sv.ma}</td>
    <td>${sv.ten}</td>
    <td>${sv.email}</td>
    <td>${sv.tinhDTB()}</td>
    <td>
    <button
    onclick="xoaSv('${sv.ma}')"
    class='btn btn-danger'>Xoá</button>
    <button
    onclick="suaSv('${sv.ma}')"
    class='btn btn-dark'>Sửa</button>

    </td>

    </tr>`;
    contentHTML += trString;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function layThongTinTuForm() {
  // lấy data từ layout ,return object sv
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var toan = document.getElementById("txtDiemToan").value;
  var ly = document.getElementById("txtDiemLy").value;
  var hoa = document.getElementById("txtDiemHoa").value;
  var sv = new SinhVien(ma, ten, email, matKhau, toan, ly, hoa);
  return sv;
}
