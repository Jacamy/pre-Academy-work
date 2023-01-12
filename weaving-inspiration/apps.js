document.addEventListener('DOMContentLoaded',function(){

    let politician = ['rishi', 'sajid', 'bim', 'alex', 'robin', 'laura'];
    
    function jacr() {
        document.getElementById("rs").addEventListener("click", checkClick(politician[0]));
        document.getElementById("sj").addEventListener("click", checkClick(politician[1]));
        document.getElementById("ba").addEventListener("click", checkClick(politician[2]));
        document.getElementById("ac").addEventListener("click", checkClick(politician[3]));
        document.getElementById("rw").addEventListener("click", checkClick(politician[4]));
        document.getElementById("lt").addEventListener("click", checkClick(politician[5]));
    };

    function checkClick(userChoice) {
        console.log(`chose ${userChoice}`);
    }
})