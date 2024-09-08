document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    var content = document.getElementById('content');
    function loadContent(url) {
        fetch(url)
            .then(function (response) { return response.text(); })
            .then(function (data) {
            if (content) {
                content.innerHTML = data;
            }
        })
            .catch(function (error) { return console.error('Error loading content:', error); });
    }
    function handleTabClick(event) {
        event.preventDefault();
        var targetUrl = event.target.getAttribute('href');
        if (targetUrl) {
            // Load the content of the clicked tab
            loadContent(targetUrl);
            // Remove active class from all nav links
            navLinks.forEach(function (link) { return link.classList.remove('active'); });
            // Add active class to the clicked link
            event.target.classList.add('active');
        }
    }
    navLinks.forEach(function (link) { return link.addEventListener('click', handleTabClick); });
    // Load default content
    loadContent('about.html');
});
