document.addEventListener("DOMContentLoaded", function() {
  const search = document.querySelector("#search");
  const sorter = document.querySelector("#sorter");
  const searchIcon = document.querySelector("#searchIcon");


  searchIcon.addEventListener("click", function() {
      const searchType = sorter.value;
      const searchTerm = search.value;
      if (searchType === "photo") {
          searchPhotos(searchTerm);
      } else if (searchType === "video") {
          searchVideos(searchTerm);
      }
  });

  sorter.addEventListener("change", function() {
      const searchType = sorter.value;
      const searchTerm = search.value;
      if (searchType === "photo") {
          searchPhotos(searchTerm);
      } else if (searchType === "video") {
          searchVideos(searchTerm);
      }
  });

  function searchPhotos(searchValue) {
      fetch(`https://api.pexels.com/v1/search?query=${searchValue}&per_page=15`, {
          headers: {
              authorization: "QCfUHjheuMJbUM8mjadF6J8hIIV3yklEMEIxzyEIvi0hbzSaGbxhQrAq"
          }
      })
      .then(response => response.json())
      .then(data => data);
  }

  function searchVideos(searchValue) {
      fetch(`https://api.pexels.com/videos/search?query=${searchValue}&per_page=15`, {
          headers: {
              authorization: "QCfUHjheuMJbUM8mjadF6J8hIIV3yklEMEIxzyEIvi0hbzSaGbxhQrAq"
          }
      })
      .then(response => response.json())
      .then(data => data);
  }
});

const search = document.querySelector("#searchInput");
const img1 = document.querySelector(".images__first");
const img2 = document.querySelector(".images__second");
const img3 = document.querySelector(".images__third");
const sorter = document.querySelector("#sorter");
const searchIcon = document.querySelector("#searchIcon");
const myImg = document.querySelector("#myImg");
const searchedText = document.querySelector(".page__text");

searchIcon.addEventListener("onclick", (e) => {
  console.log(e.target.value);
  if(e.target.value === "video"){
      search.addEventListener("change", searchFunction);
      search.value = "";
      function searchFunction(e){
          e.preventDefault();
          const searchValue = search.value;
          searchedText.innerHTML = "video" + searchValue;
          img1.innerHTML = "";
          fetch(`https://api.pexels.com/videos/search?query=${searchValue}&per_page=15`, {
              headers: {
                  Authorization: "QCfUHjheuMJbUM8mjadF6J8hIIV3yklEMEIxzyEIvi0hbzSaGbxhQrAq"
              }
          })
          .then(response => response.json())
          .then(data => renderVideo(data))

          function renderVideo(data){
              img1.innerHTML = "";
              console.log(data.videos)
              for(let i = 0; i < 15; i++){
                  const video = document.createElement('video');
                  video.src = data.videos[i].video_files[0].link;
                  video.autoplay = true;
                  video.controls = true;
                  video.muted = false;
                  video.height = 240;
                  video.width = 320;
                  img1.appendChild(video);
              }
          }
      }
  }
  if(e.target.value === "photo"){
       search.addEventListener("change", searchFunction);
       search.value = "";
      function searchFunction(e){
          e.preventDefault();
          const searchValue = search.value;
          searchedText.innerHTML = "Photo " + searchValue;
          img1.innerHTML = "";
          img2.innerHTML = "";
          img3.innerHTML = "";
          fetch(`https://api.pexels.com/v1/search?query=${searchValue}&per_page=15`, {
              headers: {
                  Authorization:"QCfUHjheuMJbUM8mjadF6J8hIIV3yklEMEIxzyEIvi0hbzSaGbxhQrAq"
              }
          })
          .then(response => response.json())
          .then(data => renderImage(data))
      
          function renderImage(data){
              img1.innerHTML = "";
              img2.innerHTML = "";
              img3.innerHTML = "";
              console.log(data.photos)
              for(let i = 0; i < 5; i++){
                  const img = document.createElement("img");
                  img.src = data.photos[i].src.original + "?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
                  img.style.width = "300px";
                  img1.appendChild(img);
              }
              for(let i = 5; i < 10; i++){
                  const img = document.createElement("img");
                  img.src = data.photos[i].src.original + "?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
                  img.style.width = "300px";
                  img2.appendChild(img);
              }
              for(let i = 10; i < 15; i++){
                  const img = document.createElement("img");
                  img.src = data.photos[i].src.original + "?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
                  img.style.width = "300px";
                  img3.appendChild(img);
              }
          }
      }
      
  }
});

//  ............................

sorter.addEventListener("change", (e) => {
  console.log(e.target.value);
  if(e.target.value === "photo"){
       search.addEventListener("change", searchFunction);
       search.value = "";
      function searchFunction(e){
          e.preventDefault();
          const searchValue = search.value;
          searchedText.innerHTML = "Photo" + searchValue;
          img1.innerHTML = "";
          img2.innerHTML = "";
          img3.innerHTML = "";
          fetch(`https://api.pexels.com/v1/search?query=${searchValue}&per_page=15`, {
              headers: {
                  authorization: "QCfUHjheuMJbUM8mjadF6J8hIIV3yklEMEIxzyEIvi0hbzSaGbxhQrAq"
              }
          })
          .then(response => response.json())
          .then(data => renderImage(data))
      
          function renderImage(data){
              img1.innerHTML = "";
              img2.innerHTML = "";
              img3.innerHTML = "";
              console.log(data.photos)
              for(let i = 0; i < 15; i++){
                  const img = document.createElement("img");
                  img.src = data.photos[i].src.original + "?auto=compress&cs=tinysrgb&w=400";
                  img.style.width = "300px";
                  img.style.height = "auto";
                  img.style.maxWidth= "100%";
                  img1.appendChild(img);
              }
          }
      }
      
  }
  if(e.target.value === "video"){
      search.addEventListener("change", searchFunction);
      search.value = "";
      function searchFunction(e){
          e.preventDefault();
          const searchValue = search.value;
          searchedText.innerHTML = "Photo " + searchValue;
          img1.innerHTML = "";
          fetch(`https://api.pexels.com/videos/search?query=${searchValue}&per_page=15`, {
              headers: {
                  Authorization:"QCfUHjheuMJbUM8mjadF6J8hIIV3yklEMEIxzyEIvi0hbzSaGbxhQrAq"
              }
          })
          .then(response => response.json())
          .then(data => renderVideo(data))

          function renderVideo(data){
              img1.innerHTML = "";
              console.log(data.videos)
              for(let i = 0; i < 15; i++){
                  const video = document.createElement('video');
                  video.src = data.videos[i].video_files[0].link;
                  video.autoplay = false;
                  video.controls = true;
                  video.muted = false;
                  video.height = 240;
                  video.width = 320;
                  img1.appendChild(video);
              }
          }
      }
  }
});
