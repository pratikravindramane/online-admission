import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { AuthContext } from "../context/User";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PendingIcon from "@mui/icons-material/Pending";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import AddIcon from "@mui/icons-material/Add";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import NotesIcon from "@mui/icons-material/Notes";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import HelpIcon from "@mui/icons-material/Help";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./layout.css";
const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [admin, setAdmin] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [hod, setHod] = React.useState(false);
  const { dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    }
    if (localStorage.getItem("admin")) {
      setAdmin(true);
    }
    if (localStorage.getItem("hod")) {
      setHod(true);
    }
  }, []);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
    navigate("/login");
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            className="layout-header"
          >
            <MenuIcon />
          </IconButton>
          <div>
            <img src="../assets/download-removebg-preview.png" alt="" />
          </div>
          <Typography variant="h6" noWrap component="div">
            Online Addminssion
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Toolbar />
          <Divider />
          {admin && (
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <Link to="/dashboard">Dashboard</Link>
                </ListItemButton>
              </ListItem>
              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <ListItemIcon>
                      <FormatAlignJustifyIcon />
                    </ListItemIcon>
                    Application
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <FormatListBulletedIcon />
                      </ListItemIcon>
                      <Link to="/all-application">All Application</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <PendingIcon />
                      </ListItemIcon>
                      <Link to="/pending">Pending</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <DoneAllIcon />
                      </ListItemIcon>
                      <Link to="/selected">Selected</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <ThumbDownIcon />
                      </ListItemIcon>
                      <Link to="/rejected">Rejected</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <HowToRegIcon />
                      </ListItemIcon>
                      <Link to="/approved">Approved</Link>
                    </ListItemButton>
                  </ListItem>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemIcon>
                    <LightbulbCircleIcon />
                  </ListItemIcon>
                  <Typography>Course</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/course">Course</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/bscit">BScIT</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/bsccs">BScCs</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/a-baf">BAF</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/a-bms">BMS</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <AddIcon />
                      </ListItemIcon>
                      <Link to="/add-course">Add Course</Link>
                    </ListItemButton>
                  </ListItem>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <ListItemIcon>
                    <NoteAltIcon />
                  </ListItemIcon>
                  <Typography>Notice</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/notice">Notice</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <AddIcon />
                      </ListItemIcon>
                      <Link to="/add-notice">Add Notice</Link>
                    </ListItemButton>
                  </ListItem>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <Typography>Co-ordinator</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/view-hod">Co-ordinator</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <AddIcon />
                      </ListItemIcon>
                      <Link to="/add-hod">Add Co-ordinator</Link>
                    </ListItemButton>
                  </ListItem>
                </AccordionDetails>
              </Accordion>

              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <Button onClick={logout}>Logout</Button>
                </ListItemButton>
              </ListItem>
            </List>
          )}
          {login && (
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <Link to="/profile">Dashboard</Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FormatAlignJustifyIcon />
                  </ListItemIcon>
                  <Link to="/application">Application</Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DocumentScannerIcon />
                  </ListItemIcon>
                  <Link to="/document">Document</Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HelpIcon />
                  </ListItemIcon>
                  <Link to="/status">Status</Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <NotesIcon />
                  </ListItemIcon>
                  <Link to="/notice">Notice</Link>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <Button onClick={logout}>Logout</Button>
                </ListItemButton>
              </ListItem>
            </List>
          )}

          {hod && (
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <Link to="/hod-contact">Querys</Link>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <Button onClick={logout}>Logout</Button>
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Toolbar />
          <Divider />
          {admin && (
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <Link to="/dashboard">Dashboard</Link>
                </ListItemButton>
              </ListItem>
              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <ListItemIcon>
                      <FormatAlignJustifyIcon />
                    </ListItemIcon>
                    Application
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <FormatListBulletedIcon />
                      </ListItemIcon>
                      <Link to="/all-application">All Application</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <PendingIcon />
                      </ListItemIcon>
                      <Link to="/pending">Pending</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <DoneAllIcon />
                      </ListItemIcon>
                      <Link to="/selected">Selected</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <ThumbDownIcon />
                      </ListItemIcon>
                      <Link to="/rejected">Rejected</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <HowToRegIcon />
                      </ListItemIcon>
                      <Link to="/approved">Approved</Link>
                    </ListItemButton>
                  </ListItem>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListItemIcon>
                    <LightbulbCircleIcon />
                  </ListItemIcon>
                  <Typography>Course</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/course">Course</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/bscit">BScIT</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/bsccs">BScCs</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/a-baf">BAF</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/a-bms">BMS</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <AddIcon />
                      </ListItemIcon>
                      <Link to="/add-course">Add Course</Link>
                    </ListItemButton>
                  </ListItem>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  {" "}
                  <ListItemIcon>
                    <NoteAltIcon />
                  </ListItemIcon>
                  <Typography>Notice</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/notice">Notice</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <AddIcon />
                      </ListItemIcon>
                      <Link to="/add-notice">Add Notice</Link>
                    </ListItemButton>
                  </ListItem>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <Typography>Co-ordinator</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <VisibilityIcon />
                      </ListItemIcon>
                      <Link to="/view-hod">Co-ordinator</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <AddIcon />
                      </ListItemIcon>
                      <Link to="/add-hod">Add Co-ordinator</Link>
                    </ListItemButton>
                  </ListItem>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <Button onClick={logout}>Logout</Button>
                </ListItemButton>
              </ListItem>
            </List>
          )}
          {login && (
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <Link to="/profile">Dashboard</Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FormatAlignJustifyIcon />
                  </ListItemIcon>
                  <Link to="/application">Application</Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DocumentScannerIcon />
                  </ListItemIcon>
                  <Link to="/document">Document</Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HelpIcon />
                  </ListItemIcon>
                  <Link to="/status">Status</Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <NotesIcon />
                  </ListItemIcon>
                  <Link to="/notice">Notice</Link>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <Button onClick={logout}>Logout</Button>
                </ListItemButton>
              </ListItem>
            </List>
          )}
          {hod && (
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <Link to="/hod-contact">Querys</Link>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <Button onClick={logout}>Logout</Button>
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
