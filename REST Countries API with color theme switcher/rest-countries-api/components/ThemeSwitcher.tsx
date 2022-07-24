import React from 'react'
import { useTheme } from 'next-themes'

interface Props {

}

const ThemeSwitcher: React.FC<Props> = ({ }) => {
    const [mounted, setMounted] = React.useState(false)
    const { theme, setTheme } = useTheme()

    // When mounted on client, now we can show the UI
    React.useEffect(() => setMounted(true), [])

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    if (!mounted) return null;

    return <div>
        <button onClick={changeTheme}>{theme === 'light' ? '🌛' : '🌞'}</button>
    </div>
}
export default ThemeSwitcher;