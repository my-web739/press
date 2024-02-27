const label=document.getElementsByClassName('label')[0]
const press=document.getElementsByClassName('press')[0]

press.addEventListener('click' , ()=>{
    label.classList.add('active')
})
label.addEventListener('click', ()=>{
    label.classList.remove('active')
}
)