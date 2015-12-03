  var score = 0;
  var userName = prompt("What is your name?");
  alert("Greetings " + userName + "!");
  console.log("Look ma I'm coding!!")

  var qOne = prompt("Are you a dog person? Yes or No");
    if (qOne.toLowerCase() == "yes" || qOne.toLowerCase() == "y") {
      score += 1;
      alert("you got that right! Cats are weird.");
    } else {
      alert("You are wrong, I'm actually allergic to cats!")
    };

  var qTwo = prompt("Do you consider yourself a Seattlite? Yes or No");
    if (qTwo.toLowerCase() == "yes" || qTwo.toLowerCase() == "y") {
      score += 1;
      alert("Indeed, I love the Emerald City and consider it my home.");
    } else {
      alert(userName + ", " + "you're incorrect. I may be a transplant but I consider Seattle my home.");
    }

  var qThree = prompt("Can you name all the Women that have ever been on the Supreme Court?");
  if (qThree.toLowerCase() == "yes" || qThree.toLowerCase() == "y") {
    score += 1;
    alert("Your damn right I can! As a former Political Science major and NOTORIOUS RBG supporter. I know whats up.");
  } else {
    alert("You are gravely mistaken! Its pretty damn easy to remember all of the women that have ever been on The Supreme Court. As there have only been 5 total (out of 112)");
};
  var qFour = parseInt(prompt("What percent of the total Supreme Court Justices were women?"));
  if (qFour <= 5 && qFour >= 4 ) {
    score += 1;
    alert("You are either lucky or a math wiz! Your answer is close enough to get call your answer Correct!");
  } else if  (qFour > 5 && qFour < 20) {
    alert("Wow, your so damn close but 'almost' doesn't count, you're wrong!");
  } else if (qFour > 20) {
    alert("Wow, your so off! Are you even trying")
  } else {
    alert("Obviously, you are just pressing buttons. Fail")
  }

alert("Thanks for playing " + userName + ", " + "you answered " + score +
" questions out of 4 correctly.");
