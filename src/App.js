import fondoDB from "./assets/fondoDB.jpg";
import goku from "./assets/goku.png";
import fondoDB2 from "./assets/fondoDB2.jpg";
import vegetta from "./assets/vegetta.png";
import fondoTF from "./assets/fondoTF.jpg";
import bumblebee from "./assets/bumblebee.png";
import { Card } from "./components/Card";
function App() {
    return (
        <div className="container">
            <Card backgroundImg={fondoDB} frontImg={goku} />
            <Card backgroundImg={fondoDB2} frontImg={vegetta} />
            <Card backgroundImg={fondoTF} frontImg={bumblebee} />
        </div>
    );
}

export default App;
