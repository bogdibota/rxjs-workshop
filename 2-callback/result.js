import { currentUser, myFriends, profilePicture } from '../api';

// currentUser((user) => {
//     console.log(user.name);
// });

// currentUser((user) => {
//     myFriends(user.id, (friends) => {
//         console.log(friends);
//     });
// });

const allData = {};
function allDone() {
    console.log(allData);
}

currentUser((user) => {
    allData.currentUser = user;

    myFriends(user.id, (friends) => {
        allData.friends = friends;

        friends.forEach((friend) => {
            profilePicture(friend.id, (picture) => {
                allData.friends.find(it => it.id === friend.id).avatar = picture.pictureUrl;

                allDone();
            });
        });
    });
});
