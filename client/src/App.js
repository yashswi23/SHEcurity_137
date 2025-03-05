// import "@mui/material";
// import "react-icons";
// import "react-icons/bi";
// import "react-icons/md";
// import "react-icons/bs";
// import "react-router-dom";
// import { CssBaseline } from "@mui/material";
// import { ThemeProvider } from "@mui/material/styles";

// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   useParams,
//   useSearchParams,
// } from "react-router-dom";
// import theme from "./theme";

// import PostView from "./components/views/PostView";
// import CreatePostView from "./components/views/CreatePostView";
// import ProfileView from "./components/views/ProfileView";
// import LoginView from "./components/views/LoginView";
// import SignupView from "./components/views/SignupView";
// import ExploreView from "./components/views/ExploreView";
// import PrivateRoute from "./components/PrivateRoute";
// import SearchView from "./components/views/SearchView";
// import MessengerView from "./components/views/MessengerView";
// import { initiateSocketConnection, socket } from "./helpers/socketHelper";
// import { useEffect } from "react";
// import { BASE_URL } from "./config";
// import { io } from "socket.io-client";

// function App() {
//   initiateSocketConnection();

//   return (
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <CssBaseline />
//         <Routes>
//           <Route path="/" element={<ExploreView />} />
//           <Route path="/posts/:id" element={<PostView />} />
//           <Route
//             path="/posts/create"
//             element={
//               <PrivateRoute>
//                 <CreatePostView />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/messenger"
//             element={
//               <PrivateRoute>
//                 <MessengerView />
//               </PrivateRoute>
//             }
//           />
//           <Route path="/search" element={<SearchView />} />
//           <Route path="/users/:id" element={<ProfileView />} />
//           <Route path="/login" element={<LoginView />} />
//           <Route path="/signup" element={<SignupView />} />
//         </Routes>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;

// import "@mui/material";
// import "react-icons";
// import "react-icons/bi";
// import "react-icons/md";
// import "react-icons/bs";
// import "react-router-dom";

// import { CssBaseline } from "@mui/material";
// import { ThemeProvider } from "@mui/material/styles";
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";

// import theme from "./theme";
// import MainNavbar from "./components/MainNavbar"; // Importing the MainNavbar

// import PostView from "./components/views/PostView";
// import CreatePostView from "./components/views/CreatePostView";
// import ProfileView from "./components/views/ProfileView";
// import LoginView from "./components/views/LoginView";
// import SignupView from "./components/views/SignupView";
// import ExploreView from "./components/views/ExploreView";
// import PrivateRoute from "./components/PrivateRoute";
// import SearchView from "./components/views/SearchView";
// import MessengerView from "./components/views/MessengerView";

// import { initiateSocketConnection } from "./helpers/socketHelper";
// import HomeView from "./components/views/HomeView";

// function App() {
//   initiateSocketConnection();

//   return (
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <CssBaseline />
//         <MainNavbar /> {/* Displaying MainNavbar on all pages */}
//         <Routes>
//           <Route path="/" element={<HomeView />} />
//           {/* Community link navigates to the existing community page */}
//           <Route
//             path="/community"
//             // element={() => {
//             //   window.location.href = "YOUR_COMMUNITY_PAGE_URL"; // Replace with actual URL
//             //   return null;
//             // }}
           
//           />
//           <Route path="/posts/:id" element={<PostView />} />
//           <Route
//             path="/posts/create"
//             element={
//               <PrivateRoute>
//                 <CreatePostView />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/messenger"
//             element={
//               <PrivateRoute>
//                 <MessengerView />
//               </PrivateRoute>
//             }
//           />
//           <Route path="/search" element={<SearchView />} />
//           <Route path="/users/:id" element={<ProfileView />} />
//           <Route path="/login" element={<LoginView />} />
//           <Route path="/signup" element={<SignupView />} />
//         </Routes>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;
// App.js
// App.js
// MainNavbar.js
// App.js
import "@mui/material";
import "react-icons";
import "react-router-dom";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import theme from "./theme";
import MainNavbar from "./components/MainNavbar";

import PostView from "./components/views/PostView";
import CreatePostView from "./components/views/CreatePostView";
import ProfileView from "./components/views/ProfileView";
import LoginView from "./components/views/LoginView";
import SignupView from "./components/views/SignupView";
import ExploreView from "./components/views/ExploreView";
import PrivateRoute from "./components/PrivateRoute";
import SearchView from "./components/views/SearchView";
import MessengerView from "./components/views/MessengerView";
import HomeView from "./components/views/HomeView";

import { initiateSocketConnection } from "./helpers/socketHelper";
import SelfDefenseSection from "./components/views/SelfDefenceSection";
import ComplaintForm from "./pages/ComplaintForm";
import CallerInput from "./pages/CallerInput";

function App() {
  initiateSocketConnection();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <MainNavbar />

        <Routes>
          <Route path="/home" element={<HomeView />} />
          <Route path="/shieldup" element={<SelfDefenseSection />} />

          {/* Correctly render the ExploreView component */}
          <Route path="/explore" element={<ExploreView />} />

          {/* Ensure the Community link opens an external page */}
          <Route
            path="/community"
            element={
              <Navigate
                to="http://localhost:3000"
                target="_blank"
                replace
              />
            }
          />

          <Route path="/posts/:id" element={<PostView />} />
          <Route
            path="/posts/create"
            element={
              <PrivateRoute>
                <CreatePostView />
              </PrivateRoute>
            }
          />
          <Route
            path="/messenger"
            element={
              <PrivateRoute>
                <MessengerView />
              </PrivateRoute>
            }
          />
          <Route path="/search" element={<SearchView />} />
          <Route path="/users/:id" element={<ProfileView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignupView />} />
          <Route path="/complaint-form" element={<ComplaintForm />} />
          <Route path="/caller-input" element={<CallerInput />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;




