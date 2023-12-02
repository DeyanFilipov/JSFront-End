function comments(info) {
    let listOfUsers = [];
    let articleList = [];
    let storeComments = [];

    for (command of info) {
        if (command.includes('user')) {
            let username = command.split(' ')[1];
            listOfUsers.push(username);
        } else if (command.includes('article')) {
            let article = command.split(' ')[1];
            articleList.push(article);
        } else if (command.includes('posts on')) {
            const parts = command.split(' posts on ');
            const username = parts[0];
            const parts2 = parts[1].split(': ');
            const articleName = parts2[0];
            const parts3 = parts2[1].split(', ');
            const commentTitle = parts3[0];
            const commentContent = parts3[1];

            if (listOfUsers.includes(username) && articleList.includes(articleName)) {
                let comment = {
                    username: username,
                    articleName: articleName,
                    commentTitle: commentTitle,
                    commentContent: commentContent
                };
                storeComments.push(comment);
            }
        }
    }
    const groupedComments = storeComments.reduce((acc, comment) => {
        const { articleName, username, commentTitle, commentContent } = comment;
        if (!acc[articleName]) {
            acc[articleName] = [];
        }
        acc[articleName].push({ username, commentTitle, commentContent });
        return acc;
    }, {});
    const sortedArticles = Object.entries(groupedComments)
        .sort((a, b) => b[1].length - a[1].length)
        .map(([articleName, comments]) => {
            const sortedComments = comments.sort((a, b) => a.username.localeCompare(b.username));
            return { articleName, comments: sortedComments };
        });
    sortedArticles.forEach(({ articleName, comments }) => {
        console.log(`Comments on ${articleName}`);
        comments.forEach(({ username, commentTitle, commentContent }) => {
            console.log(`--- From user ${username}: ${commentTitle} - ${commentContent}`);
        });
    });
}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);
comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']);