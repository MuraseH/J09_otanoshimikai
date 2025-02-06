document.addEventListener("DOMContentLoaded", function() {
    console.log("script.js が読み込まれました！");
    const startBtn = document.getElementById("startBtn");

    if (startBtn) {
        startBtn.addEventListener("click", function() {
            alert("ゲーム開始！");
        });
    } else {
        console.error("エラー: ボタンが見つかりません");
    }
});
