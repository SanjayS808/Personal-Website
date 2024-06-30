document.addEventListener("DOMContentLoaded", function () {
    const defaultStylesheet = document.getElementById("default-stylesheet");
    const alternateStylesheet = document.getElementById("alternate-stylesheet");
    const toggleButton = document.getElementById("toggle-styles");

    toggleButton.addEventListener("click", function () {
        if (defaultStylesheet.disabled) {
            defaultStylesheet.disabled = false;
            alternateStylesheet.disabled = true;
        } else {
            defaultStylesheet.disabled = true;
            alternateStylesheet.disabled = false;
        }
    });
});