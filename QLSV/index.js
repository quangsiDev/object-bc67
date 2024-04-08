/**
  1. Lấy thông tin từ form
  2. Tạo object
  3. Show object lên layout
 */

function submit() {
  // b1
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var loai = document.getElementById("loaiSV").value;
  var diemToan = document.getElementById("txtDiemToan").value * 1;
  var diemVan = document.getElementById("txtDiemVan").value * 1;
  //   b2
  var sv = {
    ma: ma,
    ten: ten,
    loai: loai,
    diemToan: diemToan,
    diemVan: diemVan,
    tinhDTB: function () {
      var dtb = (this.diemToan + this.diemVan) / 2;
      return dtb;
    },
    xepLoai: function () {
      var dtb = this.tinhDTB();
      if (dtb >= 5) {
        return "Đạt";
      }
      return "Rớt";
    },
  };
  //   b3
  document.getElementById("spanTenSV").innerText = sv.ten;
  document.getElementById("spanMaSV").innerText = sv.ma;
  document.getElementById("spanLoaiSV").innerText = sv.loai;
  document.getElementById("spanDTB").innerText = sv.tinhDTB();
  document.getElementById("spanXepLoai").innerText = sv.xepLoai();
}
