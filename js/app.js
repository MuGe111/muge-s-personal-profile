function sub(){
    var school=parseInt(fm.school.value);
    var home=parseInt(fm.home.value);
    var time=parseInt(fm.time.value);
    var stars=fm.star;
    var volunteers=fm.volunteer;
    var star=0;
    var volunteer=0;
    for(var i=0;i<stars.length;i++){
        if(stars[i].checked==true){
            star+=parseInt(stars[i].value);
        }
    }
    for(var i=0;i<volunteers.length;i++){
        if(volunteers[i].checked==true){
            volunteer+=parseInt(volunteers[i].value);
        }
    }
    if(school==null||home==null||time==null||star==0||volunteer==0)
    {
        alert("请全部填写后再提交！")
    }
    else{
        alert("第一题得分："+school+"分；第二题得分："+home+"分；第三题得分："+time+"分；第四题得分："+star+"分；第五题得分："+volunteer+"分");
    var sum=school+home+time+parseInt(star)+parseInt(volunteer);
    if(sum>=8&&sum<=10)
    alert("太棒了！你对我的了解达到了"+sum+"分！");
    if(sum>=5&&sum<8)
    alert("不错，你对我的了解达到了"+sum+"分！继续努力哈！")
    if(sum<5)
    alert("可能我的介绍不够生动，你只达到了"+sum+"分！可以重新看一下我的介绍哦！")
    }
    
    

}
