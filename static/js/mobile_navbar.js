function openNav() {
        document.getElementById("myNav").style.width = "100%";
        
        // Change hamburger to X
        document.getElementById("hamburger-img").src = ("static/x.png");

        // Change onclick to closeNav()
        document.getElementById("hamburger").onclick = closeNav;

        // Prevent scrolling
        $(window).disablescroll();
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        
        // Change X to hamburger
        document.getElementById("hamburger-img").src = ("static/hamburger.png");

        // Change onclick to openNav()
        document.getElementById("hamburger").onclick = openNav;

        // Allow scrolling
        $(window).disablescroll("undo");

    }