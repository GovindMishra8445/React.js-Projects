// export function checkHeading(str){
//     return /^(\*)(\*)(.*)\*$/.test(str)
// }

// export function replaceHeadingStarts(str){
//     return str.replace(/^(\*)(\*)|(\*)$/g,'')
// }




export function checkHeading(str){
    return /^(\*)(\*)(.*)\*$/.test(str)
}

export function replaceHeadingStarts(str){
    return str.replace(/^(\*)(\*)|(\*)$/g,'')
}

// Helper function to truncate text with ellipsis
export function truncateText(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
}

// Helper function to format timestamp 
export function formatTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Helper function to get random message ID
export function getRandomId() {
    return Math.random().toString(36).substring(2, 15);
}