import * as path from "path";
import * as _ from "lodash";
import * as queryString from "query-string";
import { app, BrowserWindow, screen, ipcMain } from "electron";
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} from "electron-devtools-installer";

/******************************************************************************* */
/**
 * reload windows when src has a update.
 */
const args = process.argv.slice(1);
const serve = args.some(val => val === "--serve");

if (serve) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules", ".bin", "electron")
  });
}
/******************************************************************************* */

/******************************************************************************* */
/**
 * IPC process message channel listeners
 */
ipcMain.on("coreCentAppChannel-async", (event, args) => {
  // Close welcome window
  welcomeWindow.hide();
  welcomeWindow.webContents.closeDevTools();
  createMainWindow({
    view: _.has(args, "view") ? args.view : "allprojects",
    extraview: _.has(args, "extra") ? args.extra : null
  });
  event.returnValue = "success";
  //event.sender.send('createnewproject-reply', 'success');
});
/******************************************************************************* */

// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let mainWindow = null;
let welcomeWindow = null;
const appRootPath = path.join(__dirname, "OSLC_Adapter_Designer/index.html");

const mainWindowMinWidth = 1280;
const mainWindowMinHeight = 800;

const welcomeWindowMinWidth = 750;
const welcomeWindowMinHeight = 550;

function installDevTools() {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log("An error occurred: ", err));

  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => console.log("An error occurred: ", err));
}

function createWelcomeWindow() {
  // 创建浏览器窗口。
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  welcomeWindow = new BrowserWindow({
    x: (size.width - welcomeWindowMinWidth) / 2,
    y: (size.height - welcomeWindowMinHeight) / 2,
    width: welcomeWindowMinWidth,
    height: welcomeWindowMinHeight,
    maximizable: false,
    show: false,
    title: "OSLC Adapter 设计器"
  });

  welcomeWindow.once("ready-to-show", () => {
    installDevTools();
    welcomeWindow.show();
  });

  // disable windows default menu
  if (process.platform == "win32") {
    welcomeWindow.setMenu(null);
  }

  // 然后加载应用的 index.html。

  let welcomeScreenUrl = require("url").format({
    protocol: "file:",
    slashes: true,
    hash: "",
    pathname: appRootPath
  });

  welcomeWindow.loadURL(welcomeScreenUrl);

  // 打开开发者工具
  welcomeWindow.webContents.openDevTools({ mode: "undocked" });

  // 当 window 被关闭，这个事件会被触发。
  welcomeWindow.on("closed", () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    welcomeWindow = null;
  });
}

function createMainWindow(options) {
  // 创建浏览器窗口。
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  const optionView = _.has(options, "view") ? options.view : "allprojects";
  const optionExtraView = _.has(options, "extraview")
    ? queryString.stringify({ extra: options.extraview })
    : "";
  mainWindow = new BrowserWindow({
    x: 0,
    y: 3, //Fix: always show some spaces on top will make the window looking nicer.
    width: size.width,
    height: size.height,
    minWidth: mainWindowMinWidth,
    minHeight: mainWindowMinHeight,
    show: false,
    title: "OSLC Adapter 设计器"
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // disable windows default menu
  if (process.platform == "win32") {
    mainWindow.setMenu(null);
  }

  // 然后加载应用的 index.html。

  let editorScreenUrl = require("url").format({
    protocol: "file:",
    slashes: true,
    hash: optionView + "?" + optionExtraView,
    pathname: appRootPath
  });

  mainWindow.loadURL(editorScreenUrl);

  // 打开开发者工具
  mainWindow.webContents.openDevTools({ mode: "undocked" });

  // 当 window 被关闭，这个事件会被触发。
  mainWindow.on("closed", () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    mainWindow = null;
    // 打开welcome window
    if (null == welcomeWindow) {
      createWelcomeWindow();
    }
    welcomeWindow.show();
  });
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on("ready", () => {
  createWelcomeWindow();
});

// 当全部窗口关闭时退出。
app.on("window-all-closed", () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (welcomeWindow === null) {
    createWelcomeWindow();
  }
});

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
