let username = prompt("What is your username");
let regex = /\b(kareen|chiamaka|lambo)\b/i;

if (username === "Kareen") {
   let pass = prompt("Enter your password");
   if (pass === "MINE") {
      alert("Welcome baby!");
      let message = prompt("Enter any of your name or nickname");
      if (message.match(regex)) {
         alert("Hi babbyyyy🥰🤗🥰");
      } else {
         alert(`Umm! weird name. You're not my baby👿
            Now get the fuck outa here!`);
      }
   } else if (pass === null || "") {
      alert("Cancelled");
   } else {
      alert("Wrong password! You be thief?🙄")
   }
} else if (username === null || "") {
   alert("Cancelled");
} else {
   alert("I don't know you")
}