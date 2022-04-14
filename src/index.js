import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

export const COUNT_ADD = "COUNT_ADD";
export const COUNT_MINUS = "COUNT_MINUS";

const countModifier = (count = 0, action) => {
    switch (action.type) {
        case COUNT_ADD:
            return count + 1;

        case COUNT_MINUS:
            return count - 1;

        default:
            return count;
    }
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

add.addEventListener("click", () => {
    countStore.dispatch({type: COUNT_ADD});
});
minus.addEventListener("click", () => {
    countStore.dispatch({type: COUNT_MINUS});
});