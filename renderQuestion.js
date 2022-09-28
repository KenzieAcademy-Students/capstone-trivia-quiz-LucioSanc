const yearGenerator = function (yearData) {
    const yearAired = document.createElement("h1");
    yearAired.classList.add("year");

    if (yearData.value === 0) {
        yearAired.innerText = `Was Planned to Air On: ${yearData.game.aired}`;
    } else {
        yearAired.innerText = `Aired On: ${yearData.game.aired}`
    }

    document.body.append(yearAired);
}

const categoryGenerator = function (categoryData) {
    const questionCategory = document.createElement("h1");
    questionCategory.classList.add("category");
    questionCategory.innerText = categoryData.category.title;
    document.body.append(questionCategory);
}

const valueGenerator = function (valueData) {
    const questionValue = document.createElement("h1");
    questionValue.classList.add("value");

    if (valueData.value === 0) {
        valueData.value = 3000

    }
    questionValue.innerText = `Point Value: ${valueData.value}`;

    document.body.append(questionValue);
}

const questionGenerator = function (questionData) {
    const question = document.createElement("h1");
    question.classList.add("question");
    question.innerText = `' ${questionData.question} '`;
    document.body.append(question);
}