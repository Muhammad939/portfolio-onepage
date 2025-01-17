"use client";
import { ThemeToggle } from "./components/theme-toggle";
import { motion, MotionConfig } from "framer-motion";

const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -inset-[10px] opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50" />
      </div>
    </div>
  );
};

const SparklesBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
    </div>
  );
};

const FloatingNav = () => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 inset-x-0 max-w-2xl mx-auto z-50"
    >
      <div className="relative flex items-center justify-between px-8 py-4 bg-black text-white rounded-full">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold pl-4"
        >
          Sulaiman B
        </motion.h1>
        <nav className="flex items-center gap-6">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            className="hover:text-gray-300 transition-colors"
          >
            Home
          </motion.a>
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="hover:text-gray-300 transition-colors"
          >
            Projects
          </motion.a>
          <motion.a 
            href="#about"
            whileHover={{ scale: 1.05 }}
            className="hover:text-gray-300 transition-colors"
          >
            About
          </motion.a>
          <ThemeToggle />
        </nav>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, link, tech }: { title: string; description: string; link: string; tech: string[] }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block p-8 bg-gray-100/80 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-2xl shadow-xl"
      >
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-white"
  >
    {children}
  </motion.h2>
);

const projects = [
  {
    title: "Guess The Number",
    description: "An interactive number guessing game where players try to guess a randomly generated number.",
    link: "https://github.com/SulaimanB/Guess-The-Number",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "Drum Kit",
    description: "A virtual drum kit that lets users play drum sounds using keyboard keys or mouse clicks.",
    link: "https://github.com/SulaimanB/Drum-Kit",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "Book Notes",
    description: "A web application for taking and organizing notes from books you've read.",
    link: "https://github.com/SulaimanB/Book-Notes",
    tech: ["JavaScript", "HTML", "CSS"]
  }
];

const Spotlight = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]" />
    </div>
  );
};

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors relative">
        <FloatingNav />

        <main className="pt-20">
          <section className="min-h-[90vh] flex items-center justify-center relative mb-32">
            <BackgroundBeams />
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                  Welcome To My Portfolio
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  I Am Sulaiman B A Fullstack Web Developer
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <a 
                    href="#about"
                    className="inline-block mt-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <span className="block mb-2">Scroll to learn more</span>
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="mx-auto w-6 h-6"
                    >
                      ↓
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section id="about" className="py-32 bg-gray-50 dark:bg-gray-800 mb-32">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl mx-auto text-center"
              >
                <SectionTitle>About Me</SectionTitle>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="prose prose-lg dark:prose-invert mx-auto bg-gray-100/80 dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-300 dark:border-gray-800"
                >
                  <p className="text-gray-600 dark:text-gray-300 text-center text-2xl leading-relaxed">
                    Hello Im Sulaiman B A Fullstack Web Developer
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section id="journey" className="py-32 bg-gray-50 dark:bg-gray-800 mb-32 relative overflow-hidden">
            <Spotlight />
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl mx-auto text-center"
              >
                <SectionTitle>My Journey</SectionTitle>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-all duration-500" />
                  <div className="relative bg-gray-100/80 dark:bg-gray-900/90 p-8 rounded-2xl shadow-xl border border-gray-300 dark:border-gray-800">
                    <p className="text-gray-600 dark:text-gray-300 text-center text-2xl leading-relaxed">
                      I enrolled in Angela Yu's Web Development Course and successfully completed it in roughly 8 months
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section id="projects" className="py-32 bg-gray-50 dark:bg-gray-800 mb-32">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-6xl mx-auto"
              >
                <SectionTitle>My Projects</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <ProjectCard {...project} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="relative py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Email: your.email@example.com</li>
                  <li>Location: Your Location</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Links</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a></li>
                  <li><a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                © 2024 Sulaiman B. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
