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
        pictureUrl: `link to picture ${id}`,
    }));
};