const menuIcon=document.querySelector('#menu-icon');
const navbar=document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    let formData = new FormData(this);

    // Send form data to Formspree
    fetch('document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    let formData = new FormData(this);

    // Send form data to Formspree
    fetch('https://formspree.io/f/movavwrj', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form submitted successfully!', data);
        alert('Message sent successfully!'); // Show success message
        document.getElementById('contact-form').reset(); // Optionally, reset the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again later.');
    });
});
', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form submitted successfully!', data);
        alert('Message sent successfully!'); // Show success message
        document.getElementById('contact-form').reset(); // Optionally, reset the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again later.');
    });
});

