export function changeBackground(pathname) {
  const home = document.querySelector("#home")
  const universe = document.querySelector("#universe")
  const exploration = document.querySelector("#exploration")

  const body = document.querySelector("#body")

  // if(home.pathname == pathname) {
  //   home.classList.add("active")
  //   universe.classList.remove("active")
  //   exploration.classList.remove("active")

  //   body.classList.add("home")
  //   body.classList.remove("universe")
  //   body.classList.remove("exploration")

  // } else if(universe.pathname == pathname) {
  //   universe.classList.add("active")
  //   home.classList.remove("active")
  //   exploration.classList.remove("active")

  //   body.classList.remove("home")
  //   body.classList.remove("exploration")
  //   body.classList.add("universe")

  // } else {
  //   exploration.classList.add("active")
  //   universe.classList.remove("active")
  //   home.classList.remove("active")

  //   body.classList.remove("home")
  //   body.classList.remove("universe")
  //   body.classList.add("exploration")
  // }

  const navigationItems = [home, universe, exploration]


  // see here
  // https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript

  for (const item of navigationItems) {
    item.classList.remove('active')

    // we take advantage here of the fact that the id (#) of each navigation item
    // is equal with the class that we activate or deactivate on body
    // For example, if we click on link with id='home' we need to add class home (same string as the id)
    // to body, and remov ethe others

    //console.log('id is')
    //console.log(item.id)

    // first we remove all classes from the body
    body.classList.remove(item.id)

  }

  for (const item of navigationItems) {
    if (item.pathname == pathname) {
      item.classList.add('active')
      body.classList.add(item.id)
    }
  } /// for


}
