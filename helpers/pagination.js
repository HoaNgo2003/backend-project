module.exports = (objectPanigation, req, countProduct) => {
    if (req.page) {
        objectPanigation.currentPage = parseInt(req.page);
    }
    objectPanigation.skip = (objectPanigation.currentPage - 1) * objectPanigation.limitItems;
    
    const totalPage = Math.ceil(countProduct / objectPanigation.limitItems);
    objectPanigation.totalPage = totalPage;
    return objectPanigation;
}