
let fullName = prompt('Vui lòng nhập họ và tên:')
document.getElementById('name').innerHTML = fullName
let quesNum = 1;
document.getElementById('queNum').innerHTML = quesNum
let tiMe = 61;
document.getElementById('time').innerHTML = tiMe

let listQuestion = ['image1.png','image2.png','image3.png','image4.png','image5.png'];
let listAnswer = ['Hot dog','Honeymoon','Armchair','Raincoat','Brainstorm'];
let listHint = ['H** d*g', '*on**m*on','**mc**ir','Ra**co**','*r*i*s*o*m']
let score = 0;
document.getElementById('scores').innerHTML = score

function clearTime() {
    tiMe--
    let clearTimeHtml = `<br><br>
    <div class="div_left">
        <table>
            <tr>
                <td class="infor">Full name:</td>
                <td class="getInfor">${fullName}</td>
            </tr>
            <tr>
                <td class="infor">Number:</td>
                <td class="getInfor">${quesNum - 1}</td>
            </tr>
            <tr>
                <td class="infor">Score:</td>
                <td class="getInfor">${quesNum - 1}</td>
            </tr>
        </table>
    </div>
    <div class="div_rightTop">
        <img src="Images/Cry.png" alt="" width="40%"> <br>
    </div>`

    if (tiMe === 0) {
        let gameOver = new Audio('Musics/gameOverSound.mp3')
        document.getElementById('tittle').innerHTML = 'HẾT GIỜ!';
        gameOver.play()
        document.getElementById('main').innerHTML = '';
        document.getElementById('main').innerHTML = clearTimeHtml;
    }
}
function reTime() {
    clearTime();
    document.getElementById('time').innerHTML = tiMe;
    setTimeout(reTime, 1000)
}
reTime()

function addScore() {
    score ++;
    document.getElementById('scores').innerHTML = score
}

function getIndex() {
    let question = document.getElementById('img');
    let srcArr = question.src.split('/');
    let srcQues = srcArr[srcArr.length - 1];
    let index = listQuestion.indexOf(srcQues)
    return index
}

function changeImage() {
    let chucMung = `<br><br>
    <div class="div_left">
        <table>
            <tr>
                <td class="infor">Full name:</td>
                <td class="getInfor">${fullName}</td>
            </tr>
            <tr>
                <td class="infor">Number:</td>
                <td class="getInfor">${quesNum}</td>
            </tr>
            <tr>
                <td class="infor">Score:</td>
                <td class="getInfor">${quesNum}</td>
            </tr>
        </table>
    </div>
    <div class="div_rightTop">
        <img src="Images/chucmung.png" alt="" width="40%"> <br>
    </div>`
    if (getIndex() < listQuestion.length - 1) {
        document.getElementById('img').src = 'Images/' + listQuestion[getIndex() + 1];
    } else {
        let victory = new Audio("Musics/victorySound.mp3");
        victory.play()
        document.getElementById('tittle').innerHTML = 'CHÚC MỪNG!';
        document.getElementById('main').innerHTML = '';
        document.getElementById('main').innerHTML = chucMung;
    }
}

function nextQues() {
    quesNum++
    document.getElementById('queNum').innerHTML = quesNum
}

function getHint() {
    document.getElementById("hint").innerHTML = listHint[getIndex()]
}

function check() {
    let answer = document.getElementById('ans').value;
    if (answer === listAnswer[getIndex()]) {
        let matchSou = new Audio("Musics/matchSound.mp3");
        matchSou.play()
        setTimeout (function(){
            alert("Đáo án chính xác!");
        }, 300);
        changeImage()
        nextQues()
        addScore()
        document.getElementById('ans').value = '';
        tiMe = 61;
    } else {
        let unMatch = new Audio('Musics/unmatchSound.mp3');
        unMatch.play()
        alert("Câu trả lời chưa chính xác. Vui lòng trả lời lại!");
    }
}