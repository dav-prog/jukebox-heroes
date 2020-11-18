import { displaySingleAlbum } from "./displaySingleAlbum.js";
import { allAlbums } from "./sampleAllAlbumsJson.js";


const displayHomeView = function(albums) {
    const mainElement = document.getElementById("container");

    albums.forEach((album) => {
        let albumButton = document.createElement("button");
        albumButton.classList.add("dropbtn");
        albumButton.id = (`album-button${album.id}`)
        let albumImage = document.createElement("img");
        albumImage.classList.add("album-art");
        albumImage.src = album.albumArt;
        let albumArtist = document.createElement("h2");
        albumArtist.classList.add("artist");
        albumArtist.innerText = album.artist;
        let albumName = document.createElement("h3");
        albumName.classList.add("album-name");
        albumName.innerText = album.albumTitle;
        let recordLabel = document.createElement("h4");
        recordLabel.classList.add("record-label");
        recordLabel.innerText = album.recordLabel;
        albumButton.appendChild(albumImage);
        albumButton.appendChild(albumArtist);
        albumButton.appendChild(albumName);
        albumButton.appendChild(recordLabel);
        mainElement.appendChild(albumButton);




        let outerAlbumDiv = document.createElement("div");
        outerAlbumDiv.classList.add("dropdown-content");
        outerAlbumDiv.id = (`modals${album.id}`);
        mainElement.appendChild(outerAlbumDiv);
        let albumDiv = document.createElement("div");
        albumDiv.classList.add("modal");
        albumDiv.id = (`album-modal${album.id}`)
        outerAlbumDiv.appendChild(albumDiv);
        let innerAlbumDiv = document.createElement("div");
        innerAlbumDiv.classList.add("modal-content");
        albumDiv.appendChild(innerAlbumDiv);
        let albumSpan = document.createElement("span");
        albumSpan.classList.add("close");
        albumSpan.id = (`close${album.id}`);
        albumSpan.innerText = "&times;";
        innerAlbumDiv.appendChild(albumSpan)
        let albumTitle = document.createElement("h2");
        albumTitle.classList.add("album-name-modal");
        albumTitle.classList.add("modal-title")
        albumTitle.id = "album-name-modal-title";
        albumTitle.innerText = album.albumTitle;
        innerAlbumDiv.appendChild(albumTitle);
        let albumModalBlock = document.createElement("div");
        albumModalBlock.classList.add("modal-block");
        innerAlbumDiv.appendChild(albumModalBlock);
        let songBlock = document.createElement("div");
        songBlock.classList.add("song-block");
        albumModalBlock.appendChild(songBlock);
        let songList = document.createElement("ol");
        songList.classList.add("songs-name-list");
        songBlock.appendChild(songList);
        let songDuration = document.createElement("ol");
        songDuration.classList.add("song-duration-list");
        songBlock.appendChild(songDuration);

        album.songs.forEach((songs) => {
            let songName = document.createElement("li");
            songName.classList.add("song-name");
            songName.id = (`song-button${songs.id}`);
            songName.innerText = songs.songTitle;
            songList.appendChild(songName);
            let songDurationTimes = document.createElement("p");
            songDurationTimes.classList.add("duration");
            songDurationTimes.innerText = songs.duration;
            songDuration.appendChild(songDurationTimes);


            let outerSongDiv = document.createElement("div");
            outerSongDiv.classList.add("dropdown-content");
            mainElement.appendChild(outerSongDiv);
            let songDiv = document.createElement("div");
            songDiv.classList.add("modal");
            songDiv.id = (`song-modal${songs.id}`)
            outerSongDiv.appendChild(songDiv);
            let innerSongDiv = document.createElement("div");
            innerSongDiv.classList.add("modal-content");
            songDiv.appendChild(innerSongDiv);
            let songSpan = document.createElement("span");
            songSpan.classList.add("close");
            songSpan.id = (`song-close${songs.id}`);
            songSpan.innerText = "&times;";
            innerSongDiv.appendChild(songSpan)
            let songTitle = document.createElement("h2")
            songTitle.classList.add("song-name-modal")
            songTitle.classList.add("modal-title")
            songTitle.id = ("song-name-modal-title")
            songTitle.innerText = songs.songTitle;
            innerSongDiv.appendChild(songTitle)
            let songModalBlock = document.createElement("div")
            songModalBlock.classList.add("song-modal-block")
            innerSongDiv.appendChild(songModalBlock)
            let songSongBlock = document.createElement("div")
            songSongBlock.classList.add("song-block")
            songModalBlock.appendChild(songSongBlock)
            let video = document.createElement("iframe")
            video.width = "420"
            video.height = "345"
            video.src = songs.songLink
            songSongBlock.appendChild(video)
            let songDeleteButton = document.createElement("button");
            songDeleteButton.classList.add("delete");
            songDeleteButton.type = "submit";
            songDeleteButton.innerText = ("Delete Song")
            songSongBlock.appendChild(songDeleteButton);
            let songCommentBlock = document.createElement("div");
            songCommentBlock.classList.add("comment-block");
            songModalBlock.appendChild(songCommentBlock)
            let songAverageStars = document.createElement("p");
            songAverageStars.classList.add("average-stars");
            songAverageStars.id = `song-average-rating${songs.id}`;
            songCommentBlock.appendChild(songAverageStars);
            let songRatingForm = document.createElement("form");
            songRatingForm.classList.add("stars");
            songRatingForm.classList.add("add-stars")
            songCommentBlock.appendChild(songRatingForm);

            let songStarFiveInput = document.createElement("input");
            songStarFiveInput.id = `${songs.id}song-star-5`;
            songStarFiveInput.value = "★★★★★";
            songStarFiveInput.type = "radio";
            songStarFiveInput.name = "rating";
            songRatingForm.appendChild(songStarFiveInput);
            let songStarFiveLabel = document.createElement("label");
            songStarFiveLabel.for = "song-star-5";
            songRatingForm.appendChild(songStarFiveLabel);
            let songStarFourInput = document.createElement("input");
            songStarFourInput.id = `${songs.id}song-star-4`;
            songStarFourInput.value = "★★★★";
            songStarFourInput.type = "radio";
            songStarFourInput.name = "rating";
            songRatingForm.appendChild(songStarFourInput);
            let songStarFourLabel = document.createElement("label");
            songStarFourLabel.for = "song-star-4";
            songRatingForm.appendChild(songStarFourLabel);
            let songStarThreeInput = document.createElement("input");
            songStarThreeInput.id = `${songs.id}song-star-3`;
            songStarThreeInput.value = "★★★";
            songStarThreeInput.type = "radio";
            songStarThreeInput.name = "rating";
            songRatingForm.appendChild(songStarThreeInput);
            let songStarThreeLabel = document.createElement("label");
            songStarThreeLabel.for = "song-star-3";
            songRatingForm.appendChild(songStarThreeLabel);
            let songStarTwoInput = document.createElement("input");
            songStarTwoInput.id = `${songs.id}song-star-2`;
            songStarTwoInput.value = "★★";
            songStarTwoInput.type = "radio";
            songStarTwoInput.name = "rating";
            songRatingForm.appendChild(songStarTwoInput);
            let songStarTwoLabel = document.createElement("label");
            songStarTwoLabel.for = "song-star-2";
            songRatingForm.appendChild(songStarTwoLabel);
            let songStarOneInput = document.createElement("input");
            songStarOneInput.id = `${songs.id}song-star-1`;
            songStarOneInput.value = "★";
            songStarOneInput.type = "radio";
            songStarOneInput.name = "rating";
            songRatingForm.appendChild(songStarOneInput);
            let songStarOneLabel = document.createElement("label");
            songStarOneLabel.for = "song-star-1";
            songRatingForm.appendChild(songStarOneLabel);

            let songCommentForm = document.createElement("form");
            songCommentForm.classList.add("add-comments");
            songCommentBlock.appendChild(songCommentForm);
            let songAuthorInput = document.createElement("label");
            songAuthorInput.for = "author-input";
            songCommentForm.appendChild(songAuthorInput);
            let songHeadlineInput = document.createElement("label");
            songHeadlineInput.for = "headline-input";
            songCommentForm.appendChild(songHeadlineInput);
            let songCommentsInput = document.createElement("label");
            songCommentsInput.for = "comments-input";
            songCommentForm.appendChild(songCommentsInput);
            let songAuthorTextInput = document.createElement("input");
            songAuthorTextInput.placeholder = "Your Name";
            songAuthorTextInput.type = "text";
            songAuthorTextInput.name = "authorText";
            songAuthorTextInput.id = `${songs.id}song-author-input`;
            songCommentForm.appendChild(songAuthorTextInput);
            songAuthorInput.classList.add("modal-input");
            let songHeadlineTextInput = document.createElement("input");
            songHeadlineTextInput.placeholder = "Headline";
            songHeadlineTextInput.type = "text";
            songHeadlineTextInput.name = "headlineText";
            songHeadlineTextInput.id = `${songs.id}song-headline-input`;
            songCommentForm.appendChild(songHeadlineTextInput);
            let songCommentTextInput = document.createElement("input");
            songCommentTextInput.placeholder = "Add New Comment";
            songCommentTextInput.type = "text";
            songCommentTextInput.name = "commentText";
            songCommentTextInput.id = `${songs.id}song-comment-input`;
            songCommentForm.appendChild(songCommentTextInput);

            let songSubmitCommentButton = document.createElement("button");
            songSubmitCommentButton.classList.add("submit-comment");
            songSubmitCommentButton.type = "submit";
            songSubmitCommentButton.innerText = "Submit";
            songCommentForm.appendChild(songSubmitCommentButton);




            var songModal = document.getElementById(`song-modal${songs.id}`);
            var songButton = document.getElementById(`song-button${songs.id}`);
            var songCloseSpan = document.getElementById(`song-close${songs.id}`);

            songButton.onclick = function() {
                songModal.style.display = "block";
            };

            songCloseSpan.onclick = function() {
                songModal.style.display = "none";
            };

            window.onclick = function(event) {
                if (event.target == songModal) {
                    songModal.style.display = "none";
                }
            };

        });

        let albumDeleteButton = document.createElement("button");
        albumDeleteButton.classList.add("delete-album");
        albumDeleteButton.type = "submit";
        albumDeleteButton.innerText = ("Delete Album")
        songBlock.appendChild(albumDeleteButton);
        let commentBlock = document.createElement("div");
        commentBlock.classList.add("comment-block");
        albumModalBlock.appendChild(commentBlock)
        let averageStars = document.createElement("p");
        averageStars.classList.add("average-stars");
        averageStars.id = "album-average-rating";
        commentBlock.appendChild(averageStars);
        let albumRatingForm = document.createElement("form");
        albumRatingForm.classList.add("stars");
        albumRatingForm.classList.add("add-stars")
        commentBlock.appendChild(albumRatingForm);
        let albumStarFiveInput = document.createElement("input");
        albumStarFiveInput.id = "album-star-5";
        albumStarFiveInput.value = "★★★★★";
        albumStarFiveInput.type = "radio";
        albumStarFiveInput.name = "rating";
        albumRatingForm.appendChild(albumStarFiveInput);
        let albumStarFiveLabel = document.createElement("label");
        albumStarFiveLabel.for = "album-star-5";
        albumRatingForm.appendChild(albumStarFiveLabel);
        let albumStarFourInput = document.createElement("input");
        albumStarFourInput.id = "album-star-4";
        albumStarFourInput.value = "★★★★";
        albumStarFourInput.type = "radio";
        albumStarFourInput.name = "rating";
        albumRatingForm.appendChild(albumStarFourInput);
        let albumStarFourLabel = document.createElement("label");
        albumStarFourLabel.for = "album-star-4";
        albumRatingForm.appendChild(albumStarFourLabel);
        let albumStarThreeInput = document.createElement("input");
        albumStarThreeInput.id = "album-star-3";
        albumStarThreeInput.value = "★★★";
        albumStarThreeInput.type = "radio";
        albumStarThreeInput.name = "rating";
        albumRatingForm.appendChild(albumStarThreeInput);
        let albumStarThreeLabel = document.createElement("label");
        albumStarThreeLabel.for = "album-star-3";
        albumRatingForm.appendChild(albumStarThreeLabel);
        let albumStarTwoInput = document.createElement("input");
        albumStarTwoInput.id = "album-star-2";
        albumStarTwoInput.value = "★★";
        albumStarTwoInput.type = "radio";
        albumStarTwoInput.name = "rating";
        albumRatingForm.appendChild(albumStarTwoInput);
        let albumStarTwoLabel = document.createElement("label");
        albumStarTwoLabel.for = "album-star-2";
        albumRatingForm.appendChild(albumStarTwoLabel);
        let albumStarOneInput = document.createElement("input");
        albumStarOneInput.id = "album-star-1";
        albumStarOneInput.value = "★";
        albumStarOneInput.type = "radio";
        albumStarOneInput.name = "rating";
        albumRatingForm.appendChild(albumStarOneInput);
        let albumStarOneLabel = document.createElement("label");
        albumStarOneLabel.for = "album-star-1";
        albumRatingForm.appendChild(albumStarOneLabel);

        let commentForm = document.createElement("form");
        commentForm.classList.add("add-comments");
        commentBlock.appendChild(commentForm);
        let albumAuthorInput = document.createElement("label");
        albumAuthorInput.for = "author-input";
        commentForm.appendChild(albumAuthorInput);
        let albumHeadlineInput = document.createElement("label");
        albumHeadlineInput.for = "headline-input";
        commentForm.appendChild(albumHeadlineInput);
        let albumCommentsInput = document.createElement("label");
        albumCommentsInput.for = "comments-input";
        commentForm.appendChild(albumCommentsInput);
        let albumAuthorTextInput = document.createElement("input");
        albumAuthorTextInput.placeholder = "Your Name";
        albumAuthorTextInput.type = "text";
        albumAuthorTextInput.name = "authorTex + album.idt";
        albumAuthorTextInput.id = "album-author-input";
        commentForm.appendChild(albumAuthorTextInput);
        albumAuthorInput.classList.add("modal-input");
        let albumHeadlineTextInput = document.createElement("input");
        albumHeadlineTextInput.placeholder = "Headline";
        albumHeadlineTextInput.type = "text";
        albumHeadlineTextInput.name = "headlineText";
        albumHeadlineTextInput.id = "album-headline-input";
        commentForm.appendChild(albumHeadlineTextInput);
        let albumCommentTextInput = document.createElement("input");
        albumCommentTextInput.placeholder = "Add New Comment";
        albumCommentTextInput.type = "text";
        albumCommentTextInput.name = "commentText";
        albumCommentTextInput.id = "album-comment-input";
        commentForm.appendChild(albumCommentTextInput);
        let albumSubmitCommentButton = document.createElement("button");
        albumSubmitCommentButton.classList.add("submit-comment");
        albumSubmitCommentButton.type = "submit";
        albumSubmitCommentButton.innerText = "Submit";
        commentForm.appendChild(albumSubmitCommentButton);
        let albumCommentDiv = document.createElement("div");
        albumCommentDiv.classList.add("comments");
        commentForm.appendChild(albumCommentDiv);
        let albumCommentOutterP = document.createElement("p");
        albumCommentOutterP.classList.add("comment");
        albumCommentDiv.appendChild(albumCommentOutterP);
        let albumCommentAuthorP = document.createElement("p");
        albumCommentAuthorP.classList.add("author");
        albumCommentAuthorP.innerText = "Abigail";
        albumCommentOutterP.appendChild(albumCommentAuthorP);
        let albumCommentHeadlineP = document.createElement("p");
        albumCommentHeadlineP.classList.add("headline");
        albumCommentHeadlineP.innerText = "#Foreigners";
        albumCommentOutterP.appendChild(albumCommentHeadlineP);
        let albumCommentCommentP = document.createElement("p");
        albumCommentCommentP.classList.add("comment");
        albumCommentCommentP.innerText =
            "I will build a great wall--and nobody builds walls better than me, believe me--and I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.";
        albumCommentOutterP.appendChild(albumCommentCommentP);






        var modal = document.getElementById(`album-modal${album.id}`);
        var button = document.getElementById(`album-button${album.id}`);
        var span = document.getElementById(`close${album.id}`);

        button.onclick = function() {
            modal.style.display = "block";
        };

        span.onclick = function() {
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };




    });

    return mainElement;
};

export { displayHomeView };