function openTab(tabName) {
    // Remove the 'active-tab' class from all tab contents
    const tabs = document.querySelectorAll('.tab-contents');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Remove the 'active-link' class from all tab links
    const tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(link => link.classList.remove('active-link'));

    // Add 'active-tab' to the selected tab content
    document.getElementById(tabName).classList.add('active-tab');

    // Add 'active-link' to the selected tab link
    document.querySelector(`.tab-links[onclick="openTab('${tabName}')"]`).classList.add('active-link');
}
