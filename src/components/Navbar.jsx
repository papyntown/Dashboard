import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import NavButton from "./NavButton";

const Navbar = () => {
    const {
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
    } = useStateContext();

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);
    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton
                title={"Menu"}
                customFunction={() =>
                    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                color={"blue"}
                icon={<AiOutlineMenu />}
            />
            <div className="flex">
                <NavButton
                    title={"Cart"}
                    customFunction={() => handleClick("cart")}
                    color={"blue"}
                    icon={<FiShoppingCart />}
                />
                <NavButton
                    title={"Chat"}
                    customFunction={() => handleClick("chat")}
                    color={"blue"}
                    dotColor={"#03C9D7"}
                    icon={<BsChatLeft />}
                />
                <NavButton
                    title={"Notification"}
                    customFunction={() => handleClick("notification")}
                    color={"blue"}
                    icon={<RiNotification3Line />}
                />
                <TooltipComponent content={"Profile"} position="BottomCenter">
                    <div
                        className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                        onClick={() => handleClick("userProfile")}>
                        <img
                            src={avatar}
                            alt="profile avatar"
                            className="rounded-full w-8 h-8"
                        />
                        <p>
                            <span
                                className="text-gray-400 text-14
                            ">
                                Salut,
                            </span>{" "}
                            <span className="text-gray-400 text-14 font-bold ml-1 text-14">
                                Anto
                            </span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14" />
                    </div>
                </TooltipComponent>
                {/* si l'un de ces element et sur true alors joue moi le composant  */}
                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}
            </div>
        </div>
    );
};

export default Navbar;
