const logoutButton = document.querySelector("#logout");
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};
if (logoutButton != null) {
  logoutButton.addEventListener("click", logout);
}
