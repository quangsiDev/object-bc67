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

var cat1 = { color: "black" };

var cat2 = cat1;
cat2.color = "white";
console.log("😀 - cat1", cat1);
console.log("😀 - cat2", cat2);

var colors = ["red"];
var newColors = colors;
newColors.push("black");
//   colors.length = ?

// lớp đối tượng ~ class

// tạo lớp đối tượng con mèo

function Cat(_color, _name) {
  this.color = _color;
  this.name = name;
}
// tạo object mèo
var cat1 = new Cat("black", "mun");
console.log("😀 - cat1", cat1);
var cat2 = new Cat("white", "miu");
console.log("😀 - cat2", cat2);
