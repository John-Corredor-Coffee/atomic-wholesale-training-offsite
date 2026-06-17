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

  sendNotification_(data);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendNotification_(data) {
  const subject = 'New Offsite Training Request — ' + (data.business || 'Unknown Account');
  const body = [
    'A new offsite barista training request was submitted.',
    '',
    'Business:   ' + (data.business      || '—'),
    'Contact:    ' + (data.contact_name  || '—'),
    'Email:      ' + (data.email         || '—'),
    'Phone:      ' + (data.phone         || '—'),
    'Address:    ' + [data.street, data.city, data.state, data.zip].filter(Boolean).join(', '),
    'Seats:      ' + (data.seats         || '—'),
    'Attendees:  ' + (data.attendees     || '—'),
    'Timeslots:  ' + (data.timeslot_rank || '—'),
    'Notes:      ' + (data.notes         || '—'),
    '',
    'Submitted:  ' + (data.submitted_at  || new Date().toLocaleString()),
    '',
    'View sheet: https://docs.google.com/spreadsheets/d/' + SHEET_ID,
  ].join('\n');

  MailApp.sendEmail('john.corredor@atomicroastery.com', subject, body);
}
