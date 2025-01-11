import { createContext, useContext, useReducer } from "react";

interface State { //terceiro
    theme: string
}

interface Actions { //quinto
    type: themeActions,
    payload: any
}

interface Provider { //oitavo
    children: JSX.Element
}

interface ContextType {
    state: State,
    dispatch: (action: Actions) => void
}


const initialData: State = {
    theme: 'dark'
} //segundo

const ThemeContext = createContext<ContextType | undefined>(undefined)  //primeiro

export enum themeActions {
    setTheme,
} //quarto

const reducer = (state: State, action: Actions) => { //sexto
    switch(action.type) {
        case themeActions.setTheme:
            return {...state, theme: action.payload}
        break
    }
}

export const ThemeProvider = ({children}: Provider) => { //setimo
    const [state, dispatch] = useReducer(reducer, initialData);
    const value = {state, dispatch}

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useForm = () => { //nono
    const context = useContext(ThemeContext)
    if(context === undefined) {
        throw new Error('useForm needs to be used inside the ThemeProvider')
    }
    return context
}