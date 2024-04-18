// /* eslint-disable no-shadow */
// /* eslint-disable no-underscore-dangle */
// class FavoriteRestoSearchPresenter {
//   constructor({ favoriteResto }) {
//     this._listenToSearchRequestByUser();
//     this._favoriteResto = favoriteResto;
//   }

//   _listenToSearchRequestByUser() {
//     this._queryElement = document.getElementById('query');
//     this._queryElement.addEventListener('change', (event) => {
//       this._searchResto(event.target.value);
//     });
//   }

//   _searchResto(latestQuery) {
//     this._latestQuery = latestQuery;
//     this._favoriteResto.searchResto(this.latestQuery);
//   }

//   // eslint-disable-next-line class-methods-use-this
//   _showFoundResto(resto) {
//     const html = resto.reduce(
//       (carry, resto) => carry.concat(`
//           <li class="restaurant">
//             <span class="resto__title">${resto.title || '-'}</span>
//           </li>
//         `),
//       '',
//     );

//     document.querySelector('.resto-result-container ul').innerHTML = html; // Corrected line
//   }

//   get latestQuery() {
//     return this._latestQuery;
//   }
// }

// export default FavoriteRestoSearchPresenter;

/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
// class FavoriteRestoSearchPresenter {
//   constructor({ favoriteResto, view }) {
//     this._listenToSearchRequestByUser();
//     this._favoriteResto = favoriteResto;
//     this._view = view;
//   }

//   _listenToSearchRequestByUser() {
//     // jadi
//     this._queryElement = document.getElementById('query');
//     this._queryElement.addEventListener('change', (event) => {
//       this._searchResto(event.target.value);
//     });
//     // tidak jadi
//     // this._view.runWhenUserIsSearching((latestQuery) => {
//     //   this._searchResto(latestQuery);
//     // });
//   }

//   // rev satu
//   async _searchResto(latestQuery) {
//     this._latestQuery = latestQuery.trim();
//     let foundResto;
//     if (this._latestQuery.length > 0) {
//       foundResto = await this._favoriteResto.searchResto(this._latestQuery);
//     } else {
//       foundResto = await this._favoriteResto.getAllResto();
//     }
//     this._showFoundResto(foundResto);
//   }

//   // eslint-disable-next-line class-methods-use-this
//   _showFoundResto(resto) {
//     console.log(resto);
//     // let html;
//     // if (resto.length > 0) {
//     //   html = resto.reduce(
//     //     (carry, resto) => carry.concat(`
//     //     <li class="restaurant">
//     //       <span class="resto__title">${resto.title || '-'}</span>
//     //     </li>
//     //   `),
//     //     '',
//     //   );
//     // } else {
//     //   html = '<div class="resto__not__found">Restaurant tidak ditemukan</div>';
//     // }
//     // document.querySelector('.resto-result-container ul').innerHTML = html; // Corrected line
//     // document
//     //   .getElementById('resto-search-container')
//     //   .dispatchEvent(new Event('resto:searched:updated'));
//     this._view.showResto(resto);
//   }

//   get latestQuery() {
//     return this._latestQuery;
//   }
// }

// export default FavoriteRestoSearchPresenter;

// coba revisi
// const _showFoundResto = (resto) => {
//   this._view.showResto(resto);
// };
class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto, view }) {
    this._favoriteResto = favoriteResto;
    this._view = view;

    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchResto(latestQuery);
    });
  }

  async _searchResto(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundResto;
    if (this.latestQuery.length > 0) {
      foundResto = await this._favoriteResto.searchResto(this.latestQuery);
    } else {
      foundResto = await this._favoriteResto.getAllResto();
    }

    this._showFoundResto(foundResto);
    // _showFoundResto(foundResto);
  }

  _showFoundResto(resto) {
    // this._view.showResto(resto);
    this._view.showFavoriteResto(resto);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
//terakhir test
// class FavoriteRestoSearchPresenter {
//   constructor({ favoriteResto, view }) {
//     this._favoriteResto = favoriteResto;
//     this._view = view;

//     this._listenToSearchRequestByUser();
//   }

//   _listenToSearchRequestByUser() {
//     this._view.runWhenUserIsSearching((latestQuery) => {
//       this._searchResto(latestQuery);
//     });
//   }

//   async _searchResto(latestQuery) {
//     this._latestQuery = latestQuery.trim();

//     let foundResto;
//     if (this.latestQuery.length > 0) {
//       foundResto = await this._favoriteResto.searchResto(this.latestQuery);
//     } else {
//       foundResto = await this._favoriteResto.getAllResto();
//     }

//     this._showFoundResto(foundResto);
//   }

//   _showFoundResto(resto) {
//     this._view.showFavoriteResto(resto);
//   }

//   get latestQuery() {
//     return this._latestQuery;
//   }
// }

// export default FavoriteRestoSearchPresenter;
