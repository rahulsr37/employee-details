// console.log("Yo!")
let names = ["Karthik Subramanian", "Shubham Deshmukh", "Sanket Dumbhare", "Rakshit Shetty", "Rajendra Boke", "Priyanka Sharma", "Amit Dubey", "Jayashree Shetty", "Bhavik Jethava"];
let ips = ["172.25.10.92", "172.24.10.82", "172.24.10.80", "172.25.10.104", "172.25.10.93", "172.24.10.87", "172.24.10.79", "172.25.10.125", "172.24.10.108"];
let hostnames = ["Dell-DXVLLL3", "Dell-2YVLLL3", "Dell-GXVLLL3", "Dell-HHSLLL3", "Dell-3JSLLL3", "Dell-BJSLLL3", "Dell-6JSLLL3", "5CD8485XHH", "Dell-FHSLLL3"];

let objects = [];

for (let i = 0; i < names.length; i++) {
    const obj = {
        "name": names[i],
        "zt-ip": ips[i],
        "hostname": hostnames[i]
    };
    objects.push(obj);
    
}

let getContent = JSON.stringify(objects)
console.log(getContent)
// let changeContent = document.getElementById("jsondataid")
// changeContent.innerHTML = getContent
// changeContent.querySelector("#jsondataid").innerHTML = "Data Edited"
// console.log(changeContent)

// console.log(objects);




// objects = document.getElementById("jsondataid")
// objects.innerHTML = "New Json Data"

