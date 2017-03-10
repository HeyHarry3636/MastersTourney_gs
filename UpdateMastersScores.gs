function getData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160411175036/http://scores.espn.go.com/golf/leaderboard' + queryString + '","table",1)';

  SpreadsheetApp.getActiveSheet().getRange('LiveStats!A1').setValue(cellFunction);
}
