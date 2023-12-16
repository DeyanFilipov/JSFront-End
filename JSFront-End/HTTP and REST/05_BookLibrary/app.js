const baseUrl = `http://localhost:3030/jsonstore/collections/books`;

function attachEvents() {
    const loadBooksButton = document.getElementById('loadBooks');
    const bookListElement = document.getElementById('book-list');
    const titleInput = document.querySelector('#form input[name=title]');
    const authorInput = document.querySelector('#form input[name=author]');
    const bookIdInput = document.querySelector('#form input[name=bookId]');

    const createBookButton = document.querySelector('div#form button');
    const updateBookButton = document.createElement('button');
    updateBookButton.textContent = 'Update';

    loadBooksButton.addEventListener('click', (e) => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => {
                bookListElement.innerHTML = '';

                const books = Object.keys(result).reduce((acc, _id) => {
                    acc.push({ _id, ...result[_id] })
                    
                    return acc;
                }, []);

                books.map(book => createBookItem(book)).forEach(bookElement => {
                    bookListElement.appendChild(bookElement);
                });
            });
    });

    createBookButton.addEventListener('click', (e) => {
        e.preventDefault();

        const title = titleInput.value;
        const author = authorInput.value;

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                author,
            })
        })
            .then(res => res.json())
            .then(result => {
                const bookElement = createBookItem({ title, author });
                bookListElement.appendChild(bookElement);

                titleInput.value = '';
                authorInput.value = '';
            })
            .catch(err => {
                console.log(err);
            })
    });

    updateBookButton.addEventListener('click', (e) => {
        e.preventDefault();

        const title = titleInput.value;
        const author = authorInput.value;
        const bookId = bookIdInput.value;
        console.log(bookId);
        if (!bookId) {
            return;
        }

        fetch(`${baseUrl}/${bookId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                author,
                _id: bookId,
            }),
        })
            .then(res => res.json())
            .then(data => {
                // data-update
                const currentRow = bookListElement.querySelector('tr[data-update=true]');

                const titleTd = currentRow.firstChild;
                const authorTd = titleTd.nextSibling;

                titleTd.textContent = title;
                authorTd.textContent = author;

                updateBookButton.replaceWith(createBookButton);

                // TODO: fix this
                // editButton.textContent = 'Edit';
                // bookTr.removeAttribute('data-update');
            })

    });

    function createBookItem(book) {
        const bookTr = document.createElement('tr');

        const titleTd = document.createElement('td');
        titleTd.textContent = book.title;

        const authorTd = document.createElement('td');
        authorTd.textContent = book.author;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete'

        const buttonsTd = document.createElement('td');
        buttonsTd.appendChild(editButton);
        buttonsTd.appendChild(deleteButton);

        bookTr.appendChild(titleTd);
        bookTr.appendChild(authorTd);
        bookTr.appendChild(buttonsTd);

        editButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (editButton.textContent === 'Cancel') {
                titleInput.value = '';
                authorInput.value = '';
                bookIdInput.value = '';

                editButton.textContent = 'Edit';
                updateBookButton.replaceWith(createBookButton);
                bookTr.removeAttribute('data-update');

                return;
            }

            titleInput.value = book.title;
            authorInput.value = book.author;
            bookIdInput.value = book._id;

            editButton.textContent = 'Cancel';
            createBookButton.replaceWith(updateBookButton);
            bookTr.setAttribute('data-update', true);
        });

        return bookTr;
    }
}

attachEvents();
