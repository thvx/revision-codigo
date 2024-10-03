import Button from "../../components/Atoms/Actions/button/button";
import Modal from "../../components/Organism/modal/modal";
import Swap from "../../components/Atoms/Actions/swap/swap";
import Checkbox from "../../components/Atoms/Input/checkbox/Checkbox.tsx";
import FileInput from "../../components/Atoms/Input/file/FileInput.tsx";
import { RadioItem } from "../../components/Atoms/Input/radio/radioType.ts";
import RadioList from "../../components/Organism/RadioList/RadioList.tsx";
import Select from "../../components/Atoms/Input/select/Select.tsx";
import TextInput from "../../components/Atoms/Input/text/TextInput.tsx";
import TextInputMail from "../../components/Atoms/Input/text/TextInputMail.tsx";
import TextInputSearch from "../../components/Atoms/Input/text/TextInputSearch.tsx";
import TextInputUsername from "../../components/Atoms/Input/text/TextInputUsername.tsx";
import TextInputPassword from "../../components/Atoms/Input/text/TextInputPassword.tsx";
import TextArea from "../../components/Atoms/Input/textarea/Textarea.tsx";
import Toggle from "../../components/Atoms/Input/toggle/Toggle.tsx";
import BreadCrumbs from "../../components/Atoms/Navigation/breadcumbs/breadcumbs";
import Link from "../../components/Atoms/Navigation/link/link";
import Pagination from "../../components/Atoms/Navigation/pagination/pagination";
import NavBar from "../../components/Organism/navbar/navbar.tsx";
import NavBarUser from "../../components/Organism/navbar/navbar2.tsx";
import Steps from "../../components/Atoms/Navigation/steps/steps";
import Tab from "../../components/Atoms/Navigation/tab/tab";
import Accordion from "../../components/Atoms/DataDisplay/Accordion/Accordion";
import Avatar from "../../components/Atoms/DataDisplay/Avatar/Avatar";
import CardProductos from "../../components/Atoms/DataDisplay/Card/CardProductos";
import CardLogin from "../../components/Atoms/DataDisplay/Card/CardLogIn";
import Carousel from "../../components/Atoms/DataDisplay/Carousel/Carousel";
import Collapse from "../../components/Atoms/DataDisplay/Collapse/Collapse";
import Table from "../../components/Atoms/DataDisplay/Table/Table";
import { Link as RouterLink } from "react-router-dom";

const App: React.FC = () => {
    const radioItems: RadioItem[] = [
        {
            name: "option1",
            text: "Option 1",
            size: "radio-lg",
            marginRight: "mr-10",
        },
        {
            name: "option2",
            text: "Option 2",
            size: "radio-md",
            marginRight: "10",
        },
        {
            name: "option3",
            text: "Option 3",
            size: "radio-md",
            marginRight: "10",
        },
    ];

    const openModal = () => {
        const modal = document.getElementById(
            "my_modal_1"
        ) as HTMLDialogElement | null;
        modal?.showModal();
    };

    const breadcrumbData = [
        {
            title: "Home",
            iconLink: "http://www.w3.org/2000/svg",
        },
        {
            title: "Documents",
            iconLink: "http://www.w3.org/2000/svg",
        },
        {
            title: "Add Document",
            iconLink: "http://www.w3.org/2000/svg",
        },
    ];

    const linkText = "link";

    const stepsText = [
        "Selección de medio de pago",
        "Visualización de monto",
        "Confirmación de pago",
        "Entrega de voucher",
    ];

    const accordionData = [
        {
            title: "Click to open this one and close others",
            content: "Hello there",
        },
        {
            title: "Click to open this one and close others",
            content: "Hello there",
        },
    ];

    const cardProductData = {
        image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
        title: "Shoes",
        description: "If a dog chews shoes whose shoes does he choose?",
        badges: ["badge1", "badge2"],
        isNew: true,
        extraClasses: "Yes",
    };

    const cardLoginData = {
        content: "Comprador",
    };

    const collapseData = [
        {
            title: "Focus me to see content",
            content:
                "tabIndex={0} attribute is necessary to make the div focusable",
        },
    ];

    const tableData = [
        {
            id: 1,
            name: "Product 1",
            price: "S/100",
            category: "Category 1",
        },
        {
            id: 2,
            name: "Product 2",
            price: "S/200",
            category: "Category 2",
        },
        {
            id: 3,
            name: "Product 3",
            price: "S/300",
            category: "Category 3",
        },
    ];

    const carouselData = [
        {
            image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
            title: "Cone party",
            description: "Do you like ice-cream?",
            badges: ["badge1", "badge2"],
            isNew: true,
            extraClasses: "Yes",
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
            title: "Pink grapes",
            description: "Enjoy the grapes",
            badges: ["badge1", "badge2"],
            isNew: true,
            extraClasses: "Yes",
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
            title: "Cone party",
            description: "Do you like ice-cream?",
            badges: ["badge1", "badge2"],
            isNew: true,
            extraClasses: "Yes",
        },
        {
            image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
            title: "Pink grapes",
            description: "Enjoy the grapes",
            badges: ["badge1", "badge2"],
            isNew: true,
            extraClasses: "Yes",
        },
    ];

    return (
        <div className="app-container min-h-screen bg-custom-blue">
            <div className="flex flex-col items-center gap-6 p-6">
                <Button text="Half Width Button" width="half" />
                <Button text="Quarter Width Button" width="quarter" />
                <Button text="Auto Width Button" width="auto" />
            </div>

            <div className="flex flex-col items-center space-y-4">
                <Button text="Open Modal" width="auto" onClick={openModal} />
                <Modal
                    id="my_modal_1"
                    title="Success!"
                    message="Your operation was completed successfully."
                    leftButtonText="Cancel"
                    rightButtonText="Confirm" leftButtonLink={""} rightButtonLink={""}                />
            </div>

            <Swap />

            <div className="flex flex-col items-center gap-6 p-6">
                <Checkbox size="checkbox-sm" />
                <FileInput />
                <RadioList items={radioItems} />
                <Select
                    size="select-xs"
                    items={["Seleccionar elemento", "zzzz", "dsdsad"]}
                />
                <TextInput size="md" placeholder="Escribe..." />
                <TextInputMail placeholder="Correo" size="md" />
                <TextInputSearch placeholder="Buscar" size="md" />
                <TextInputUsername placeholder="Usuario" size="md" />
                <TextInputPassword placeholder="Contraseña" size="md" />
                <TextArea placeholder="Ingresa texto" size="md" />
                <Toggle size="toggle-xs" />
            </div>
            <div>
                <BreadCrumbs items={breadcrumbData} />
                <Link title={linkText} url={""} />
                <Pagination numPages={5} actualPage={1} />
                <NavBar
                    searchValue={"Buscar en Emprende&Conecta"}
                    onSearchChange={function (
                    ): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <NavBarUser />
                <Steps numPages={4} actualPage={2} stepsText={stepsText} />
                <Tab numTabs={5} actualTab={3} />
            </div>

            <div className="flex flex-col items-center gap-6 p-6">
                <Accordion items={accordionData} />
            </div>

            <div className="flex flex-col items-center gap-6 p-6">
                <Avatar alt={""} size={"w-10"} />
            </div>

            <div className="flex flex-col items-center gap-6 p-6">
                <CardProductos
                    image={cardProductData.image}
                    title={cardProductData.title}
                    description={cardProductData.description}
                    isNew={cardProductData.isNew}
                    badges={cardProductData.badges}
                    extraClasses={cardProductData.extraClasses} id={0}                />
            </div>

            <div className="flex flex-col items-center gap-6 p-6">
                <CardLogin content={cardLoginData.content} img={""} />
            </div>

            <div>
                <Carousel items={carouselData} />
            </div>

            <div>
                <Collapse items={collapseData} />
            </div>

            <div>
                <Table data={tableData} />
            </div>

            <div className="flex justify-center mt-8">
                <RouterLink to="/homepage">
                    <Button text="Ir a HomePage" width="auto" />
                </RouterLink>
            </div>
      <div>
      <Table data={tableData}/>
      </div>
    </div>
  )
}
export default App;
