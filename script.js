// Can Dostlar Pet Tedarik - Supabase bağlantılı sürüm
// Bu anahtar Supabase Publishable Key'dir ve tarayıcıda kullanılabilir.
const SUPABASE_URL = "https://nzqoddiekzvwumhgloyn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_qX8PQlS_tgcHM2vFL3gHIA_LeWvPuyv";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

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
let currentUser=null;
let currentProfile=null;

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
     <div class="locked"><span>🔒 ${currentProfile?.approved ? "Bayi fiyatı" : "Bayi fiyatı"}</span><b>${currentProfile?.approved ? "Onaylı bayi" : "Giriş yap"}</b></div>
   </div>
 </article>`).join("");
 empty.classList.toggle("hidden",list.length>0);
}

document.querySelectorAll(".category-card").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".category-card").forEach(x=>x.classList.remove("active"));
 btn.classList.add("active"); selected=btn.dataset.category; render();
 document.getElementById("urunler").scrollIntoView({behavior:"smooth",block:"start"});
}));
search.addEventListener("input",render); sort.addEventListener("change",render);

const modal=document.getElementById("modal"), businessField=document.getElementById("businessField");
const title=document.getElementById("modalTitle"), eyebrow=document.getElementById("modalEyebrow"), text=document.getElementById("modalText"), submit=document.getElementById("formSubmit"), foot=document.getElementById("formFoot");
let signup=false;

function setMessage(message, error=false){
 let el=document.getElementById("authMessage");
 if(!el){ el=document.createElement("div"); el.id="authMessage"; el.style.cssText="margin:12px 0;padding:10px 12px;border-radius:10px;font-size:14px;line-height:1.4;"; document.getElementById("dealerForm").prepend(el); }
 el.textContent=message;
 el.style.background=error?"#fff0f0":"#eefaf1";
 el.style.color=error?"#a32121":"#176b39";
}

function openModal(mode=false){
 signup=mode; modal.classList.remove("hidden");
 eyebrow.textContent=mode?"BAYİ BAŞVURUSU":"BAYİ GİRİŞİ";
 title.textContent=mode?"Bayi hesabı için başvurun":"Bayi hesabınıza giriş yapın";
 text.textContent=mode?"İşletme bilgilerinizi bırakın. Başvurunuz yönetici onayına gönderilir.":"Onaylı bayi hesabınız varsa özel fiyatları görüntüleyebilirsiniz.";
 businessField.classList.toggle("hidden",!mode);
 submit.textContent=mode?"Başvuru Gönder":"Giriş Yap";
 foot.innerHTML=mode?`Zaten hesabınız var mı? <button type="button" id="switchMode">Giriş yapın.</button>`:`Bayi değil misiniz? <button type="button" id="switchMode">Bayi başvurusu yapın.</button>`;
 document.getElementById("switchMode").onclick=()=>openModal(!signup);
 const msg=document.getElementById("authMessage"); if(msg) msg.remove();
}

document.getElementById("loginBtn").onclick=()=>openModal(false);
document.getElementById("signupBtn").onclick=()=>openModal(true);
document.getElementById("ctaSignup").onclick=()=>openModal(true);
document.getElementById("priceLogin").onclick=()=>openModal(false);
document.querySelectorAll("[data-close]").forEach(x=>x.onclick=()=>modal.classList.add("hidden"));

async function loadProfile(user){
 currentUser=user;
 if(!user){ currentProfile=null; updateAuthButtons(); render(); return; }
 const {data,error}=await supabaseClient.from("dealer_profiles").select("business_name,approved").eq("user_id",user.id).maybeSingle();
 if(error){ console.error(error); currentProfile=null; }
 else currentProfile=data;
 updateAuthButtons(); render();
}

function updateAuthButtons(){
 const loginBtn=document.getElementById("loginBtn");
 const signupBtn=document.getElementById("signupBtn");
 if(currentUser){
   loginBtn.textContent="Çıkış Yap";
   loginBtn.onclick=async()=>{ await supabaseClient.auth.signOut(); await loadProfile(null); alert("Çıkış yapıldı."); };
   signupBtn.textContent=currentProfile?.approved?"Onaylı Bayi":"Başvuru Bekliyor";
   signupBtn.onclick=()=>{
     if(currentProfile?.approved) alert("Hesabınız onaylı. Bayi fiyatları için ürünleri inceleyebilirsiniz.");
     else alert("Bayi başvurunuz henüz yönetici tarafından onaylanmadı.");
   };
 } else {
   loginBtn.textContent="Bayi Girişi";
   signupBtn.textContent="Bayi Ol";
   loginBtn.onclick=()=>openModal(false);
   signupBtn.onclick=()=>openModal(true);
 }
}

document.getElementById("dealerForm").addEventListener("submit",async e=>{
 e.preventDefault();
 const email=document.getElementById("email").value.trim();
 const password=document.getElementById("password").value;
 const business=document.getElementById("business").value.trim();
 submit.disabled=true; submit.textContent="İşleniyor...";
 try{
   if(signup){
     if(!business){ setMessage("Lütfen işletme adını yazın.",true); return; }
     const {data,error}=await supabaseClient.auth.signUp({
       email,password,
       options:{data:{business_name:business}}
     });
     if(error) throw error;
     if(data.user){
       setMessage(data.session ? "Başvurunuz alındı. Yönetici onayından sonra fiyatları görebileceksiniz." : "Kayıt oluşturuldu. E-posta adresinizi doğruladıktan sonra başvurunuz yönetici onayına alınacak.");
       if(data.session) await loadProfile(data.user);
     }
   } else {
     const {data,error}=await supabaseClient.auth.signInWithPassword({email,password});
     if(error) throw error;
     await loadProfile(data.user);
     if(currentProfile?.approved){
       modal.classList.add("hidden");
       alert("Hoş geldiniz! Bayi hesabınız onaylı.");
     } else {
       setMessage("Giriş başarılı. Hesabınız henüz yönetici tarafından onaylanmadı.");
     }
   }
 }catch(err){
   setMessage(err.message || "Bir hata oluştu.",true);
 }finally{
   submit.disabled=false; submit.textContent=signup?"Başvuru Gönder":"Giriş Yap";
 }
});

(async()=>{
 const {data}=await supabaseClient.auth.getSession();
 await loadProfile(data.session?.user || null);
 supabaseClient.auth.onAuthStateChange(async(_event,session)=>{ await loadProfile(session?.user || null); });
})();

render();
