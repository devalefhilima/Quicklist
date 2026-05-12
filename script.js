const form = document.querySelector("form")
const valueInput = document.getElementById("item-input")
const buttonDelete = document.getElementById("delete-button")
let list = document.querySelector(".list")


form.addEventListener("submit", (event) => {
  event.preventDefault()

  const itemName = valueInput.value.trim()

  if (itemName === "") {
    alert("Por favor, insira um item.")

    return
  }

  const listItem = document.createElement("li")

  listItem.innerHTML = `
    <div class="item-content">
      <input type="checkbox">
      <label>${itemName}</label>
    </div>

    <button class="delete-button" type="button" aria-label="Remover item">
      <img src="./assets/Frame-3.svg" alt="Remover item">
    </button>
  `

  list.prepend(listItem)

  valueInput.value = ""

})

list.addEventListener("click", (event) => {
  const clickedElement = event.target

  const isDeleteButton = clickedElement.closest(".delete-button")

  if (isDeleteButton) {
    const item = isDeleteButton.closest("li")

    item.remove()
  }
  
})


