name: wholesale-training-offsite
tier: clients
hosting: cloudflare
audience: any-wholesale
data_isolation: shared-view
data_source: na
storage: open
data_touched: Offsite (partner-cafe) barista training sign-up submissions (business name, contact name, email, phone, cafe street address/city/state/zip, seat count, timeslot ranking, notes). Submissions POST to a Google Apps Script web app that appends them to the "Offsite Trainings" tab of the Training Requests Google Sheet (ID 1LrKa_un2EmTS6znlAnLQrLXJj5REkjhFJp5dWBXyvwk) and emails Jonathan (jonathan@atomicroastery.com). The Sheet stays the system-of-record — coordinate-training and schedule-training skills read it.
owner: Jonathan <jonathan@atomicroastery.com>
description: Offsite barista training request form — training held at the wholesale partner's own cafe.
url: https://wholesale-training-offsite-ext.acr-ops.com
pages_project: wholesale-training-offsite
drive_folder: https://drive.google.com/drive/folders/1zJdx2uIyKHEfCzslyEgqp1XOpTZQ2zaI
status: staff-preview (deployed 2026-07-01; awaiting Brendan/Spencer approval to flip external)
