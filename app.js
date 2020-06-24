//Chapters 21-25 Task1///
document.write("<h1>Chapter 21-25</h1>")

document.write("<h1>Task1</h1>")
var h = prompt("Enter your first name");
var d = prompt("Enter last name")
var x = h + d;
document.write ("Welcome"+" "+ x +" "+"into JavaScript Environment");

//Chapters 21-25 Task2///
document.write("<h1>Task2</h1>")
var phone = prompt("Enter your Favourite mobile phone model")
document.write("My favourite Phone is:"+" "+phone+"<br>");
var length = phone.length
document.write("Length of string :"+" "+ length+"<br>")

// //Chapters 21-25 Task3///
document.write("<h1>Task3</h1>")
var count = "Pakistani";
var ind = count.indexOf('n');
document.write("String:"+ " "+count+"<br>");
document.write("Index of 'n':"+" "+ ind+"<br>")

// //Chapters 21-25 Task4///
document.write("<h1>Task4</h1>")
var sample = "Hello World";
var ed = document.write("String:"+" "+sample+"<br>");
var pd = sample.lastIndexOf('l')
var ui = document.write("Last Index of 'l'"+" "+pd)

// //Chapters 21-25 Task5///
document.write("<h1>Task5</h1>")

var count1 ='Pakistani';
document.write ('String:'+" "+count1+"<br>");
var nm = count1.charAt(3)
document.write ('Character at index 3:'+" "+nm);

// //Chapters 21-25 Task6///
document.write("<h1>Task6</h1>")

var ji = prompt("Enter your First name");
var ko = prompt("Enter your Last name");
var yu = ji.concat(ko);
document.write("Welcome"+" "+yu + " "+"to JavaScript Environment")

// //Chapters 21-25 Task7///
document.write("<h1>Task7</h1>")

var t = "Islamabad";
var j = t.replace("Islam","Hyder");
document.write("City:"+j+"<br>");
document.write("After Replacement:"+ t);

//Chapters 21-25 Task8///
document.write("<h1>Task8</h1>")

var message = 'Ali and Sami are best friends. They play cricket and football together.';
for(i=0;i<message.length;i++){
    if ( message.slice(i,i+3)==='and'){
        message=message.slice(0,i)+'&'+message.slice(i+3)

     document.write(message)
    }
}
// //Chapters 21-25 Task9///
document.write("<h1>Task9</h1>")

var str = '472';
var Int = parseInt(str);
document.write("Value:"+" "+ str+"<br>"+ "Type:"+" "+ 'string');
document.write("<br>"+"Value:"+" "+ Int+"<br>"+ "Type:"+" "+ 'number')

// //Chapters 21-25 Task10///
document.write("<h1>Task10</h1>")

var mi = prompt("Enter your word");
var name2 = mi.toUpperCase()
document.write("User Input:"+" "+ mi+"<br>"+"Uppercase:"+" "+name2);

// //Chapters 21-25 Task11///

document.write("<h1>Task11</h1>")

var y = "javascript";
var e = y.slice(0,1)
var u = e.toUpperCase()
var i = y.slice(1)
var t = i.toLowerCase()
var full = u+t;
document.write("User Input:"+" "+y+"<br>");
document.write("Title Case:"+" "+full+"<br>");

// //Chapters 21-25 Task12///
document.write("<h1>Task12</h1>")

var u1y = 35.36 ;
var yu7 = u1y*100 ;
document.write("Number:"+" "+ u1y+"<br>");
document.write("Result:"+" "+yu7 )

// //Chapters 21-25 Task13///

document.write("<h1>Task13</h1>")

var t = prompt("Enter your name")
var r = t.charCodeAt('!',',','.','@')
for(i=0;i<t.length;i++)
{
if(t[i].length == (r==33)||(r==44)||(r==46)||(r==64)){
    document.write("Please enter valid user name")
}

else  {
    document.write("Your User name is right")
}

}

// //Chapters 21-25 Task14///
document.write("<h1>Task14</h1>")

var t = prompt("Welcome to scrumptous Bakery.What do you want  to order sir/ma.am?")
var a =["cake","apple pie","cookie","chips","patties"]
var y =t.toLowerCase()
if(y=='cake'){
    document.write(y+" "+"is available at"+" "+(a.indexOf(y))+"in our bakery")
}
else if(y=='apple pie'){
  document.write(y+" "+"is available at"+" "+(a.indexOf(y))+"in our bakery")
}
else if(y=='chips'){
    document.write(y+" "+"is available at"+" "+(a.indexOf(y))+"in our bakery")
}
else if(y=='patties'){
    document.write(y+" "+"is available at"+" "+(a.indexOf(y))+"in our bakery")

}
else{
    document.write("We are sorry"+" "+y +" "+"is not available in our bakery")

}

// // //Chapters 21-25 Task15///
document.write("<h1>Task15</h1>")

var pass = prompt("Enter your password");
po= pass.charCodeAt()
if ( po===47|| po===48|| po===49||po===50||po===51||po===52||po===53||po===54||po===55||po===56||po===57){
    document.write("Enter valid passward")
}
else if(pass.length<6) {

document.write("Enter valid Password")
}

else{
    document.write("Successful")
}

// // //Chapters 21-25 Task16///
document.write("<h1>Task16</h1>")

var university ='University of Karachi' ;
var jui = university.split("")
for(i=0 ;i<university.length;i++)
document.write(jui[i]+"<br>")

//Chapters 21-25 Task17///
document.write("<h1>Task17</h1>")

var naws ='Pakistan'
document.write('User Input:'+" "+ naws+"<br>")
var tpo =naws.charAt(7)
document.write("Last Character of Input:"+" "+tpo)
// //Chapters 21-25 Task18///
document.write("<h1>Task18</h1>")

var uy ='the quick brown fox jumps over the lazy dog '
var jk =uy.match(/the/g).length;
document.write("Text:"+" "+uy+"<br>")
document.write("There are"+" "+jk+" "+"occurrence(s) of word 'the'");

//Chapter 26-30 and Task#1//
document.write("<h1>Chapter 26-30</h1> ")

document.write("<h1>Task1</h1>")

var numb = +prompt("Enter positive integer");
var numb1 = Math.round(numb);
var numb2 = Math.floor(numb);
var numb3 = Math.ceil(numb);
document.write("number:"+" "+ numb+"<br>");
document.write("round of value:"+" "+ numb1+"<br>");
document.write("floor value:"+" "+ numb2+"<br>")
document.write("ceil value:"+" "+ numb3+"<br>")

//Chapter 26-30 and Task#2//
document.write("<h1>Task2</h1>")
var neg = +prompt("Enter your Negative floating point");
var neg1 = Math.round(neg);
var neg2 = Math.floor(neg);
var neg3 = Math.ceil(neg);
document.write("number:"+" "+ neg+"<br>");
document.write("round of value:"+" "+ neg1+"<br>");
document.write("floor value:"+" "+ neg2+"<br>")
document.write("ceil value:"+" "+ neg3+"<br>")

//Chapter 26-30 and Task#3//
document.write("<h1>Task3</h1>")

var t = -4
var j = Math.abs(t)
document.write("The absolute value of" +" "+t+" "+"is"+" "+j)

//Chapter 26-30 and Task#4//
document.write("<h1>Task4</h1>")
var rand = Math.random()*4;
var rand1 = rand.toFixed()
document.write("random dice value:"+" "+rand1+"<br>")
var rand2 = Math.random()*8;
var rand3 = rand2.toFixed()
document.write("random dice value:"+" "+rand3)

//Chapter 26-30 and Task#5//
document.write("<h1>Task5</h1>")
var coi = Math.random()*4;
var tym = coi.toFixed()
console.log(tym)
if(tym==2){
    document.write(tym+"\n"+"random coin value: Heads")
   

}
else if(tym==1)
{
    document.write(tym +"\n"+"random coin value: Tails")
}
else
{document.write('Try again')}

//Chapter 26-30 and Task#6//
document.write("<h1>Task6</h1>")
var ra = Math.random()*101;
var ui = ra.toFixed()
document.write("The random number between 1 to 100:"+" "+ui);

//Chapter 26-30 and Task#7//
document.write("<h1>Task7</h1>")
var weight = prompt("Enter your weight");
var weight1 =parseFloat(weight)
document.write("The weight of the user is"+" "+weight1+"Kilograms")

document.write("<h1>Task7</h1>")


//Chapter 26-30 and Task#8//
var user =prompt("Enter any number between 1 to 10");
var yuo =(Math.random()*10);
var tgy =yuo.toFixed();
document.write(tgy)
if(user==tgy){
    document.write("<br>"+"Congratulations! your gucess is right")
}
else{
    document.write("<br>"+"try again")
}
document.write("<h1>Chapter31-34</h1>")
//Chapter 31-34 and Task#1//
document.write("<h1>Task1</h1>")
var date = new Date();
document.write(date)

document.write("<h1>Task2</h1>")
//Chapter 31-34 and Task#2//
var month = ['January','Feburary','March','April','May','June','July','Augest','September','October','November','December'];
var month1 = new Date();
var month2 = month1.getMonth();
var month3 = month[month2];
document.write("Current Month:"+" "+month3)

document.write("<h1>Task3</h1>")
//Chapter 31-34 and Task#3//
var y = new Date();
var t = y.toString();
var u = t.slice(0,3);
document.write("Today is"+" "+u)

document.write("<h1>Task4</h1>")
//Chapter 31-34 and Task#4//
var arrAy = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var arraY1 = new Date();
var arraY2 = arraY1.getDay();
var arraY3 = arrAy[arraY2];
if (arraY3==='Saturday'||arraY3==='Sunday'){

   document.write("It's Fun day")
}
else{
    document.write("It's Working day")
}

document.write("<h1>Task5</h1>")
//Chapter 31-34 and Task#5//
var p = new Date();
var y = p.getDate();
if (y<16){
    document.write("First fifteen days of the Month")
}
else{
document.write('Last days of Month')
}
document.write("<h1>Task6</h1>")
//Chapter 31-34 and Task#6//
var tyu = new Date();
var yui = tyu.getTime();
var edr = yui/(1000*60*60)
document.write("Current Date:"+" "+tyu+"<br>");
document.write("Elapsed millisecond since January 1,1970:"+" "+yui+"<br>");
document.write("Elapsed minutes since January 1,1970:"+" "+edr);

document.write("<h1>Task7</h1>")
//Chapter 31-34 and Task#7//
var tbn = new Date();
var yhn = tbn.getHours();
if(yhn>12 )
{
document.write("It's PM")
}
else if(yhn<12) {
    document.write("It's AM")

}
document.write("<h1>Task8</h1>")
//Chapter 31-34 and Task#8//
var Laterdate = new Date("dec 31 2020")
document.write("Laterdate:"+" "+Laterdate)

document.write("<h1>Task9</h1>")
//Chapter 31-34 and Task#9//
 var r = new Date("Apr 24 2020");
 var e = r.getTime();
 var k = new Date();
 var o = k.getTime();
var t = o - e;
var f = t/(1000*60*60*24)
 var m = Math.round(f);

 document.write(m)

 document.write("<h1>Task10</h1>")
//Chapter 31-34 and Task#10//
 var y12 =new Date("dec 31 2014 00:00:00");
var L45 = new Date ("Dec 5 2015" );
var io1 = L45.getTime();
var Pkj = y12.getTime();
var we2 = io1 - Pkj;
var d67 = we2/(1000*60)
var I9x = d67;
document.write(I9x)

document.write("<h1>Task11</h1>")
//Chapter 31-34 and Task#11//
var iop = new Date();
var Yhu = new Date();
Yhu.setHours(-0);
document.write("Current date:"+ ""+iop+"1 hour ago , it was"+" "+Yhu)

document.write("<h1>Task12</h1>")
//Chapter 31-34 and Task#12//
var tPo = new Date();
var Uji = new Date();
 Uji.setFullYear(1920)
document.write("Current date:"+ ""+tPo+"100 years back , it was"+" "+ Uji)

document.write("<h1>Task13</h1>")
//Chapter 31-34 and Task#13//
var aWe = prompt("Enter your age");
var sQw = new Date();
var tyv = sQw.getFullYear()-aWe;
document.write("Your age:"+aWe+"<br>");
document.write("Your birth year is"+tyv)

document.write("<h1>Task14</h1>")
//Chapter 31-34 and Task#14//
document.write("<h1>K-Electric Bill</h1>");
var name = "Coustomer Name:"
var hji = "<b>ABC Customer</b>" 
var Month = "Month:"
var yui = "<b>February</b>"
var units = "Number of units:"
var dfh ="<b>220</b>"
var Charges ="Charges per Unit:"
var jio = "<b>16</b>"
var date = 220*16;
var amou ="Net Amount Payable( within Due Date):" 
var amop = "Late Amount Surcharges"
var xdf = "<b>329</b>"
var gross = date+329;
var jiop ="Gross Amount Payable( after Due Date):" 
document.write(name +" "+hji+""+"<br>");
document.write(Month+" " +yui+"<br>");
document.write(units+" "+dfh+"<br>");
document.write(Charges+" "+jio+"<br>");
document.write("<h1></h1>")
document.write(amou+" "+date+"<br>");
document.write(amop+" "+xdf+"<br>");
document.write(jiop+" "+gross+"<br>") 

document.write("<h1>Chapter35-38</h1>")
document.write("<h1>Task 1</h1>")
//Chapter 35-38 and Task#1//
function date5(){
    document.write(new Date())
}
date5()

document.write("<h1>Task 2</h1>")
//Chapter 35-38 and Task#2//


function name78(){
document.write("Welcome Aqsa Nisar")
}
name78();

document.write("<h1>Task 3</h1>")
//Chapter 35-38 and Task#3//

function numb89(a,b){
 var j = a+b;
 return j
}
var t = numb89(+prompt("Enter the number of variable a"),+prompt("Enter the number of variable b"))
document.write(t)
document.write("<h1>Task 4</h1>")
//Chapter 35-38 and Task#4//

function cal(a,b,c){

    if(b=== '+'){
      var h=  a + c
    }
    else if (b==='-') {
        var h = a - c
        
    }
    else if (b==='*') {
        var h = a * c
    }
    else if(b==='/') {
        var h = a/c
    }
    else{
        var h ="Try again"
    }
    document.write(h)
  return h
  
}
var p =cal(+prompt("Enter first number in calculater"),prompt("Enter sign"),+prompt("Enter second number in calculater"))
document.write(p)

document.write("<h1>Task 5</h1>")
//Chapter 35-38 and Task#5//

function iot(m,k){
return m**k
}
var i = iot(2,5)
document.write(i)

document.write("<h1>Task 6</h1>")
//Chapter 35-38 and Task#6//

function factorial(n){
    if(n==0 && n<=1){
        return 1
    }
    else{
      return  n* factorial(n-1)
    }
}
document.write(factorial(5))

document.write("<h1>Task 7</h1>")
//Chapter 35-38 and Task#7//

  function count12(x,y){
    for(i=x;i<=y;i++){
        document.write(i+"<br>")
    }
 

}
count12(1,50)

document.write("<h1>Task 8</h1>")
//Chapter 35-38 and Task#8//

function rec(height,width){
 var A = height* width 
 return A
}
 var o = rec(prompt("Enter height"),prompt("Enter width"))
document.write(o)


document.write("<h1>Task 9</h1>")
//Chapter 35-38 and Task#9//

function pal(a){
        var u = a
        var ch= ""
        for (i=u.length-1;i>=0;i--){
            ch+=u[i]
        }
        console.log(u)
        if (ch==u) {
            document.write("Palindrome word")
        }
        else{
       document.write("try again")
        }
        return pal
        }
        var p = pal(prompt("Enter word"))

        document.write("<h1>Task 10</h1>")
        //Chapter 35-38 and Task#10//

function io (H,p){
    function po(){
        var u = Math.sqrt(H**2 +p**2)
document.write(u)

    }
  po()


    return io
  
 
   
}
var i = io(4,7)

document.write("<h1>Task 11</h1>")
//Chapter 35-38 and Task#11//

function strm(word='the quick brown fox'){
    var tyu = word.toLowerCase().split(' ');
    for(var i=0;i<tyu.length;i++){
        tyu[i]=tyu[i].charAt(0).toUpperCase()+ tyu[i].substring(1);
      var u = tyu.join(' ');
 
    }
document.write(u)
}
strm()
document.write("<h1>Task 12</h1>")
//Chapter 35-38 and Task#12//

function great(p){
    var u = p.split(' ');
    console.log(u)
    var u = p.split(' ').sort(function(a,b){return b.length - a.length;})
    document.write(u[0])
    return u[0]
   
}
 great('Web Devlopment Tutorial')


document.write("<h1>Task 13</h1>")
//Chapter 35-38 and Task#13//

function der(io,count){
        var countui = 0 ;
    
        for (i=0;i<io.length;i++){
            if(io.charAt(i)==count)
           console.log( countui += 1);
        }
      return countui ;
    }
document.write(der('JSResourceS.com', 'o'))
    

    document.write("<h1>Task 14</h1>")
//Chapter 35-38 and Task#14//

    function calcCircumference(r){
        var pi = 3.14
        var circum = 2*pi*r
        document.write(circum)
    return circum

    }
var t = (calcCircumference(prompt("Enter radius")))
    function calcArea(r2){

    var pi2 =3.14 ;
    var area = pi2*r2**2 ;
      return area
}
document.write(calcArea(prompt("Enter your radius ")))
