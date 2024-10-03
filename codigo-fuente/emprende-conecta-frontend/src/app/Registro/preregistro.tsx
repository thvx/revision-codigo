import Header from "../../components/Organism/header/header";
import Preregistro from "../../components/Templates/Registro/preregistro"

function App(){
    return(
        <div className="h-screen w-full flex flex-col bg-custom-blue">
        <Header />
        <Preregistro />
    </div>
    )
}

export default App