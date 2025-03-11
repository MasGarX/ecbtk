$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location');

    function activateTab(location) {
        $('.nav-link').removeClass('active');
        $('.tab-pane').removeClass('show active');
        if (location === 'Premium') {
            $('#showPremium').addClass('active');
            $('#nav-premium').addClass('show active');
        } else if (location === 'France') {
            $('#showFrance').addClass('active');
            $('#nav-france').addClass('show active');
        } else {
            $('#showBudget').addClass('active');
            $('#nav-budget').addClass('show active');
        }
    }

    if (location) {
        // If there's a location in the URL, activate the corresponding tab
        activateTab(location);
        localStorage.setItem('selectedLocation', location);
    } else {
        // On page load, check localStorage to retain the selected tab
        const storedLocation = localStorage.getItem('selectedLocation') || 'Budget';
        activateTab(storedLocation);
    }

    // Store the selected tab in localStorage when a tab is clicked
    $('.nav-link').click(function() {
        const selectedLocation = $(this).data('bs-target').replace('#nav-', '');
        localStorage.setItem('selectedLocation', selectedLocation);
    });
});