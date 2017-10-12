import { currentUserPromise, myFriendsPromise, profilePicturePromise } from '../3-promise/result.js';

async function doAsyncStuff() {
    const currentUser = await currentUserPromise();
    const myFriends = await myFriendsPromise(currentUser.id);
    const friendsWithPictures = await Promise.all(myFriends.map(async (friend) => ({
        ...friend,
        avatar: (await profilePicturePromise(friend.id)).pictureUrl,
    })));

    return {
        currentUser,
        friends: friendsWithPictures,
    };
}

doAsyncStuff().then(console.log);