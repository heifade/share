const u = {
  value: 100
};

function getValue() {
  return u.value;
}

const v1 = getValue(); // v1 为 number 类型
v1 = "a"; // Error 不能将类型“"a"”分配给类型“number”
