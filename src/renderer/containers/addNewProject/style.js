import React from "react";

const navBarHeight = 50;
const divider = 5;
const title = 45;
const contentHeight = window.innerHeight - 50;

export default {
  screen: {
    height: "100vh",
    minHeight: "100vh"
  },
  navbar: {
    height: "50px"
  },
  container: {
    padding: "50px 0 0 0",
    backgroundColor: "#f2f2f2",
    height: window.innerHeight + 14
  },

  createNewProjectDialog: {
    fontFamily: "PingFang-SC-Regular",
    width: window.innerWidth * 0.65,
    height: contentHeight * 0.8
  },
  aboutLogoContainer: {
    textAlign: "center"
  },
  aboutLogo: {
    width: "300px"
  },
  aboutVersionInfo: {
    marginTop: "45px",
    fontFamily: "PingFang-SC-Bold",
    fontSize: 12
  },
  logoNavbar: {
    height: "45px"
  },
  leftSection: {
    backgroundColor: "#24282b",
    height: contentHeight
  },
  mainSection: {
    height: contentHeight
  },
  rightSection: {
    backgroundColor: "#fff",
    height: contentHeight
  },
  sideBarTop: {
    height: contentHeight * 0.1
  },
  sidebarMenuTitle: {
    fontFamily: "PingFang-SC-Regular",
    fontSize: 16,
    color: "#fff",
    margin: "25px 25px 25px 25px"
  },
  sidebarMenu: {
    fontFamily: "PingFang-SC-Regular",
    fontSize: 18,
    color: "#fff",
    margin: "5px 0px 0px 25px"
  },
  sidebarMenuButton: {
    color: "#fff"
  },
  mainSectionTitleContainer: {
    height: contentHeight * 0.15
  },
  mainSectionTitle: {
    fontFamily: "PingFang-SC-Regular",
    fontSize: 24,
    marginTop: contentHeight * 0.075
  },
  mainSectionTitleIcon: {
    color: "#182026",
    marginRight: "10px",
    marginTop: contentHeight * 0.075
  },
  mainSectionContentContainer: {
    margin: 0
  },
  mainSectionContent: {
    margin: 0,
    backgroundColor: "#fff",
    height: contentHeight * 0.8
  },
  mainSectionSideBar: {
    height: contentHeight * 0.8,
    margin: "-1.5rem 0 0 -0.5rem",
    borderRight: "1px solid #999"
  },
  mainSectionWorkArea: {
    height: contentHeight * 0.8,
    margin: "-1.5rem -1rem -1rem 1rem"
  },
  mainSectionSideBarMenuTitle: {
    fontFamily: "PingFang-SC-Regular",
    fontSize: 16,
    margin: "50px 25px 25px 10px"
  },
  mainSectionSideBarMenu: {
    fontFamily: "PingFang-SC-Regular",
    fontSize: 16,
    margin: "10px 0px 0px 0px"
  },
  mainSectionSideBarMenuButton: {
    fontSize: 16
  },
  workAreaMainS2: {
    margin: "1rem 0 0 -0.5rem",
    height: contentHeight * 0.7,
    borderBottom: "1px solid #999",
    overflow: "auto"
  },
  workAreaActionS2: {
    margin: "0 0 0 -0.5rem",
    height: contentHeight * 0.1
  },
  workAreaMainS1: {
    margin: "1rem 0 0 -0.5rem",
    height: contentHeight * 0.5,
    borderBottom: "1px solid #999"
  },
  workAreaDescS1: {
    margin: "0 0 0 -0.5rem",
    height: contentHeight * 0.2
  },
  workAreaActionS1: {
    margin: "0 0 0 -0.5rem",
    height: contentHeight * 0.1
  },
  actionButton: {
    marginLeft: "1rem"
  },
  projectContainer: {
    textAlign: "center",
    cursor: "pointer"
  },
  projectContainerSelected: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 2,
    padding: "0.5rem",
    cursor: "pointer"
  },
  docIcon: {
    width: "100px",
    height: "100px",
    cursor: "pointer"
  },
  projectTitle: {
    fontFamily: "PingFang-SC-Bold",
    fontSize: 16
  },
  projectDesc: {
    fontFamily: "PingFang-SC-Regular",
    fontSize: 16
  },
  createNewProjectButtonContainer: {
    textAlign: "right"
  },
  workAreaTitle: {
    fontFamily: "PingFang-SC-Bold",
    fontSize: 18
  },
  workAreaTitleDesc: {
    fontFamily: "PingFang-SC-Regular",
    fontSize: 16
  },
  workAreaForm: {
    marginLeft: "1rem",
    marginRight: "1rem"
  },
  workAreaFormComponent: {
    width: window.innerWidth * 0.57
  },
  workAreaFormProperties: {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  SpinnerContainer: {
    width: "50rem",
    backgroundColor: "#ff00ff"
  }
};
