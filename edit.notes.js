const notetitle=document.querySelector("#note-title")
const notebody=document.querySelector("#note-body")
let notes = getNoteslocalstorage()
console.log(notes)
let note=notes.find(function(note){
    return  note.id == location.hash.substring(1)
})

   if (note != undefined){
     notetitle.value=note.title
     notebody.value=note.body 
     saveNotesLocalStorage(note)
    } else {
    location.assign("/index.html")
    } 

   notetitle.addEventListener('input',function(e){
   note.title= e.target.value
   saveNotesLocalStorage(notes)
 })
   notebody.addEventListener('input',function(e){
    note.body= e.target.value
    saveNotesLocalStorage(notes)
  })
    

