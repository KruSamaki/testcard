const API_KEY = 'AIzaSyCVySc4qfLSCIelBrcqvdhoxGWWezmUd2g'; // Replace with your Google API Key
const SHEET_ID = '1D8dx2iTFf0_61sDwr1BNn-E2XZS9xArh9NstQ08z4jY'; // Replace with your Google Sheet ID
const RANGE = 'Attendance!A:D'; // Sheet and range

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    }).then(() => {
        console.log("GAPI client initialized.");
    }).catch(error => {
        console.error("Error initializing GAPI client:", error);
    });
}

function submitAttendance() {
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const attendanceDate = document.getElementById('attendanceDate').value;
    const status = document.getElementById('status').value;

    if (!studentId || !studentName || !attendanceDate) {
        alert("Please fill in all fields.");
        return;
    }

    const values = [
        [studentId, studentName, attendanceDate, status]
    ];

    const body = {
        values: values
    };

    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: RANGE,
        valueInputOption: "RAW",
        resource: body
    }).then(response => {
        console.log(`${response.result.updates.updatedCells} cells appended.`);
        alert("Attendance submitted successfully.");
        clearForm();
    }, error => {
        console.error("Error submitting attendance:", error);
        alert("Failed to submit attendance. Please try again.");
    });
}

function clearForm() {
    document.getElementById('studentId').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('attendanceDate').value = '';
    document.getElementById('status').value = 'Present';
}

gapi.load('client', initClient);
