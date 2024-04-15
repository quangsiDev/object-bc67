// hợp lệ => true

function kiemTraRong(value, idErr) {
  if (value.length == 0) {
    // không hợp lệ => hiển thị thông báo
    document.getElementById(idErr).innerText = "Nội dung này không được bỏ trống";
    return false;
  } else {
    document.getElementById(idErr).innerText = "";
    return true;
  }
}
