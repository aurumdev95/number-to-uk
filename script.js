function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}
function toEng(num) {
  if (num.length > 3 && num.length < 7) {
    if (num.slice(-3) === "000") {
      num = num.slice(0, -3);
      num = num + 'k';
      //num = num.split("");
      //num.push("k");
      //num = num.toString();
      //num = num.replace(',', '');
      return num;      
    } else {
      num1 = num.slice(-3);
      num1 = num1.split('');
      removeItemAll(num1, '0');
      num = num.slice(0, -3);
      const n = num.concat(['.'], num1[0].split(''), ['k']);
      return n;
    } 
  } else if (num.length > 6 && num.length < 10){
      if (num.slice(-6) === "000000") {
        num = num.slice(0, -6);
        num = num + 'M';
        return num;
      } else {
        num1 = num.slice(-6);
        num1 = num1.split('');
        removeItemAll(num1, '0');
        num = num.slice(0, -6);
        const n = num.concat(['.'], num1[0].split(''), ['M']);
        return n;
      }
  } else if (num.length > 9) {
      if (num.slice(-9) === "000000000") {
        num = num.slice(0, -9);
        num = num + 'B';
        return num;
      } else {
        num1 = num.slice(-9);
        num1 = num1.split('');
        removeItemAll(num1, '0');
        num = num.slice(0, -9);
        const n = num.concat(['.'], num1[0].split(''), ['B']);
        return n;
      }
  } else {
    return num;
  }
}

const input = document.getElementById('input');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
submit.addEventListener('click', function (e) {
  e.preventDefault();
  const query = input.value;
  const ans = toEng(query);
  result.innerHTML = ans;
  input.value = '';
  //console.log('click');
});
