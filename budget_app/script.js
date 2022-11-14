//create initial references

let totalAmount=document.querySelector(".total-amount");
let productAmount=document.querySelector(".product-amount");

const checkAmountButton=document.getElementById("btn__amount");
const budgetButton=document.getElementById("btn__budget");

const productTitle=document.querySelector(".product-title");

const errorMessage=document.getElementById("budget-error");



const budgetAmount=document.getElementById("budget__amount");

const balanceAmount=document.querySelector(".balance__amount");

const expenseAmount=document.querySelector(".expense__amount");

const list=document.querySelector(".item__list");


let tempAmount=0

//function to SET BUDGET
budgetButton.addEventListener("click", () => {
    tempAmount=totalAmount.value;
    //empty or negative button
    if (tempAmount=="" || tempAmount<0){
        errorMessage.classList.remove("hide");
    }else{
        errorMessage.classList.add("hide");
        //set budget
        budgetAmount.innerHTML=tempAmount;

        //set balance
        balanceAmount.innerText=tempAmount-expenseAmount.innerText;

        //clear input box
        totalAmount.value="";
    }
});

//function to disable edit and delete button
// const disableButtons=(bool) => {
//     let editButtons=document.getElementsByClassName("edit");
//     Array.from(editButtons).forEach((element) => {
//         element.disabled=bool;
//     })
// }

//function to modify list elements

const modifyElement=(element,edit=false) =>{
    let parentDiv=element.parentElement;
    let currentBalance=balanceAmount.innerText;
    let currentExpense=expenseAmount.innerText;
    let parentAmount=parentDiv.querySelector(".total-amount");

    if (edit){
        let parentText=parentDiv.querySelector(".")
    }
}