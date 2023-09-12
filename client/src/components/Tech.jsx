import ajax from '/images/tech-icons/ajax.png'
import apache from '/images/tech-icons/apache.png'
import api from '/images/tech-icons/api.png'
import awsEc2 from '/images/tech-icons/aws-ec2.svg'
import awsLightsail from '/images/tech-icons/aws-lightsail.svg'
import bootstrap from '/images/tech-icons/bootstrap.png'
import codeigniter from '/images/tech-icons/codeigniter.png'
import css from '/images/tech-icons/css.png'
import express from '/images/tech-icons/express.png'
import git from '/images/tech-icons/git.png'
import github from '/images/tech-icons/github.png'
import html from '/images/tech-icons/html.png'
import javascript from '/images/tech-icons/javascript.png'
import jquery from '/images/tech-icons/jquery.png'
import json from '/images/tech-icons/json.png'
import linux from '/images/tech-icons/linux.png'
import mongodb from '/images/tech-icons/mongodb.png'
import mysql from '/images/tech-icons/mysql.png'
import node from '/images/tech-icons/node.png'
import php from '/images/tech-icons/php.png'
import react from '/images/tech-icons/react.png'
import sql from '/images/tech-icons/sql.png'
import ssh from '/images/tech-icons/ssh.png'
import tailwindcss from '/images/tech-icons/tailwindcss.png'
import wordpress from '/images/tech-icons/wordpress.png'
import xml from '/images/tech-icons/xml.png'

function Tech() {
  return (
    <>
      <div className="grid md:grid-cols-3 border-b p-4 mb-4">
        <div className="flex items-center justify-center mb-2">
          <p className="text-center text-xl font-bold">Frontend Development</p>
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center justify-center text-xs">
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={html} className='w-[40px] m-1' />
            <p className='text-center'>HTML</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={css} className='w-[40px] m-1' />
            <p className='text-center'>CSS</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={bootstrap} className='w-[40px] m-1' />
            <p className='text-center'>Bootstrap</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={tailwindcss} className='w-[40px] m-1' />
            <p className='text-center'>TailwindCSS</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={javascript} className='w-[40px] m-1' />
            <p className='text-center'>JavaScript</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={jquery} className='w-[40px] m-1' />
            <p className='text-center'>jQuery</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={json} className='w-[40px] m-1' />
            <p className='text-center'>JSON</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={xml} className='w-[40px] m-1' />
            <p className='text-center'>XML</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={react} className='w-[40px] m-1' />
            <p className='text-center'>ReactJS</p>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 border-b p-4 mb-4">
        <div className="flex items-center justify-center mb-2">
          <p className="text-center text-xl font-bold">Backend Development</p>
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center justify-center text-xs">
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={php} className='w-[40px] m-1' />
            <p className='text-center'>PHP</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={codeigniter} className='w-[40px] m-1' />
            <p className='text-center'>PHP Codeigniter</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={node} className='w-[40px] m-1' />
            <p className='text-center'>NodeJS</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={express} className='w-[40px] m-1' />
            <p className='text-center'>ExpressJS</p>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 border-b p-4 mb-4">
        <div className="flex items-center justify-center mb-2">
          <p className="text-center text-xl font-bold">Database</p>
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center justify-center text-xs">
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={mysql} className='w-[40px] m-1' />
            <p className='text-center'>MySQL</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={mongodb} className='w-[40px] m-1' />
            <p className='text-center'>MongoDB</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={sql} className='w-[40px] m-1' />
            <p className='text-center'>SQL</p>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 border-b p-4 mb-4">
        <div className="flex items-center justify-center mb-2">
          <p className="text-center text-xl font-bold">Version Control</p>
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center justify-center text-xs">
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={git} className='w-[40px] m-1' />
            <p className='text-center'>GIT</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={github} className='w-[40px] m-1' />
            <p className='text-center'>Github</p>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 border-b p-4 mb-4">
        <div className="flex items-center justify-center mb-2">
          <p className="text-center text-xl font-bold">Server Management</p>
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center justify-center text-xs">
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={apache} className='w-[40px] m-1' />
            <p className='text-center'>Apache2</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={linux} className='w-[40px] m-1' />
            <p className='text-center'>Linux</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={awsEc2} className='w-[40px] m-1' />
            <p className='text-center'>AWS EC2</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={awsLightsail} className='w-[40px] m-1' />
            <p className='text-center'>AWS Lightsail</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={ssh} className='w-[40px] m-1' />
            <p className='text-center'>SSH</p>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 border-b p-4 mb-4">
        <div className="flex items-center justify-center mb-2">
          <p className="text-center text-xl font-bold">APIs and Integration</p>
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center justify-center text-xs">
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={api} className='w-[40px] m-1' />
            <p className='text-center'>REST API</p>
          </span>
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={ajax} className='w-[40px] m-1' />
            <p className='text-center'>AJAX</p>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 border-b p-4 mb-4">
        <div className="flex items-center justify-center mb-2">
          <p className="text-center text-xl font-bold">Content Management Systems (CMS)</p>
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center justify-center text-xs">
          <span className="border rounded p-2 m-1 flex flex-col items-center justify-center aspect-square w-[100px]">
            <img src={wordpress} className='w-[40px] m-1' />
            <p className='text-center'>WordPress</p>
          </span>
        </div>
      </div>
    </>
  )

}

export default Tech