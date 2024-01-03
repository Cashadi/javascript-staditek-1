function handleSubmit() {
  var parentData = document.getElementById("list--content");
  var dataTittle = document.getElementById("tittleTask").value;
  var dataCategories = document.getElementById("categories").value;
  let idMathRandom = Math.random()
  let editMathRandom = Math.random()

  // tambahkan pembungkus div
  var showDiv = document.createElement("div")
  showDiv.classList.add("wrapper")
  showDiv.classList.add("row")
  showDiv.classList.add("justify-content-between")
  showDiv.classList.add("min-vw-100")
  showDiv.classList.add("align-items-center")
  showDiv.setAttribute("id", idMathRandom)
  parentData.appendChild(showDiv)

  var showTittle = document.createElement("div");
  showTittle.classList.add("col-lg-8");
  showTittle.classList.add("d-flex");
  showTittle.classList.add("gap-5");
  showTittle.classList.add("align-items-center");
  showDiv.appendChild(showTittle)
  // pembungkusan

  // menambahkan container div checkbox, title, categories
  var inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.classList.add("line--trough")
  showTittle.appendChild(inputCheckbox);

  var inputTittle = document.createElement("span");
  inputTittle.setAttribute("id", editMathRandom)
  inputTittle.innerHTML = dataTittle;
  showTittle.appendChild(inputTittle);
  
  // input title task dan nampilkan
  
  // input categories task dan nampilkan
  var inputCategories = document.createElement("span");
  inputCategories.innerHTML = dataCategories;
  inputCategories.classList.add("p-16")
  showTittle.appendChild(inputCategories);

  // parentData.appendChild(showTittle);
  // showTittle.innerHTML = dataTittle
  // parentData.appendChild(showTittle)

  // menambahkan icon
  var showicons = document.createElement("div");
  showicons.classList.add("col-lg-3");
  showicons.classList.add("d-flex");
  showicons.classList.add("gap-5");
  showDiv.appendChild(showicons)

  var iconsPencil = document.createElement("i");
  iconsPencil.classList.add("fas");
  iconsPencil.classList.add("fa-pencil-alt");
  iconsPencil.onclick = function () {
    editList(editMathRandom)
  }
  showicons.appendChild(iconsPencil);


  var iconsTrash = document.createElement("i");
  iconsTrash.classList.add("fas");
  iconsTrash.classList.add("fa-trash");
  iconsTrash.onclick = function () {
    deleteList(idMathRandom)
  }
  // membuat id button--delete
  iconsTrash.setAttribute("id", "buttonDelete")
  showicons.appendChild(iconsTrash);

  // parentData.appendChild(showicons);

  // hapus list task
  // var buttonDelete = document.getElementById("buttonDelete")
  // buttonDelete.onclick = function () {
  //   deleteList("buttonDelete", idMathRandom)
  // }

  // // styling span
  // var styling_span = document.getElementsByClassName("p-16")
  // styling_span.style.padding = "16px"
  // styling_span.style.backgroundColor = "#0077b6"
  // styling_span.style.borderRadius = "10px"
}

function editList(editMathRandom) {
  var buttonEdit = document.getElementById(editMathRandom)

  buttonEdit.innerText = prompt("Masukkan yang diinginkan")
}

function deleteList(idMathRandom) {
  var buttonDeletee = document.getElementById(idMathRandom) 
  
  buttonDeletee.remove()
}
