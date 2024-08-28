const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const input = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );

    const answer = parseInt(input);

    if (typeof answer === 'number' && answer >= 0 && answer < this.answers.length) {
      this.answers[answer]++;
    } else {
      alert("Invalid option. Please enter a number between 0 and 3.");
    }

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    console.log(`Question: ${this.question}`);
    console.log(`Options: ${this.options.join(', ')}`);

    if (type === 'array') {
      console.log(`Results: ${this.answers}`);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

function displayResults(type = 'array', data) {


  if (type === 'array') {
    console.log(`Question: What is your favourite programming language?`);
    console.log(`Options: 0: JavaScript, 1: Python, 2: Rust, 3: C++`);
    console.log(`Results: ${data}`);
  } else if (type === 'string') {
    console.log(`Poll results are ${data.join(', ')}`);
  }
}

displayResults('array', testData1);
displayResults('string', testData1);
displayResults('array', testData2);
displayResults('string', testData2);