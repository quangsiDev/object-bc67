/*
  - Array : lưu danh sách data cùng loại  ~ [ ] ~ dùng index để lấy ra phần tử
  - Object : lưu các data khác nhau cùng miêu tả 1 đối tượng ~ { } ~ dùng object.key để lấy ra value
 */

/**
  var name={
    key:value,
  }
 */

// tạo object con mèo

var cat1 = {
  name: "miu",
  color: "white",
};
console.log("😀 - cat1", cat1);
var cat2 = {
  name: "mun",
  color: "black",
  speak: function () {
    console.log("meo meo", this.name);
  },
};
//  object.key để lấy ra value
console.log(cat2.name);
console.log(cat2.speak());
// cat2.speak;

// con trỏ this ~ dùng bên trong object ~ truy xuất tới các giá trị nằm bên trong object hiện tại

var nv1 = {
  name: "iron man",
  speak: function () {
    console.log("Tôi tên là: ", this.name);
  },
  age: 20,
};

console.log(nv1.name);
nv1.speak();

// update value của object
nv1.name = "supper man";
console.log("😀 - nv1", nv1);

// tạo object là sản phầm gồm: tên, giá, số lượng , phương thức tính tiền return giá * số lượng

var sanPham = {
  name: "Tủ lạnh",
  gia: 50,
  soLuong: 10,
  tinhTien: function () {
    return this.gia * this.soLuong;
  },
};
var result = sanPham.tinhTien();
console.log("😀 - result", result);
