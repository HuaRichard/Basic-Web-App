function userClicked(userInfo) {

  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.app, userInfo.zip, userInfo.est, new Date()]);
//  Logger.log(name + " clicked the button");
}

function getCost(zipCode) {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Estimate");
  var data = ws.getRange(1, 1, ws.getLastRow(), 2).getValues();
  
  var zipCodesList = data.map(row => row[0]);
  var costList = data.map(row => row[1]);
  var position = zipCodesList.indexOf(zipCode);
  if(position > -1) {
    return "$" + costList[position].toFixed(2);
  } else {return "Unavailable";
  }
}



function getCalendarBusyDays() {
  var startDate = new Date();
  var endDate = new Date(new Date().setYear(startDate.getFullYear()+1));
  Logger.log(endDate);
  
  var calendar = CalendarApp.getCalendarsByName("huachao0349@gmail.com")[0];
  var events = calendar.getEvents(startDate, endDate);
  var days = events.map(e => e.getStartTime().setHours(0,0,0,0));
  var uniqueDays = [];
  days.forEach(function(d) {
    if(uniqueDays.indexOf(d) === -1) uniqueDays.push(d);
  }) 
  return uniqueDays;
}