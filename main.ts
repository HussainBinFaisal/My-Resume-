document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const content = document.getElementById('content');

    function loadContent(url: string) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                if (content) {
                    content.innerHTML = data;
                }
            })
            .catch(error => console.error('Error loading content:', error));
    }

    function handleTabClick(event: Event) {
        event.preventDefault();

        const targetUrl = (event.target as HTMLAnchorElement).getAttribute('href');

        if (targetUrl) {
            // Load the content of the clicked tab
            loadContent(targetUrl);
            
            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            (event.target as HTMLElement).classList.add('active');
        }
    }

    navLinks.forEach(link => link.addEventListener('click', handleTabClick));

    // Load default content
    loadContent('about.html');
});
