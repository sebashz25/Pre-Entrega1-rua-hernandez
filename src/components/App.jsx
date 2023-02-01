import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
export const App = () => {
  return (
    <div>
      <Navbar nombre={"Renueva Tu Salud"} />
      <ItemListContainer greeting={"Welcome"} />
    </div>
  );
};
