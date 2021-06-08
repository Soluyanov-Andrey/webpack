class Person {

    // Приватный метод
    #setType() {
        console.log("I am Private");
    }

    // Публичный метод
    show() {
        this.#setType();
    }
}

const personObj = new Person();
personObj.show(); // "I am Private";
personObj.setType(); // TypeError: personObj.setType is not a function