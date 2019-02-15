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

  container: {
    padding: "50px 0 0 0",
    backgroundColor: "#f2f2f2",
    height: window.innerHeight + 14
  },

  AboutDialog: {
    fontFamily: "PingFang-SC-Regular",
    width: "600px"
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
  leftSection: {
    backgroundColor: "#ebedf0",
    height: contentHeight,
    borderRight: "1px solid #999",
    paddingRight: "0px"
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
    color: "#24282b",
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
    height: contentHeight * 0.05,
    marginLeft: "1rem",
    marginRight: "1rem"
  },
  mainSectionTitle: {
    fontFamily: "PingFang-SC-Regular",
    fontSize: 24
  },
  mainSectionTitleIcon: {
    color: "#182026",
    marginRight: "10px",
    marginTop: contentHeight * 0.075
  },
  mainSectionContentContainer: {},
  mainSectionContent: {
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
  workAreaMain: {
    margin: "1rem 1rem 0 0rem",
    height: contentHeight,
    borderBottom: "1px solid #999",
    overflow: "auto",
    backgroundColor: "#fff"
  },
  workAreaDesc: {
    margin: "0rem 1rem 0 0rem",
    height: contentHeight * 0.25,
    backgroundColor: "#fff",
    paddingTop: 0
  },
  workAreaAction: {
    margin: "0 0 0 -0.5rem",
    height: contentHeight * 0.1
  },
  projectContainer: {
    textAlign: "center"
  },
  projectContainerSelected: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 2
  },
  docIcon: {
    width: "100px",
    height: "100px"
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
  tabContent: {
    backgroundColor: "#fff",
    height: contentHeight - 43,
    maxHeight: contentHeight - 43,
    fontFamily: "PingFang-SC-Regular",
    color: "#182026",
    fontSize: 16,
    padding: "15px 15px",
    overflow: "auto"
  },
  consoleContainer: {
    padding: 0
  },
  consoleOutPut: {
    height: contentHeight * 0.25,
    margin: 0,
    overflow: "auto"
  },
  nonidealStateDesc: {
    fontFamily: "PingFang-SC-Regular",
    color: "#182026",
    fontSize: 14
  },
  nonidealStateMainTitle: {
    fontFamily: "PingFang-SC-Regular",
    color: "#182026",
    fontSize: 18
  },
  nonidealStateMainDesc: {
    fontFamily: "PingFang-SC-Regular",
    color: "#182026",
    fontSize: 16
  }
};
