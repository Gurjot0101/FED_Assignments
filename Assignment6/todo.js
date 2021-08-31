//-----------------date
let current = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let time = days[current.getDay()] + ", " + current.getDate() + " " + month[current.getMonth()];

document.getElementById('date').innerHTML = time;


//-----------------todo starts
const input = document.querySelector('input');
const list = document.getElementById('list');
const addb = document.querySelector('#addbtn');


//----------add with enter key
input.addEventListener('keypress', (e) => {
    if (e.which === 13) {
        if (input.value === "") {

            alert("Add something to do!");

        } else {

            add();

        }
    }
})

//----------add with + button
addb.addEventListener('click', () => {
    if (input.value === "") {

        alert("Add something to do!");

    } else {

        add();

    }
})

//--------Adding to list
function add() {
    const todoinput = input.value;
    const li = document.createElement('li');

    //----------Items to be added in list <li>
    li.innerHTML = `
            <div class="container">

                <label id="text">
                    ${todoinput}
                </label>

                <span class="down">
                    <button onclick="movedown(event)" type="button" class="btn btn-outline-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                    </button>
                </span>

                <span class="up">
                    <button onclick="moveup(event)" type="button" class="btn btn-outline-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"></path>
                            <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path>
                        </svg>
                    </button>
                </span>
                
                <span class="delete">
                    <button onClick="del(event)" type="button" class="btn btn-outline-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"></path>
                        </svg>
                    </button>
                </span>
                
                <span class="edit">
                    <button onClick="upd(event)" type="button" class="btn btn-outline-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                        </svg>
                    </button>
                </span>
                
            </div>      
                        `;

    //-------------adding li to ul
    list.append(li);

    //-------------reset input box
    input.value = "";
}

//------------update function
function upd(event) {
    let a = event.target;
    let t = a.closest('li');
    let textElement = t.childNodes[1].childNodes[1];
    let editedtext = prompt("EDIT Exercise");
    if (editedtext === "") {
        return;
    } else {
        textElement.innerHTML = editedtext;
    }
}

//------------delete function
function del(event) {
    let a = event.target;
    let b = a.closest('li');
    b.remove();
}

//-------------priority up function
function moveup(event) {
    let a = event.target;
    let b = a.closest('li');
    let node = b.previousSibling;
    if (node === null) {
        alert("Already at top");
    } else {
        list.insertBefore(b, node);
    }
}

//-------------priority down function
function movedown(event) {
    let a = event.target;
    let b = a.closest('li');
    let node = b.nextSibling;
    if (node === null) {
        alert("Already at bottom");
    } else {
        list.insertBefore(node, b);
    }
}