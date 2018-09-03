window.addEventListener('DOMContentLoaded',
  function () {

    // テキストエリアのDOMを取得
    var node = document.getElementById('count-text');

    node.addEventListener('keyup', function () {

      //打鍵音を鳴らす
      document.getElementById('keySound').play();


      // テキストの中身を取得し、その文字数（length）を数える
      var count = this.value.length;

      // HTML５から使えるquerySelectorを使ったDOMの取得パターン
      // カウンターを表示する箇所のDOM（HTML）を取得する
      var counterNode = document.querySelector('.show-count-text');

      // innerTextを使うと取得したDOMの中身のテキストを書き換えられる
      counterNode.innerText = count; 

      //15文字以上のとき赤にし、文字を大きくする
      if(count >= 15){
        counterNode.style.color = "red";
        counterNode.style.fontSize = "50px";
      }else{
        counterNode.style.color = "black";
        counterNode.style.fontSize = " 30px";
      }

    }, false);

  }, false
);