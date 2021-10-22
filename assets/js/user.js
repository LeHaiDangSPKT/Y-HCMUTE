function getData(values) {
    values.forEach(function(item, index) {
    var x = document.querySelector('.list_activity_school');
    x.innerHTML += 
    `
        <tr data-index="${index}">
            <td>${index+1}</td>
            <td>
                <a href="" style="color: #333;">${item.fullname}</a>
            </td>
            <td>${Number(item.quantity)}</td>
            <td>${item.organize}</td>
        </tr>
    `
    });
}
    google.script.run.withSuccessHandler(getData).readData();
    
function sbmitForm() {
    var fullname = document.getElementById("fullname").value;
    var quantity = document.getElementById("quantity").value;
    var organize = document.getElementById("organize").value;
    var password = document.getElementById("password").value;
    var activity = document.getElementById("activity").value;

    var ob = {
        fn = fullname,
        qt = quantity,
        og = organize,
        pw = password,
        av = activity,
    }
    var x = document.querySelector('.list_activity_school')
    x.innerHTML += 
    `
        <tr data-index="${index}">
            <td>${index+1}</td>
            <td>
                <a href="" style="color: #333;">${item.fullname}</a>
            </td>
            <td>${Number(item.quantity)}</td>
            <td>${item.organize}</td>
        </tr>
    `;
    document.getElementById("fullname").value = null;
    document.getElementById("quantity").value = null;
    document.getElementById("organize").value = null;
    document.getElementById("password").value = null;
    document.getElementById("activity").value = null;


    window.alert("Gửi thành công!");
    window.open('../../examples/dashboard.html')
}
    
function doGet() {
    return HtmlService.createHtmlOutputFromFile('Index');
}
  
  //var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  
function readData() {
    var range = spreadsheet.getRange(1, 1,spreadsheet.getLastRow(), spreadsheet.getLastColumn()).getValues();
    Logger.log(range);
    return range;
};
  
function writeData(sendvalue) {
    spreadsheet.getRange(spreadsheet.getLastRow()+1, 1).activate();
    spreadsheet.getRange(spreadsheet.getLastRow()+1, 1).setValue(sendvalue);
};