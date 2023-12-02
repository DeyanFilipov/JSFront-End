function browserHistory(object, array) {
    let browserData = object;

    for (el of array) {
        let parts = el.split(' ');
        let command = parts[0];
        let tab = parts.slice(1).join(' ');

        if (command === 'Open') {
            browserData['Open Tabs'].push(tab);
            browserData['Browser Logs'].push(command + ' ' + tab);
        } else if (command === 'Close') {
            let isTabOpen = browserData['Open Tabs'].includes(tab);
            if (isTabOpen) {
                let tabIndex = browserData['Open Tabs'].indexOf(tab);
                browserData['Open Tabs'].splice(tabIndex, 1);
                browserData['Recently Closed'].push(tab);
                browserData['Browser Logs'].push(command + ' ' + tab);
            }
        } else if (el === 'Clear History and Cache') {
            browserData['Open Tabs'] = [];
            browserData['Recently Closed'] = [];
            browserData['Browser Logs'] = [];
        }
    }
    console.log(`${browserData['Browser Name']}`)
    console.log(`Open Tabs: ${browserData['Open Tabs'].join(', ')}`)
    console.log(`Recently Closed: ${browserData['Recently Closed'].join(', ')}`)
    console.log(`Browser Logs: ${browserData['Browser Logs'].join(', ')}`)
}
browserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"], "Recently Closed":["Yahoo","Gmail"], "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]}, ["Close Facebook", "Open StackOverFlow", "Open Google"]);
browserHistory({"Browser Name":"Mozilla Firefox", "Open Tabs":["YouTube"], "Recently Closed":["Gmail", "Dropbox"], "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]}, ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);