const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name?\n', (name) => {
  rl.question('What is an activity you like doing?\n', (activity) => {
    rl.question('What is your favourite thing to eat for breakfast?\n', (breakfast) => {
      rl.question('What is your favourite animal?\n', (animal) => {
        console.log(`Cool! Your name is ${name}, you like ${activity}. Your favourite thing to eat for breakfast is ${breakfast}, and your favourite animal is ${animal}. Nice to meet you!`);

        rl.close();
      });
    });
  });
});
