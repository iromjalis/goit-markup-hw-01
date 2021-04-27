const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
}

// console.log(Object.entries(hotel));
// console.log(Object.keys(hotel));

const playlist ={
    name: 'Мой супер плейлист',
    rating:5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
    changeName(newName) {
        this.name = newName;
    },
    addTrack(track){
        this.tracks.push(track);
        this.trackCount = this.tracks.length;
    },
    updateRating(rating){
        this.rating = rating;
    },
    getTrackCount(){
        return this.tracks.length;
    }
}
const {name, rating,tracks } = playlist;
console.log(rating);
// playlist.ability = 'tracks';

playlist.changeName('Новое имя')
playlist.addTrack('Новый трек')

const a={
    name: 'abc',
njsfh:'dfnksjgh'
}

playlist.updateRating('4.5')
// console.log(playlist.getTrackCount(''));

// console.log(playlist);
const keys=Object.keys(playlist);
// console.log('keys', keys);
for(const key of keys){
    // console.log(key);
}

// console.log(playlist['tracks']);
//*динамичная подстановка 
//<input name="color" value="tomato"></input>

const inputName = 'color';
const inputValue = 'tomato'

const colorPickerData = {
    [inputName]: 'white',
    [inputValue]: inputValue,
}
// console.log(colorPickerData);

const feedback = {
    good:5,
    neutral: 10,
    bad:3,
}

let total = 0;
const keysFeedack = Object.keys(feedback);
for(const key of keysFeedack){
    // console.log(feedback[key]);
    // total +=feedback[key];
}
// console.log(keys);
// console.log(total);

/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: false },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
  ];

function getOfflineFriends(friends){
    const offline= [];

    for(const friend of friends){
        // console.log(friend);
        if(friend.online){
            continue;
        }
        offline.push(friend);
    }

    return offline
}
// console.log(getOfflineFriends(friends));

