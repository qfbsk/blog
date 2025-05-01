/* 初始化 加载完成收到广播 获取时间更新主题 */
var m=1;
var date = new Date();     
var hour = date.getHours();       /* 获取小时 */
function initialize() {
    if(( 24>=hour && hour>=18) || ( 0<=hour && hour <6)){           /* 夜间模式 */
        dark();
    }
    else{                                                           /* 白天模式 */
        light();
    } 
}  
function change(){
    if( m==1) {
        dark();      /* 夜间模式 */
    }
    else {
        light();     /* 白天模式 */
    } 
}       
function dark() {           /* 夜间模式 */
    for (let i = 1; i <= 10; i++) {
      const element = document.getElementById(`nav${i}`);
      if (element) { // 确保元素存在，避免潜在错误
        element.style.color = "rgba(255,255,255,.62)";
      }
    };    
    for (let i = 1; i <= 10; i++) {
      const element = document.getElementById(`m${i}`);
      if (element) { // 确保元素存在，避免潜在错误
        element.style.color = "rgba(255,255,255,.62)";
      }
    };
    var changedirectory=document.getElementById("directory");
    changedirectory.style.color="rgba(255,255,255,.62)";
    for (let i = 1; i <= 10; i++) {
      const element = document.getElementById(`title${i}`);
      if (element) { // 确保元素存在，避免潜在错误
        element.style.color = "rgba(255,255,255,.62)";
      }
    };
    for (let i = 1; i <= 10; i++) {
      const element = document.getElementById(`thinking${i}`);
      if (element) { // 确保元素存在，避免潜在错误
        element.style.color = "rgba(255,255,255,.62)";
      }
    };
    for (let i = 1; i <= 10; i++) {
      const element = document.getElementById(`writedate${i}`);
      if (element) { // 确保元素存在，避免潜在错误
        element.style.color = "rgba(255,255,255,.62)";
      }
    };
    var changebk=document.getElementById("background");
    changelogo.src="images/logohalfwhite.png";
    changebk.style.backgroundImage= "url('images/bk2.jpg')";
    m=2;
}    
function light() {          /* 白天模式 */
  for (let i = 1; i <= 10; i++) {
      const element = document.getElementById(`nav${i}`);
      if (element) { // 确保元素存在，避免潜在错误
        element.style.color = "rgba(0,0,0,.62)";
      }
    };
      for (let i = 1; i <= 10; i++) {
      const element = document.getElementById(`m${i}`);
      if (element) { // 确保元素存在，避免潜在错误
        element.style.color = "rgba(0,0,0,.62)";
      }
    };
    var changedirectory=document.getElementById("directory");
    changedirectory.style.color="rgba(0,0,0,.62)";
    for (let i = 1; i <= 10; i++) {
      const element = document.getElementById(`title${i}`);
      if (element) { // 确保元素存在，避免潜在错误
        element.style.color = "rgba(0,0,0,.62)";
      }
    };
    for (let i = 1; i <= 10; i++) {
      const element = document.getElementById(`thinking${i}`);
      if (element) { // 确保元素存在，避免潜在错误
        element.style.color = "rgba(0,0,0,.62)";
      }
    };
    for (let i = 1; i <= 10; i++) {
      const element = document.getElementById(`writedate${i}`);
      if (element) { // 确保元素存在，避免潜在错误
        element.style.color = "rgba(0,0,0,.62)";
      }
    };
    var changebk=document.getElementById("background");
    changelogo.src="images/logohalfblack.png";
    changebk.style.backgroundImage= "url('images/bk1.jpg')";
    m=1;
}
