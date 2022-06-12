import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import { PrismaClient } from '@prisma/client'


const HomePage = () => {
  useEffect(() => {
    const conDB = async () => {
      const _db = new PrismaClient()
      debugger
      // await _db.$connect
      const ss = await _db.user.findMany()
      // console.log('file: HomePage.tsx ~ line 13 ~ ss', ss)
    }
    conDB()
  }, [])

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <div>
        <Link to={routes.about({ about: true })}>To About</Link>
      </div>
    </>
  )
}

export default HomePage
