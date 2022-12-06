import { motion } from "framer-motion"

const TabTitle = ({title, setSelectedTab, index, active}) => (
    <li 
        className={`w-[196px] rounded-t-md cursor-pointer bg-slate-50 transition-colors duration-[0.3s] ${active ? 'bg-slate-200' : null}`}>
        <button
            className={`w-full flex pl-3 font-semibold text-[18px] justify-start items-center h-[42px] ${active ? 'text-slate-900' : 'text-slate-500'}`} 
            onClick={() => setSelectedTab(index)}>
            {title}
        </button>
    </li>
) 

export default TabTitle