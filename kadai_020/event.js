// Btn定数に代入する
const Btn = document.getElementById('btn');

// ボタンクリックイベントの追加
Btn.addEventListener('click', () => {
    // text定数に代入する
    const text = document.getElementById('text');

    // テキストの書き換え
    text.textContent = 'ボタンをクリックしました';

});