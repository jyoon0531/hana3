console.log("*****************************");
Object.defineProperties(Array.prototype, {
  first: {
    get: function () {
      return this[0];
    },
  },
  last: {
    get: function () {
      return this[this.length - 1];
      // return this.slice(-1)[0];
    },
  },
});

Array.prototype.uniqBy = function (prop) {
  return [...new Set(this.map((item) => item[prop]))];
};
Array.prototype.filterBy = function (prop, value) {
  return this.filter((item) => item[prop] === value);
};

Array.prototype.sortBy = function (prop, direction = "asc") {
  const flag = direction.toLowerCase() === "asc" ? 1 : -1;

  // return [...this].toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);
  return this.toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);

  // return this.toSorted((a, b) => {
  //   if (typeof a[prop] === 'string') return a[prop].localeCompare(b[prop]);

  //   return this.toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);
  // });
};

Array.prototype.findBy = function (prop, value) {
  return this.find((item) => item[prop] === value);
};
