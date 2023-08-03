
export default function ServerUrlAndPort(){

    const server = {
        host: "https",
        url: window.location.hostname === "192.168.1.209" ? "192.168.1.209" : "localhost",  
        port: "7237"
    };

    return server;
}

//server run in http mode: 5136
//server run in https mode: 7237