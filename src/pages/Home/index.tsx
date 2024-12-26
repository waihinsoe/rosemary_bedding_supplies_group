import { Player } from "@lottiefiles/react-lottie-player";
import rosemary_logo from "../../assets/rosemary_logo.png";
import { motion } from "motion/react";
import animationData from "../../animations/scroll-hand.json";
import { infos } from "../../constants";
import locationIcon from "../../assets/location.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import linkedInIcon from "../../assets/linkedIn.png";
import tiktokIcon from "../../assets/tiktok.png";
export const Home = () => {
    return (
        <div className="h-svh">
            <div className="max-w-[800px] m-auto">
                <div className=" p-4 flex flex-col items-center relative">
                    <motion.div
                        whileInView={{ scale: 1 }}
                        initial={{ scale: 0 }}
                        className="flex justify-center items-center"
                    >
                        <img src={rosemary_logo} className="w-[400px]" />
                    </motion.div>
                    <motion.h1
                        whileInView={{ scale: 1 }}
                        initial={{ scale: 0 }}
                        className="text-3xl my-10 font-inknut"
                    >
                        Welcome
                    </motion.h1>
                    <motion.p
                        whileInView={{ scale: 1 }}
                        initial={{ scale: 0 }}
                        className="max-w-[400px] font-inknut leading-10 text-center "
                    >
                        We are your trusted provider of premium bedding supplies
                        and accessories. Connect with us through our social
                        platforms to explore our products and updates.
                    </motion.p>
                    <motion.div
                        whileInView={{ scale: 1 }}
                        initial={{ scale: 0 }}
                    >
                        <Player
                            src={animationData}
                            autoplay
                            loop
                            style={{
                                height: "300px",
                                width: "300px",
                            }}
                        />
                    </motion.div>
                </div>
                <div className=" flex flex-col gap-4 p-4">
                    {infos.map((info) => {
                        return (
                            <motion.ul
                                whileInView={{ scale: 1 }}
                                initial={{ scale: 0 }}
                                className="p-5 bg-[#722410] text-white rounded-lg flex justify-center flex-col gap-5"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={
                                            info.platform === "facebook"
                                                ? facebookIcon
                                                : info.platform === "instagram"
                                                ? instagramIcon
                                                : info.platform === "linkedin"
                                                ? linkedInIcon
                                                : info.platform === "tiktok"
                                                ? tiktokIcon
                                                : ""
                                        }
                                        className="w-6 h-6 text-white mr-2"
                                    />
                                    <p> {info.name}</p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex ">
                                        <img
                                            src={locationIcon}
                                            className="w-6 h-6 text-white mr-2"
                                        />

                                        <p>{info.location}</p>
                                    </div>
                                    <a href={info.url}>
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            className="px-6 py-1  rounded-lg border-[1px]"
                                        >
                                            Visit
                                        </motion.button>
                                    </a>
                                </div>
                            </motion.ul>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
