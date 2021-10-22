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
    window.alert("Gửi thành công!");
    window.open('../../examples/dashboard.html')
}
    
function doGet() {
    return HtmlService.createHtmlOutputFromFile('Index');
}
  
  
function readData() {
    var range = spreadsheet.getRange(1, 1,spreadsheet.getLastRow(), spreadsheet.getLastColumn()).getValues();
    Logger.log(range);
    return range;
};
  
function writeData(sendvalue) {
    spreadsheet.getRange(spreadsheet.getLastRow()+1, 1).activate();
    spreadsheet.getRange(spreadsheet.getLastRow()+1, 1).setValue(sendvalue);
};