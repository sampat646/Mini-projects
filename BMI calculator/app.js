const  form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please provide a valid height";
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please provide a valid weight"; 
        
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.5){
        result.innerHTML = `Your BMI under weight range ${bmi}`;
        }else if(bmi >= 18.5 && bmi <= 24.9){
            result.innerHTML = `Your BMI is normal weight range ${bmi}`;
            
        }else if(bmi >= 25 && bmi <= 29.9){
            result.innerHTML = `Your BMI is overweight range ${bmi}`;
        }else if(bmi >= 30){
            result.innerHTML = `Your BMI is obese range ${bmi}`;
        }else{
            result.innerHTML = `Your BMI is very obese range ${bmi}`;
        }
    }
    
});
