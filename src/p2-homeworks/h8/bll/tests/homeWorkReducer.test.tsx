import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";

let initialState: any[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});

    console.log(newState);
    expect(newState === initialState).toBe(false);
    expect(newState.length === initialState.length).toBe(true);
    expect(newState[0].name).toBe("Александр");
    expect(newState[5].name).toBe("Кот");
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});

    console.log(newState);
    expect(newState === initialState).toBe(false);
    expect(newState.length === initialState.length).toBe(true);
    expect(newState[0].name).toBe("Кот");
    expect(newState[5].name).toBe("Александр");

});
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "check", payload: 18});
    console.log(newState);
    expect(newState === initialState).toBe(false);
    expect(newState.length).toBe(4);
    expect(newState[0].name).toBe("Александр");
    expect(newState[3].name).toBe("Ирина");
});
