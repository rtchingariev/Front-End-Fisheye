// drop-down list - sort by likes
function sortMedia(elt) {
  const sortBy = elt.value;
  switch (sortBy) {
    case 'Popularity': {
      media.sort(sortByPopularity);
      break;
    }

    case 'Date': {
      media.sort(sortByDate);
      break;
    }

    case 'Title': {
      media.sort(sortByTitle);
      break;
    }
  }
  displayMedia();
}

function sortByPopularity(a, b) {
  if (a.likes < b.likes) {
    return -1;
  }
  if (a.likes > b.likes) {
    return 1;
  }
  return 0;
}

function sortByDate(a, b) {
  if (a.date < b.date) {
    return -1;
  }
  if (a.date > b.date) {
    return 1;
  }
  return 0;
}

function sortByTitle(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

// const sortByLikes = likes;
// // const sortByLikes = [52, 58, 11, 2, 3, 52, 23, 52, 52];
// sortByLikes.sort(function (a, b) {
//   return a - b;
// });
// console.log(sortByLikes);

// // drop-down list - sort by date
// // const sortByDate = date;
// const sortByDate = [
//   '2013 - 02 - 30',
//   '2018 - 07 - 17',
//   '2019 - 08 - 12',
//   '2019 - 01 - 02',
//   '2019 - 05 - 20',
//   '2019 - 07 - 18',
//   '2018 - 02 - 22',
//   '2017 - 09 - 13',
//   '2016 - 06 - 12',
// ];
// sortByDate.sort(function (a, b) {
//   return a.localeCompare(b);
// });
// console.log(sortByDate);

// // drop-down list - sort by title
// // const sortByTtle = title;
// const sortByTitle = [
//   '8 Rows',
//   'Fashion Wings',
//   'Melody Red on Stripes',
//   'Venture Conference',
//   'Product Pitch',
//   'Musical Festival Keyboard',
//   'Musical Festival Singer',
//   'Animal Majesty',
//   'Cute puppy on sunset',
// ];
// sortByTtle.sort(function (a, b) {
//   return a.localeCompare(b);
// });
// console.log(sortByTtle);
