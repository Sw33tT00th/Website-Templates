function toggleSidebar() {
	var sidebarDiv = $("#sidebar");
	var mainContent = $("#main_content");
	sidebarDiv.toggleClass("col-md-3");
	sidebarDiv.toggleClass("hidden");
	mainContent.toggleClass("col-md-9");
	mainContent.toggleClass("col-md-12");
}