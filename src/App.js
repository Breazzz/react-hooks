// ПРИМЕРЫ ИМПОРТОВ ДЛЯ ХУКОВ
import React, {
    Component,
    useState,
    useEffect,
    useRef,
    useContext,
    useReducer,
    useCallback,
    useMemo,
    useLayoutEffect
} from 'react';


//                                      ПРИМЕР ФУНКЦИОНАЛЬНЫХ КОМПОНЕНТОВ
// const App = (props) => {
//     // Тут мог бы быть ваш хук!
//   let a = 'g'
//
//   return <div>{a}</div>;
// };

// function App(props) {
//     // Тут мог бы быть ваш хук!
//     return <div/>;
// }


//                                        ПРИМЕР ХУКА СОСТОЯНИЯ useState

//  class App extends Component {
//     state = {count: 0};
//
//     render() {
//         return (
//             <div className='wrapper'>
//                 <p>Счетчик равен {this.state.count}</p>
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>
//                     Увеличить счетчик
//                 </button>
//             </div>
//         );
//     }
// }

// const App = () => {
//     // Объявление новой переменной состояния «count»
//     const [count, setCount] = useState(0);
//   console.log('----->render')
//     return (
//         <div className='wrapper'>
//             <p>Счетчик равен {count}</p>
//             <button onClick={() => setCount(0)}>Сбросить</button> {/*простой вызов с заменой*/}
//
//             <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>  {/*функциональный вызов на основе предыдущего состояния*/}
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> {/*функциональный вызов на основе предыдущего состояния*/}
//         </div>
//     );
// }


//                                        ПРИМЕР ХУКА ЭФФЕКТА useEffect

// class App extends Component {
//     state = {count: 0};
//
//     componentDidMount() {
//         console.log('RENDER')
//         document.title = `Вы нажали ${this.state.count} раз`;
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//           console.log('RENDER1')
//         if (prevState.count !== this.state.count) {
//             document.title = `Вы нажали ${this.state.count} раз`;
//         }
//     }
//
//     render() {
//         return (
//             <div className='wrapper'>
//                 <p>Счетчик равен {this.state.count}</p>
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>
//                     Увеличить счетчик
//                 </button>
//             </div>
//         );
//     }
// }

// const App = () => {
//     const [count, setCount] = useState(0);
//   const [value, setValue] = useState('');
//
//     // Аналогично componentDidMount и componentDidUpdate:
//     useEffect(() => {
//         console.log('RENDER')
//         document.title = `Вы нажали ${count} раз`;
//     }, [count]);
//
//     return (
//         <div className='wrapper'>
//             <p>Счетчик равен {count}</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Увеличить счетчик
//             </button>
//           <input onChange={(e)=>setValue(e.target.value)} value={value}/>
//         </div>
//     );
// }


//                                       ПРИМЕР ХУКА ЭФФЕКТА" useEffect со сбросом

// class Status extends React.Component {
//
//     componentDidMount() {
//       console.log('RENDER')
//     }
//
//
//     componentWillUnmount() {
//       console.log('UNMOUNTING')
//     }
//
//     render() {
//         return <p>Я вложенная компонента</p>
//     }
// }


// const Status = (props) => {
//     useEffect(() => {
//       console.log('RENDER')
//         // Указываем, как сбросить этот эффект:
//         return () => {
//           console.log('UNMOUNTING')
//         };
//     }, []);
//
//     return <p>Я вложенная компонента</p>
// }
//
// const App = (props) => {
//   const [mounting, setMounting] = useState(true);
//   return (
//     <div className='wrapper'>
//       {mounting && <Status />}
//       <button onClick={()=>setMounting(!mounting)}>{mounting ? 'mounting':'unmounting'}</button>
//     </div>
//   )
// }

//                                           ПРИМЕР ХУКА useRef

// function App() {
//     const inputEl = useRef('INITIAL VALUE'); // можно положить любое значение
//     const oldRef = React.createRef();
//     console.log('NEW REF!    ', inputEl);
//
//     useEffect(() => {
//         console.log('OLD REF     ', oldRef);
//     });
//     const onButtonClick = () => {
//         inputEl.current.focus(); // `current` указывает на смонтированный элемент `input`
//         // oldRef.current.focus();
//     };
//
//     useEffect(() => {
//         if (!inputEl.current.value) {
//             alert('11111')
//         }
//     }, [inputEl]);
//
//     useEffect(() => {
//         if (inputEl.current.value === 123) {
//             alert('22222')
//         }
//     }, [inputEl]);
//
//     const changeCurrent = () => {
//         console.log('DEF CURRENT VALUE', inputEl.current.value);
//         inputEl.current.value = 123;
//         console.log('NEW CURRENT VALUE', inputEl.current.value);
//     };
//
//     console.log('RENDER');
//     console.log('ЗНАЧЕНИЕ ИЗ РЕФА ----->',inputEl.current);
//
//     return (
//         <div className='wrapper'>
//             <input ref={inputEl} type="text" placeholder='new ref'/>
//             <input ref={oldRef} type="text" placeholder='old ref'/>
//
//             <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
//             <button onClick={changeCurrent}>Изменить current</button>
//         </div>
//     );
// }

//                                                 ПРИМЕР ХУКА useContext

// const themes = { // value для контекста
//     light: {
//         foreground: "#000000",
//         background: "#eeeeee"
//     },
//     dark: {
//         foreground: "#ffffff",
//         background: "#222222"
//     }
// };
//
// const ThemeContext = React.createContext(); // создание контекста
//
// function App() {
//     return (
//         <ThemeContext.Provider value={themes}> {/* оборачиваем в контекст */}
//             <Toolbar/>
//         </ThemeContext.Provider>
//     );
// }
//
// function Toolbar(props) {
//     return (
//         <div className='wrapper'>
//             <ThemedButton/>
//         </div>
//     );
// }
//
// function ThemedButton() {
//     const theme = useContext(ThemeContext); // достаем из контекста value
//
//     const [currentThemeName, setCurrentThemeName] = useState('светлой');
//
//     const [buttonBackgroundTheme, setButtonBackgroundTheme] = useState(theme.light.background);
//     const [textColorTheme, setTextColorTheme] = useState(theme.light.foreground);
//
//     const buttonRef = useRef();
//
//     useEffect(() => {
//         buttonRef.current.style.cssText = `background: ${buttonBackgroundTheme}; color: ${textColorTheme}`;
//     }, [buttonBackgroundTheme, textColorTheme]);
//
//     const changeTheme = () => {
//         switch (buttonBackgroundTheme) {
//             case theme.light.background:
//                 setButtonBackgroundTheme(theme.dark.background);
//                 setTextColorTheme(theme.dark.foreground);
//                 setCurrentThemeName('тёмной');
//                 break;
//             case theme.dark.background:
//                 setButtonBackgroundTheme(theme.light.background);
//                 setTextColorTheme(theme.light.foreground);
//                 setCurrentThemeName('светлой');
//                 break;
//             default:
//                 return;
//         }
//     };
//     console.log("RENDER!");
//
//     return (
//         <button ref={buttonRef} onClick={changeTheme}>
//             Я стилизован {currentThemeName} темой из контекста!
//         </button>
//     );
// }


//                                              ПРИМЕР ХУКА useReducer
// const initialState = {count: 0}; // см *
//
// function reducer(state, action) {
//     console.log('STATE', state);
//     console.log('ACTION', action);
//
//     switch (action.type) {
//         case 'increment':
//             return {count: state.count + 1};
//         case 'decrement':
//             return {count: state.count - 1};
//         default:
//             throw new Error();
//     }
// }
//
// function App() {
//     const [state, dispatch] = useReducer(reducer, initialState); // см *
//     // или
//     // const [state, dispatch] = useReducer(reducer, {count: 0}); // см *
//     return (
//         <div className='wrapper'>
//             Count: {state.count}
//             <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//             <button onClick={() => dispatch({type: 'increment'})}>+</button>
//         </div>
//     );
// }

//пример с ленивой загрузкой
// function init(initialCount) {
//     // ... могут быть сложные вычисления
//     return {count: initialCount};
// }
//
// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return {count: state.count + 1};
//         case 'decrement':
//             return {count: state.count - 1};
//         case 'reset':
//             return init(action.payload);
//         default:
//             throw new Error();
//     }
// }
//
// function App({initialCount}) {
//     const [state, dispatch] = useReducer(reducer, initialCount, init);
//     return (
//         <div className='wrapper'>
//             Count: {state.count}
//             <button onClick={() => dispatch({type: 'reset', payload: 0})}>
//                 Reset
//             </button>
//             <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//             <button onClick={() => dispatch({type: 'increment'})}>+</button>
//         </div>
//     );
// }

export default App;
