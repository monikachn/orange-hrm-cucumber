$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3828246900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should should login successfully",
  "description": "",
  "id": "login-page-test;user-should-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Enter username",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Enter password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Should Verify \"Dashboard\" Message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iEnterUsername()"
});
formatter.result({
  "duration": 315356400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iEnterPassword()"
});
formatter.result({
  "duration": 98241800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 935611500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 17
    }
  ],
  "location": "LoginTestSteps.iShouldVerifyMessage(String)"
});
formatter.result({
  "duration": 289168000,
  "status": "passed"
});
formatter.after({
  "duration": 685707000,
  "status": "passed"
});
formatter.before({
  "duration": 1869594400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should see Orange HRM Logo",
  "description": "",
  "id": "login-page-test;user-should-see-orange-hrm-logo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Should Verify Logo is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldVerifyLogoIsDisplayed()"
});
formatter.result({
  "duration": 232183000,
  "status": "passed"
});
formatter.after({
  "duration": 648373500,
  "status": "passed"
});
formatter.before({
  "duration": 2021920800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should should log out successfully",
  "description": "",
  "id": "login-page-test;user-should-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I Login To The application",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I Click on User Profile logo",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I Mouse hover on Logout and click",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Should Verify the text Login Panel is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iLoginToTheApplication()"
});
formatter.result({
  "duration": 1371631400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnUserProfileLogo()"
});
formatter.result({
  "duration": 2049491000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iMouseHoverOnLogoutAndClick()"
});
formatter.result({
  "duration": 2549942300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldVerifyTheTextLoginPanelIsDisplayed()"
});
formatter.result({
  "duration": 249622500,
  "status": "passed"
});
formatter.after({
  "duration": 1510761800,
  "status": "passed"
});
formatter.uri("UserTest.feature");
formatter.feature({
  "line": 1,
  "name": "User Test",
  "description": "",
  "id": "user-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2072724300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Admin should add user successfully",
  "description": "",
  "id": "user-test;admin-should-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Login to Application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on that Admin Tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Should Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click On Add button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Should Verify Add User Text",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I Select User Role Admin",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Employee Name Ananya Dash",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Username",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select status Disable",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Confirm Password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click On Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Should verify message Successfully Saved",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 17500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iLoginToApplication()"
});
formatter.result({
  "duration": 435774100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnThatAdminTab()"
});
formatter.result({
  "duration": 4598509700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldVerifySystemUsersText()"
});
formatter.result({
  "duration": 244708700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.clickOnAddButton()"
});
formatter.result({
  "duration": 529965300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldVerifyAddUserText()"
});
formatter.result({
  "duration": 270262200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 22234058400,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterEmployeeNameAnanyaDash()"
});
formatter.result({
  "duration": 22135309500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027oxd-autocomplete-wrapper\u0027]//*[contains(text(),\u0027Jaya  Raja\u0027)]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fca3269894fd1aae4bb1262032eb0f32, findElement {using\u003dxpath, value\u003d//*[@class\u003d\u0027oxd-autocomplete-wrapper\u0027]//*[contains(text(),\u0027Jaya  Raja\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Monika\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54268}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54268/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: fca3269894fd1aae4bb1262032eb0f32\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.orangehrmlive.demo.pages.AddUserPage.enterEmployeeName(AddUserPage.java:92)\r\n\tat com.orangehrmlive.demo.steps.UserTestSteps.iEnterEmployeeNameAnanyaDash(UserTestSteps.java:54)\r\n\tat ✽.And I enter Employee Name Ananya Dash(UserTest.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusDisable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iEnterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iEnterConfirmPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iShouldVerifyMessageSuccessfullySaved()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 978187900,
  "status": "passed"
});
formatter.before({
  "duration": 1908969300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the user that created and Verify that user",
  "description": "",
  "id": "user-test;search-the-user-that-created-and-verify-that-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I Login to Application",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on Admin Tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Should Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I enter Username",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select User Role",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Select the Status Enable",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Click on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Should Verify the User should be in Result list",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iLoginToApplication()"
});
formatter.result({
  "duration": 1359187700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1496668100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldVerifySystemUsersText()"
});
formatter.result({
  "duration": 358344900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUsername()"
});
formatter.result({
  "duration": 102734700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 20174006100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectTheStatusEnable()"
});
formatter.result({
  "duration": 154612000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 89436600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldVerifyTheUserShouldBeInResultList()"
});
formatter.result({
  "duration": 40099977000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Yuvraji\u0027)]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9511f299701e1333cc6f03bf77b40136, findElement {using\u003dxpath, value\u003d//div[contains(text(),\u0027Yuvraji\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Monika\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54298}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54298/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9511f299701e1333cc6f03bf77b40136\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.orangehrmlive.demo.pages.ViewSystemUsersPage.verifyUserShouldBeInRecordList(ViewSystemUsersPage.java:53)\r\n\tat com.orangehrmlive.demo.steps.UserTestSteps.iShouldVerifyTheUserShouldBeInResultList(UserTestSteps.java:104)\r\n\tat ✽.Then I Should Verify the User should be in Result list(UserTest.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1397327200,
  "status": "passed"
});
formatter.before({
  "duration": 2518339500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Admin should delete user successfully",
  "description": "",
  "id": "user-test;admin-should-delete-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I Login to Application",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on Admin Tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Should Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I enter Username",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Select User Role",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Select Status Enable",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Click on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Should Verify that User should be in Result list",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I Click on Check box",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Click on Delete Button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Click on Ok Button on Popup",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should verify message Successfully Deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iLoginToApplication()"
});
formatter.result({
  "duration": 1200780100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1448283300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldVerifySystemUsersText()"
});
formatter.result({
  "duration": 460891200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUsername()"
});
formatter.result({
  "duration": 348028800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 20268886700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusEnable()"
});
formatter.result({
  "duration": 212009200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 133635100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldVerifyThatUserShouldBeInResultList()"
});
formatter.result({
  "duration": 40056705900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Yuvraji\u0027)]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8a2f3650d0a76b8df552d92e0f81aa0d, findElement {using\u003dxpath, value\u003d//div[contains(text(),\u0027Yuvraji\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Monika\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54347}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54347/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8a2f3650d0a76b8df552d92e0f81aa0d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.orangehrmlive.demo.pages.ViewSystemUsersPage.verifyUserShouldBeInRecordList(ViewSystemUsersPage.java:53)\r\n\tat com.orangehrmlive.demo.steps.UserTestSteps.iShouldVerifyThatUserShouldBeInResultList(UserTestSteps.java:119)\r\n\tat ✽.Then I Should Verify that User should be in Result list(UserTest.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnDeleteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iShouldVerifyMessageSuccessfullyDeleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1222334100,
  "status": "passed"
});
formatter.before({
  "duration": 2030461900,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Search the delete user and verify the message No Record Found",
  "description": "",
  "id": "user-test;search-the-delete-user-and-verify-the-message-no-record-found",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I Login to Application",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I click on Admin Tab",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I Should Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I enter Username",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Select User Role",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I Select a Status Disable",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I Click on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I verify message No Records Found",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iLoginToApplication()"
});
formatter.result({
  "duration": 1435990900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1788134100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldVerifySystemUsersText()"
});
formatter.result({
  "duration": 453302100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUsername()"
});
formatter.result({
  "duration": 147155800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 20479042000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectaStatusDisable()"
});
formatter.result({
  "duration": 201145500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 123249600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyMessageNoRecordsFound()"
});
formatter.result({
  "duration": 290199900,
  "status": "passed"
});
formatter.after({
  "duration": 766004600,
  "status": "passed"
});
});