import { useEffect, useState } from "react"
import useLocalstorage from "./UseLocalstorage"


const ThemeToggle = () => {
    
  const [theme, setTheme] = useLocalstorage('theme', 'light')

  const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light')
  }



//   const [theme, setTheme] = useState<string>('light')

//   useEffect(()=>{
//   const storedTheme =   window.localStorage.getItem('theme')
//   if(storedTheme){
//     setTheme(JSON.parse(storedTheme))
//   }
//   },[])

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark': 'light'
//     setTheme(newTheme)
//     window.localStorage.setItem('theme', JSON.stringify(newTheme))
//   }

  return (
    <div style={{
        background : theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? 'red' : '#fff',
        padding: '20px',
    }}>
        <h1>Current Theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemeToggle