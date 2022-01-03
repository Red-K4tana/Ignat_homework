import {homeWorkReducer} from '../homeWorkReducer'
import {InitialPeopleType} from "../../HW8";

let initialState: InitialPeopleType // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState: InitialPeopleType = homeWorkReducer(initialState, {type: 'SORT', payload: 'up'})

    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')
})
test('sort name down', () => {
    const newState: InitialPeopleType = homeWorkReducer(initialState, {type: 'SORT', payload: 'down'})

    expect(newState[5].name).toBe('Александр')
    expect(newState[4].name).toBe('Виктор')
})
test('check age 18', () => {
    const newState: InitialPeopleType = homeWorkReducer(initialState, {type: 'CHECK', payload: 18})

    expect(newState.filter(p => p.age < 18).length).toBe(0)
})
