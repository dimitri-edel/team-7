function loadNavbar() {
  const currentPage = window.location.pathname.split("/").pop();

  const navbarHtml = `
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #2A3D66;">
            <div class="container-fluid">
                <!-- Logo on the left -->
                <a class="navbar-brand" href="index.html">
                    <img src="assets/images/logo-img.png" id="logo" alt="Logo" class="logo-img" style="width: 100px;">
                </a>

                <!-- Burger Icon -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar links -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link ${
                              currentPage === "index.html" ? "active" : ""
                            }" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${
                              currentPage === "quiz.html" ? "active" : ""
                            }" href="quiz.html">Take Quiz</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${
                              currentPage === "score-board.html" ? "active" : ""
                            }" href="score-board.html">High Score</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ${
                            currentPage === "learn-more.html" ? "active" : ""
                          }" href="learn-more.html">Learn More</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ${
                            currentPage === "quotes.html" ? "active" : ""
                          }" href="quotes.html">Get Motivated</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${
                              currentPage === "about.html" ? "active" : ""
                            }" href="about.html">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

  document
    .getElementById("navbar-placeholder")
    .insertAdjacentHTML("afterbegin", navbarHtml);
}

document.addEventListener("DOMContentLoaded", function () {
  loadNavbar();
});

// Close the navbar when clicking outside
document.addEventListener("click", function (event) {
  const navbarCollapse = document.querySelector("#navbarNav");
  const navbarToggler = document.querySelector(".navbar-toggler");

  const isNavbarOpen = navbarCollapse.classList.contains("show");

  if (
    isNavbarOpen &&
    !navbarCollapse.contains(event.target) &&
    !navbarToggler.contains(event.target)
  ) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: true
    });
    bsCollapse.hide();
  }
});
