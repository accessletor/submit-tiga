import restoCard from '../../templates/resto-card';

class FavoriteRestoView {
  getTemplate() {
  //   return `
  //   <div class="content">
  //   <input id="query" type="text">
  //   <h2 class="content__heading">Your Liked resto</h2>

    //     <div id="resto" class="resto">
    //     </div>

    // </div>
    //   `;
    return `
    <section class="container">
    <div class="form__group">
    <input type="text" class="form__field w-100" id="query" placeholder="Cari Resto">
    <label for="name" class="form__label"> Cari Resto </label>
</div>
      <div tabindex="0" class="container-title">
        <h2>Favorite Restaurant</h2>
      </div>
      <p class="pesan-favorite">Tidak ada Restoran Favorit yang tersimpan. Tambahkan satu dengan mengklik tombol hati di halaman detail</p>
      <div id="resto" class="fav-cards resto"></div>
    </section>
    `;
  }

  getFavoriteRestoTemplate() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
        <div id="resto" class="resto">
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  // showResto(resto) {
  //   // let html;
  //   // if (resto.length > 0) {
  //   //   html = resto.reduce(
  //   //     (carry, resto) => carry.concat(restoCard(resto)),
  //   //     '',
  //   //   );
  //   // } else {
  //   //   html = this._getEmptyRestoTemplate();
  //   // }
  //   // document.querySelector('.resto').innerHTML = html;

  //   // document.getElementById('resto').dispatchEvent(new Event('resto:updated'));
  //   this.showFavoriteResto(resto);
  // }

  showFavoriteResto(resto) {
    let html;
    if (resto.length) {
      html = resto.reduce(
        (carry, resto) => carry.concat(restoCard(resto)),
        '',
      );
    } else {
      html = this._getEmptyRestoTemplate();
    }
    document.getElementById('resto').innerHTML = html;

    document.getElementById('resto').dispatchEvent(new Event('resto:updated'));
  }

  _getEmptyRestoTemplate() {
    return `
      <div class="card__not__found">
        restoran tidak ditemukan di menu favorite
      </div>
    `;
  }
}

export default FavoriteRestoView;

// import restoCard from '../../templates/resto-card';

// class FavoriteRestoView {
//   getTemplate() {
//     return `
//     <div class="content">
//     <input id="query" type="text">
//     <h2 class="content__heading">Your Liked Resto</h2>

//       <div id="resto" class="resto">

//     </div>
//   </div>
//     `;
//   }

//   getFavoriteRestoTemplate() {
//     return `
//       <div class="content">
//         <h2 class="content__heading">Your Liked Resto</h2>
//         <div id="resto" class="resto">
//         </div>
//       </div>
//     `;
//   }

//   runWhenUserIsSearching(callback) {
//     document.getElementById('query').addEventListener('change', (event) => {
//       callback(event.target.value);
//     });
//   }

//   showFavoriteResto(resto) {
//     let html;
//     if (resto.length) {
//       html = resto.reduce(
//         (carry, resto) => carry.concat(restoCard(resto)),
//         '',
//       );
//     } else {
//       html = this._getEmptyRestoTemplate();
//     }
//     document.getElementById('resto').innerHTML = html;
//     document.getElementById('resto').dispatchEvent(new Event('resto:updated'));
//   }

//   _getEmptyRestoTemplate() {
//     return `
//       <div class="resto-item__not__found">
//         Tidak ada film untuk ditampilkan
//       </div>
//     `;
//   }
// }
// export default FavoriteRestoView;
