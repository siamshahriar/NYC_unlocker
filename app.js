function getURL(){
    const url = document.getElementById('url-field');
    const urlValue = url.value;

    rbs = urlValue.substr(0, urlValue.lastIndexOf('/'));
    //rmvBackwordSlash = https://thumbs.theync.com/thumbs/8/2/9/2/1/829216138400f49608.mp4/829216138400f49608.mp4-9.jpg
const replaceMedia = rbs.replace("thumbs", "media"); 
const replaceVideos = replaceMedia.replace("thumbs", "videos"); 

window.open(replaceVideos, '_blank');

    console.log(replaceVideos);
}