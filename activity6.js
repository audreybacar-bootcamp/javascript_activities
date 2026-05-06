var record = [{
        "Name":"Gibo",
        "Age":16,
        "SkillSet" : [{
            "Skill":"SAP UI5"
        },
        {
            "Skill":"SAP HANA"
        }]
    },
     {
    "Name":"Patrick",
    "Age":22,
    "SkillSet" : [{
    "Skill":"SAP UI5"
    },
     {
    "Skill":"SAP HANA"
    }, {
    "Skill":"SAP ABAP"
    }]
    }, 
    {
    "Name":"MJ",
    "Age":24,
    "SkillSet" : [{
    "Skill":"SAP HANA"
    }]
    }];

var personName = [];
var lent = []
    for(i=0;i<record.length;i++){
        personName.push(record[i].Name)
        lent.push(record[i].SkillSet.length)
}

// console.log(personName);
// console.log(lent);
// console.log(lent.indexOf(Math.max(...lent)));
// console.log(personName[lent.indexOf(Math.max(...lent))]);
console.log("Name: "+ record[
    lent.indexOf(
        Math.max(...lent)
    )
].Name
)

console.log("Age: "+ record[
    lent.indexOf(
        Math.max(...lent)
    )
].Age
)