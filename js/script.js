//tabs------------------------------------
const tabTarget = document.querySelectorAll('.city_targets_item');
const tabContent = document.querySelectorAll('.city_content_item');

const removeAtive = ()=>{
   tabTarget.forEach(item => {
      item.classList.remove('active')
   })
   tabContent.forEach(item => {
      item.classList.remove('active')
   })
}

tabTarget.forEach((item, index) => {
   item.addEventListener('click', ()=>{
      removeAtive();

      item.classList.add('active');

      tabContent[index].classList.add('active');
   })
})

//input select----------------------------------------------
$(".payment").select2({});

//input number-------------------------------------------------------
const numUp = document.querySelectorAll('.num_up');
const numDown = document.querySelectorAll('.num_down');
const headerNum = document.querySelectorAll('.header_num');

numUp.forEach((item, index) => {
   item.addEventListener('click', () => {
      headerNum[index].value ++
   })
})

numDown.forEach((item, index) => {
   item.addEventListener('click', () => {
      headerNum[index].value --
   })
})

