let url = document.getElementById('urlInput');
let link1 = document.getElementById('link1');
let link2 = document.getElementById('link2');
let link3 = document.getElementById('link3');



async function shortUrl() {
    let url = document.getElementById('urlInput').value;
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();
    const {
        result
    } = data;
    console.log(result);
    link1.innerHTML = result.short_link;
    link1.href = result.full_short_link;

    link2.innerHTML = result.short_link2;
    link2.href = result.full_short_link2;

    link3.innerHTML = result.short_link3;
    link3.href = result.full_short_link3;
}