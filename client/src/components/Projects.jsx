import { Helmet } from "react-helmet"
import { projects } from "../js/data"

function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Ivan Cuaco Portfolio</title>
      </Helmet>

      <div className='grid lg:grid-cols-2 gap-2'>

        {
          projects.map((project, key) => {
            return (
              <div key={key} className="grid grid-cols-3 border rounded shadow-xl p-4 mb-4 gap-4">
                <img src={project.img} className='rounded w-[200px] hover:scale-105 duration-500 mx-auto border' />
                <div className="col-span-2">

                  {
                    project.link ?
                      <a href={project.link} target="_blank" rel='nofollow' className="font-bold text-blue-500">{project.title}</a> :
                      <p className="font-bold">{project.title}</p>
                  }

                  <p className='mb-4'>
                    {project.descriptions}
                  </p>

                  <p className='text-xs'>Technologies:</p>

                  <div className="flex flex-wrap text-xs">
                    {
                      project.tech.map((tech, index) => (
                        <p key={index} className='rounded-full m-1 py-1 px-2 border min-w-[50px] text-center'>{tech}</p>
                      ))
                    }
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default Projects