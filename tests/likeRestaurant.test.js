// /* eslint-disable no-undef */
// import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
// import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

// describe('Liking A resto', () => {
//   const addLikeButtonContainer = () => {
//     document.body.innerHTML = '<div id="likeButtonContainer"></div>';
//   };
//   beforeEach(() => {
//     addLikeButtonContainer();
//   });
//   it('should show the like button when the resto has not been liked before', async () => {
//     document.body.innerHTML = '<div id="likeButtonContainer"></div>';
//     await LikeButtonInitiator.init({
//       likeButtonContainer: document.querySelector('#likeButtonContainer'),
//       data: {
//         id: 1,
//       },
//     });
//     expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
//   });
//   it('should not show the unlike button when the resto has not been liked before', async () => {
//     document.body.innerHTML = '<div id="likeButtonContainer"></div>';
//     await LikeButtonInitiator.init({
//       likeButtonContainer: document.querySelector('#likeButtonContainer'),
//       data: {
//         id: 1,
//       },
//     });
//     expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
//   });
//   it('should be able to like the resto', async () => {
//     document.body.innerHTML = '<div id="likeButtonContainer"></div>';
//     await LikeButtonInitiator.init({
//       likeButtonContainer: document.querySelector('#likeButtonContainer'),
//       data: {
//         id: 1,
//       },
//     });
//     document.querySelector('#likeButton').dispatchEvent(new Event('click'));
//     // Memastikan resto berhasil disukai
//     const resto = await FavoriteRestoIdb.getResto(1);
//     expect(resto).toEqual({ id: 1 });
//     await FavoriteRestoIdb.deleteResto(1);
//   });
//   it('should not add a resto again when its already liked', async () => {
//     await LikeButtonInitiator.init({
//       likeButtonContainer: document.querySelector('#likeButtonContainer'),
//       data: {
//         id: 1,
//       },
//     });
//     await FavoriteRestoIdb.putResto({ id: 1 });
//     document.querySelector('#likeButton').dispatchEvent(new Event('click'));
//     expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
//     await FavoriteRestoIdb.deleteResto(1);
//   });
//   xit('should not add a resto when it has no id', async () => {
//     await LikeButtonInitiator.init({
//       likeButtonContainer: document.querySelector('#likeButtonContainer'),
//       data: {},
//     });
//     document.querySelector('#likeButton').dispatchEvent(new Event('click'));
//     expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
//   });
// });
/* eslint-disable no-undef */
// import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
    // const data = {
    //   restaurant: { id: 1 },
    // };

    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   data,
    // });
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    // const data = {
    //   restaurant: { id: 1 },
    // };

    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   data,
    // });
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    // const data = {
    //   restaurant: { id: 1 },
    // };

    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   data,
    // });
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const resto = await FavoriteRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    // const data = {
    //   restaurant: { id: 1 },
    // };

    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   data,
    // });
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    await FavoriteRestoIdb.deleteResto(1);
  });
  // Menggunakan metode xit, bukan it, untuk menonaktifkan sebuah test case
  it('should not add a resto when it has no id', async () => {
    // const data = {
    //   restaurant: {},
    // };

    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   data,
    // });
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
