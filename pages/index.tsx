import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <main className="w-full h-screen px-56 flex flex-col justify-center items-center bg-white dark:bg-indigo-900">
        <div className="border-2 border-indigo-600 text-indigo-600 dark:border-indigo-200 dark:text-indigo-200 rounded-full py-2 px-5">Under construction</div>
        <h1 className="font-black text-9xl text-center mt-16 text-black dark:text-white">Expressive simplicity!</h1>
        <h2 className="text-xl text-center pt-12 text-black dark:text-white">I am currently in the process of crafting a renewed version of my web presence. <b>Stay tuned!</b></h2>
      </main>
    </>
  )
}

export default Home
