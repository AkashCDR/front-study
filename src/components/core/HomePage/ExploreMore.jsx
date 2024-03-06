import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";


const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
  ];



const ExploreMore = () => {

const [currentTab,setCurrentTab]=useState(tabsName[0]);
const [courses,setCourses]=useState(HomePageExplore[0].courses);
const [currentCard,setCurrentCard]=useState(HomePageExplore[0].courses[0].heading);

const setMyCards=(value)=>{

setCurrentTab(value);
const result=HomePageExplore.filter((ele)=> ele.tag===value);
setCourses(result[0].courses);
setCurrentCard(result[0].courses[0].heading);
}







  return (
    <div >
    
    <div>

     <div className="text-4xl font-semibold text-center my-10">
       Unlock The
        <HighlightText text={"Power Of Code"} />
        <p className="text-center text-richblack-300 text-lg font-semibold mt-1">Learn To Build Anything You Can Imagin</p>
     </div>

    </div>


    <div className=" flex gap-5 mt-5 mx-auto w-fit bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium">

    {
        tabsName.map((ele,index)=>{
            return (
                <div className={`text-[16px] flex flex-row items-center gap-2
                ${currentTab===ele ? "bg-richblack-900 text-richblack-5 font-medium":"text-richblack-200"}    
                px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 `} key={index} onClick={() => setMyCards(ele)}>
             {ele}
            </div>
            );
        })
    }


    </div>


   <div className="relative h-[150px] w-[100%] mb-[60px] mt-7 flex ">
   <div className="absolute gap-5  justify-among flex left-[-20%] text-black  mt-6 mb-10">
        {courses.map((ele, index) => {
          return (
            <CourseCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
   </div>







    
    
    
    
    
    </div>
  )
}

export default ExploreMore