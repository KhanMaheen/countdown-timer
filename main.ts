#! /usr/bin/env node

import inquirer from "inquirer";


class CountdownTimer {
  private duration: number;

  constructor(duration: number) {
    this.duration = duration;
  }

  start(): void {
    let remainingTime = this.duration;

    setInterval(() => {
      remainingTime--;

      if (remainingTime <= 0) {
        console.log('Countdown timer has completed!');
      } else {
        console.log(`Remaining time: ${remainingTime} seconds`);
      }
    }, 1000);
  }
}

async function main() {
  const questions = [
    {
      type: 'input',
      name: 'duration',
      message: 'Enter the countdown duration in seconds:',
    },
  ];

  const answers = await inquirer.prompt(questions);
  const countdownTimer = new CountdownTimer(parseInt(answers.duration, 10));
  countdownTimer.start();
}

main();