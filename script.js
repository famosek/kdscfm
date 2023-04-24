window.onload = (async () => {
    if (window.location.href.includes('giveaways')) {
        await new Promise(r => setTimeout(r, 3000));
        abc();
    }
        
});

async function abc() {
    let btn = document.querySelector("#giveaways-root > div > div > div:nth-child(3) > div.grid.grid-cols-1.gap-2\\.5.rounded-xl.md\\:grid-cols-3.xl\\:grid-cols-\\[repeat\\(5\\,1fr\\)\\].opacity-100 > div:nth-child(5) > div > div > div > div.flex.rounded-xl.bg-navy-750.px-4.py-3\\.5 > a");
    if (btn == null) return window.location.assign('https://key-drop.com/giveaways/list');
    btn.click();
    await new Promise(r => setTimeout(r, 3000));
    btn = document.querySelector("#giveaways-root > div > div > div > div.mt-10.grid.grid-cols-1.gap-12.lg\\:grid-cols-2 > div.flex.flex-col.gap-4 > div.flex.flex-1.flex-col > div.relative > div > button");
    if (btn == null) return window.location.assign('https://key-drop.com/giveaways/list');
    btn.click();
    await new Promise(r => setTimeout(r, 20000));
    window.location.assign('https://key-drop.com/giveaways/list');
    await new Promise(r => setTimeout(r, 3000));
    abc();
}
