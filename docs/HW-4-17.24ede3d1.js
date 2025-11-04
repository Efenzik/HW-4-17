let e=document.querySelector(".gallery"),t=document.querySelector(".load-btn"),r=1,o=0;function a(){fetch(`https://pixabay.com/api/?key=52764652-57f9e27a8b6ede3446aff7d97&editors_choice=true&page=${r}&per_page=8`).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()}).then(t=>{let r=t.hits;if(!r.length||o>=80)return void alert("No more photos");let a=r.map(e=>`
          <div class="gallery-item">
            <img src="${e.webformatURL}" alt="${e.tags}">
          </div>`).join("");e.insertAdjacentHTML("beforeend",a),(o+=r.length)>=80&&alert("80")}).catch(e=>console.error(e))}a(),t.addEventListener("click",()=>{r++,a()});
//# sourceMappingURL=HW-4-17.24ede3d1.js.map
