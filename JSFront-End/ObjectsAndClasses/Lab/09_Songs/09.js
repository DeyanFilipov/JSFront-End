function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    const n = Number(input[0]);
    const typeListFilter = input[n + 1];

    const songs = [];

    for (let i = 1; i <= n; i++) {
        const [typeList, name, time] = input[i].split('_');
        songs.push(new Song(typeList, name, time));
    }

    if (typeListFilter === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        songs.filter(song => song.typeList === typeListFilter).forEach(song => console.log(song.name));
    }
}
songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);