module.exports = function toReadable(num) {
    const dict = new Map([
        ['0', ''],
        ['1', 'one'],
        ['2', 'two'],
        ['3', 'three'],
        ['4', 'four'],
        ['5', 'five'],
        ['6', 'six'],
        ['7', 'seven'],
        ['8', 'eight'],
        ['9', 'nine'],
        ['10', 'ten'],
        ['11', 'eleven'],
        ['12', 'twelve'],
        ['13', 'thirteen'],
        ['14', 'fourteen'],
        ['15', 'fifteen'],
        ['16', 'sixteen'],
        ['17', 'seventeen'],
        ['18', 'eighteen'],
        ['19', 'nineteen'],
        ['20', 'twenty'],
        ['30', 'thirty'],
        ['40', 'forty'],
        ['50', 'fifty'],
        ['60', 'sixty'],
        ['70', 'seventy'],
        ['80', 'eighty'],
        ['90', 'ninety'],
    ]);

    const num_s = num.toString();
    let result = '';

    if (num == 0) {
        return 'zero';
    }

    // num = [x__]
    if (num > 99) {
        result = dict.get(num_s.slice(-3, -2)) + ' hundred ';
    }

    // num = [.10]-[.19] || [.x0]
    if (dict.has(num_s.slice(-2))) {
        return result + dict.get(num_s.slice(-2));
    }

    // num = [.x_]
    if (num_s.slice(-2, -1) != '0') {
        result += dict.get(num_s.slice(-2, -1) + '0') + ' ';
    }

    // num = [..x]
    result += dict.get(num_s.slice(-1));

    return result.trim();
}
