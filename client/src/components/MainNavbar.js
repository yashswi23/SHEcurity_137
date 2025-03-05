// // MainNavbar.js
// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { isLoggedIn, logoutUser } from "../helpers/authHelper";

// const MainNavbar = () => {
//   const navigate = useNavigate();
//   const user = isLoggedIn();

//   const handleLogout = () => {
//     logoutUser();
//     navigate("/login");
//   };

//   return (
//     <AppBar position="static" sx={{ mb: 2 }}>
//       <Toolbar>
//         <Typography
//           variant="h6"
//           sx={{ flexGrow: 1, cursor: "pointer" }}
//           onClick={() => navigate("/")}
//         >
//           SafeSpeak
//         </Typography>

//         <Box>
//           <Button color="inherit" component={Link} to="/">
//             Home
//           </Button>
//           <Button
//             color="inherit"
//             onClick={() => window.open("http://localhost:3000", "_blank")}
//           >
//             Community
//           </Button>

//           {user ? (
//             <>
//               <Button color="inherit" onClick={handleLogout}>
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <Button color="inherit" component={Link} to="/login">
//               Login
//             </Button>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default MainNavbar;
// MainNavbar.js
// MainNavbar.js
// MainNavbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../helpers/authHelper";

const MainNavbar = () => {
  const navigate = useNavigate();
  const user = isLoggedIn();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          SafeSpeak
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/Shieldup">
            ShieldUp
          </Button>
          <Button color="inherit" component={Link} to="/explore">
            Community
          </Button>
          {user ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;



