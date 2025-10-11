const getInstalledBook = () => {

    const insatlledApp = localStorage.getItem("installed");

    if(insatlledApp) {
        const installAppData = JSON.parse(insatlledApp);
        return installAppData;
    }
    else{
        return [];
    }
}

const addToStoredDB = (id) => {

        const installAppData = getInstalledBook();

        if(installAppData.includes(id)){
            alert("ID already existed")
        }
        else{
            installAppData.push(id);
            console.log(installAppData);
        }
}
export {addToStoredDB};