let a;
let tim;
let v;
let dat;
setInterval(() => {
    a = new Date();
    tim = a.getHours() +":"+ a.getMinutes() +":"+ a.getSeconds();
    document.getElementById("time").innerHTML= tim;
}, 1000);
function myFunction() {
    v = new Date();
    dat = v.toDateString();
    alert(dat);
}
