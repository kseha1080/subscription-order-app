export const customFilterMethod = (filter, row, column) => {
  const id = filter.pivotId || filter.id;
  return row[id] !== undefined
    ? String(row[id])
        .toLowerCase()
        .startsWith(filter.value.toLowerCase())
    : true;
};
