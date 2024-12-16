function loadGlobalHeader() {
    fetch('header.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('globalHeader').innerHTML = data;

            // Dynamically set the page title based on the content
            const pageTitle = document.body.getAttribute('data-page-title') || 'Introduction';
            document.getElementById('pageTitle').textContent = pageTitle;
        })
        .catch((error) => console.error('Error loading header:', error));
}

function loadGlobalFooter() {
    fetch('footer.html')
        .then((response) => response.text())
        .then((data) => {
            document.getElementById('globalFooter').innerHTML = data;
        })
        .catch((error) => console.error('Error loading footer:', error));
}

// Dropdown toggle function
function dropdownMenu() {
    const dbMenu = document.getElementById("dbMenu");
    if (dbMenu.style.display === "block") {
        dbMenu.style.display = "none";
    } else {
        dbMenu.style.display = "block";
    }
}

// Call the header load function automatically when the script is included
document.addEventListener('DOMContentLoaded', () => {
    loadGlobalHeader();
    loadGlobalFooter();
});
