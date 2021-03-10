let su=0;
function check()
{
    let s=0;let t;
    
    const one=document.quiz.q1.value;
    const two=document.quiz.q2.value;
    const three=document.quiz.q3.value;
    const four=document.quiz.q4.value;
    const five=document.quiz.q5.value;
    const six=document.quiz.q6.value;
    const seven=document.quiz.q7.value;
    const eight=document.quiz.q8.value;
    const nine=document.quiz.q9.value;
    const ten=document.quiz.q10.value;

    const choice=[one,two,three,four,five,six,seven,eight,nine,ten];
    const ans=["b","c","d","c","b","a","a","c","a","a"];

    for(let i=0;i<10;i++)
    {
        if(choice[i]==ans[i])
        {
        s=s+1;
        console.log("1");
        }

        else if(choice[i]=="")
        {
        s+=0;
        console.log("0");
        }

        else 
        {
        s=s-1;
        console.log("-1");
        }
    }

    // let f=0;
    // if(one=="b"){s++;f=1}

    // if(two=="c"){s++;f=1}
    // if(three=="d"){s++;f=1}
    // if(four=="c"){s++;}
    // if(five=="b"){s++;}
    // if(six=="a"){s++;}
    //  if(seven=="a"){s++;}
    //  if(eight=="c"){s++;}
    //  if(nine=="a"){s++;}
    //  if(ten=="a"){s++;}

     
    
    console.log(`Your score is ${s}`);
    su=s;
    a=document.querySelector('.modal-body');
if(su>=5)
{
// a.innerText=`Well done! Your score is ${su}`;

a.insertAdjacentHTML("afterbegin", ` <h1> Well done, your score is ${su}!!</h1> `);
a.insertAdjacentHTML("afterbegin", " <img src='tenor.gif'> ");
}
else
{
    a.insertAdjacentHTML("afterbegin",` <h1>Sorry better luck next time! Your score is ${su} :( </h1>`);
    
    a.insertAdjacentHTML("afterbegin", " <img src='gy.gif' width=350px> ");
}
}



const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

