const allPhones = () => {
    const searchPhone = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPhone(data.data));
}

const showPhone = (phones) => {
    // console.log(phones);
    if(phones==false){
        alert('There is no phone');
    }
    let sliceArray=phones.slice(0,20);
    for (const phone of sliceArray) {
        // console.log(phone);
        const parent = document.getElementById('phone-container');
        const div = document.createElement('div');
        
        div.innerHTML = ` <div class="card shadow p-5">
<div class="pro-pic">
    <img class="w-50 ms-5" src="${phone.image}" alt="">
    <h2>Name: ${phone.phone_name}</h2>
    <h5 class="mb-4">Brand : ${phone.brand}</h5>
    
    <div class="allButtion ">
        
         <button onclick="details('${phone.slug}')" class="btn btn-success">details</button>
    </div>
    
</div>
</div>`;
        parent.appendChild(div);


    }

}

const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.data));


    // console.log(id);

}

const setDetails = (info) => {
    console.log(info);
    // console.log(info.strGender);
    const parent1 = document.getElementById('details-container');
    const div1 = document.createElement('div');
    div1.classList.add('post');

    div1.innerHTML = `
   <div class="container  px-lg-6">
   <div class="row  mx-lg-n5">

     <div class="col m-3 d-flex  py-3 px-lg-5 shadow">
     <img class="ms-4" src="${info.image}" alt=""> 
     <div><h1 class="mt-4 ms-2"> Brand:${info.brand}</h1> 
     <h2 class="mt-4 ms-2">Name: ${info.name}</h2></div>
     </div> 
     

     <div class="col m-3 py-3 px-lg-5 shadow ">
      <h1>${info.releaseDate} </h1>
     <h2>Storage: ${info.mainFeatures.storage}</h2>
     <h3>Display:${info.mainFeatures.displaySize} </h3>
     </div>

   </div>

   
 
  <div class="card shadow">
  <div class="card-body shadow">
  <h1>Sensors:${info.mainFeatures.sensors}</h1>
  </div>
  </div>


  </div>
  </div> 
    
    `;


    parent1.appendChild(div1);


    
}
