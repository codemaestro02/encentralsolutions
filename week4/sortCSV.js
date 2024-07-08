

// // Sample CSV content stored in a string
// const csvContent = "./details.csv"

// // Function to parse CSV content into an array of objects
// function parseCSV(csv) {
//   const [header, ...rows] = csv.split('\n');
//   const headers = header.split(',');

//   return rows.map(row => {
//     const values = row.split(',');
//     return headers.reduce((obj, header, index) => {
//       obj[header] = values[index];
//       return obj;
//     }, {});
//   });
// }

// // Function to sort the staff records
// function sortStaff(records, criterion) {
//   return records.sort((a, b) => {
//     if (criterion === 'Age') {
//       return Number(a[criterion]) - Number(b[criterion]);
//     } else {
//       return a[criterion].localeCompare(b[criterion]);
//     }
//   });
// }

// // Function to display the sorted staff records
// function displayStaff(records) {
//   console.log('Sorted Staff Records:');
//   console.log('======================');
//   console.log('First Name | Last Name | Age');
//   console.log('------------------------------');
//   records.forEach(record => {
//     console.log(`${record['First Name']} | ${record['Last Name']} | ${record['Age']}`);
//   });
// }

// // Main program function
// function main() {
//   const records = parseCSV(csvContent);

//   const criterion = prompt(`
//     Enter 1 to sort by First Name
//     Enter 2 to sort by Last Name
//     Enter 3 to sort by Age
//   `);

//   let sortedRecords;
//   switch (criterion) {
//     case '1':
//       sortedRecords = sortStaff(records, 'First Name');
//       break;
//     case '2':
//       sortedRecords = sortStaff(records, 'Last Name');
//       break;
//     case '3':
//       sortedRecords = sortStaff(records, 'Age');
//       break;
//     default:
//       console.log('Invalid selection. Please enter 1, 2, or 3.');
//       return;
//   }

//   displayStaff(sortedRecords);
// }

// // Run the main program
// main();


async function fetchCSVAndProcess() {
    // Fetch the CSV file
    try {
        const response = await fetch('https://github.com/codemaestro02/encentralsolutions/blob/main/week4/details.csv');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const csvText = await response.text();
        processCSV(csvText);
    }
    catch (error) {
        console.error('Error fetching the CSV file:', error);
    }
};

function processCSV(csvText) {
    
    // Convert CSV text to array of objects
    const staffRecords = csvToArray(csvText);

    // Ask the user for sorting preference
    const sortingOption = promptSortingOption();

    // Sort the staff records based on user input
    const sortedRecords = sortRecords(staffRecords, sortingOption);

    // Display the sorted records creatively
    displayRecords(sortedRecords);
}

function csvToArray(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    const records = lines.slice(1).map(line => {
        const values = line.split(',');
        const record = {};
        headers.forEach((header, index) => {
            record[header.trim()] = values[index].trim();
    });
    return record;
});
return records;
}

function promptSortingOption() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
      
    readline.question(
        "Enter 1 to sort by First Name\nEnter 2 to sort by Last Name\nEnter 3 to sort by Age\n",
        (user_response) => {
            console.log(user_response)
            readline.close();
        }
    );
    
    const option = prompt(
        `Enter 1 to sort by First Name
        Enter 2 to sort by Last Name
        Enter 3 to sort by Age`
    );
    return parseInt(option, 10);
}

function sortRecords(records, option) {
    const sortBy = option === 1 ? 'First Name' : option === 2 ? 'Last Name' : 'Age';
    return records.sort((a, b) => {
        if (sortBy === 'Age') {
            return parseInt(a[sortBy]) - parseInt(b[sortBy]);
        }
        return a[sortBy].localeCompare(b[sortBy]);
    });
}

function displayRecords(records) {
    console.log('Sorted Staff Records:');
    console.log('----------------------------------------');
    records.forEach(record => {
        console.log(`Name: ${record['First Name']} ${record['Last Name']}, Age: ${record['Age']}`);
    });
    console.log('----------------------------------------');
}

// Run the function
fetchCSVAndProcess();
