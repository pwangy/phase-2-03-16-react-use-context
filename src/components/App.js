import { useState } from 'react'
import { UserProvider } from '../context/user'
import Header from './Header'
import Profile from './Profile'

const App = () => {
	const [theme, setTheme] = useState('dark')

	return (
		<main className={theme}>
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Profile theme={theme} />
      </UserProvider>
		</main>
)}

export default App