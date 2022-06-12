import { useAuth } from "@redwoodjs/auth"
import { Link, routes } from "@redwoodjs/router"

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  // return <>{children}</>
  const { isAuthenticated, currentUser, logOut } = useAuth()
  // console.log('file: BlogLayout.tsx ~ line 11 ~ currentUser', currentUser)
  // const _role: string = currentUser.roles[0]?.role
  return (
    <>
      <header>
        <h1>RW Blog</h1>
        {isAuthenticated ? (
          <div>
            <span>Logged in as {Array.isArray(currentUser?.roles) ? currentUser.roles.reduce((pre, cur, idx) => { return idx === 0 ? `${cur}` : `${pre}, ${cur}` }, '') : currentUser?.roles || '-'}</span>{' '}
            <button type="button" onClick={logOut}>
              Logout
            </button>
          </div>
        ) : (
          <Link to={routes.login()}>Login</Link>
        )}
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.posts()}>Posts</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
