const ClassTest = document.querySelector('.test');
console.log(ClassTest);

let timer = 0;
window.addEventListener('resize', function () {
    if (timer > 0) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {

        let windowWidth = window.innerWidth;
        console.log(windowWidth);
        if (windowWidth < 1000) {
            ClassTest.style.background = 'pink';
        }
        if (windowWidth > 1001) {
            ClassTest.style.background = 'lightblue';

        }
    }, 200)

})
// ポイント
// リサイズの「完了」した時に処理をするようにするには、「timer」
// リサイズをしている間に何度でも関数がコールされてしまうのを防ぐ。
// 参考URL↓
// https://analogic.jp/window-resize-complete/