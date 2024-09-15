/*
const section = document.getElementById('test');
section.onload = function() {buildPage()};

// Define the API URL
const apiUrl = 'apartments.com/api/reviews?pageNumber=1&pageSize=10';

// Function to return array of filtered character data objects from API:
async function getData() {
    // Fetch API data:
    const response = await fetch(apiUrl);

    // Convert API data to JSON:
    const arr = await response.json();
    
    // Push into iterable array
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].species === 'human' && arr[i].image.length > 0) {
            output.push(arr[i]);
        }
    }
    return output;
}


async function buildPage() {
    const output = await getData();
    // Populate character cards' HTML:
    for (let i = 0; i < output.length; i++) {
        // Populate homepage (make cards visible by default)
        section.innerHTML = "testtest";
        section.style.color = "blue";
      
    }
}
*/
