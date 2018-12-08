let notes = getNoteslocalstorage()
let filter={
  search: ""
}

document.querySelector("#input").addEventListener('submit',function(e){
   e.preventDefault()
   notes.push({id:uuidv4() ,title: e.target.elements.mynote.value,body:""})
    saveNotesLocalStorage(notes)
    updatedNotes(notes,filter)
    e.target.elements.mynote.value=''
   })
 updatedNotes(notes,filter)

 document.querySelector("#search-text").addEventListener('input',function(e){
    filter.search=e.target.value
    updatedNotes(notes,filter)
 })

 document.querySelector("#del-but").addEventListener('click',function(e){
       const paras= document.querySelectorAll(".note")
        paras.forEach(function(para) {
          para.remove()
        })
        localStorage.clear()
        notes=[] 
        updatedNotes(notes,filter)   
})
