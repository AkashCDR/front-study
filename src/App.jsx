import { Routes,Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OpenRoute from "./components/core/Auth/OpenRoute";
import VerifyEmail from "./pages/VerifyEmail";
import ViewCourse from "./pages/ViewCourse";
import AddCourse from "./components/core/Dashboard/AddCourse";
import MyProfile from "./components/core/Dashboard/MyProfile";
import { ACCOUNT_TYPE } from "./utils/constants";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MyCourses from "./components/core/Dashboard/MyCourses";
import Settings from "./components/core/Dashboard/Settings"
import Catalog from "./pages/Catalog";
import EditCourse from "./components/core/Dashboard/EditCourse";
import CourseDetails from "./pages/CourseDetails";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor"

function App() {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.profile)


  return (
    <div className="w-screen min-h-screen flex flex-col font-inter bg-richblack-900  ">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            
              <About />
            
          }
        />


<Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        


<Route path="courses/:courseId" element={<CourseDetails/>} />



<Route path="catalog/:catalogName" element={<Catalog/>} />





    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />


<Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />


<Route 
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="dashboard/my-profile" element={<MyProfile />} />
      
      <Route path="dashboard/Settings" element={<Settings />} />
      

      {/* {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          </>
        )
      } */}

      {
        user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          <Route path="dashboard/instructor" element={<Instructor />} />
          <Route path="dashboard/add-course" element={<AddCourse />} />
          <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
          
          </>
        )
      }



      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          </>
        )
      }







     
      <Route element={
        <PrivateRoute>
          <ViewCourse />
        </PrivateRoute>
      }>

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route 
            path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
            element={<VideoDetails />}
          />
          </>
        )
      }

      </Route>









    </Route>
















      </Routes>
    </div>
  );
}

export default App;
