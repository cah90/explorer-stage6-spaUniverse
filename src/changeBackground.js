export function changeBackground(pathname) {
  const home = document.querySelector("#home")
  const universe = document.querySelector("#universe")
  const exploration = document.querySelector("#exploration")

  const body = document.querySelector("#body")


  if(home.pathname == pathname) {
    home.classList.add("active")
    universe.classList.remove("active")
    exploration.classList.remove("active")

    body.classList.add("home")
    body.classList.remove("universe")
    body.classList.remove("exploration")

  } else if(universe.pathname == pathname) {
    universe.classList.add("active")
    home.classList.remove("active")
    exploration.classList.remove("active")

    body.classList.remove("home")
    body.classList.remove("exploration")
    body.classList.add("universe")
    
  } else {
    exploration.classList.add("active")
    universe.classList.remove("active")
    home.classList.remove("active")

    body.classList.remove("home")
    body.classList.remove("universe")
    body.classList.add("exploration")
  }
}