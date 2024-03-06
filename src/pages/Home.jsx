import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button'
import Banner from '../assets/Images/banner.mp4'
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';





const Home = () => {
  return (
     <div>


        {/* Section 1 */}
        <div className='relative mx-auto text-white flex flex-col
        w-11/12 items-center justify-between'>




        <Link to="/signup">
        <div className='group mt-16 p-1 mx-auto bg-richblack-800 rounded-full transition-all
        duration-200 text-richblack-200 hover:scale-95 w-fit '>
            <div className='flex flex-row px-10 py-[5px] rounded-full items-center gap-2
            group-hover:bg-richblack-900'>
                <p>Become an Instructor</p>
                <FaArrowRight />
            </div>
        </div>
        </Link>

        
        <div className='mt-7 text-4xl text-center font-semibold'>
            Empower your future with 
            <HighlightText text={"Coding Skills"} />
        </div>


        <div className='item-center text-center w-[80%] mt-4 text-[20px] font-bold text-richblack-300'>
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>


        <div className='flex flex-row gap-7 mt-8'>
        <CTAButton active={true} linkto={"/signup"}>
            Learn More
        </CTAButton>

        <CTAButton active={false} linkto={"/signup"}>
            Book Demo
        </CTAButton>


        </div>



        <div className='w-[80%] mx-3 my-12 shadow-blue-400'>
            <video muted loop autoPlay>
            <source src={Banner} type='video/mp4' />
            </video>
        </div>


        {/* code section 1 */}

<div>
   

  
</div>



   <div>
   <ExploreMore />
   </div>










        </div>



       {/* section 2 */}

       <div className=' bg-pure-greys-5 text-richblack-700'>

          <div className='homepage_bg h-[310px]'>

          <div className='w-11/12 mx-auto flex flex-col items-center justify-between gap-5'>

          <div className='h-[150px]'>

          </div>

          <div className='flex flex-row items-center gap-7 text-white'>

           <CTAButton active={true} linkto={"/signup"}>
            <div className='flex items-center gap-3'>
                Explore Full Catalog
                <FaArrowRight />
            </div>
           </CTAButton>

           <CTAButton active={true} linkto={"/signup"}>
            <div>
                Learn More  
            </div>
           </CTAButton>

          </div>




          </div>





          </div>



          <div className='mx-auto w-11/12 flex flex-col items-center justify-between gap-7'>


          <div className='flex flex-row items-center gap-5 mt-[95px] justify-between'>

          <div className='text-4xl font-semibold w-[35%]'>
          Get the skills you need for a
          <HighlightText text={'job that is in demand.'} />
          </div>

          <div className='flex flex-col w-[45%] gap-5 items-start'>
          
          <div className='text-[22px]'>
          The modern StudyNotion is the dictates its own terms.
           Today, to be a competitive specialist requires more than professional skills.
          </div>
          
          
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
       

          </div>



          </div>


          <TimelineSection />

          <LearningLanguageSection />



          </div>



         



       </div>



         {/* section 3 */}

         <div className='flex flex-col w-11/12 mx-auto gap-20'>
            <InstructorSection />
         </div>

























     </div>
  )
}

export default Home