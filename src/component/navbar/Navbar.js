import "./Navbar.css";

export function Navbar() {
  return (
    <div>
      <div id="ma">
        <ol>
          <li style={{ listStyle: "none" }}>
            <img
              src="logo-light.png"
              alt="photohere"
              style={{ width: 100 }}
            ></img>
          </li>
        </ol>
        <ol id="ma1">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
