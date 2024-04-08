// tạo 1 danh sách sản phẩm ~ array chứa object

var productList = [
  { name: "ti vi", price: 20 },
  { name: "tủ lạnh", price: 10 },
];

// in ra danh sách sản phẩm đang có
for (var i = 0; i < productList.length; i++) {
  var product = productList[i];
  console.log("😀 - product", product.name);
}
// thêm sản phẩm
productList.push({ name: "nồi cơm", price: 5 });

// xoá sản name="ti vi" => splice(index,1)

// findIndex

// tìm vị trí của phần tử có item.name=="ti vi"
var index = productList.findIndex(function (item) {
  return item.name == "ti vi";
});
console.log("😀 - index", index);

productList.splice(index, 1);
console.log("😀 - productList", productList);
