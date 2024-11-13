import { Outlet } from "react-router-dom";
import Header from "../component/header/Header";
import { ButtonDemo } from "@/component/ButtonDemo";
import { CardWithForm } from "@/component/Card";
import { MarqueeDemo } from "@/component/ReviewCard";


const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <ButtonDemo/>
            <CardWithForm/>
            <MarqueeDemo/>
        </div>
    );
};

export default Main;