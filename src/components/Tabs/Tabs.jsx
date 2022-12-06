import { useState } from "react"

import TabTitle from "./TabTitle"

const Tabs = ({children}) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className="flex flex-col w-full px-1 my-1 h-full gap-1">
            <div className="flex justify-between flex-1/2">
                <ul className="flex justify-start gap-2 border-b-[1px] border-gray-100">
                    {children.map((item, index) => (
                        <TabTitle 
                            key={index} 
                            title={item.props.title}
                            index={index}
                            active={index === selectedTab}
                            setSelectedTab={setSelectedTab}/>
                    ))}
                </ul>
                <div className="close bg-red-400 h-[42px] w-[42px] flex justify-center items-center rounded-lg cursor-pointer text-white text-[22px]">✖</div>
            </div>
            <div className="flex flex-1 w-full justify-center rounded-md">
                {children[selectedTab]}
            </div>
        </div>
    )
}

export default Tabs