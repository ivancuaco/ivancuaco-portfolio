import { SiGmail, SiLinkedin, SiSkype, SiTelegram } from "react-icons/si";
import { Api } from '../api';
import contact from '/images/contact.avif';

function Contact() {

  const formHandler = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = Object.fromEntries(new FormData(form))
    Api.post('/emails/contact', formData).then(response => {
      console.log(response)
    })
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">

        <div className='mb-4'>
          <p className="text-xs text-justify mb-6">
            Ready to take the next step? I'm excited to connect with you! Whether you're interested in collaborating on a project, have questions about my work, or just want to chat about all things creative, I'm here and enthusiastic to hear from you. Your ideas and inquiries are not only welcomed, but they're the sparks that fuel my creative journey. Feel free to drop me a message using the contact form, and let's embark on a conversation that could lead to something truly amazing. Together, we can turn imagination into reality. Looking forward to connecting with you!
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-2">
            <div className='flex items-center justify-center h-full'>
              <img src={contact} className='rounded-full w-[100px] md:w-[200px] aspect-square object-cover' />
            </div>

            <div className='col-span-2'>
              <p className="text-sm mb-4">You can communicate using the following:</p>

              <div className='flex items-center justify-center sm:justify-start md:justify-center'>
                <a href=""><SiGmail className="text-4xl mx-2" /></a>
                <a href=""><SiSkype className="text-4xl mx-2" /></a>
                <a href=""><SiLinkedin className="text-4xl mx-2" /></a>
                <a href=""><SiTelegram className="text-4xl mx-2" /></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="border shadow-xl rounded p-4" onSubmit={formHandler}>
            <p className="font-bold mb-4">Contact Now</p>
            <input name="fullname" placeholder="Fullname" className="border rounded p-2 w-full mb-2" />
            <input name="email" placeholder="Email" className="border rounded p-2 w-full mb-2" />
            <input name="subject" placeholder="Subject" className="border rounded p-2 w-full mb-2" />
            <textarea name="message" placeholder="Message" className="border rounded p-2 w-full mb-2"></textarea>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded block ml-auto">Send Message</button>
          </form>
        </div>

      </div>

    </>
  )
}

export default Contact