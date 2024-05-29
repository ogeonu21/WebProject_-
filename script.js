/* 전체 스타일 및 레이아웃 구성 */
*{
  margin : 0 auto; padding : 0;
  scroll-behavior: smooth;
}
a{text-decoration-line : none;}
a:link{color : black;}
a:visited{color : black;}
body{
  background-color :rgba(228, 228, 228, 0.438);
  position : relative;
  font-size: 16px;
  font-family: 'Helvetica', 'Arial', sans-serif;
}
.header{
  width : 100%;
  height : 70px;
  background-color : white;
}
.nav{
  width : 100%;
  height : auto;
  max-height : auto;
}
.section{
  width : 80%;
  position: relative;
  height : auto;
}
.footer{
  width : 100%;
  height : 200px;
  background-color : black;
}


/* header class style */
.header_Logo{
  float : left;
  top : 50%;
  bottom : 50%;
  padding : 10px;
  padding-left : 50px;
}
.header_Logo h1 {
  font-size:26px; font-weight:700;  letter-spacing:1px; text-transform:uppercase; width:160px; text-align:center; margin:auto; white-space:nowrap; padding-bottom:13px; position : relative;
}
.header_Logo h1:before {
    background-color: #c50000;
    content: '';
    display: block;
    height: 3px;
    width: 75px;
    margin-bottom: 5px;
    z-index: 100;
    transition: all 0.5s ease;
}
.header_Logo h1:after {
    background-color: #c50000;
    content: '';
    display: block;
    position:absolute; right:0; bottom:0;
    height: 3px;
    width: 75px;
    margin-bottom: 0.25em;
    z-index: 100;
    transition: all 0.5s ease;
}
.header_Logo h1:hover:before { 
  transform: translateX(80px);
}
.header_Logo h1:hover:after { 
  transform: translateX(-80px);
}
.header>.header_Nav ul {
  float: left;
  padding-top: 10px;
  padding-left: 10;
}
.header>.header_Nav ul>li {
  list-style-type: none;
  float: left;
  padding-left : 10px;
  padding-right : 10px;
}
@media screen and (max-width : 767px){
  li {display:none;}
}
.header_Nav, .header_Nav:after, .header_Nav:after{
  -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
a:hover, a:focus, a:active {
  outline: none;
}
.menu a {
  color: rgb(0, 0, 0);
  font-weight: 400;
  font-size : 20px;
  padding: 15px 25px;
  position: relative;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
}
.SMN_effect-35 a {
  overflow: visible;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: color .4s;
  transition: color .4s
}
@keyframes eff24-move {
  30% {
    -webkit-transform: translate3d(0, -5px, 0) rotate(5deg);
    transform: translate3d(0, -5px, 0) rotate(5deg)
  }
  50% {
    -webkit-transform: translate3d(0, -3px, 0) rotate(-4deg);
    transform: translate3d(0, -3px, 0) rotate(-4deg)
  }
  80% {
    -webkit-transform: translate3d(0, 0, 0) rotate(-3deg);
    transform: translate3d(0, 0, 0) rotate(-3deg)
  }
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg)
  }
}
.SMN_effect-35 a:hover, .SMN_effect-35 a:active {
  -webkit-animation-name: eff24-move;
  animation-name: eff24-move;
  -webkit-animation-duration: .4s;
  animation-duration: .4s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1
}


/* nav class style */
/* 이미지 슬라이드 */
.slider {
  width: 100%;
  max-width: 100%;
  height : auto;
  overflow: hidden;
  position : relative;
  background-color: white;
}
.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.slide {
  min-width: 100%;
  box-sizing: border-box;
}
.slide img {
  width: 100%;
  display: block;
}
.slider button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(97, 97, 97, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 5px;
}
.slider button.prev {
  left: 10px;
}
.slider button.next {
  right: 10px;
}
#scrollToTopBtn {
  width : 50px; height : 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 10px;
  font-size: 16px;
  background-color: #dbdbdb;
  color: black;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  font-weight: bold;
}
#scrollToTopBtn:hover {
  background-color: #4e4e4e;
}

/* section class style */
/* 게시판 제목 style */
.section input[type="button"] {
  margin-top: 20px;
  align-self: flex-end;
  float : right;
}
.container_Name {
    text-align: center;
    margin : 10px;
    margin-top: 30px;
}
.highlight {
    position: relative;
    display: inline-block;
}
.highlight::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px; /* Adjust based on your needs */
    width: 100%;
    height: 3px; /* Adjust based on your needs */
    background-color: #090909; /* Color of the underline */
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
}
.highlight.animate::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

/* id top */
#top{
  width : 100%;
  height : auto;
  text-align: center;
  position : relative;
  clear : both;
}
/* 카드 */
.card_box{
  display:flex; flex-direction: row; flex-wrap: wrap; justify-content : center; align-items:center;
}
.card {
  width: 250px;
  height : 300px;
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: inline-block;
  vertical-align: top;
  }
.card img {
  width: 60%;
  height: 50%;
  border-radius: 5px;
}
.card table {
  margin-top: 3px;
  text-align: left;
}
.card a:hover{color : rgb(103, 103, 252);}
.like-count {
  font-size: 1.2rem;
  margin-left: 5px;
}
/* 좋아요버튼 */
.bubbly-button{
  font-family: 'Helvetica', 'Arial', sans-serif;
  display: inline-block;
  font-size: 1em;
  -webkit-appearance: none;
  appearance: none;
  background-color:#ff0081;
  color: #fff;
  border: none;
  cursor: pointer;
  position: relative;
  width: 15px;
  height: 15px;
  background-color: #ea2027;
  margin: 3px auto;
  bottom : 3px;
  transform: rotate(45deg);
  transition: all linear 1s;
}
.bubbly-button-child1 {
  width: 15px;
  height: 15px;
  position: absolute;
  left: -50%;
  top: 0%;
  border-radius: 50%;
  background-color: #ea2027;
}
.bubbly-button-child2 {
  width: 15px;
  height: 15px;
  position: absolute;
  top: -50%;
  border-radius: 50%;
  background-color: #ea2027;
}
.bubbly-button.active{
  animation : move 1s 1;
  background-color: darken(#ff0081, 5%);
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
}
@keyframes move {
  25%  {transform:rotate(0deg)}
  75%  {transform:rotate(90deg)}
  100% {transform:rotate(45deg)}
}
/* 링크 툴팁 */
.tool {
    cursor: help;
    position: relative;
}
.tool::before,
.tool::after {
    left: 50%;
    opacity: 0;
    position: absolute;
    z-index: -100;
}

.tool:hover::before,
.tool:focus::before,
.tool:hover::after,
.tool:focus::after {
    opacity: 1;
    transform: scale(1) translateY(0);
    z-index: 100; 
}
.tool::before {
    border-style: solid;
    border-width: 1em 0.75em 0 0.75em;
    border-color: #3E474F transparent transparent transparent;
    bottom: 100%;
    content: "";
    margin-left: -0.5em;
    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26), opacity .65s .5s;
    transform:  scale(.6) translateY(-90%);
} 
.tool:hover::before,
.tool:focus::before {
    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26) .2s;
}
.tool::after {
    background: #3E474F;
    border-radius: .25em;
    bottom: 180%;
    color: #EDEFF0;
    content: attr(data-tip);
    margin-left: -8.75em;
    padding: 1em;
    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26) .2s;
    transform:  scale(.6) translateY(50%);  
    width: 17.5em;
}
.tool:hover::after,
.tool:focus::after  {
    transition: all .65s cubic-bezier(.84,-0.18,.31,1.26);
}
@media (max-width: 760px) {
  .tool::after { 
        font-size: .75em;
        margin-left: -5em;
        width: 10em; 
  }
}

.hidden-cards .card {
  display: none;
}

.hidden-cards.show .card {
  display: inline-block;
}

@media (max-width: 760px) {
  .card_box .card:nth-child(n+3) {
      display: none;
  }

  .card_box.show .card {
      display: inline-block;
  }
}

/* id middle */
#middle {
  width: 80%;
  height: auto;
  clear : both;
  font-family: 'Montserrat', sans-serif;
}
#middle h1,
#middle h2,
#middle h3 {
  text-align: center;
}
#middle .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.box {
    background-color: transparent;
    border-radius: 3px;
    color: #fff;
    width: 400px;
    height: 250px;
    transform-style: preserve-3d;
    perspective: 2000px;
    transition: 0.4s;
    margin-top : 30px;
    text-align: center;
    position: relative;
}

.box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border-top: 20px solid #fff;
    border-left: 20px solid #fff;
    box-sizing: border-box;
}

.box:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 20px solid #fff;
    border-right: 20px solid #fff;
    box-sizing: border-box;
}
.box .text {
    position: absolute;
    top: 30px;
    left: -30px;
    width: calc(100% + 60px);
    height: calc(100% - 60px);
    background-color: #414b55;
    border-radius: 3px;
    transition: 0.4s;
}
.box .text .fa1 {
    position: absolute;
    top: 0;
    left: 0;
}
.box .text div {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
    padding: 30px 60px;
    line-height: 1.5;
    box-sizing: border-box;
}
.box .text div h3 {
    font-size: 30px;
    margin-bottom: 5px;
}
.box .text div p {
    font-size: 15px;
}
.box:hover {
    transform: rotateY(-20deg) skewY(3deg);
}
.box:hover .text {
    transform: rotateY(20deg) skewY(-3deg);
}

.hidden-box .box {
  display: none;
}
.hidden-box.show .box {
  display: inline-block;
}
@media (max-width: 760px) {
  .container .box:nth-child(n+2) {
      display: none;
  }

  .container.show .box {
      display: inline-block;
  }
}
@media (max-width: 760px){
  #middle .box h3 {
    font-size: 19.5px;
  }
  #middle h3 {
    font-size: 15.5px;
  }
}

/* id bottom */
#bottom{
  width : 100%;
  height : auto;
  clear : both;
  margin-bottom : 30px;
}
#bottom h1,
#bottom h2,
#bottom h3 {
  text-align: center;
}
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
/* button */
.btn1 {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #414b55;
  border-radius: 0.6em;
  color: #414b55;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1;
  margin: 10px;
  padding: 0.8em 1.4em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  float : right;
}
.btn1:hover,
.btn1:focus {
  box-shadow: 0 0 40px 40px #414b55 inset;
  color: #fff;
  outline: 0;
}


.btn2 {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #414b55;
  border-radius: 0.6em;
  color: #414b55;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1;
  margin: 10px;
  padding: 0.8em 1.4em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  float : right;
}

.btn2:hover,
.btn2:focus {
  box-shadow: 0 0 40px 40px #414b55 inset;
  color: #fff;
  outline: 0;
}
@media screen and (max-width: 760px){
  .btn1,
  .btn2{
      box-sizing: border-box;
      appearance: none;
      background-color: transparent;
      border: 2px solid #414b55;
      border-radius: 0.6em;
      color: #414b55;
      cursor: pointer;
      display: flex;
      align-self: center;
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1;
      margin: 10px auto; 
      padding: 0.8em 1.4em;
      text-decoration: none;
      text-align: center; 
      text-transform: uppercase;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
      float: none;
  }

  .btn1:hover,
  .btn1:focus,
  .btn2:hover,
  .btn2:focus {
    box-shadow: 0 0 40px 40px #414b55 inset;
    color: #fff;
    outline: 0;
  }
}
