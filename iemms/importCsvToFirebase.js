const admin = require('firebase-admin');
const fs = require('fs');
const csv = require('csv-parser');

// Initialize Firebase Admin SDK
const serviceAccount = require('./drrm-h-iemms-firebase-adminsdk-f5wlm-db3287bb5f.json'); // Ensure this is the JSON service account file, not the CSV file
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://drrm-h-iemms-default-rtdb.firebaseio.com"
});

// Reference to Firestore
const db = admin.firestore();

// Function to upload data to Firebase
function uploadCsvToFirebase(filePath, collectionName) {
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', async (row) => {
            try {
                // Upload each row as a document in Firestore
                await db.collection(collectionName).add(row);
                console.log("Document added:", row);
            } catch (error) {
                console.error("Error uploading document:", error);
            }
        })
        .on('end', () => {
            console.log("CSV file successfully processed and uploaded to Firebase.");
        });
}

// Run the function with your CSV file and desired Firestore collection name
uploadCsvToFirebase('./new DRRM-H Masterlist.csv', 'drrmh_equipment_inventory');
