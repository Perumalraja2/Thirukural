 

let conT = document.createElement('div')
conT.className='container'
conT.innerHTML=`<div class="input-group">
  <input type="Number" class="form-control" id ="inputvalue" placeholder="Enter Thirukural number" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
</div>`
document.body.append(conT)

let final = document.getElementById('button-addon2')
let thirunum = document.getElementById("inputvalue").value
console.log(thirunum)


let display = document.createElement('div')
display.className='thiruvalluvar'



final.addEventListener('click',()=>{    
let thirunum = document.getElementById("inputvalue").value
conT.append(display)

 async function thirukural() {

if((thirunum<=1330) && (thirunum>=1)){

    try{
     var data = await fetch(`https://api-thirukkural.vercel.app/api?num=${thirunum}`)
     var result = await data.json()
     console.log(result)
     console.log(result.line1)
      console.log(result.line2)
       console.log(result.tam_exp)
console.log(result.sect_tam)










display.innerHTML=`<div class="card mb-3" style="">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://m.media-amazon.com/images/I/71XD7noX4uL.jpg" class="img-fluid rounded-start" id ="img1"alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Thirukural No ${thirunum}</h5>
        <p class="card-text">${result.sect_tam}</p><hr>
        <p class="card-text">"${result.line1}<br>${result.line2}"</p><hr>
        <p class="card-text">${result.tam_exp}</p><hr>
        <p class="card-text" id = "las"><small class="text-muted">-திருவள்ளுவர் </small></p>
      </div>
    </div>
  </div>
</div>`
console.log(thirunum)


}catch (error)
{
    console.log(error)
}

}

else
{
    alert("please Enter Number between 1 to 1330")
}











}
 thirukural()
 })
// async ()=> {
//      var data = await fetch("https://api-thirukkural.vercel.app/api?num=3")
//      var result = await data.json()
//      console.log(result)
//  }
//  thirukural()
