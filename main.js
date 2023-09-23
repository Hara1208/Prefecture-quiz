const titleText = document.getElementById('title');
const questionText = document.getElementById('question');
const ansBtn1 = document.getElementById('button-a');
const ansBtn2=document.getElementById('button-b');
const ansBtn3=document.getElementById('button-c');
const correctSound=document.getElementById('correct-Sound');
const incorrectSound=document.getElementById('incorrect-Sound');

let sum;
let correctAnswer;

const questions = [

    {
        question:'北海道の名産品はどれでしょう？',
        answer1:'日高牛',
        answer2:'前沢牛',
        answer3:'葉山牛',
        correct:1
    },
    {
        question:'関西では駐車場のことを何と呼ぶでしょう？',
        answer1:'パーキング',
        answer2:'モータープール',
        answer3:'エンジンプール',
        correct:2 
    },
    {
        question:'兵庫県の名産品はどれでしょう？',
        answer1:'べっぴんうり',
        answer2:'ぱっちんうり',
        answer3:'ぺっちんうり',
        correct:3 
    },
    {
        question:'福島県の名産品はどれでしょう？',
        answer1:'いちご',
        answer2:'ぶどう',
        answer3:'桃',
        correct:3 
    },
    {
        question:'静岡県に本社があるプラモデルメーカーはどれでしょう？',
        answer1:'フジミ模型',
        answer2:'バンダイ',
        answer3:'タミヤ模型',
        correct:3 
    },
    {
        question:'神奈川県の名産品ではないものはどれでしょう？',
        answer1:'寄木細工',
        answer2:'切子細工',
        answer3:'鎌倉彫',
        correct:2
    },
    {
        question:'宮城県の名産品はどれでしょう？',
        answer1:'コシヒカリ',
        answer2:'ひとめぼれ',
        answer3:'ササニシキ',
        correct:3 
    },
    {
        question:'長野県の名産品はどれでしょう？',
        answer1:'みすゞ飴',
        answer2:'笹団子',
        answer3:'ままどおる',
        correct:1 
    },
    {
        question:'岩手県の名産品はどれでしょう？',
        answer1:'草加せんべい',
        answer2:'南部せんべい',
        answer3:'炭酸せんべい',
        correct: 2
    },
    {
        question:'京都府の名産品はどれでしょう？',
        answer1:'中山栗',
        answer2:'須木栗',
        answer3:'丹波栗',
        correct:3 
    },
    {
        question:'熊本県の名産品はどれでしょう？',
        answer1:'羊肉',
        answer2:'すいか',
        answer3:'馬刺し',
        correct:3
    },
    {
        question:'群馬県の名産品はどれでしょう？',
        answer1:'下仁田ネギ',
        answer2:'蕎麦',
        answer3:'米',
        correct:1 
    },
    {
        question:'広島県の名産品はどれでしょう？',
        answer1:'みかん',
        answer2:'レモン',
        answer3:'湘南ゴールド',
        correct:2 
    },
    {
        question:'愛知県に本社がある自動車メーカーはどれでしょう？',
        answer1:'トヨタ',
        answer2:'マツダ',
        answer3:'スバル',
        correct:1 
    },
    {
        question:'埼玉県県の名産品はどれでしょう？',
        answer1:'サツマイモ',
        answer2:'ジャガイモ',
        answer3:'サトイモ',
        correct:1 
    },
    {
        question:'福井県ではズワイガニの雌を何と呼ぶでしょう？',
        answer1:'松葉ガニ',
        answer2:'せいこガニ',
        answer3:'香箱ガニ',
        correct:2 
    },
    {
        question:'長野県の名産品ではないものはどれでしょう？',
        answer1:'わさび',
        answer2:'りんご',
        answer3:'柿',
        correct:3
    },
    {
        question:'青森県が生産量一位の果物はどれでしょう？',
        answer1:'洋ナシ',
        answer2:'キウイフルーツ',
        answer3:'カシス',
        correct:3 
    },
    {
        question:'岐阜県の名産品はどれでしょう？',
        answer1:'栗きんとん',
        answer2:'カステラ',
        answer3:'杏仁豆腐',
        correct:1
    },
    {
        question:'この中で塩の生産量が全国一位なのは何県でしょう？',
        answer1:'愛知県',
        answer2:'愛媛県',
        answer3:'秋田県',
        correct:2
    },
];

function writeQuestion() {
    titleText.textContent = `第${sum + 1}問`;
    questionText.textContent = questions[sum].question;
    ansBtn1.textContent=questions[sum].answer1;
    ansBtn2.textContent=questions[sum].answer2;
    ansBtn3.textContent=questions[sum].answer3;

}

function onAnswer(ans) {
    if (ans === questions[sum].correct) {
        correctSound.currentTime=0;
        correctSound.play();
        console.log('正解');
        correctAnswer++;
    } else {
        console.log('不正解');
        incorrectSound.currentTime=0;
        incorrectSound.play();
    }

    sum++;

    if (sum >= questions.length) {
        alert(`${questions.length}問中${correctAnswer}問正解です`);
        onStart();
    } else {
        writeQuestion();
    }
}

function onStart() {
    sum = 0;
    correctAnswer = 0;
    writeQuestion();
}

onStart();