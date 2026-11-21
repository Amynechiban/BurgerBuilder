
const boxes = document.querySelectorAll('input[name="extras"]');
for (const box of boxes) {
    const boxLayer = document.querySelector(`.${box.id}`);
    box.addEventListener('click', function () {
        if (box.checked){
            boxLayer.classList.remove('hidden');
        }else{
            boxLayer.classList.add('hidden');
        }
    });
}
const chickenRadio = document.querySelector('input[id="chicken"]');
const beefRadio = document.querySelector('input[id="beef"]');

const chickenLayer = document.querySelector('.chicken');
const beefLayer = document.querySelector('.beef');

function updateMeat(){
    if (chickenRadio.checked){
        chickenLayer.classList.remove('hidden');
        beefLayer.classList.add('hidden');
    }else{
        beefLayer.classList.remove('hidden');
        chickenLayer.classList.add('hidden');
    }
}
chickenRadio.addEventListener('change',updateMeat);
beefRadio.addEventListener('change', updateMeat);
updateMeat();

const classicRadio = document.getElementById('classic');
const sesameRadio = document.getElementById('sesame');

const classicLayer = document.querySelector('.bun-top.classic');
const sesameLayer = document.querySelector('.bun-top.sesame');

function updateBread(){
    if (classicRadio.checked){
        classicLayer.classList.remove('hidden');
        sesameLayer.classList.add('hidden');
    }else{
        sesameLayer.classList.remove('hidden');
        classicLayer.classList.add('hidden');
    }
}

classicRadio.addEventListener('change',updateBread);
sesameRadio.addEventListener('change', updateBread);
updateBread();

function updateTotal(){
    const bread = document.querySelector('input[name="bread"]:checked');
    const breadprice = Number(bread.value);

    const meat = document.querySelector('input[name="meat"]:checked');
    const meatPrice = Number(meat.value);

    const extras = document.querySelectorAll('input[name="extras"]:checked');
    let extrasprice = 0;
    for (const extra of extras){
        extrasprice += Number(extra.value);
    }
    const quantity = Number(document.getElementById('quantity').value);
    let total = (breadprice+meatPrice+extrasprice)*quantity;
    document.getElementById('total').textContent = total;
}

const form = document.getElementById('burger-form');
form.addEventListener('input',updateTotal);
form.addEventListener('change',updateTotal);
updateTotal();
