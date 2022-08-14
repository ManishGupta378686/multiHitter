const axios = require('axios');
let reqArr = [];

const multiHit = {
    GET(url, iterations) {
        for (let i = 0; i < iterations; i++) {
            reqArr[i] = axios.get(url)
        }
        axios.all(reqArr).then((result) => {
            reqArr = [];
            result.forEach((item) => {
                console.log(item.data);
            })
        });
    },
    POST(url, iterations, data) {
        for (let i = 0; i < iterations; i++) {
            for (let k in data) {
                if (typeof (data[k]) == "number") {
                    data[k]++;
                } else if (typeof (data[k]) != "object") {
                    data[k] = data[k] + `${i}`;
                }
            }
            reqArr[i] = axios.post(url, data)
        }
        axios.all(reqArr).then((result) => {
            reqArr = [];
            result.forEach((item) => {
                console.log(item.data);
            })
        });
    },
    PUT(method, url, iterations, data) {
        for (let i = 0; i < iterations; i++) {
            for (let k in data) {
                if (typeof (data[k]) == "number") {
                    data[k]++;
                } else if (typeof (data[k]) != "object") {
                    data[k] = data[k] + `${i}`;
                }
            }
            reqArr[i] = axios.put(url, data)
        }
        axios.all(reqArr).then((result) => {
            reqArr = [];
            result.forEach((item) => {
                console.log(item.data);
            })
        });
    },
    PATCH(method, url, iterations, data) {
        for (let i = 0; i < iterations; i++) {
            for (let k in data) {
                if (typeof (data[k]) == "number") {
                    data[k]++;
                } else if (typeof (data[k]) != "object") {
                    data[k] = data[k] + `${i}`;
                }
            }
            reqArr[i] = axios.put(url, data)
        }
        axios.all(reqArr).then((result) => {
            reqArr = [];
            result.forEach((item) => {
                console.log(item.data);
            })
        });
    },
    DELETE(url, iterations) {
        for (let i = 0; i < iterations; i++) {
            reqArr[i] = axios.delete(url)
        }
        axios.all(reqArr).then((result) => {
            reqArr = [];
            result.forEach((item) => {
                console.log(item.data);
            })
        });
    }

}


module.exports = multiHit;

