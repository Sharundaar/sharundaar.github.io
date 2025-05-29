const article_dropdown_state_item = "article-dropdown-state";
function dropdown_sate(new_state) {
    const state = localStorage.getItem(article_dropdown_state_item) === "true";
    if (new_state === true || new_state === false)
    {
        localStorage.setItem(article_dropdown_state_item, new_state ? "true" : "false");
        return new_state;
    }
    return state;
}

var collapsible = document.getElementById("article-collapse");
if(collapsible)
{
    collapsible.addEventListener("hide.bs.collapse", function() {
        dropdown_sate(false);
    });
    collapsible.addEventListener("show.bs.collapse", function() {
        dropdown_sate(true);
    });
    
    var btn = document.getElementById("article-btn");
    if (!dropdown_sate())
    {
        btn.setAttribute("aria-expanded", "false");
        collapsible.classList.remove("show");
    }
}

// Fix offcanvas scroll position when exiting sidebar
document.addEventListener('hidden.bs.offcanvas', function () {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    el.scrollIntoView({ behavior: 'instant' });
  }
});
