function palindrome(str) {
  let str1 = str.toLowerCase().replace(/[\W\s_]/g,'');
  return str1 === str1.split('').reverse().join('');
}
console.log(palindrome("_eye"));
