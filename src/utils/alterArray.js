export const alterArray = (array, itemId, propName, newProps) => {
    return array.map(item => {
        if (item[propName] === itemId) {
            return {...item, ...newProps}
        }
        return item;
    })
}