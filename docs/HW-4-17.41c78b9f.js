let e=document.querySelector(".gallery"),t=document.querySelector(".load-btn"),r=1,a=0;async function o(){let t=`https://pixabay.com/api/?key=52764652-57f9e27a8b6ede3446aff7d97&editors_choice=true&page=${r}&per_page=8`;try{let r=await fetch(t),{hits:o}=await r.json();if(!o.length||a>=80)return void alert("No more photos");let l=o.map(e=>`
          <div class="gallery-item">
            <img src="${e.webformatURL}" alt="${e.tags}">
          </div>`).join("");e.insertAdjacentHTML("beforeend",l),(a+=o.length)>=80&&alert("80")}catch(e){console.error(e)}}o(),t.onclick=()=>{r++,o()};
//# sourceMappingURL=HW-4-17.41c78b9f.js.map
