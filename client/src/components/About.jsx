import image1 from '/images/image1.avif'
import image2 from '/images/image2.avif'
import image3 from '/images/image3.avif'

function About() {
  return (
    <>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center md:order-2">
          <img src={image1} className='w-[300px] shadow-xl rounded' />
        </div>
        <p className="indent-4 text-justify md:text-left mb-4 md:col-span-2">
          Hello! I am Jhon Ivan Cuaco. A highly motivated and skilled IT professional seeking an information technology position where I can contribute to the company's growth through my software development and technical support skills. I'm excited to put my expertise in programming languages, relationship database management, troubleshooting, and other areas to use to promote and help drive innovation and enhance productivity. I’m confident that I can provide practical solutions and solve complex and technical challenges. I am capable of working both independently and in groups.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center">
          <img src={image2} className='w-[300px] shadow-xl rounded' />
        </div>
        <p className="indent-4 text-justify md:text-left mb-4 md:col-span-2">
          I am a passionate and versatile web developer with a keen focus on delivering seamless digital experiences. With a solid foundation in the LAMP (Linux, Apache, MySQL, and PHP) stack, I've honed my skills in crafting dynamic and responsive websites that not only meet but exceed clients' expectations. My journey began with mastering the intricacies of backend development, where I've tackled complex database management, server configuration, and efficient scripting to ensure optimal performance. Over the years, I've fine-tuned my expertise in creating intuitive user interfaces and optimizing website speed, all while maintaining the highest standards of security and scalability.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center  md:order-2">
          <img src={image3} className='w-[300px] shadow-xl rounded' />
        </div>
        <p className="indent-4 text-justify md:text-left mb-4 md:col-span-2">
          Driven by an insatiable curiosity and a commitment to staying at the forefront of technology, I've embarked on a journey to expand my knowledge into the dynamic world of the MERN (MongoDB, Express.js, React, and Node.js) stack. Embracing this modern and powerful stack has allowed me to seamlessly integrate my existing skills with cutting-edge front-end technologies. As I delve deeper into the MERN stack, I'm thrilled to create more interactive and dynamic web applications that offer enhanced user experiences. My passion for problem-solving, coupled with a relentless pursuit of learning, fuels my desire to build innovative digital solutions that resonate with both clients and end-users alike. Through my journey as a web developer, I'm excited to translate ideas into tangible, immersive online experiences that leave a lasting impact.
        </p>
      </div>

    </>
  )
}


export default About