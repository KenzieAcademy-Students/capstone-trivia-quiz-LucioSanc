const createAnswerBox = function (answerData) {
    const textBox = document.createElement("input");
    textBox.classList.add("answer_Text");
    textBox.setAttribute("type", "text");
    textBox.placeholder = "Type Here ...";

    const answerSpace = document.createElement("div");
    answerSpace.classList.add("answer")
    answerSpace.append(textBox);

    const button = document.createElement("button");
    button.classList.add("button");

    button.innerText = "Enter";

    const nextQuestionButton = document.createElement("button");
    nextQuestionButton.classList.add("newButton");

    nextQuestionButton.innerText = "Next Question";

    const displayPlayerScore = document.createElement("h1");
    displayPlayerScore.classList.add("playerAnswer");
    let score = 0;

    const showAnswer = document.createElement("h1");
    showAnswer.classList.add("answer_Show");

    let newQuestionAnswer = answerData.answer;
    let newQuestionValue = answerData.value;

    nextQuestionButton.addEventListener("click", () => {
        const newUrl = `https://jservice.kenzie.academy/api/random-clue?valid=true}`;

        fetch(newUrl)
            .then(response => response.json())
            .then(newData => {
                newQuestionAnswer = newData.answer;
                newQuestionValue = newData.value;

                const newText = document.querySelector(".answer_Text");
                newText.value = "";

                const dontShowAnswer = document.querySelector(".answer_Show");
                document.body.removeChild(dontShowAnswer);

                const newYear = document.querySelector(".year");
                if (newData.value === 0) {
                    newYear.innerText = `Was Planned to Air On : ${newData.game.aired}`;
                } else {
                    newYear.innerText = `Aired On : ${newData.game.aired}`;
                }

                const newCategory = document.querySelector(".category");
                newCategory.innerText = newData.category.title;

                const newWorth = document.querySelector(".value");
                if (newQuestionValue === 0) {
                    newQuestionValue = 3000;
                }

                newWorth.innerText = `Point Value: ${newQuestionValue}`;

                const newQuestion = document.querySelector(".question");
                newQuestion.innerText = ` ${newData.question} `;

                console.log(newQuestionAnswer);
            })
    })

    button.addEventListener("click", () => {
        if (textBox.value.toLocaleLowerCase() === newQuestionAnswer.toLocaleLowerCase()) {
            score += newQuestionValue;

            displayPlayerScore.innerText = `Your Total : $${score}`;

            showAnswer.innerText = `Correct!`;

            document.body.append(displayPlayerScore);
            document.body.append(showAnswer);
        } else {
            score -= newQuestionValue;
            displayPlayerScore.innerText = `Money Taken: $${score}!`;

            showAnswer.innerText = `Wrong Answer :  ${newQuestionAnswer} `;

            document.body.append(displayPlayerScore)
            document.body.append(showAnswer);
        }
    })
    answerSpace.append(button);
    answerSpace.append(nextQuestionButton);
    document.body.append(answerSpace);
}