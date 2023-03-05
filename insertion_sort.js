var arr=[5,7,1,8,3,20,4]
for (var i = 1; i < arr.length; i++) {
  var newcard = arr[i]
  j=i-1
  while( j >= 0 && arr[j] > newcard) {
    arr[j + 1] = arr[j]
    j--
  }
  arr[j + 1] = newcard
}
console.log(arr)