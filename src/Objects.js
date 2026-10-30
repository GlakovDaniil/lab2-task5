export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    } else if (data.gender === 'male' && !('income' in data)) {
        data.income = 100000;
    }
    return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const keys = [
        ...Object.keys(obj1),
        ...Object.keys(obj2),
        ...Object.keys(obj3)
    ];
    return [...new Set(keys)].sort();
}

export function objectClone(obj, count) {
    let result = [];
    let i = 0;

    while (i < count) {
        let clone = structuredClone(obj);
        clone.id = i;
        result.push(clone);
        i++;
    }

    return result;
}
