import {InitialPeopleType} from "../HW8";


type SortActionType = {
    type: 'SORT'
    payload: 'up' | 'down'
}
type CheckActionType = {
    type: 'CHECK'
    payload: number
}

type ActionType = SortActionType | CheckActionType


export const homeWorkReducer = (state: InitialPeopleType, action: ActionType): InitialPeopleType => { // need to fix any
    switch (action.type) {
        case 'SORT':
            switch (action.payload) {
                case 'up':
                    const newUpState = [...state]
                    for (let i = 0; i < newUpState.length; i++) {
                        for (let n = 0; n < newUpState.length - 1 - i; n++) {
                            if (newUpState[n].name > newUpState[n+1].name) {
                                const buff = newUpState[n+1]
                                newUpState[n+1] = newUpState[n]
                                newUpState[n] = buff
                            }
                        }
                    }
                    return newUpState
                case 'down':
                    const newDownState = [...state]
                    for (let i = 0; i < newDownState.length; i++) {
                        for (let n = 0; n < newDownState.length - 1 - i; n++) {
                            if (newDownState[n].name < newDownState[n+1].name) {
                                const buff = newDownState[n+1]
                                newDownState[n+1] = newDownState[n]
                                newDownState[n] = buff
                            }
                        }
                    }
                    return newDownState
                default:
                    return state
            }
        case 'CHECK': {
            return [...state.filter((p: any) => p.age >= action.payload)]
        }
        default: return state
    }
}