// console.log("Yo!")
// let names = ["Karthik Subramanian", "Shubham Deshmukh", "Sanket Dumbhare", "Rakshit Shetty", "Rajendra Boke", "Priyanka Sharma", "Amit Dubey", "Jayashree Shetty", "Bhavik Jethava"];
// let ips = ["172.25.10.92", "172.24.10.82", "172.24.10.80", "172.25.10.104", "172.25.10.93", "172.24.10.87", "172.24.10.79", "172.25.10.125", "172.24.10.108"];
// let hostnames = ["Dell-DXVLLL3", "Dell-2YVLLL3", "Dell-GXVLLL3", "Dell-HHSLLL3", "Dell-3JSLLL3", "Dell-BJSLLL3", "Dell-6JSLLL3", "5CD8485XHH", "Dell-FHSLLL3"];


let username = [
    'ekta.waghulde@dnif.it',
    'siddhant.mishra@dnif.it',
    'rakshit.shetty@dnif.it',
    'renuka.totey@dnif.it',
    'hemant.vishwakarma@dnif.it',
    'shubham.hate@dnif.it',
    'priyanka.sharma@dnif.it',
    'karthik.subramanian@dnif.it',
    'sanket.dumbhare@dnif.it',
    'manish.nemade@dnif.it',
    'latish.kunder@dnif.it',
    'rajendra.boke@dnif.it',
    'kunal.jawale@dnif.it',
    'himanshu.mehra@dnif.it',
    'shubham.deshmukh@dnif.it',
    'vipin.dumbhare@dnif.it',
    'rahul.singh@dnif.it',
    'sunil.katuri@dnif.it',
    'arbaz.dalwai@dnif.it',
    'avinash.thakare@dnif.it',
    'roshan.poojari@dnif.it',
    'nidhi.shetty@dnif.it',
    'komal.kelaskar@dnif.it',
    'divyesh.aswar@dnif.it',
    'mehran.shaikh@dnif.it',
    'harshkumar.gupta@dnif.it',
    'harshal@dnif.it',
    'rushikesh.dighe@dnif.it',
    'mohaseen.shaikh@dnif.it',
    'neelamkiran.babu@dnif.it',
    'ashwini.jaiswal@dnif.it',
    'jayashree.shetty@dnif.it',
    'bavisetti.thathaji@dnif.it',
    'aman.ankit@dnif.it',
    'prachi.samant@dnif.it',
    'sonali',
    'shubham.gilada@dnif.it',
    'savio.fernandes@dnif.it',
    'chetan.iskar@dnif.it',
    'siddhika.thakur@dnif.it',
    'bharat.rajgar@dnif.it',
    'aniket.bait@dnif.it',
    'raghuraj.upadhyay@dnif.it',
    'reshma.bendale@dnif.it',
    'aniket.bhirud@dnif.it',
    'amit.dubey@dnif.it',
    'omkar.dabhadkar@dnif.it',
    'reena.mali@dnif.it',
    'bhavik.jethava@dnif.it',
    'akshay.chaturvedi@dnif.it',
    'rohan.tiwatne@dnif.it',
    'avni.sharma@dnif.it',
    'aditya.sen@dnif.it',
    'manish.garasangi@dnif.it',
    'abhijeet.pawar@dnif.it',
    'milind.karnad@dnif.it',
    'nupur.kumbhar@dnif.it',
    'aakanksha.ambastha@dnif.it',
    'anurag.mishra@dnif.it',
    'aditya.kadam@dnif.it',
    'sumit.gogawale@dnif.it',
    'adeeb.khan@dnif.it',
    'nitin.jadhav@dnif.it',
    'imran.khan@dnif.it',
    'ninad.shah@dnif.it',
    'pradvik.poojary@dnif.it'
]

// console.log(username.length)


for (const email of username) {
    const [username_part] = email.split('@');
    let username_without_dots = username_part.split('.').join(' ');
    console.log(username_without_dots);
  }



let usernameArray = JSON.stringify(username_without_dots)
console.log(usernameArray)

// let usernameArrayData = document.getElementById("usernamedataid")
// console.log(usernameArrayData)
// usernameArrayData.innerHTML = usernameArray



// let objects = [];

// for (let i = 0; i < names.length; i++) {
//     const obj = {
//         "name": names[i],
//         "hostname": hostnames[i],
//         "zt-ip": ips[i]
//     };
//     objects.push(obj);

// }

// let getContent = JSON.stringify(objects)
// console.log(getContent)
// let changeContent = document.getElementById("jsondataid")
// changeContent.innerHTML = getContent
