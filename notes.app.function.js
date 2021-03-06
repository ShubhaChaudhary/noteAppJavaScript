// getting saved notes from localstorage
let getNoteslocalstorage= function(){
const notesJson=localStorage.getItem("notes")
if (notesJson != null){
    return JSON.parse(notesJson)
}else {
    return []
}
}
// saving notes to local storage

let saveNotesLocalStorage=function(notes){
    return localStorage.setItem("notes",JSON.stringify(notes))
}
// update notes
let updatedNotes=function(notes,filter){

    document.querySelector(".para").innerHTML=''
    return notes.forEach(function(note){

   if (note.title.toLowerCase().includes(filter.search.toLowerCase()))
   document.querySelector(".para").appendChild(domElement(note))
})
}
// remove note
let removenote=function(id){
    let noteindex=notes.findIndex(function(note){
         return (note.id == id)
    })
    if (noteindex > -1)
    notes.splice(noteindex,1)
}    
// creating DOM element
let domElement=function(note){
    const div=document.createElement('div')
    const p1=document.createElement('span')
    const button= document.createElement('button')
    const a=document.createElement('a')
    div.className="addnote"
    
    // appending the button
    button.textContent="delete"
    button.addEventListener('click',function(e){
        removenote(note.id)
        saveNotesLocalStorage(note)
        updatedNotes(notes,filter)
    })
    div.appendChild(button)
    // APPENDING the anchor tag

    a.setAttribute('href',`/note.html# ${note.id}`)
note.title.length !=0? a.textContent=note.title : a.textContent='undefined note'
    
    div.appendChild(a)
    return div
}