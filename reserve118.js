
// HTMLのidタグ"top"を取得し、"c"という文字に格納する
var c = document.getElementById('top');

// top要素が格納されたcに対して、クリックされた時の設定を行う
// クリックされたら、alert(上から文章表示)で”予約を確定しますか？”を表示させる
c.addEventListener('click',() => {
    // ”予約を確定しますか？”という設定を"result"という文字列に格納する
    var result = window.confirm('予約を確定しますか？');
    // もし、resultが真なら（”OK”をクリックしたなら）　　
    if(result == true){
        // "reserve117.html"のページに移動させます。
        window.location.href = "reserve118.html";
    }
});

