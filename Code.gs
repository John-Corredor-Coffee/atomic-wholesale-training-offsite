const SHEET_ID  = '1LrKa_un2EmTS6znlAnLQrLXJj5REkjhFJp5dWBXyvwk';
const TAB_NAME  = 'Offsite Trainings';
const HEADERS   = ['Submitted At','Business Name','Contact Name','Email','Phone','Street Address','City','State','ZIP','Seats','Attendee Names','Timeslot Rank','Notes','Status'];

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss    = SpreadsheetApp.openById(SHEET_ID);
  let sheet   = ss.getSheetByName(TAB_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(TAB_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }

  sheet.appendRow([
    data.submitted_at  || '',
    data.business      || '',
    data.contact_name  || '',
    data.email         || '',
    data.phone         || '',
    data.street        || '',
    data.city          || '',
    data.state         || '',
    data.zip           || '',
    data.seats         || '',
    data.attendees     || '',
    data.timeslot_rank || '',
    data.notes         || '',
    'Pending'
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
