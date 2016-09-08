const Sectionalize = function(data) {
  const sectionNames = [ "Produce", "Meat", "Frozen" ];

  const dataBlob = {};
  const sectionIds = [];
  const rowIds = [];

  sectionNames.forEach((name, sectionId) => {
    const currentSectionName = name;
    const items = data.filter((item) => item.group === currentSectionName);

    if (items.length > 0) {
      sectionIds.push(sectionId);
      dataBlob[sectionId] = { sectionName: currentSectionName };
      rowIds.push([]);
      items.forEach((item, i) => {
        const rowId = `${sectionId}:${i}`;
        rowIds[rowIds.length - 1].push(rowId);
        dataBlob[rowId] = item;
      });
    }
  });
  return { dataBlob, sectionIds, rowIds };
}

export default Sectionalize;
