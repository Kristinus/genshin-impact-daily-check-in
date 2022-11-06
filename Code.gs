// Step 1: Add your cookies in the string
// Step 2: Run storeCookies
// Step 3: Wait
// Step 4: Done!
function storeCookies() {
  const cookie = "[Insert cookies here]";
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty("Cookie", cookie);
}

function getDailyReward() {
  const url = "https://hk4e-api-os.mihoyo.com/event/sol/info?lang=en-us"
  const account_id = "[Insert account_id]"
  const userProperties = PropertiesService.getUserProperties();
  if (!userProperties.getKeys().includes("Cookie")) {
    Logger.log("I need cookies");
  }

  const headers = {
    "Cookie": userProperties.getProperty("Cookie")
  };
  const options = {
    "method": "GET",
    "headers": headers
  };
  const response = UrlFetchApp.fetch(url + "&" + account_id, options);
  Logger.log(response);
  if(response.getResponseCode() == 200) {

    const postOptions = {
      "method": "POST",
      "headers": headers,
      "payload": JSON.stringify({"act_id":account_id}),
    };
    const htmlPage = UrlFetchApp.fetch(url, postOptions);
    Logger.log(htmlPage);
  }
  const response2 = UrlFetchApp.fetch(url + "&" + account_id, options);
  Logger.log(response2);
}
