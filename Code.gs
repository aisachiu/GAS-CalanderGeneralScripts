
//Spreadsheet to work with
//var mySheetID = "1X4TIWl6MxgoptgX-7FuANYjxzydokSmab3OZbY8rz6E"; // Calendar Settings Spreadsheet 2014
var mySSID = "1D-EHFuavX-tRHxVfp4Swmdwjm-tG7mkYQRrIOQ6qxPg"; //New sheet for 125 hall


//ID of Calendar to work with
var myCalID1 = "ais.edu.hk_2d37383637303334372d373933@resource.calendar.google.com"; 

var startDateTxt = "August 1, 2016";
var endDateTxt = "August 1, 2017";

function putCalEventsOnSS() {
  
  //Open Calendar
  var myCal = CalendarApp.getCalendarById(myCalID1);
  
  //Get all events within date range
  var myEvts = myCal.getEvents(new Date(startDateTxt), new Date(endDateTxt));
  
  var EventsArray = new Array();
  
  for (var i=0; i<myEvts.length;i++){
    //var myLink = "https://www.googleapis.com/calendar/v3/calendars/"+ myCalID1 + "/events/" + myEvts[i].getId();
    EventsArray.push([myEvts[i].getStartTime(), myEvts[i].getTitle(), myEvts[i].getCreators().toString(),myEvts[i].getEndTime()]);
  }
  //write to Spreadsheet
  var mySheet = SpreadsheetApp.openById(mySSID).getActiveSheet();
  var writeData = mySheet.getRange(1, 1, EventsArray.length, 4).setValues(EventsArray);
  
  
  Logger.log(EventsArray);
}


