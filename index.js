const xlsx = require('xlsx');
const path = require('path');

function readExcelFile(fileName, sheetName) {
  const filePath = path.join(__dirname, fileName); // Get the file path from project directory
  const workbook = xlsx.readFile(filePath); // Read the Excel file

  // Get the specified sheet name or default to the first sheet
  const sheet = workbook.Sheets[sheetName] || workbook.Sheets[workbook.SheetNames[0]];
  
  if (!sheet) {
    throw new Error(`Sheet with name "${sheetName}" not found`);
  }

  let jsonData = xlsx.utils.sheet_to_json(sheet, { defval: '' }); // Convert sheet to JSON

  // Remove empty rows (where all values are empty)
  jsonData = jsonData.filter(row => Object.values(row).some(value => value.trim() !== ''));

  return jsonData;
}

module.exports = {readExcelFile};
