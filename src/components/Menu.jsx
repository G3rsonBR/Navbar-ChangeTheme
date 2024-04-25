import "./Menu.css";

export function Menu(props) {
  function switchTheme() {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  }

  return (  
    <nav className="menu__container">
      <button className="switch__button" onClick={switchTheme}>Trocar Tema</button>
      <ul className="menu__list">
        <li><a href="">{props.item1}</a></li>
        <li><a href="">{props.item2}</a></li>
        <li><a href="">{props.item3}</a></li>
        <li><a href="">{props.item4}</a></li>
        <li><a href="">{props.item5}</a></li>
        <li><a href="">{props.item6}</a></li>
        <span className="menu__line"></span>
        <button className="menu__button">{props.btn1}</button>
      </ul>
    </nav>
  )
}