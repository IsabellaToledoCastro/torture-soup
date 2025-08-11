document.addEventListener('DOMContentLoaded', function () {

    let form = document.getElementById('formication');

    let petname = document.getElementById('petname');

    let emiliamernes = document.getElementById('emiliamernes');

    let cellphone_number = document.getElementById('cellphone_number');

    let aboutme = document.getElementById('aboutme');

    formication.addEventListener('submit', function (event) {

        let errores = [];

        let botonDedisparo = event.submitter.id;


        function validarFormulario() { 

            if (petname.value.trim() === '' || emiliamernes.value.trim() === '' || cellphone_number.value.trim() === '' || aboutme.value.trim() === '') { 
                errores.push('please, mademoiselle, fill all the blanks before continuing'); 
            }

        const number_cellphone = /^3\d{9}$/; 

            if (!number_cellphone.test(cellphone_number.value.trim())) {
                errores.push('mademoiselle, please enter a valid cellphone number');
            }


        const emiliamami = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emiliamami.test(emiliamernes.value.trim())) {
                errores.push('mademoiselle, please insert a valid email');
            }

            
            if (aboutme.value.trim().length < 20) {
                errores.push('mademoiselle, please insert at least 20 characters');
            }
        
        }

        
        function validarChecklist() { 
            
            
            let checkboxes = document.querySelectorAll('input[name="checklist"]');
            
            let checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
            
            let totalCheckboxes = checkboxes.length;

            
            if (checkedCount === 0) {
                errores.push('we need a suitable lady, not you');
            }
            
            if (checkedCount === 2) {
                errores.push('we think you are far from being a good lady');
            }
            
            if (checkedCount === 4) {
                errores.push('almost a good lady, but not enough');
            }
            
            if (checkedCount === 6) {
                errores.push('we desire you, pretty sissy. Join us and let us give you love and care');
            }
            
            if (checkedCount === totalCheckboxes) {
                errores.push('we are about to collar you, mademoiselle');
            }
        
        }

    
        if (botonDedisparo === 'submit') {
            validarFormulario();
        }
        else if (botonDedisparo === 'submit2') {
            validarChecklist();
        }

        
        
        if (errores.length > 0) {
            errores.forEach(msg => alert(msg));
            event.preventDefault();
        }
    });
}); 
