window.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#form1");
  
    form.addEventListener("submit", function (e) {
      let title = document.querySelector("#title").value;
      let author = document.querySelector("#author").value;
      let isbn = document.querySelector("#isbn").value;
      addBookToList(title, author, isbn); //addBookToList() will create a new row in the table and insert title author and isbn there in the row
  
      e.preventDefault();
    });
  
    function addBookToList(t, a, i) {
      if (t === "" || a === "" || i === "") {
        showAlert("Please Fill In All Required Areas", "error");
      } else {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td><td><button>X</button></td>`;
        // append the newly created row in the table body with id book-list
        document.querySelector("#book-list").appendChild(row);
        clearFields();
        showAlert("Book successfully added!", "success");
      }
    }
  
    function clearFields() {
      document.querySelector("#title").value = "";
      document.querySelector("#author").value = "";
      document.querySelector("#isbn").value = "";
    }
  
    function showAlert(m, c) {
      let div = document.createElement("div");
      div.innerText = m;
      div.className = c;
      div.id = "box";
      document.querySelector("#notification").appendChild(div);
      // after 3 seconds remove this box...
      this.setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }


    this.document.querySelector("#data").addEventListener("click", function(e) {
      deleteBook(e.target);
    });

    function deleteBook(elemToDelete){
      if (elemToDelete.className === "delete") {
        elemToDelete.parentElement.remove();
      } else{
        console.log("Wrong Area")
      }
    }
    
});