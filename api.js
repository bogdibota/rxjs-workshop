function simulateDelay(wrapped) {
    setTimeout(wrapped, 1000);
}

export const currentUser = (callback) => {
    simulateDelay(() => callback({
        id: 42,
        name: 'Dorel Valorosu\'',
    }));
};

export const myFriends = (id, callback) => {
    simulateDelay(() => callback({
        42: [{
            id: 43,
            name: 'Gica Topor',
        }, {
            id: 420,
            name: 'Titi',
        }],
    }[id]));
};

export const profilePicture = (id, callback) => {
    simulateDelay(() => callback({
        pictureUrl: `link to picture ${ id }`,
    }));
};

export const currentUserPromise = () => new Promise((resolve) => currentUser(resolve));
export const myFriendsPromise = (id) => new Promise((resolve) => myFriends(id, resolve));
export const profilePicturePromise = (id) => new Promise((resolve) => profilePicture(id, resolve));

export function generateUUID() { // Public Domain/MIT
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
