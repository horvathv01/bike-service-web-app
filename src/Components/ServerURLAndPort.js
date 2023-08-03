
export default function ServerUrlAndPort(){

    const server = {
        host: "http",
        //url: window.location.hostname === "192.168.1.209" ? "192.168.1.209" : "localhost",  
        url: "192.168.1.248",
        port: "5136"
    };

    return server;
}

//server run in http mode: 5136
//server run in https mode: 7237