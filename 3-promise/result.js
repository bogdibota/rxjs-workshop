// const basicPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(42);
//     }, 1000);
// });

// basicPromise
//     .then((result) => {
//         console.log(result);
//     });

// const randomFailingPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         Math.random() > .5 ? resolve(42) : reject({message: 'random error'});
//     }, 500);
// });

// randomFailingPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

import { currentUser, myFriends, profilePicture } from '../api';

export const currentUserPromise = () => new Promise((resolve) => currentUser(resolve));
export const myFriendsPromise = (id) => new Promise((resolve) => myFriends(id, resolve));
export const profilePicturePromise = (id) => new Promise((resolve) => profilePicture(id, resolve));

// currentUserPromise()
//     .then((user) => myFriendsPromise(user.id)
//         .then(friends => ({user: user, friends: friends})),
//     )
//     .then((data) => Promise.all(
//         data.friends.map(
//             (friend) => profilePicturePromise(friend.id)
//                 .then(picture => ({...friend, avatar: picture.pictureUrl})),
//         ))
//         .then(friendsWithAvatars => ({...data, friends: friendsWithAvatars})),
//     )
//     .then((data) => console.log(data));
