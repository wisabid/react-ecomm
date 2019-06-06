export const getCatNames = (categories) => {
    const categoryNames = categories.reduce((all, item) => {
        all[item.id] = item.name;
        return all;
      }, {})
    return categoryNames;
}