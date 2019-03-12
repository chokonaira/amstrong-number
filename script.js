//Select and assign div with the following HTML attributes to a variable
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const message = document.querySelector('.message')

const validateInput = (e) => {
  // Replace all character apart from digits with an empty string
  let text = input.value.replace(/\D+/, '');
  // Only take the first 3 digits using the JS string slice method
  input.value = text.slice(0, 3);
  //check if length of digits is not upto 3
  if (input.value.length !== 3) {
    //if true, button should remain deactivated
    button.className = 'is-deactivated';
  } else {
     //if true, is-deactivated property should be removed
    button.className = '';
  }
  //If Enter key is clicked
  if (e.keyCode === 13) {
    //Check button should also respond to a click event
   checkInput();
  } else {
    // Hide and reset the div content to an empty string
    message.style.display = 'none'; 
    message.textContent = '';
  }
}

//funtion runs if the check button or key 13 is clicked
const checkInput = () => {
  //convert input value to string 
  let num = input.value.toString();
  //check lenght of input value 
  if (num.length === 3) {
    //if true, is-deactivated property should be removed and result displayed 
    button.className = '';
    message.style.display = 'block';
    //check sum of each digit raised to the power of 3 is equal to the inputed digits
    if (Math.pow(num[0],3) + Math.pow(num[1],3) + Math.pow(num[2], 3) == num) {
      //if true, display result thus
      message.textContent = `${num} is an Armstrong number since 
      ${num[0]}**3 + ${num[1]}**3 + ${num[2]}**3 = ${num}`;
      message.className = 'message';
    } else {
      //if false, display result thus
      message.textContent = `${num} is not an Armstrong number since 
      ${num[0]}**3 + ${num[1]}**3 + ${num[2]}**3 != ${num}`;
      message.className = 'message has-error';
    }
  } else {
    //Return elements with its respective properties
    button.className = 'is-deactivated';
    message.textContent = 'Please enter a number of three digits';
    message.className = 'message has-error';
    message.style.display = 'block';
  }
}
//Run Validateinput fuction if there is keyup event in the input field
input.addEventListener('keyup', validateInput);
