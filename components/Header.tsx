import Link from 'next/link'
import styles from './Header.module.css'
import SearchField from "react-search-field"
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const onSubmit = (text) => {
    router.push('/search?q=' + text)
  }

  return (
    <header className={styles.header}>
      <Link href="/"><a><h1>yTube</h1></a></Link>
      <SearchField placeholder="Search a tube..." onEnter={onSubmit} onSearchClick={onSubmit} />
      <div className={styles.signed}>{
        // @ts-ignore
        session ? `Signed in as ${session.user.email}` : ''
      }</div>
      {session
       ? <button onClick={() => signOut()} className={styles.button}>Sign out</button>
       : <button onClick={() => signIn()} className={styles.button}>Sign in</button>
      }
    </header>
  )
}

export default Header
