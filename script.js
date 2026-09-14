const products=[
 {name:"Mamavita Tavuklu Kedi Maması 15 KG",cat:"Kedi",icon:"🐱"},
 {name:"Purina Gourmet Yaş Mama",cat:"Kedi",icon:"🥫"},
 {name:"Juno Kedi Maması 2'li",cat:"Kedi",icon:"🐾"},
 {name:"Bonavita Konserve 400 G",cat:"Kedi",icon:"🥫"},
 {name:"Mamavita Köpek Maması 15 KG",cat:"Köpek",icon:"🐶"},
 {name:"Yetişkin Köpek Ödül Maması",cat:"Köpek",icon:"🦴"},
 {name:"Kuş Yemi Karışık 1 KG",cat:"Kuş",icon:"🦜"},
 {name:"Kuş Kafesi Orta Boy",cat:"Kuş",icon:"🏠"},
 {name:"Akvaryum Balık Yemi",cat:"Balık",icon:"🐠"},
 {name:"Akvaryum Dekoru",cat:"Balık",icon:"🌿"},
 {name:"Kemirgen Yemi 1 KG",cat:"Kemirgen",icon:"🐹"},
 {name:"Doğal Talaş 10 L",cat:"Kemirgen",icon:"🌾"}
];

const grid=document.getElementById("productGrid"), search=document.getElementById("search"), sort=document.getElementById("sort"), empty=document.getElementById("emptyState");
let selected="Kedi";

function render(){
 let q=search.value.trim().toLowerCase();
 let list=products.filter(p=>(selected==="Tümü"||p.cat===selected)&&(!q||p.name.toLowerCase().includes(q)));
 if(sort.value==="name") list.sort((a,b)=>a.name.localeCompare(b.name,"tr"));
 if(sort.value==="category") list.sort((a,b)=>a.cat.localeCompare(b.cat,"tr"));
 grid.innerHTML=list.map(p=>`<article class="product">
   <div class="product-img">${p.icon}</div>
   <div class="product-body">
     <div class="product-cat">${p.cat}</div>
     <h3>${p.name}</h3>
     <div class="locked"><span>🔒 Bayi fiyatı</span><b>Giriş yap</b></div>
   </div>
 </article>`).join("");
 empty.classList.toggle("hidden",list.length>0);
}
document.querySelectorAll(".category-card").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".category-card").forEach(x=>x.classList.remove("active"));
 btn.classList.add("active"); selected=btn.dataset.category; render();
 document.getElementById("urunler").scrollIntoView({behavior:"smooth",block:"start"});
}));
search.addEventListener("input",render); sort.addEventListener("change",render); render();

const modal=document.getElementById("modal"), businessField=document.getElementById("businessField");
const title=document.getElementById("modalTitle"), eyebrow=document.getElementById("modalEyebrow"), text=document.getElementById("modalText"), submit=document.getElementById("formSubmit"), foot=document.getElementById("formFoot");
let signup=false;
function openModal(mode=false){
 signup=mode; modal.classList.remove("hidden");
 eyebrow.textContent=mode?"BAYİ BAŞVURUSU":"BAYİ GİRİŞİ";
 title.textContent=mode?"Bayi hesabı için başvurun":"Bayi hesabınıza giriş yapın";
 text.textContent=mode?"İşletme bilgilerinizi bırakın. Bu demo sürümünde başvuru formu arayüzünü test edebilirsiniz.":"Onaylı bayi hesabınız varsa özel fiyatları görüntüleyebilirsiniz.";
 businessField.classList.toggle("hidden",!mode);
 submit.textContent=mode?"Başvuru Gönder":"Giriş Yap";
 foot.innerHTML=mode?`Zaten hesabınız var mı? <button type="button" id="switchMode">Giriş yapın.</button>`:`Bayi değil misiniz? <button type="button" id="switchMode">Bayi başvurusu yapın.</button>`;
 document.getElementById("switchMode").onclick=()=>openModal(!signup);
}
document.getElementById("loginBtn").onclick=()=>openModal(false);
document.getElementById("signupBtn").onclick=()=>openModal(true);
document.getElementById("ctaSignup").onclick=()=>openModal(true);
document.getElementById("priceLogin").onclick=()=>openModal(false);
document.querySelectorAll("[data-close]").forEach(x=>x.onclick=()=>modal.classList.add("hidden"));
document.getElementById("dealerForm").addEventListener("submit",e=>{
 e.preventDefault();
 alert(signup?"Başvurunuz demo olarak alındı. Gerçek bayi onayı için Supabase bağlantısı eklenmelidir.":"Bu demo sürümünde gerçek giriş yapılmaz. Gerçek bayi sistemi için Supabase bağlantısı kurulacaktır.");
});
