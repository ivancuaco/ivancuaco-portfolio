import { Helmet } from "react-helmet";
import { FcBusiness, FcGraduationCap } from "react-icons/fc";
import { workExperience } from '../js/data';

function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience | Ivan Cuaco Portfolio</title>
      </Helmet>
      <div className="mb-10">
        <div className="flex items-center  text-2xl mb-4">
          <FcGraduationCap className="mr-2" />
          <p>Education</p>
        </div>

        <div className="grid md:grid-cols-2 text-sm border-b pb-4">

          <div className="mb-4">
            <p className="font-bold">Bachelor of Science in Information Technology</p>
            <p className="text-xs">Cavite State University - CCAT Campus (2018 - 2023)</p>
            <p className="text-xs">EM’s Barrio, Brgy. Tejeros Convention, Rosario, Cavite</p>
          </div>

          <div>
            <p className="font-bold">Mobile Apps and Web Development (MAWD) Senior High School</p>
            <p className="text-xs">STI College Rosario (2016 - 2018)</p>
            <p className="text-xs">General Trias Drive, Rosario, Cavite</p>
          </div>

        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center text-2xl mb-4">
          <FcBusiness className="mr-2" />
          <p>Work and Experience</p>
        </div>

        {
          workExperience.map((work, key) => {
            return (
              <div className="grid sm:grid-cols-3 mb-10 gap-6 border-b pb-4" key={key}>
                <div className='flex items-center justify-center'>
                  <img src={work.img} className='rounded w-[200px] hover:scale-105 duration-500 border' />
                </div>
                <div className="sm:col-span-2">

                  {
                    work.link ?
                      <a href={work.link} target="_blank" rel='nofollow' className="font-bold text-blue-500">{work.title}</a> :
                      <p className="font-bold">{work.title}</p>
                  }

                  <p className='text-xs mb-2'><span className='font-bold'>{work.position}</span> | {work.year}</p>
                  <ul className="text-xs list-disc mb-2">
                    {
                      work.tasks.map((task, index) => {
                        return <li key={index}>{task}</li>
                      })
                    }
                  </ul>
                  <div className='flex items-center justify-start text-xs'>
                    <p>Technologies: </p>
                    <div className="flex flex-wrap md:w-[80%]">
                      {
                        work.tech.map((tech, index) => {
                          return <p className='rounded-full m-1 py-1 px-2 border min-w-[50px] text-center' key={index}>{tech}</p>
                        })
                      }
                    </div>
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

export default Experience