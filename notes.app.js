let notes=[]
notes.push(getNoteslocalstorage())
let filter={
  search: ""
}
console.log(notes)
document.querySelector("#make").addEventListener('click',function(e){
   const noteid=uuidv4() 
   notes.push({id:noteid ,title: '',body:''})
   saveNotesLocalStorage(notes)
   location.assign(`/note.html#${noteid}`)
   updatedNotes(notes,filter)
})


 document.querySelector("#search-text").addEventListener('input',function(e){
    filter.search=e.target.value
     updatedNotes(notes,filter)
 })

 document.querySelector("#del-but").addEventListener('click',function(e){
       const paras= document.querySelectorAll(".addnote")
        paras.forEach(function(para) {
          para.remove()
        })
        localStorage.clear()
        notes=[] 
        updatedNotes(notes,filter)   
})

