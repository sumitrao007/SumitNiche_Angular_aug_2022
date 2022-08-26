
// Simple json Object
// json => java script object notation
// key & value format 

let jsonobj={
    fname:'Sumit',
    "lname":'Raokhande',
    id:9
}

//1 using dot operator
//2 using square opertor

//1 using dot operator

//   console.log(`
//       First Name :: ${jsonobj.fname}
//       Last Name :: ${jsonobj.lname}
//       ID        :: ${jsonobj.id}
//   `)

  //2 using square opertor

//   console.log(`
//       First Name :: ${jsonobj["fname"]}
//       Last Name :: ${jsonobj["lname"]}
//       ID        :: ${jsonobj["id"]}
//   `);

// array of object

let arrobj=[
    {
        fname:'Sumit',
        "lname":'Raokhande',
        id:9,
        country:{
            cid:1,
            cname:'India'
        },
        month:["jan","March"],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:55
            }
        ]
    },
    {
        fname:'Kiran',
        "lname":'Raokhande',
        id:6,
        country:{
            cid:3,
            cname:'USA'
        },
        month:["Feb","April","Aug"],
        result:[
            {
                subj:"M1",
                marks:45
            },
            {
                subj:"M2",
                marks:50
            },
            {
                subj:"M3",
                marks:65
            }
        ]
    },
    {
        fname:'Spruha',
        "lname":'Raokhande',
        id:3,
        country:{
            cid:2,
            cname:'Japan'
        },
        month:["May","July",'Aug','Dec'],
        result:[
            {
                subj:"M1",
                marks:42
            },
            {
                subj:"M2",
                marks:65
            },
            {
                subj:"M3",
                marks:75
            }
        ]
    }
]

for(let i=0;i<arrobj.length;i++){
    console.log(`
        First Name :: ${arrobj[i].fname}
        Last Name  :: ${arrobj[i].lname}
        ID         :: ${arrobj[i].id}
    Country Name   :: ${arrobj[i].country.cname}
        Month      :: ${arrobj[i].month.join("  ")}
        ----------Result----------------
    `)

    for(let j=0;j<arrobj[i].result.length;j++){

        console.log(`
                Subject :: ${arrobj[i].result[j].subj}
                marks   :: ${arrobj[i].result[j].marks}
        `)
    }

}



  