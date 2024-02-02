// Helper functions

// Turns spaces into given string into hyphens
export const hyphenise = (string) => {
    console.log(`hyphenising '${string}'`);
    const strArr = string.toLowerCase().split(' ');
    return strArr.join('-');
}

// Processes 'Category strings'
export const processCategoryStrings = (string) => {
    return string.toUpperCase();
}

export const tokeniseString = (s) => {
    const strArr = s.toLowerCase().split(" ");
    return strArr.join("%20");
}