function fn5() {
    console.log("fn5");
}

function fn4() {
    fn5()
}

function fn3(){
    setTimeout(()=> fn4(), 3000);
    console.log("Hello World!");
}

function fn2() {
    fn3();
}

function fn1(){
    fn2();
}

function main(){
    fn1();
}

main();
console.log("end of main");