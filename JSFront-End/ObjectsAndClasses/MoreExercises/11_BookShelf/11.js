function bookShelf (info) {
    let shelves = [];
    for (command of info) {
        if (command.includes('->')) {
            let parts = command.split(' -> ');
            let shelfId = parts[0];
            let shelfGenre = parts[1];
            const isIdTaken = shelves.some(shelf => shelf.shelfId === shelfId);
            if (!isIdTaken) {
                let shelf = {
                    shelfId: shelfId,
                    shelfGenre: shelfGenre,
                    books: []
                }
                shelves.push(shelf)
            }
        } else if (command.includes(', ')) {
            let part = command.split(': ');
            let bookTitle = part[0];
            let part2 = part[1].split(', ');
            let bookAuthor = part2[0];
            let bookGenre = part2[1];
            const foundShelf = shelves.find(shelf => shelf.shelfGenre === bookGenre);
            if (foundShelf) {
                let bookToAdd = {
                    title: bookTitle,
                    author: bookAuthor
                }
                foundShelf.books.push(bookToAdd)
            }
        }
    }
    shelves.sort((a, b) => b.books.length - a.books.length);
    shelves.forEach(shelf => {
        shelf.books.sort((a, b) => a.title.localeCompare(b.title));
    });
    shelves.forEach(shelf => {
        console.log(`${shelf.shelfId} ${shelf.shelfGenre}: ${shelf.books.length}`);
        shelf.books.forEach(book => {
            console.log(`--> ${book.title}: ${book.author}`);
        });
    });
}
bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci- fi', 'Pilots of Stone: Brook Jay, history']);
bookShelf(['1 -> mystery', '2 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Lions and Rats: Gabe Roads, history', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi']);