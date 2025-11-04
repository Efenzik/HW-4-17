let e=document.querySelector(".gallery"),t=document.querySelector(".load-btn"),r=1,a=0;function n(){fetch(`https://pixabay.com/api/?key=52764652-57f9e27a8b6ede3446aff7d97&editors_choice=true&page=${r}&per_page=8`).then(e=>{if(!e)throw Error(e);return e.json()}).then(t=>{let r=t.hits;if(!r.length||a>=80)return;let n=r.map(e=>`
          <div class="gallery-item">
            <img src="${e.webformatURL}" alt="${e.tags}">
          </div>`).join("");e.insertAdjacentHTML("beforeend",n),(a+=r.length)>=80&&alert("80")}).catch(e=>console.error(e))}n(),t.addEventListener("click",()=>{r++,n()});
//# sourceMappingURL=HW-4-17.c3548d58.js.map
