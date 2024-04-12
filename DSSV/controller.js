function renderDssv() {
  //   render dssv
  var contentHTML = "";

  for (var i = 0; i < dssv.length; i++) {
    var sv = dssv[i];
    var trString = `  <tr>
    <td>${sv.ma}</td>
    <td>${sv.ten}</td>
    <td>${sv.email}</td>
    <td>${0}</td>
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
