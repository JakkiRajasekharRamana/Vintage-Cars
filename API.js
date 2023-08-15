

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
    headers: { 'X-Api-Key': 'L4TfBJQg15DvJAXazXvgWEYv2eiFY85hrK01NT0p' },
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        displayCarDetails(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

function displayCarDetails(car) {
    const carDetailsDiv = $('#carDetails');
    
    carDetailsDiv.empty(); // Clear previous content
    
    if (car.length > 0) {
        const details = `
            <h2>Car Details</h2>
            <p><strong>Name:</strong> ${car[0].make} ${car[0].model}</p>
            <p><strong>Year:</strong> ${car[0].year}</p>
            <!-- Add more details as needed -->
        `;
        carDetailsDiv.html(details);
    } else {
        carDetailsDiv.html('<h2>Car Details</h2><p>No cars found.</p>');
    }
}

