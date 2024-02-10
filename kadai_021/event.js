// Btn定数に代入する
const Btn = document.getElementById('btn');

// text定数に代入する
const text = document.getElementById('text');

// ボタンクリックイベントの追加
Btn.addEventListener('click', () => {

    //　非同期処理(2秒後にテキストの書き換え)
    setTimeout(() => {
        // テキストの書き換え
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});