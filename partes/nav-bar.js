function mostrarNavBar() {
  const nav = document.getElementById("nav_bar");

  nav_bar.innerHTML = `<div class="nav-bar-part-1">
        <img
          src="./icons/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
          alt=""
        />
      </div>

      <div class="nav-bar-part-2">
        <p>MJA Store</p>
      </div>`;
}

window.addEventListener("DOMContentLoaded", () => {
  mostrarNavBar();
});
