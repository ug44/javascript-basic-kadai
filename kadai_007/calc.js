// 変数numに1～99までのランダムな整数を代入する
let num = Math.floor(Math.random() * 100) + 1;

if ((num % 3 === 0) && (num % 5 === 0)) {
    // 3と5の倍数
    console.log('3と5の倍数です');
}
else if (num % 3 === 0) {
    // 3の倍数
    console.log('3の倍数です');
}
else if (num % 5 === 0) {
    // 5の倍数
    console.log('5の倍数です');
}
else {
    // その他
    console.log(num);
}