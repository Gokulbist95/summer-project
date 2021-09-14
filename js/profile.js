const order1 = document.querySelector('.order');
const profile = document.querySelector('.e-profile');
const psw = document.querySelector('.psw');
const refer1 = document.querySelector('.refer1');

const order = document.querySelector('.my-order');
const uProfile = document.querySelector(".profile");
const changePsw = document.querySelector('.change-psw');
const refer = document.querySelector('.refer');

order1.addEventListener('click',()=>{
    order1.classList.add('active');
    profile.classList.remove('active');
    psw.classList.remove('active');
    refer1.classList.remove('active');

    order.classList.remove('hide');
    uProfile.classList.add('hide');
    changePsw.classList.add('hide');
    refer.classList.add('hide');
});

profile.addEventListener('click',()=>{
    profile.classList.add('active');
    order1.classList.remove('active');
    psw.classList.remove('active');
    refer1.classList.remove('active');

    order.classList.add('hide');
    uProfile.classList.remove('hide');
    changePsw.classList.add('hide');
    refer.classList.add('hide');

});

psw.addEventListener('click',()=>{
    order1.classList.remove('active');
    profile.classList.remove('active');
    psw.classList.add('active');
    refer1.classList.remove('active');

    order.classList.add('hide');
    uProfile.classList.add('hide');
    changePsw.classList.remove('hide');
    refer.classList.add('hide');
});

refer1.addEventListener('click',()=>{
    profile.classList.remove('active');
    psw.classList.remove('active');
    order1.classList.remove('active');
    refer1.classList.add('active');

    refer.classList.remove('hide');
    uProfile.classList.add('hide');
    changePsw.classList.add('hide');
    order.classList.add('hide');
});
