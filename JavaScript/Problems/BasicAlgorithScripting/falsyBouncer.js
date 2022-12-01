function bouncer(arr) {
  let newarr = [...arr];
  let container = [];
  for (let i = 0; i < newarr.length; i++) {
    if (
      (typeof newarr[i] === "string" && newarr[i].length > 0) ||
      (typeof newarr[i] === "number" && newarr[i] > 0)
    ) {
      container.push(newarr[i]);
    }
  }
  return container;
}

console.log(bouncer([7, "ate", "", false, 9]));
