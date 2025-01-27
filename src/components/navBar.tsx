
const NavBar = () => {
  return (
    <>
      <nav className="Nav">
        <a href="/"><img className="Nav-logo" src="/logo.png" alt="logo" /></a>

        <form action="" method="post">
          <input type="text" placeholder="Search for anything" />
          <button>
            <img src="/icons/search.svg" alt="" />
          </button>
        </form>
        <div className="Nav-docs-profile">
          <a href="/">Docs</a>
          <button><img src="/icons/bell.png" alt="" /></button>
          <a className="profile">
            <img src="/profile.jpg" alt="" />
            <p>Oshela abimiku</p>
            <span></span>
          </a>
        </div>
      </nav>
    </>
  )
}

export default NavBar