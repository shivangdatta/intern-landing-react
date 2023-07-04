import {React , useEffect} from 'react'
import temp from 'C:/work/DEV/REACT/intern-2/page-2/src/assets/temp.jpg'
import data from 'C:/work/DEV/REACT/intern-2/page-2/src/assets/data.jpg'
import time from 'C:/work/DEV/REACT/intern-2/page-2/src/assets/time.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Post() {
    useEffect(()=>{
        Aos.init({duration: 2500})
    }, [])
  
    return (
    <div className='mt-32 ' id="about">
        <div className='mt-24 text-center font-semibold text-6xl mb-8'>Why Choose Us</div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex p-2 mb-6" data-aos='fade-right'>
            <div className="h-48 lg:h-auto lg:w-5/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
                <img src={temp}></img>
            </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-gray-200">
            <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
            </p>
            <div className="text-gray-900 font-semibold text-3xl mb-2"> Tailor-made Templates</div>
            <p className="text-gray-700 text-xl mt-2">
                In this fast paced world time is of utmost importa make effecient choices by using prebuilt and custom made templates to hire your employees this way you save both time and resources while making the best out of available pool of employees. 
                <br/> Each employee is given a grade based on previous reviews which will further be used to generate an exhaustive candidate list
            </p>
            </div>
            <div className="flex items-center">
            <a href='https://calm-halva-467e40.netlify.app'>
                <button type="submit" className="w-full h-12 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-green-800">Sign Up</button>
            </a>
            </div>
        </div>
        </div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex p-2 mb-6" data-aos="fade-left">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
            </p>
            <div className="text-gray-900 font-semibold text-3xl mb-2">Advanced Data Analytics</div>
            <p className="text-gray-700 text-xl mt-2">
                Providing AI solutions and advanced data analytics personalized for you . Get detailed employee report conaining stats like: duration likely to stay , salary expections , team-work rating , work ethic and much more powered by AI 
                <br/> Each employee is given a grade based on previous reviews which will further be used to generate an exhaustive candidate list
            </p>
            </div>
            <div className="flex items-center">
            <a href='https://calm-halva-467e40.netlify.app'>
                <button type="submit" className="w-full h-12 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-green-800">Sign Up</button>
            </a>
  
            </div>
        </div>
            <div className="h-48 lg:h-auto lg:w-5/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
                <img src={data}></img>
            </div>
        </div>

        <div className="max-w-sm w-full lg:max-w-full lg:flex p-2 mb-6" data-aos="fade-right" >
            <div className="h-48 lg:h-auto lg:w-5/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
                <img src={time}></img>
            </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
            </p>
            <div className="text-gray-900 font-semibold text-3xl mb-2">Fast Results</div>
            <p className="text-gray-700 text-xl mt-2">
                The failure of the smallest cog can lead to the failure of the machine , Prevent this from happening by filling vacant positions with our new 'Fill Urgent' feature .
                <br/> Get a detailed report of most suitable certified candidates to fill vaccancy. 
            </p>
            </div>
            <div className="flex items-center">
                <a href='https://calm-halva-467e40.netlify.app'>
                    <button type="submit" className="w-full h-12 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-red-800" >Sign Up</button>
                </a>
            </div>
        </div>
        </div>
    </div>
  )
}
