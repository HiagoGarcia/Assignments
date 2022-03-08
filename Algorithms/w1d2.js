const str1 = " there's no free lunch - gotta pay yer way. ";
const expected6 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night! ";
const expected7 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 */
function acronymize(str) {
    v = true;
    var result = '';
    for (var i = 0; i<str.length; i++) {
        if (str[i] == ' ') {
            v = true;
        }
        else if (str[i] != ' ' && v == true) {
            result += (str[i]);
            v = false;
        }
    }
    return result.toUpperCase();
}


console.log(acronymize(str2))