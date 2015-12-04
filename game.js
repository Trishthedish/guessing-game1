var qOneEl = document.getElementById("qOneEl");
console.log(qOneEl)
var qTwoEl = document.getElementById("qTwoEl");
console.log(qOneEl)
var qThreeEl = document.getElementById("qThreeEl");
var qFourEl  = document.getElementById("qFourEl");


var score = 0
var userName = prompt("What is your name?");
alert("Greetings " + userName + "!");
console.log("Look Ma I'm coding!")

 var qOne = prompt("Are you a dog person? Yes or No");
     if (qOne.toLowerCase() == "yes" || qOne.toLowerCase() == "y") {
       score += 1;
       qOneEl.textContent = "You got that right! Cats are weird.";
     } else {
       qOneEl.textContent = "You are wrong, I'm actually allergic to cats!";
     };

var qTwo = prompt("Do you consider yourself a Seattlite? Yes or No");
     if (qTwo.toLowerCase() == "yes" || qTwo.toLowerCase() == "y") {
       score += 1;
       qTwoEl.textContent = "Indeed, I love the Emerald City and consider it my home.";
     } else {
       qTwoEl.textContent = userName + ", " + "you're incorrect. I may be a transplant but I consider Seattle my home.";
     };

var qThree = prompt("Can you name all the Women that have ever been on the Supreme Court?");
     if (qThree.toLowerCase() == "yes" || qThree.toLowerCase() == "y") {
     score += 1;
     qThreeEl.textContent = "Your damn right I can! As a former Political Science major and NOTORIOUS RBG supporter. I know whats up.";
   } else {
     qThreeEl.textContent = "You are gravely mistaken! Its pretty damn easy to remember all of the women that have ever been on The Supreme Court. As there have only been 5 total (out of 112)";
 };
   var qFour = parseInt(prompt("What percent of the total Supreme Court Justices were women?"));
    if (qFour <= 5 && qFour >= 4 ) {
     score += 1;
     qFourEl.textContent = "You're either LUCKY or a math wiz! Your answer is Correct!";
   } else if  (qFour > 5 && qFour < 20) {
     qFourEl.textContent = "Wow, your so damn close but 'almost' doesn't count, you're wrong!";
   } else if (qFour > 20) {
     qFourEl.textContent = "Wow, your so off! Are you even trying";
   } else {
     qFourEl.textContent = "Obviously, you are just pressing buttons. Fail";

   }
   //
  //  var qFive = prompt("I'm going to list 3 truths and lie. Tis your job to guess which one of these is a lie.")
   //
  //  var answerFive = [
  //    ("As a child I loved the Phoenix Suns and wrote fan letters to Dan Marley", true),
  //    ("Accidentally, swallowed a toothpic at a SuperBowel party. Eventually, Doctors had to remove it.",true)
  //    ("I lock my keys in my car pretty regularly",true)
  //    ("My dod and I have competed in ", false)
  //  ]



 alert("Thanks for playing " + userName + ", " + "you answered " + score +
 " questions out of 4 correctly.");
