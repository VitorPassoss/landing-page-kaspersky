function modal(indice){   
    if(indice == 1){
        let card3 =  document.querySelector('.card3')
        let listitem = document.querySelectorAll('.list-item')
        let more = document.querySelectorAll('.sabermais')
      
        if(more[0].innerText == 'Fechar'){
            more[0].innerText = 'Saber Mais'
        }
        console.log(listitem[0].style.display)
            if(listitem[0].style.display == 'initial'  || listitem[0].style.display == '' || listitem[0].style.display != 'none' || listitem[0].style.display == null){
                
                listitem[0].style.display = 'none'
                card3.style.height = '290px'
                
            }else if(listitem[0].style.display == 'none' || listitem[0].style.display == '' || listitem[0].style.display != 'initial' || listitem[0].style.display == '<empty string>' ){
                listitem[0].style.display = 'initial'
                card3.style.height = '654px'
                let more = document.querySelectorAll('.sabermais')
                if(more[0].innerText == 'Saber Mais'){
                    more[0].innerText = 'Fechar'                    
                }               
            }         
    }   
    if(indice == 2){
        let card2 = document.querySelectorAll('.card2')
        let listitem = document.querySelectorAll('.list-item')
        let more = document.querySelectorAll('.sabermais')
        if(more[1].innerText == 'Fechar'){
            more[1].innerText = 'Saber Mais'
        }

      if(listitem[1].style.display == 'initial'  || listitem[1].style.display == '' ){
                card2[0].style.height = '290px'
                listitem[1].style.display = 'none'    
        }else if(listitem[1].style.display == 'none' || listitem[1].style.display == '') {
               card2[0].style.height = '930px'
               card2[0].style.display = 'initial'
               listitem[1].style.display = 'initial' 
               if(more[1].innerText == 'Saber Mais'){
                more[1].innerText = 'Fechar'
            }
           
        }
        
        
    }

    if(indice == 3){
        let card2 = document.querySelectorAll('.card2')
        let listitem = document.querySelectorAll('.list-item')
        let more = document.querySelectorAll('.sabermais')
        if(more[2].innerText == 'Fechar'){
            more[2].innerText = 'Saber Mais'
        }
       
        if(listitem[2].style.display == 'initial'  || listitem[2].style.display == '' ){
            card2[1].style.height = '290px'
            listitem[2].style.display = 'none'    
    }else if(listitem[2].style.display == 'none' || listitem[2].style.display == '' || listitem[2].style.display != 'initial') {
           card2[1].style.height = '930px'
           card2[1].style.display = 'initial'
           listitem[2].style.display = 'initial' 
           if(more[2].innerText == 'Saber Mais'){
            more[2].innerText = 'Fechar'
        }
            
    }



    }
    
}



function showform(){
   let form = document.querySelector('.modal-form')
  
     form.style.display = 'initial'
   
}
function exitform(){
    let form = document.querySelector('.modal-form')
      form.style.display = 'none'
    
}


function sendcrm(){
    let name = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let telefone = document.querySelector('#telefone').value
  
    if(name == '' || name == undefined || name == null){
        alert('Preencha o formulario corretamente!')
    }
}