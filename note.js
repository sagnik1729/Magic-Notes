// console.log("heyits running");



let addBtn = document.getElementById("addBtn");
showNotes();
addBtn.addEventListener("click", function (e) {
    let textNote = document.getElementById("textNote");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);

    }
    notesObj.push(textNote.value);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    textNote.value = "";
    // console.log(notesObj);
    showNotes();


})

// fuction for showing notes in the card boxes;
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);

    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="Notecard my-2 mx-2" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p  class="card-text">${element}</p>
                    <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)">Delete Note</button>
                </div>
            </div>
        
        `

    });
    // console.log(html);
    let Mynotes = document.getElementById("notes");
    if (notesObj.length == 0) {
        Mynotes.innerHTML = "<b> No notes are added here</b>"
    }
    else {
        Mynotes.innerHTML = html;
    }


}

// Function for deleting notes

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);

    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

let search=document.getElementById("searchItem");
search.addEventListener("input",function(){
    let inputVal=search.value;
    let find=document.getElementsByClassName("Notecard");
    Array.from(find).forEach(function(element){
        let mainText=element.getElementsByTagName("p")[0].innerText;
        if(mainText.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";

        }

    //    console.log(mainText);

    })





})
