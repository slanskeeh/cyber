import { motion } from "framer-motion"

import { TypingText } from "../CustomText"

const Contacts = () => (
    <motion.div
        variants={{
            hidden: {opacity: 0},
            show: {
                opacity: 1,
                transition: {
                    type: 'tween',
                    duration: 0.5,
                    ease: "easeOut",
                }
            }
        }}
        initial='hidden'
        whileInView='show'
        viewport={{once: false}}
        className="flex h-full w-full justify-center">
            <div className="container w-[75%] h-full flex flex-col">
                <TypingText title="Цифры" textStyles='font-bold text-[96px] text-slate-700 mt-[212px]'/>
                <motion.p
                    variants={{
                        hidden: {
                            opacity: 0,
                            // x: -50},
                        },
                        show: {
                            opacity: 1,
                            // x: 0,
                            transition: {
                                type: 'tween',
                                duration: 1,
                                ease: "easeOut",
                            }
                        }
                    }}
                    className="font-[600] text-slate-600 text-[24px]">
                        Не связывайтесь
                </motion.p>
            </div>
    </motion.div>
)

export default Contacts