(() => {
  const initBurgerMenu = () => {
    const burgerMenu = document.querySelector(".burger");
    const navBar = document.querySelector("nav");
    let navBarStatus = false; // Ensure menu is closed by default

    // Initially, close the menu when the page is loaded
    const resetMenu = () => {
      navBar.style.height = "0px"; // Set the nav height to 0 to hide it
      burgerMenu.classList.remove("changeBurger"); // Remove any active class on burger
      navBarStatus = false; // Set the state to "closed"
    };

    // Dynamically calculate nav height and toggle menu
    const toggleMenu = () => {
      const navHeight = navBar.scrollHeight; // Dynamically calculate height
      if (navBarStatus) {
        navBarStatus = false;
        navBar.style.height = "0px";
        burgerMenu.classList.remove("changeBurger");
      } else {
        navBarStatus = true;
        navBar.style.height = navHeight + "px";
        burgerMenu.classList.add("changeBurger");
      }
    };

    // Ensure event listener is added only once
    if (!burgerMenu.hasEventListener) {
      burgerMenu.addEventListener("click", toggleMenu);
      burgerMenu.hasEventListener = true; // Custom flag to avoid re-adding listener
    }

    // Close menu initially when the page is loaded or navigated to
    resetMenu();
  };

  const handleResize = () => {
    const navBar = document.querySelector("nav");
    // Ensure the nav is properly closed on resize
    navBar.style.height = "0px";
    initBurgerMenu();
  };

  initBurgerMenu(); // Initialize menu in closed state
  window.addEventListener("resize", handleResize);
})();
