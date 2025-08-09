let formication= document.getElementById('formication');

let petname= document.getElementById('petname'); 

let emiliamernes= document.getElementById('emiliamernes'); 

let cellphone_number= document.getElementById('cellphone_number'); 

let aboutme= document.getElementById('aboutme'); 

let submitiado= document.getElementById('submit'); 


formication.addEventListener('submit', function(event) { 

    if(petname.value === '' || emiliamernes.value === '' || cellphone_number.value === '' || aboutme.value === '') { 
       
        event.preventDefault(); 

        alert('please, mademoiselle, fill all the blanks before continuing');
    
    }

    
    const number_cellphone= /^3\d{9}$/; 
    
    if(!number_cellphone.test(cellphone_number.value)) { 
        
        alert('mademoiselle, please enter a valid cellphone number');  
        
        return; 
    
    }

    
    const emiliamami= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    
    if(!emiliamami.test(emiliamernes)) {  
        
        alert('mademoiselle, please insert a valid email'); 
        
        return;  
    
    }

    
    if(mensaje.length < 20) {
        
        alert('mademoiselle, please insert at least 20 characters');  
        
        return;  
    
    }
}

);
