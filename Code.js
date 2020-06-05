const url = "https://docs.google.com/spreadsheets/d/1VIME8YuNz3FIGcjR-RUdcO7gINKoGOi5Fwev6hIgiZk/edit#gid=0";

function doGet(e) {
  //Logger.log(e.parameters);
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Options");
  var list = ws.getRange(1, 1, ws.getRange("A1").getDataRegion().getLastRow(), 1).getValues();
  
  var htmlListArray = list.map(item => "<option>" + item[0] + "</option>").join();
  
  var tmp = HtmlService.createTemplateFromFile("Page");
  tmp.list = htmlListArray;
  return tmp.evaluate();
}

