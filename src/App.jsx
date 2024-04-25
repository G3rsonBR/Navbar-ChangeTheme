import "./App.css";
import { Menu } from "./components/Menu";

export default function App() {
  return (
    <>
      <Menu 
        item1="Home"
        item2="About"
        item3="Contact"
        item4="Blog"
        item5="Careers"
        item6="Support"
        btn1="Login"
      />
    </>
  );
}
