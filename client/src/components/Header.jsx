import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillSkype } from "react-icons/ai";
import { BiEnvelope, BiMap } from "react-icons/bi";
import { BsFillCloudMoonFill, BsFillCloudSunFill } from "react-icons/bs";
import { FcAbout, FcMindMap, FcPositiveDynamic, FcTimeline, FcVoicePresentation } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import themeStore from "../store/theme";
import profileImage from '/images/profile.jpg';

function Header() {


  const theme = themeStore((state) => state)
  const [themeIcon, setThemeIcon] = useState(theme.mode === 'dark' ? <BsFillCloudSunFill /> : <BsFillCloudMoonFill />)

  useEffect(() => {
    if (theme.mode === 'dark')
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  })

  function themeToggle() {
    const newTheme = theme.toggleTheme()
    if (newTheme === 'dark')
      setThemeIcon(<BsFillCloudSunFill />)
    else
      setThemeIcon(<BsFillCloudMoonFill />)
  }

  return (
    <header className="border-b">
      <div className="grid md:grid-cols-3 px-4 py-10">

        <div className='grid content-center justify-center mb-4 md:mb-0'>
          <div className="w-[77px] sm:w-[150px] md:w-[200px] rounded-full overflow-hidden shadow-2xl">
            <img src={profileImage} className='w-full aspect-square' />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="md:flex items-center mb-4">
            <h1 className="text-2xl font-bold text-center md:text-left m-2 md:mr-20">Jhon Ivan D. Cuaco</h1>

            <span className="flex justify-center">
              <a href="/resume.pdf" download className="text-xs bg-blue-500 hover:bg-blue-600 text-white hover:text-white rounded p-2 m-2">Download Resume</a>
              <button className="text-3xl m-2" onClick={themeToggle}>{themeIcon}</button>
            </span>
          </div>

          <div className="contacts md:flex text-center md:text-left mb-4">
            <div className="flex items-center justify-center md:border-r border-black p-2 mr-2">
              <a href="https://join.skype.com/invite/uiM4BB7DdvU3" target="_blank" rel="nofollow"><AiFillSkype className="text-3xl mx-2" /></a>
              <a href="https://www.linkedin.com/in/jhon-ivan-cuaco-171022261" target="_blank" rel="nofollow"><AiFillLinkedin className="text-3xl mx-2" /></a>
              <a href="https://github.com/ivancuaco" target="_blank" rel="nofollow"><AiFillGithub className="text-3xl mx-2" /></a>
            </div>

            <div>
              <p>
                <a href="mailto:ivancuaco.dev@gmail.com"><BiEnvelope className="inline mr-1" />ivancuaco.dev@gmail.com</a>
              </p>
              <p>
                <a href="https://goo.gl/maps/KCKTKJWBjs1wQeCL7" target="_blank" rel="nofollow"><BiMap className="inline mr-1" />Tanza, Cavite, Philippines 4108</a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start lg:w-[80%] mb-2">
            <span className="scale-95 hover:scale-100 duration-500 text-xs rounded-full border px-2 py-1 my-1">Web Developer</span>
            <span className="scale-95 hover:scale-100 duration-500 text-xs rounded-full border px-2 py-1 my-1">Front-end Web Developer</span>
            <span className="scale-95 hover:scale-100 duration-500 text-xs rounded-full border px-2 py-1 my-1">Back-end Web Developer</span>
            <span className="scale-95 hover:scale-100 duration-500 text-xs rounded-full border px-2 py-1 my-1">Fullstack Web Developer</span>
            <span className="scale-95 hover:scale-100 duration-500 text-xs rounded-full border px-2 py-1 my-1">Freelance Web Developer</span>
            <span className="scale-95 hover:scale-100 duration-500 text-xs rounded-full border px-2 py-1 my-1">WordPress Developer</span>
            <span className="scale-95 hover:scale-100 duration-500 text-xs rounded-full border px-2 py-1 my-1">PHP Developer</span>
            {/* <span className="scale-95 hover:scale-100 duration-500 text-xs rounded-full border px-2 py-1 my-1">Junior React Developer</span> */}
            <span className="scale-95 hover:scale-100 duration-500 text-xs rounded-full border px-2 py-1 my-1">LAMP Stack</span>
            {/* <span className="scale-95 hover:scale-100 duration-500 text-xs rounded-full border px-2 py-1 my-1">MERN Stack</span> */}
          </div>

          <p className="text-xs text-center md:text-left md:w-[90%] mb-2">
            Welcome to my web portfolio! If you're in search of a skilled and creative web developer, you're in the right place. Explore my work and let's discuss how I can bring your web projects to life.
          </p>
          <p className="text-xs text-center md:text-left md:w-[90%]">
            Seeking a dedicated web developer to bring your online visions to reality? Feel free to browse through my portfolio and let's chat about transforming your ideas into functional and visually appealing websites.
          </p>

        </div>
      </div>


      <nav className="flex flex-wrap justify-center sticky top-0 z-50">
        <NavLink to="/" className="text-center p-2"><FcAbout className="inline mx-2" /> About</NavLink>
        <NavLink to="/skills" className="text-center p-2"><FcMindMap className="inline mx-2" /> Tech Stacks</NavLink>
        <NavLink to="/contacts" className="text-center p-2"><FcVoicePresentation className="inline mx-2" /> Contact</NavLink>
        <NavLink to="/projects" className="text-center p-2"><FcTimeline className="inline mx-2" /> Projects</NavLink>
        <NavLink to="/experience" className="text-center p-2"><FcPositiveDynamic className="inline mx-2" /> Experience</NavLink>
      </nav>
    </header>
  )
}

export default Header