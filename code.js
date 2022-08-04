class QuizShow {
    constructor() {
        this.id = 0;
    }

    createGameAPI() {
        this.id = Math.floor(Math.random() * 2)

        const baseURL = `https://jservice.kenzie.academy/api/random-clue?valid=true}`;

        fetch(baseURL)
            .then(response => response.json())
            .then(data => {
                this.createYear(data);

                this.createCategory(data);

                this.createValue(data);

                this.createQuestion(data);

                this.determineResponse(data);

                console.log(data.answer);
            })
    }

    determineResponse(answerData) {
       createAnswerBox(answerData);
    }
    
    createCategory(categoryData) {
        categoryGenerator(categoryData);
    }

    createValue(valueData) {
        valueGenerator(valueData);
    }

    createQuestion(questionData) {
        questionGenerator(questionData);
    }

    createYear(yearData) {
        yearGenerator(yearData);
    }
}