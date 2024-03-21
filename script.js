
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
}


// ======== get URL ========
function appUrl() {
    location.href = "https://apps.apple.com/vn/app/guess-card-card-game/id6479599802"
}

// ======== get Icon ========
appIcon = {
    "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d1/07/10/d1071023-3cbe-27f0-e04e-0735428fdf70/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
}

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;


// ======== get images URL ========
const imageUrl = [
    'https://image-public-sharing.on.fleek.co/images/img1.jpg',
    'https://image-public-sharing.on.fleek.co/images/img2.jpg',
    'https://image-public-sharing.on.fleek.co/images/img3.jpg',
    'https://image-public-sharing.on.fleek.co/images/img4.jpg',
    'https://image-public-sharing.on.fleek.co/images/img5.jpg'
];
         
const images = document.getElementById('image-items');
for (let i = 0; i < imageUrl.length; i++) {
    const img = document.createElement('img');
    img.src = imageUrl[i];
    img.style = "border-radius: 12px"
    images.appendChild(img);
}


// ========get banner URL ========
const bannerUrl = [
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9b/b4/20/9bb420f0-a686-9710-224e-c0f6ee7edc4b/294cc75e-66c6-475b-8e93-0ba909e81e02_1.jpg/300x0w.webp',
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/4b/25/bc/4b25bc1f-e3d3-cd88-110d-4e3f429debce/e697e3fd-087b-458c-8517-df73711ff243_2.jpg/300x0w.webp',
    'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/53/83/1c/53831c1e-0444-6b69-6458-b856d7d6f8ad/8c5df70e-9467-4fc5-9fd8-988d65f8d21b_3.png/300x0w.webp',
];
         
const banner = document.getElementById('banner-items');
for (let i = 0; i < bannerUrl.length; i++) {
    const img = document.createElement('img');
    img.src = bannerUrl[i];
    img.style = "border-radius: 12px"
    banner.appendChild(img);
}
