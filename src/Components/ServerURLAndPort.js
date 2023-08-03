
export default function ServerUrlAndPort(){
    const server = {
        host: "https",
        // url: "localhost",
        url: "192.168.1.209", // Vili's ip address
        port: "7237"
    };

    // Check if the URL is "localhost" or the specific IP address
    if (window.location.hostname === "192.168.1.209") {
      server.url = "192.168.1.209";
    } else {
      server.url = "localhost";
    }

    return server;
}

//http: 5136
//https: 7237

