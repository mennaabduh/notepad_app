function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64zn9Bv47GL":
        Script1();
        break;
      case "67nkIpz7m8U":
        Script2();
        break;
      case "6J5UE2BHvwW":
        Script3();
        break;
      case "6VT5rBZJoWR":
        Script4();
        break;
      case "6rhL9WO271T":
        Script5();
        break;
  }
}

function Script1()
{
  function addJsPDF(callback) {
  if (typeof jsPDF === 'undefined') {
    var confettiScript = document.createElement('script');
    confettiScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js';
    confettiScript.async = true;
    confettiScript.onload = callback;
    document.head.appendChild(confettiScript);
  } else {
    callback();
  }
}
addJsPDF();
}

function Script2()
{
  var player = GetPlayer();
// Clear the value of the "Title" variable
player.SetVar("Title", "");
 
// Clear the value of the "Editor" variable
player.SetVar("Editor", "");
 
}

function Script3()
{
  // Get the value of the "Title" variable
var title = GetPlayer().GetVar("Title");
 
// Get the value of the "Editor" variable
var editor = GetPlayer().GetVar("Editor");
 
// Create a new jsPDF object
var pdf = new jsPDF();
 
// Set the document name to the value of the "Title" variable
pdf.setProperties({
title: title
});
 
// Calculate the width and height of the page
var pageWidth = pdf.internal.pageSize.getWidth();
var pageHeight = pdf.internal.pageSize.getHeight();
 
// Split the editor text into lines based on the width of the page
var lines = pdf.splitTextToSize(editor, pageWidth - 20);
 
// Calculate the height of the lines
var lineHeight = pdf.getTextDimensions(lines[0]).h;
 
// Set the initial y position to 10
var y = 10;
 
// Loop through the lines
for (var i = 0; i < lines.length; i++) {
// If the line would exceed the height of the page, add a new page
if (y + lineHeight > pageHeight - 10) {
pdf.addPage();
y = 10;
}
 
// Insert the line into the document
pdf.text(lines[i], 10, y);
 
// Update the y position
y += lineHeight;
}
 
// Save the PDF document
pdf.save(title + ".pdf");
}

function Script4()
{
  // Get the value of the "Title" variable
var title = GetPlayer().GetVar("Title");
 
// Get the value of the "Editor" variable
var editor = GetPlayer().GetVar("Editor");
 
// Create a new Blob object
var blob = new Blob([editor], { type: 'text/plain' });
 
// Create a new anchor element for the download link
var downloadLink = document.createElement("a");
 
// Set the download link attributes
downloadLink.download = title + ".txt";
downloadLink.innerHTML = "Download File";
 
// Set the href attribute to the URL of the Blob object
downloadLink.href = window.URL.createObjectURL(blob);
 
// Append the download link to the document body
document.body.appendChild(downloadLink);
 
// Click the download link to initiate the download
downloadLink.click();
 
// Remove the download link from the document body
document.body.removeChild(downloadLink);
}

function Script5()
{
  // Get the value of the "Title" variable
var title = GetPlayer().GetVar("Title");
 
// Get the value of the "Editor" variable
var editor = GetPlayer().GetVar("Editor");
 
// Create a new Blob object
var blob = new Blob([editor], { type: 'application/msword' });
 
// Create a new anchor element for the download link
var downloadLink = document.createElement("a");
 
// Set the download link attributes
downloadLink.download = title + ".doc";
downloadLink.innerHTML = "Download File";
 
// Set the href attribute to the URL of the Blob object
downloadLink.href = window.URL.createObjectURL(blob);
 
// Append the download link to the document body
document.body.appendChild(downloadLink);
 
// Click the download link to initiate the download
downloadLink.click();
 
// Remove the download link from the document body
document.body.removeChild(downloadLink);
 
}

