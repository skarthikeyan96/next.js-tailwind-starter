import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useTheme } from 'next-themes';

const Home: NextPage = () => {

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeToggle = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button
        className='border rounded-sm p-2'
          onClick={() => setTheme("light")}
          type="button"
        > dark </button>
      );
    }
    return (
      <button
      className="border rounded-sm p-2"
      onClick={() => setTheme("dark")}
      type="button"
    > Light </button>
    );
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js and Tailwind starter </title>
        <meta name="description" content="Next.js and Tailwind starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline mb-4">
          Next.js + Tailwind Starter 
        </h1>

        {renderThemeToggle()}

        <div className="m-3 pt-8">
          <h3 className='text-blue-400 dark:text-white'> Current theme is { theme }</h3>
         </div>
      </main>

     
    </div>
  )
}

export default Home
