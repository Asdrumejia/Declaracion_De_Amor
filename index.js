const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function(){

    alert('Sabia que ibas a decir que si')
    alert('Me haces muy feliz')
})



const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click', function(){
   const randomnX = parseInt(Math.random()*100)
   const randomnY = parseInt(Math.random()*100)

   noBtn.style.setProperty('top', randomnX + '%')
   noBtn.style.setProperty('left', randomnY + '%')

   noBtn.style.setProperty('transform', 'translante(-${randomnX}%, -${randomnY}% )');
})