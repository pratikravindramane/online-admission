// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import AppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import { useEffect, useState } from "react";
// import { Link } from "@mui/material";
// const drawerWidth = 240;

// export default function Layout(props) {
//   const [admin, setAdmin] = useState(false);
//   const [login, setLogin] = useState(false);
//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       setLogin(true);
//     }
//     if (localStorage.getItem("admin")) {
//       setAdmin(true);
//     }
//   }, []);
//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Clipped drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: "auto" }}>
//           {admin && (
//             <List>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/all-application">All Application</Link>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/pending">Pending</Link>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/selected">Selected</Link>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/rejected">Rejected</Link>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/course">Course</Link>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/add-course">Add Course</Link>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/notice">Notice</Link>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/add-notice">Add Notice</Link>
//                 </ListItemButton>
//               </ListItem>
//               <Divider />
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <button onClick={logout}>Logout</button>
//                 </ListItemButton>
//               </ListItem>
//             </List>
//           )}
//           {login && (
//             <List>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/profile">Profile</Link>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/application">Application</Link>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/document">Document</Link>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/status">Status</Link>
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <Link href="/notice">Notice</Link>
//                 </ListItemButton>
//               </ListItem>
//               <Divider />
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <InboxIcon />
//                   </ListItemIcon>
//                   <button onClick={logout}>Logout</button>
//                 </ListItemButton>
//               </ListItem>
//             </List>
//           )}
//         </Box>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//         {props.children}
//       </Box>
//     </Box>
//   );
// }

// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/User";
// import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// const Layout = (props) => {
//   const theme = useTheme();
//   const [open, setOpen] = useState(true);
//   const [admin, setAdmin] = useState(false);
//   const [login, setLogin] = useState(false);
//   const { dispatch } = useContext(AuthContext);

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       setLogin(true);
//     }
//     if (localStorage.getItem("admin")) {
//       setAdmin(true);
//     }
//   }, []);
//   const logout = () => {
//     dispatch({ type: "LOGOUT" });
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: "none" }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Online Addmission
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         {admin && (
//           <List>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <InboxIcon />
//                 </ListItemIcon>
//                 <Link to="/dashboard">Dashboard</Link>
//               </ListItemButton>
//             </ListItem>
//             <Accordion>
//               <AccordionSummary
//                 // expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1a-content"
//                 id="panel1a-header"
//               >
//                 <Typography>Application</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <ListItem disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       <InboxIcon />
//                     </ListItemIcon>
//                     <Link to="/all-application">All Application</Link>
//                   </ListItemButton>
//                 </ListItem>
//                 <ListItem disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       <InboxIcon />
//                     </ListItemIcon>
//                     <Link to="/pending">Pending</Link>
//                   </ListItemButton>
//                 </ListItem>
//                 <ListItem disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       <InboxIcon />
//                     </ListItemIcon>
//                     <Link to="/selected">Selected</Link>
//                   </ListItemButton>
//                 </ListItem>
//                 <ListItem disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       <InboxIcon />
//                     </ListItemIcon>
//                     <Link to="/rejected">Rejected</Link>
//                   </ListItemButton>
//                 </ListItem>
//               </AccordionDetails>
//             </Accordion>

//             <Accordion>
//               <AccordionSummary
//                 // expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1a-content"
//                 id="panel1a-header"
//               >
//                 <Typography>Course</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <ListItem disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       <InboxIcon />
//                     </ListItemIcon>
//                     <Link to="/course">Course</Link>
//                   </ListItemButton>
//                 </ListItem>
//                 <ListItem disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       <InboxIcon />
//                     </ListItemIcon>
//                     <Link to="/add-course">Add Course</Link>
//                   </ListItemButton>
//                 </ListItem>
//               </AccordionDetails>
//             </Accordion>
//             <Accordion>
//               <AccordionSummary
//                 // expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2a-content"
//                 id="panel2a-header"
//               >
//                 <Typography>Notice</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <ListItem disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       <InboxIcon />
//                     </ListItemIcon>
//                     <Link to="/notice">Notice</Link>
//                   </ListItemButton>
//                 </ListItem>
//                 <ListItem disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       <InboxIcon />
//                     </ListItemIcon>
//                     <Link to="/add-notice">Add Notice</Link>
//                   </ListItemButton>
//                 </ListItem>
//               </AccordionDetails>
//             </Accordion>

//             <Divider />
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <button onClick={logout}>Logout</button>
//               </ListItemButton>
//             </ListItem>
//           </List>
//         )}
//         {login && (
//           <List>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <InboxIcon />
//                 </ListItemIcon>
//                 <Link to="/profile">Profile</Link>
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <InboxIcon />
//                 </ListItemIcon>
//                 <Link to="/application">Application</Link>
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <InboxIcon />
//                 </ListItemIcon>
//                 <Link to="/document">Document</Link>
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <InboxIcon />
//                 </ListItemIcon>
//                 <Link to="/status">Status</Link>
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <InboxIcon />
//                 </ListItemIcon>
//                 <Link to="/notice">Notice</Link>
//               </ListItemButton>
//             </ListItem>
//             <Divider />
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   <InboxIcon />
//                 </ListItemIcon>
//                 <button onClick={logout}>Logout</button>
//               </ListItemButton>
//             </ListItem>
//           </List>
//         )}
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//         {props.children}
//       </Main>
//     </Box>
//   );
// };
// export default Layout;
