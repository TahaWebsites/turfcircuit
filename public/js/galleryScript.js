let thumbnails = document.querySelectorAll('.suggestedVideoContainer');
let player = document.querySelector('.videoPlayer');
let closeButton = document.getElementById('closeButton');

thumbnails.forEach((video) => {
    video.addEventListener('click', () => {
        let videoId = video.querySelector('img').getAttribute('src').split('/')[4];
        let newSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        player.querySelector('iframe').src = newSrc;
        player.style.display = "flex";
    });
});

closeButton.addEventListener('click', () => {
    player.style.display = "none";
    player.querySelector('iframe').src = "";
});


let inputBox = document.querySelector('.searchVideo input');
let videoCollection = document.querySelectorAll('.suggestedVideoContainer');

inputBox.addEventListener('input', () => {
    let count = 0;
    let searchValue = inputBox.value.toLowerCase();
    let errMsg = document.querySelector('.errMsg')

    videoCollection.forEach(video => {
        let videoTitle = video.querySelector('.details h3')?.innerText.toLowerCase() || '';
        let videoDescription = video.querySelectorAll('.details p')[0]?.innerText.toLowerCase() || '';
        let videoTag = video.querySelectorAll('.details p')[1]?.innerText.toLowerCase() || '';

        if (videoTitle.includes(searchValue) || videoDescription.includes(searchValue) || videoTag.includes(searchValue)) {
            video.style.display = 'initial'; // Or any display style that suits your layout
            count += 1;
        } else {
            video.style.display = 'none';
        }

        if (count == 0) errMsg.style.display = "flex"
    });
});