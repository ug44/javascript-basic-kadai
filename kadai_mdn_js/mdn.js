// 今日の日付の取得
const today = new Date();

// 年月日の取得
const [year, month, day] = [
    today.getFullYear() + '年',
    today.getMonth() + 1 + '月',
    today.getDate() + '日',
];
// 日付の表示
console.log(year + month + day);