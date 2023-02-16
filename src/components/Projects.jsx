import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};


const Project = ({ title, text, name, linc }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{name}</p>
                <p className="mt-7">
                    {text}
                </p>
            </div>
            <img className="object-fill w-full h-full
            " src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-semibold text-4xl">
                        <span className="text-yellow">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-7 mb-10">
                    I have worked on a variety of projects, from websites to machine learning models. Here are some of them.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* ROW 1 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-yellow
                            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        RECENT PROJECTS
                    </div>
                    <Project title="Project 1" text="This webpage based on React.js and Tailwind for styling" name="Portfolio" linc="https://github.com/assylzhanb/portfolio" />
                    <Project title="Project 2" text="To-do list application using React.js and Bootstrap" name="To-do List App" linc="https://github.com/assylzhanb/React_todolist" />

                    {/* ROW 2 */}
                    <Project title="Project 3" text="Telegram bot with AI extension" name="APIAI Telegram-bot" linc="https://github.com/assylzhanb/APIAI-Telegram-Bot-NLP" />
                    <Project title="Project 6" text="Updated Super Resolution model based on SRCNN with new transpose layer" name="SRTCNN" linc="https://github.com/assylzhanb/neural-enhance" />
                    <Project title="Project 5" text="In Process..." name="Maze PathFinder" />

                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
