const getBroswer=()=>{
    const userAgent = navigator.userAgent.toLowerCase();
    if(userAgent.includes('chrome')){
        return 'chrome';
    }
    else if(userAgent.includes('Edge')){
        return 'edge';
    }
    else if(userAgent.includes('brave')){
        return 'brave';
    }
}

export default getBroswer;