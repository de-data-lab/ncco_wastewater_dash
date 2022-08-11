// support bookmarking of pages
function handleBrowserBackButton() {
  // When loading the page for the first time, add the overview hash
  window.history.pushState({}, "", "#overview");

  // Function to go to a tab given the tab name
  const gotoTab = (tabName) => {
    // Get all tab div's
    const allTabs = document.querySelectorAll(".tab-pane");
    // Hide all tab div's
    allTabs.forEach((tab) => tab.classList.remove("active"));

    // Get the selected tab's div
    const targetTab = document.querySelector(
      `.tab-pane[data-value="${tabName}"]`
    );
    // Show the selected tab
    targetTab.classList.add("active");
    // Add a hash to the history
    window.history.pushState({}, "", "#" + tabName);
  };

  window.onload = function () {
    // Get all links for tabs in the nav bar (href includes a hash)
    const navLinks = document.querySelectorAll(
      'a[data-toggle="tab"][href*="#"]'
    );
    // For each link, add a click event listener
    navLinks.forEach((e) =>
      e.addEventListener("click", () => {
        // When clicked, get the data-value attribute of the self
        const curTab = e.getAttribute("data-value");
        // Then go to the tab
        gotoTab(curTab);
      })
    );
  };

  // Listening for the history change (browser back button)
  window.addEventListener("popstate", () => {
    const targetTab = window.location.hash.replace("#", "");
    gotoTab(targetTab);
  });
}
handleBrowserBackButton();
