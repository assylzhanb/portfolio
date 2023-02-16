import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32 ">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        My skills encompass technical proficiency in multiple programming languages and frameworks, experience in advanced problem-solving, and strong soft skills.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveLarge ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10 saturate-100"
                                src="assets/skills-image.png"
                            />
                        </div>
                    ) : (
                        <img alt="skills" className="z-10" src="assets/skills-image.png" />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* Technical */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-semibold text-5xl">01</p>
                            <p className="font-semibold text-3xl mt-3">Technical</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Experienced in C++, C, Python, and JavaScript, which I have applied to various programming projects. I also have experience in computer security, including vulnerability analysis and fuzz testing, and a working knowledge of HTML/CSS for creating websites, as well as MySQL for database management. Worked with various frameworks including React.js, Express.js, TailwindCSS, and Bootstrap.
                    </p>
                </motion.div>

                {/* Problem Solving */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-semibold text-5xl">02</p>
                            <p className="font-semibold text-3xl mt-3">Problem Solving</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Through my experience on LeetCode, I have developed a deep understanding of advanced topics such as hashmaps, binary search, divide and conquer, bit manipulation, recursion, and more. My problem-solving skills have been honed through solving over 150 challenging problems on the platform, and I am able to write efficient, clean code that receives high praise from fellow developers
                    </p>
                </motion.div>
                {/* Soft Skills */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-semibold text-5xl">03</p>
                            <p className="font-semibold text-3xl mt-3">Soft Skills</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        I am a good listener and enjoy collaborating with others. I am able to work well under pressure and can manage my time effectively to ensure that I meet project deadlines. These soft skills have helped me to excel in my studies and will be valuable assets in any future projects or work experiences.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MySkills;
