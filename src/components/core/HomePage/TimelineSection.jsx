import React from 'react'
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";


const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];



const TimelineSection = () => {
  return (
    <div>
    
    <div className='flex flex-row gap-15 items-center'>

    <div className='flex flex-col gap-5 w-[45%]'>

    {
        TimeLine.map((element,index) => {
        return (
            <div className='flex flex-row gap-6' key={index}>

            <div className='w-[50px] h-[50px] bg-white flex'>
               <img src={element.Logo} />
            </div>

            <div>
                <h2 className='font-semibold text-[18px]'>{element.Heading}</h2>
                <p className='text-base'>{element.Description}</p>
            </div>


            </div>
        )
    })
    }


    </div>


    <div className='relative shadow-blue-200'>

      <img src={TimeLineImage} alt='timelineimage' className='shadow-white object-cover h-fit' />

      <div className='flex flex-row absolute bg-caribbeangreen-700 text-white uppercase
            left-[10%] translate-y-[-50%]   '>
        <div className='flex flex-row gap-5 items-center p-5 border-r border-caribbeangreen-200'>
         <p className='text-3xl font-bold '>10</p>
         <p className='text-sm text-caribbeangreen-400 '>years of experience</p>
        </div>
        <div className='flex flex-row gap-5 p-5 items-center'>
         <p className='text-3xl font-bold '>250</p>
         <p className='text-sm text-caribbeangreen-400 '>types of courses</p>
        </div>
      </div>





    </div>




    </div>
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default TimelineSection