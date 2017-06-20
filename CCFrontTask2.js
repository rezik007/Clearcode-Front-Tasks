
/* Author: Patryk Rezler */

exports.damage= function(spellString){

    const  availableSpells = {
        0 : ["dai", 5],
        1 : ["ain", 3],
        2 : ["jee", 3],
        3 : ["je", 2],
        4 : ["ne", 2],
        5 : ["fe", 1],
        6 : ["ai", 2]

    };

    var startIndex = spellString.search(availableSpells[5][0])+2;
    var endIndex = spellString.lastIndexOf(availableSpells[6][0]);

    if (startIndex==-1 || endIndex==-1 || ((spellString.match(/fe/g) || []).length >1) || startIndex > endIndex){
       return 0;
    }

    else {
        var damage = 3;
        for (var i = startIndex; i < endIndex; i) {
            for (var j = 0; j<Object.keys(availableSpells).length; j++) {
                if ((spellString[i]+spellString[i+1]+spellString[i+2] == availableSpells[1][0]) && (spellString[i+2]+spellString[i+3]== availableSpells[4][0])){
                    i += 4;
                    damage += availableSpells[6][1] + availableSpells[4][1];
                    break;
                }
                else if ((spellString[i]+spellString[i+1]+[spellString[i+2]] == availableSpells[j][0])) {
                    i += 3;
                    damage += availableSpells[j][1];
                    break;
                }
                else if ((spellString[i] + spellString[i + 1] == availableSpells[j][0])){
                    i += 2;
                    damage += availableSpells[j][1];
                    break;
                }
                else if (j==6) {
                    i+=1;
                    damage -=1;
                    break;
                }
            }

            if(i == endIndex){
                break;
            }
        }
        if (damage < 0){
            return 0;
        }
        return damage;
    }
};