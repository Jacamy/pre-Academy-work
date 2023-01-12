document.addEventListener('DOMContentLoaded',function(){

let politician = ['rishi', 'sajid', 'bim', 'alex', 'robin', 'laura'];

function jacb() {
    politician.forEach(person => console.log('Read ' + person));
};

jacb();

/*
function jacr() {
  console.log("hi")
    /*document.getElementById("rs").addEventListener("click", checkClick(politician[0]));
    document.getElementById("sj").addEventListener("click", checkClick(politician[1]));
    document.getElementById("ba").addEventListener("click", checkClick(politician[2]));
    document.getElementById("ac").addEventListener("click", checkClick(politician[3]));
    document.getElementById("rw").addEventListener("click", checkClick(politician[4]));
    document.getElementById("lt").addEventListener("click", checkClick(politician[5]));
};


let sunak = document.getElementById('rs').addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}

function checkClick() {
    if (document.getElementById('rs').clicked === true) {
      console.log("whoop");
    document.getElementById("comments").innerHTML = (sajid.giveComment());
    }
}

function memberCom(name, job, quote) {
  return {
    name: name,
    job: job,
    quote: quote,
    giveComment: function() {
      return name + ' resigning from their position as ' + job + ' ' + commentAdjective[adjective] + ' Boris ' + quote;
    }
}
};

const commentAdjective = ["slammed", "lambasted", "stuck the knife into", "denounced"];
for(let i=0; i<commentAdjective.length; i++) {
     console.log(commentAdjective[i]);
};

let adjective = Math.floor(Math.random()*commentAdjective.length);
console.log(commentAdjective[adjective]);

let rishi = memberCom("Rishi Sunak", "Chancellor of the Exchequer", "\"...the public rightly expect Government to be conducted properly, competently and seriously\", adding \"I believe these standards are worth fighting for and that is why I am resigning.\"");
let sajid = memberCom("Sajid Javid", "Health Secretary", "\"...the British people also rightly expect integrity from their Government. The tone you set as a leader, and the values you represent, reflect on your colleagues, your party and ultimately the country.\"");
let bim = memberCom("Bim Afolami", "Tory Vice Chair", "\"I think the behaviour of Downing Street over the Chris Pincher affair was really appalling. And I, personally, just couldn't think I could defend that sort of behaviour any longer.\"");
let alex = memberCom("Alex Chalk", "Solicitor General", "\"Public confidence in the ability of Number 10 to uphold the standards of candour expected of a British Government has irretrivably broken down. I regret I share that judgement.\"");
let robin = memberCom("Robin Walker", "Schools Minister", "\"Unfortunately, recent events have made it clear to me that our great party, for which I have campaigned all of my adult life, has become distracted from its core missions by a relentless focus on questions of leadership.\"");
let laura = memberCom("Laura Trott", "parliamentary private secretary at the Department of Transport", "\"Trust in politics is - and must always be - of the upmost importance, but sadly in recent months this has been lost.\"");

jacr();

*/
})
