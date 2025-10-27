let firstInput = document.querySelector("#first-input") as HTMLInputElement;
let secondInput =document.querySelector("#second-input") as HTMLInputElement;
let screen = document.querySelector(".screen");

function addNumbers(a:number,b:number){
   if (screen) {
      screen.innerHTML = (a+b).toString();
   }
}

let result = 
document.querySelector(".button")?.addEventListener("click",function(){
 addNumbers(parseInt(firstInput.value),parseInt(secondInput.value))
})


// the function to display review total

const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]


let showReviews = (values:number,review:string, isLoyal:boolean)=>{
    if(reviewTotalDisplay){
        if(isLoyal){
          reviewTotalDisplay.innerHTML ="the reviews are: "+ values.toString()+" | " +review +" 💫";
        }else{
           reviewTotalDisplay.innerHTML ="the reviews are: "+ values.toString()+" | " +review +" 💫" 
        }
        
    }
}

const firstReview =reviews[0];
if(firstReview){
    showReviews(reviews.length,firstReview.name,firstReview.loyaltyUser);
}