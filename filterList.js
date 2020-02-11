function filter_list(l) {
    l = l;

    let array = [];

    for (let i = 0; i < l.length; i++) {
        if (Number.isInteger(l[i])) {
            array.push(l[i]);
        }
    }
    return array;
}


console.log(filter_list([5, false, 's4', 'd', 'y', 'gtr', 56, 7, 'y', 78, 3, ]));