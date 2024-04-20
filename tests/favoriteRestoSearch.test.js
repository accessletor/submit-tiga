// /* eslint-disable no-underscore-dangle */
// /* eslint-disable no-undef */
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { spyOn } from 'jest-mock';
// import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
// import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

// describe('Searching resto', () => {
//   let presenter;

//   const searchResto = (query) => {
//     const queryElement = document.getElementById('query');
//     queryElement.value = query;

//     queryElement.dispatchEvent(new Event('change'));
//   };

//   const setRestoSearchContainer = () => {
//     document.body.innerHTML = `
//       <div id="resto-search-container">
//         <input id="query" type="text">
//         <div class="resto-result-container">
//           <ul class="resto">
//           </ul>
//         </div>
//       </div>
//     `;
//   };

//   const constructPresenter = () => {
//     spyOn(FavoriteRestoIdb, 'searchResto');

//     presenter = new FavoriteRestoSearchPresenter({
//       favoriteResto: FavoriteRestoIdb,
//     });
//   };

//   beforeEach(() => {
//     setRestoSearchContainer();
//     constructPresenter();
//   });

//   it('should be able to capture the query typed by the user', () => {
//     searchResto('restaurant a');

//     expect(presenter.latestQuery).toEqual('restaurant a');
//   });

//   it('should ask the model to search for liked resto', () => {
//     searchResto('restaurant a');

//     expect(FavoriteRestoIdb.searchResto).toHaveBeenCalledWith('restaurant a');
//   });

//   it('should show the found resto', () => {
//     presenter._showFoundResto([{ id: 1 }]);
//     expect(document.querySelectorAll('.restaurant').length).toEqual(1);

//     presenter._showFoundResto([
//       {
//         id: 1,
//         title: 'Satu',
//       },
//       {
//         id: 2,
//         title: 'Dua',
//       },
//     ]);
//     expect(document.querySelectorAll('.restaurant').length).toEqual(2);
//   });

//   it('should show the title of the found resto', () => {
//     presenter._showFoundResto([
//       {
//         id: 1,
//         title: 'Satu',
//       },
//     ]);

//     expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('Satu');

//     presenter._showFoundResto([
//       {
//         id: 1,
//         title: 'Satu',
//       },
//       {
//         id: 2,
//         title: 'Dua',
//       },
//     ]);

//     const restoTitles = document.querySelectorAll('.resto__title');

//     expect(restoTitles.item(0).textContent).toEqual('Satu');
//     expect(restoTitles.item(1).textContent).toEqual('Dua');
//   });

//   it('should show - for found resto without title', () => {
//     presenter._showFoundResto([{ id: 1 }]);

//     expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('-');
//   });
// });

// /* eslint-disable no-underscore-dangle */
// /* eslint-disable no-undef */
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { spyOn } from 'jest-mock';
// import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
// import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

// describe('Searching resto', () => {
//   let presenter;

//   const searchResto = (query) => {
//     const queryElement = document.getElementById('query');
//     queryElement.value = query;

//     queryElement.dispatchEvent(new Event('change'));
//   };

//   const setRestoSearchContainer = () => {
//     document.body.innerHTML = `
//       <div id="resto-search-container">
//         <input id="query" type="text">
//         <div class="resto-result-container">
//           <ul class="resto">
//           </ul>
//         </div>
//       </div>
//     `;
//   };

//   const constructPresenter = () => {
//     spyOn(FavoriteRestoIdb, 'searchResto');

//     presenter = new FavoriteRestoSearchPresenter({
//       favoriteResto: FavoriteRestoIdb,
//     });
//   };

//   beforeEach(() => {
//     setRestoSearchContainer();
//     constructPresenter();
//   });

//   it('should be able to capture the query typed by the user', () => {
//     FavoriteRestoIdb.searchResto.mockImplementation(() => []);

//     searchResto('restaurant a');

//     expect(presenter.latestQuery).toEqual('restaurant a');
//   });

//   it('should ask the model to search for liked resto', () => {
//     FavoriteRestoIdb.searchResto.mockImplementation(() => []);

//     searchResto('restaurant a');

//     expect(FavoriteRestoIdb.searchResto).toHaveBeenCalledWith('restaurant a');
//   });

//   it('should show the found resto', () => {
//     presenter._showFoundResto([{ id: 1 }]);
//     expect(document.querySelectorAll('.restaurant').length).toEqual(1);

//     presenter._showFoundResto([
//       {
//         id: 1,
//         title: 'Satu',
//       },
//       {
//         id: 2,
//         title: 'Dua',
//       },
//     ]);
//     expect(document.querySelectorAll('.restaurant').length).toEqual(2);
//   });

//   it('should show the title of the found resto', () => {
//     presenter._showFoundResto([
//       {
//         id: 1,
//         title: 'Satu',
//       },
//     ]);

//     expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('Satu');

//     presenter._showFoundResto([
//       {
//         id: 1,
//         title: 'Satu',
//       },
//       {
//         id: 2,
//         title: 'Dua',
//       },
//     ]);

//     const restoTitles = document.querySelectorAll('.resto__title');

//     expect(restoTitles.item(0).textContent).toEqual('Satu');
//     expect(restoTitles.item(1).textContent).toEqual('Dua');
//   });

//   it('should show - for found resto without title', () => {
//     presenter._showFoundResto([{ id: 1 }]);

//     expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('-');
//   });
//   it('should show the resto found by Favorite resto', (done) => {
//     document
//       .getElementById('resto-search-container')
//       .addEventListener('resto:searched:updated', () => {
//         expect(document.querySelectorAll('.restaurant').length).toEqual(3);
//         done();
//       });
//     FavoriteRestoIdb.searchResto.mockImplementation((query) => {
//       if (query === 'restaurant a') {
//         return [
//           { id: 111, title: 'restaurant abc' },
//           { id: 222, title: 'ada juga restaurant abcde' },
//           { id: 333, title: 'ini juga boleh restaurant a' },
//         ];
//       }
//       return [];
//     });
//     searchResto('restaurant a');
//   });
//   it('should show the name of the resto found by Favorite resto', (done) => {
//     document
//       .getElementById('resto-search-container')
//       .addEventListener('resto:searched:updated', () => {
//         const restoTitles = document.querySelectorAll('.resto__title');
//         expect(restoTitles.item(0).textContent).toEqual('restaurant abc');
//         expect(restoTitles.item(1).textContent).toEqual('ada juga restaurant abcde');
//         expect(restoTitles.item(2).textContent).toEqual('ini juga boleh restaurant a');
//         done();
//       });

//     FavoriteRestoIdb.searchResto.mockImplementation((query) => {
//       if (query === 'restaurant a') {
//         return [
//           { id: 111, title: 'restaurant abc' },
//           { id: 222, title: 'ada juga restaurant abcde' },
//           { id: 333, title: 'ini juga boleh restaurant a' },
//         ];
//       }
//       return [];
//     });

//     searchResto('restaurant a');
//   });
// });
// aku suka apa yang aku lihat
import {
  beforeEach, describe, expect, it, jest,
} from '@jest/globals';
import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import FavoriteRestoView from '../src/scripts/views/pages/liked-resto/favorite-resto-view';

// class FavoriteRestoView {
//   getTemplate() {
//     return `
//     <div id="resto-search-container">
//     <input id="query" type="text">
//     <div class="resto-result-container">
//       <ul class="resto">
//       </ul>
//     </div>
//   </div>
//     `;
//   }

//   // eslint-disable-next-line class-methods-use-this
//   runWhenUserIsSearching(callback) {
//     document.getElementById('query').addEventListener('change', (event) => {
//       callback(event.target.value);
//     });
//   }

//   showResto(resto) {
//     let html;
//     if (resto.length > 0) {
//       html = resto.reduce(
//         (carry, resto) => carry.concat(`
//           <li class="restaurant">
//             <span class="resto__title">${resto.title || '-'}</span>
//           </li>
//         `),
//         '',
//       );
//     } else {
//       html = '<div class="resto__not__found">Restaurant tidak ditemukan</div>';
//     }
//     document.querySelector('.resto').innerHTML = html;

//     document
//       .getElementById('resto-search-container')
//       .dispatchEvent(new Event('resto:searched:updated'));
//   }
// }

describe('Searching resto', () => {
  let presenter;
  let favoriteResto;
  let view;

  const searchResto = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;

    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    view = new FavoriteRestoView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteResto = {
      getAllResto: jest.fn(),
      searchResto: jest.fn(),
    };
    presenter = new FavoriteRestoSearchPresenter({
      favoriteResto,
      view,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      // rev 2
      favoriteResto.searchResto.mockImplementation(() => []);
      searchResto('restaurant a');
      expect(presenter.latestQuery).toEqual('restaurant a');
    });
    it('should ask the model to search for liked restaurant', () => {
      favoriteResto.searchResto.mockImplementation(() => []);
      searchResto('restaurant a');
      expect(favoriteResto.searchResto).toHaveBeenCalledWith('restaurant a');
    });
    // it('should show the found resto', () => {
    //   presenter._showFoundResto([{ id: 1 }]);
    //   expect(document.querySelectorAll('.restaurant').length).toEqual(1);
    //   presenter._showFoundResto([
    //     { id: 1, name: 'Satu' },
    //     { id: 2, name: 'Dua' },
    //   ]);
    //   expect(document.querySelectorAll('.restaurant').length).toEqual(2);
    // });
    // it('should show the title of the found resto', () => {
    //   presenter._showFoundResto([{ id: 1, name: 'Satu' }]);
    //   expect(document.querySelectorAll('.resto__title')
    //     .item(0).textContent)
    //     .toEqual('Satu');
    //   presenter._showFoundResto([
    //     { id: 1, name: 'Satu' },
    //     { id: 2, name: 'Dua' },
    //   ]);
    //   const restoTitles = document.querySelectorAll('.resto__title');
    //   expect(restoTitles.item(0).textContent).toEqual('Satu');
    //   expect(restoTitles.item(1).textContent).toEqual('Dua');
    // });
    // it('should show - for found resto without title', () => {
    //   presenter._showFoundResto([{ id: 1 }]);
    //   expect(document.querySelectorAll('.resto__title')
    //     .item(0).textContent)
    //     .toEqual('-');
    // });
    it('should show the resto found by Favorite Resto', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.card').length).toEqual(3);
        done();
      });
      favoriteResto.searchResto.mockImplementation((query) => {
        if (query === 'restaurant a') {
          return [
            { id: 111, name: 'restaurant abc' },
            { id: 222, name: 'ada juga restaurant abcde' },
            { id: 333, name: 'ini juga boleh restaurant a' },
          ];
        }
        return [];
      });
      searchResto('restaurant a');
    });
    it('should show the name of the resto found by Favorite Resto', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__title');
        expect(restoTitles.item(0).textContent).toEqual('restaurant abc');
        expect(restoTitles.item(1).textContent).toEqual('ada juga restaurant abcde');
        expect(restoTitles.item(2).textContent).toEqual('ini juga boleh restaurant a');
        done();
      });
      favoriteResto.searchResto.mockImplementation((query) => {
        if (query === 'restaurant a') {
          return [
            { id: 111, name: 'restaurant abc' },
            { id: 222, name: 'ada juga restaurant abcde' },
            { id: 333, name: 'ini juga boleh restaurant a' },
          ];
        }
        return [];
      });
      searchResto('restaurant a');
    });
    it('should show - when the resto returned does not contain a title', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__title');
        expect(restoTitles.item(0).textContent).toEqual('-');
        done();
      });

      favoriteResto.searchResto.mockImplementation((query) => {
        if (query === 'restaurant a') {
          return [{ id: 444 }];
        }

        return [];
      });

      searchResto('restaurant a');
    });
  });
  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      favoriteResto.getAllResto.mockImplementation(() => []);
      searchResto(' ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchResto('    ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchResto('');
      expect(presenter.latestQuery.length).toEqual(0);
      searchResto('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });
    it('should show all favorite resto', () => {
      favoriteResto.getAllResto.mockImplementation(() => []);
      searchResto('    ');
      expect(favoriteResto.getAllResto).toHaveBeenCalled();
    });
  });
  describe('When no favorite resto could be found', () => {
    it('should show the empty message', (done) => {
      document
        .getElementById('resto').addEventListener('resto:updated', () => {
          expect(document.querySelectorAll('.card__not__found').length).toEqual(1);
          done();
        });
      favoriteResto.searchResto.mockImplementation((query) => []);
      searchResto('restaurant a');
    });
    it('should not show any resto', (done) => {
      document.getElementById('resto').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.card').length).toEqual(0);
        done();
      });
      favoriteResto.searchResto.mockImplementation((query) => []);
      searchResto('restaurant a');
    });
  });
});
// test rs
// import {
//   beforeEach, describe, expect, it, jest,
// } from '@jest/globals';
// import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';

// import FavoriteRestoView
//   from '../src/scripts/views/pages/liked-resto/favorite-resto-view';

// describe('Searching resto', () => {
//   let presenter;
//   let favoriteResto;
//   let view;

//   const searchResto = (query) => {
//     const queryElement = document.getElementById('query');
//     queryElement.value = query;

//     queryElement.dispatchEvent(new Event('change'));
//   };

//   const setRestoSearchContainer = () => {
//     view = new FavoriteRestoView();
//     document.body.innerHTML = view.getTemplate();
//   };

//   const constructPresenter = () => {
//     favoriteResto = {
//       getAllResto: jest.fn(),
//       searchResto: jest.fn(),
//     };
//     presenter = new FavoriteRestoSearchPresenter({
//       favoriteResto,
//       view,
//     });
//   };

//   beforeEach(() => {
//     setRestoSearchContainer();
//     constructPresenter();
//   });

//   describe('When query is not empty', () => {
//     // it('should be able to capture the query typed by the user', () => {
//     //   favoriterestorchrestokImplementation(() => []);
//     //   searchrestolm a');
//     //   expect(presenter.latestQuery).toEqual('restaurant a');
//     // });
//     it('should be able to capture the query typed by the user', () => {
//       favoriteResto.searchResto.mockResolvedValue([]);
//       searchResto('restaurant a');
//       expect(presenter.latestQuery).toEqual('restaurant a');
//       // Pastikan pemanggilan fungsi callback terjadi dengan benar
//       expect(favoriteResto.searchResto).toHaveBeenCalledWith('restaurant a');
//     });
//     it('should ask the model to search for liked resto', () => {
//       favoriteResto.searchResto.mockImplementation(() => []);
//       searchResto('restaurant a');
//       expect(favoriteResto.searchResto).toHaveBeenCalledWith('restaurant a');
//     });
//     // it('should show the found resto) => {
//     //   presenter._showFoundrestoid: 1 }]);
//     //   expect(document.querySelectorAll('.card').length).toEqual(1);
//     //   presenter._showFoundresto   //     { id: 1, title: 'Satu' },
//     //     { id: 2, title: 'Dua' },
//     //   ]);
//     //   expect(document.querySelectorAll('.card').length).toEqual(2);
//     // });
//     // it('should show the title of the found resto) => {
//     //   presenter._showFoundrestoid: 1, title: 'Satu' }]);
//     //   expect(document.querySelectorAll('.restole')
//     //     .item(0).textContent)
//     //     .toEqual('Satu');
//     //   presenter._showFoundresto   //     { id: 1, title: 'Satu' },
//     //     { id: 2, title: 'Dua' },
//     //   ]);
//     //   const restos = document.querySelectorAll('.restole');
//     //   expect(restos.item(0).textContent).toEqual('Satu');
//     //   expect(restos.item(1).textContent).toEqual('Dua');
//     // });
//     // it('should show - for found restoout title', () => {
//     //   presenter._showFoundrestoid: 1 }]);
//     //   expect(document.querySelectorAll('.restole')
//     //     .item(0).textContent)
//     //     .toEqual('-');
//     // });
//     it('should show the resto found by Favorite resto', (done) => {
//       document
//         .getElementById('resto').addEventListener('resto:updated', () => {
//           expect(document.querySelectorAll('.card').length).toEqual(3);
//           done();
//         });
//       favoriteResto.searchResto.mockImplementation((query) => {
//         if (query === 'restaurant a') {
//           return [
//             { id: 111, title: 'restaurant abc' },
//             { id: 222, title: 'ada juga restaurant abcde' },
//             { id: 333, title: 'ini juga boleh restaurant a' },
//           ];
//         }
//         return [];
//       });
//       searchResto('restaurant a');
//     });
//     it('should show the name of the resto found by Favorite resto', (done) => {
//       document
//         .getElementById('resto').addEventListener('resto:updated', () => {
//           const restoTitles = document.querySelectorAll('.resto__title');
//           expect(restoTitles.item(0).textContent).toEqual('restaurant abc');
//           expect(restoTitles.item(1).textContent).toEqual('ada juga restaurant abcde');
//           expect(restoTitles.item(2).textContent).toEqual('ini juga boleh restaurant a');
//           done();
//         });
//       favoriteResto.searchResto.mockImplementation((query) => {
//         if (query === 'restaurant a') {
//           return [
//             { id: 111, title: 'restaurant abc' },
//             { id: 222, title: 'ada juga restaurant abcde' },
//             { id: 333, title: 'ini juga boleh restaurant a' },
//           ];
//         }
//         return [];
//       });
//       searchResto('restaurant a');
//     });
//     it('should show - when the resto returned does not contain a title', (done) => {
//       document.getElementById('resto').addEventListener('resto:updated', () => {
//         const restoTitles = document.querySelectorAll('.resto__title');
//         expect(restoTitles.item(0).textContent)
//           .toEqual('-');

//         done();
//       });

//       favoriteResto.searchResto.mockImplementation((query) => {
//         if (query === 'restaurant a') {
//           return [{ id: 444 }];
//         }

//         return [];
//       });

//       searchResto('restaurant a');
//     });
//   });
//   describe('When query is empty', () => {
//     it('should capture the query as empty', () => {
//       favoriteResto.getAllResto.mockImplementation(() => []);
//       searchResto(' ');
//       expect(presenter.latestQuery.length).toEqual(0);

//       searchResto('    ');
//       expect(presenter.latestQuery.length).toEqual(0);

//       searchResto('');
//       expect(presenter.latestQuery.length).toEqual(0);

//       searchResto('\t');
//       expect(presenter.latestQuery.length).toEqual(0);
//     });
//     it('should show all favorite resto', () => {
//       favoriteResto.getAllResto.mockImplementation(() => []);
//       searchResto('    ');
//       expect(favoriteResto.getAllResto).toHaveBeenCalled();
//     });
//   });
//   describe('When no favorite resto could be found', () => {
//     it('should show the empty message', (done) => {
//       document
//         .getElementById('resto').addEventListener('resto:updated', () => {
//           expect(document.querySelectorAll('.card__not__found').length).toEqual(1);
//           done();
//         });
//       favoriteResto.searchResto.mockImplementation((query) => []);
//       searchResto('restaurant a');
//     });
//     it('should not show any resto', (done) => {
//       document.getElementById('resto').addEventListener('resto:updated', () => {
//         expect(document.querySelectorAll('.card').length).toEqual(0);
//         done();
//       });
//       favoriteResto.searchResto.mockImplementation((query) => []);
//       searchResto('restaurant a');
//     });
//   });
// });
