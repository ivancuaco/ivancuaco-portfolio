import { projects } from "../js/data"

function Projects() {
  return (
    <div className='grid md:grid-cols-2 gap-2'>

      {
        projects.map((project, key) => {
          return (
            <div key={key} className="grid grid-cols-3 border rounded shadow-xl p-4 mb-4 gap-4">
              <img src={project.img} className='rounded w-[200px] hover:scale-105 duration-500 mx-auto border' />
              <div className="col-span-2">
                <p className='font-bold'>{project.title}</p>

                <p className='mb-4'>
                  {project.descriptions}
                </p>

                <p className='text-xs'>Technologies:</p>

                <div className="flex flex-wrap text-xs">
                  {
                    project.tech.map((tech, index) => (
                      <p key={index} className='rounded-full m-1 py-1 px-2 border'>{tech}</p>
                    ))
                  }
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default Projects