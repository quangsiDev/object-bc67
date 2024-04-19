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

function kiemTraDoDai(value, idErr, min, max) {
  if (min < value.length && value.length < max) {
    document.getElementById(idErr).innerText = "";
    return true;
  }
  document.getElementById(idErr).innerText = `Nội dung này phải từ ${min} đến ${max} kí tự`;
  return false;
}

// regex
function kiemTraEmail(email) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  if (regex.test(email)) {
    document.getElementById("spanEmailSV").innerText = "";
    return true;
  }
  document.getElementById("spanEmailSV").innerText = "Email không đúng định dạng";

  return false;
}
