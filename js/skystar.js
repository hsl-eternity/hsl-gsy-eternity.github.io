// poem
var words=[
    '对不起，宝贝',
    '是我伤了你的心，请让我一辈子爱你疼你，作为补偿',
    '当年明月在',
    '曾照彩云归',
    '宝贝，我对你还是像刚见面时的那样，爱你，只不过是随着时间的流逝，我们之间也发生了一些问题',
    '宝贝，对不起，我答应你的不会再让你流泪',
    '画船听雨眠',
    '宝贝，对不起，要是你能理解我的心情，我那种越爱越陷入的心情',
    '与君重逢',
    '一日不见兮',
    '思之若狂',
    '好想回到那个夏天',
    '什么样的话语都代替不了我愧疚的心情',
    '你是我灰色人生中的一道彩虹',
    '对不起',
    '对不起宝贝',
    '我见青山多妩媚',
    '宝贝，相信我，我爱你',
    '相爱使我的心变得狭隘，亲爱的',
    '不同的时间不同的地点，不同的人群，变化的空间，变化的容颜，变化的语言，在如许的不同与变化中，唯一不变的是你与我之间的感情。',
    '对不起，我是个卑鄙的人，一个无耻的人，一个落井下石、阳奉阴违、不识时务、反应迟钝、愚蠢至极…的人，好了看在我把坏词都用自己身上的份上原谅我吧。',
    '人生若只如初见',
    '我余光中都是你',
    '人生自是有情痴',
    '此恨不关风与月',
    '因为你，我多少适应了这个世界',
    '在黎明前，我们都渴望见到曙光;却也同样害怕被烈阳所伤！谈谈吧！愿能携手伴曙光;不愿两伤对烈阳！',
    '特别是你准备向我道歉时',
    '今夜何夕',
    '宝贝，我是不对的',
    '我对你矛盾',
    '爱一个人很难',
    '情不所起',
    '一往而深',
    '我会用行动来说明一切，不会再让你感到伤心与失望，漫漫长路希望与之协手共进，永远爱你的人。',
    '终于体会到了五内俱焚的痛楚，只盼落崖的感觉在嘭然落地声中结束！',
    '宝贝，你知道，我对你的态度为啥显得很矛盾吗',
    '宝贝，我爱你，但是就像你说的那样，我们彼此都不太理解对方',
    '我对你是有一些心理问题的',
    '我现在只想我们能彼此理解一下，共同度过剩下的生命',
    '我现在只想以后你再温馨的暖灯下，等我回家',
    '万斛离愁尽耐担',
    '以后，你会在房间里等我回家',
    '宝贝，我要好好爱你，不向其他的事',
    '宝贝，对不起，你是那么的爱我，我却不自知',
    '月落星沉',
    '你爱我，我爱你，小管管',
    '喜上眉梢',
    '宝贝，我对你很认真',
    '宝贝，对不起，我只是会想起一些令我很生气的事',
    '落花人独立',
    '微雨燕双飞',
    '掬水月在手',
    '弄花香满衣',
    '宝贝，对不起',
    '宝贝，你说过，你还记得你说过的话吗',
    '宝贝，你不能总是骗我',
    '宝贝，对不起',
    '宝贝，我爱你',
    '宝贝，我爱你',
    '宝贝，你说过不会离开我的，你不能骗我',
    '宝贝，对不起',
    '宝贝，对不起',
    '宝贝，对不起',
    '宝贝，对不起',
    '宝贝，对不起'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let text = document.querySelector('.text').querySelector('h1');
      setTimeout(function(){
        textone.innerHTML = '小管管，对不起，这是哥哥给你的道歉证明：以日月为证';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          text.innerHTML = '';
      },28000)


 
