import "../App.css"
import Tabs from "./Tabs/Tabs"
import Tab from "./Tabs/Tab"

import MainPage from "./sections/MainPage"
import About from "./sections/About"
import Characters from "./sections/Characters"
import Contacts from "./sections/Contacts"

const Window = () => {
    // const [active, setActive] = useState(0)


    return (
        <div className="bg-white h-[90%] w-[85%] rounded-md border-gray-100 border-[4px] flex flex-col overflow-hidden">
            {/* <div className="nav flex justify-start h-[48px] border-b-[1px] border-gray-100 mx-1 mt-1">
                <div className={`${tabStyles}`}></div>
                <div className={`${tabStyles}`}></div>
                <div className={`${tabStyles}`}></div>
            </div> */}
            <Tabs>
                <Tab title='Киберспирт'>
                    <MainPage/>
                </Tab>
                <Tab title='О нас'>
                    <About/>
                </Tab>
                <Tab title='Персонажи'>
                    <Characters/>
                </Tab>
                <Tab title='Контакты'>
                    <Contacts/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Window