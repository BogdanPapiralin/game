let count =5;
let coun1=0;
let coun2=0;
function timme(){ 
    if(count!=0)
    {
      count--;
       document.getElementById('aa').innerHTML= count;
       
     
       let ran1=Math.floor(Math.random()* (10 - 0) + 0);
       let ran2=Math.floor(Math.random()* (10 - 0) + 0);

       coun1=coun1+ran1;
       coun2=coun2+ran2;

       document.getElementById('pl1').innerHTML= coun1;
       document.getElementById('pl2').innerHTML= coun2;
       
        scale1=100/(coun1+coun2)*coun1;
        scale2=100/(coun1+coun2)*coun2;
        
        skal1=document.getElementById("skal1");
        skal2=document.getElementById("skal2");
        skal1.style.width=scale1+"%";
        skal2.style.width=scale2+"%";
    }else if(coun1>coun2)
    {
        document.getElementById('pl1').innerHTML= "Player 1 wins";
        document.getElementById('pl2').innerHTML= '';
        document.getElementById('pl3').innerHTML= '';
        let tex1=document.getElementById("pl1");
        tex1.style.marginLeft="5%"
    }
    else if(coun1<coun2)
    {
        document.getElementById('pl1').innerHTML= "Player 2 wins";
        document.getElementById('pl2').innerHTML= '';
        document.getElementById('pl3').innerHTML= '';
        let tex1=document.getElementById("pl1");
        tex1.style.marginLeft="5%"
    }
    else
    {
        document.getElementById('pl1').innerHTML= "Tie game";
        document.getElementById('pl2').innerHTML= '';
        document.getElementById('pl3').innerHTML= '';
        let tex1=document.getElementById("pl1");
        tex1.style.marginLeft="5%"
    }
}
function timme1(){ 
    coun1=0;
    coun2=0;
    count=5;
    document.getElementById('aa').innerHTML= count;
    document.getElementById('pl1').innerHTML= coun1;
    document.getElementById('pl2').innerHTML= coun2;
    document.getElementById('pl3').innerHTML= ':';
    let tex1=document.getElementById("pl1");
        tex1.style.marginLeft="15%";
        skal1=document.getElementById("skal1");
        skal2=document.getElementById("skal2");
        skal1.style.width="50%";
        skal2.style.width="50%";

}