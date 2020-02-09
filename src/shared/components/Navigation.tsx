const Navigation = () => (
  <div>
    <ul className="navigation">
      <li>
        <a href="/">
          <button>index</button>
        </a>
      </li>
      <li>
        <a href="/lab">
          <button>lab</button>
        </a>
      </li>
      <li>
        <a href="/blog">
          <button>blog</button>
        </a>
      </li>
      <li>
        <a href="/about">
          <button>about</button>
        </a>
      </li>
    </ul>

    <style jsx>{`
      .navigation {
        margin: 0 auto;
        max-width: 50%;
        list-style-type: none;

        padding: 16px 0;

        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
)

export default Navigation;