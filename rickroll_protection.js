var videos = ["v=dQw4w9WgXcQ", "v=oHg5SJYRHA0", "v=5YaY9BvxcCw", "v=IO9XlQrEt2Y", "v=j5a0jTc9S10", "v=6jkWr4Ocl0g", "v=z_Sco7VPY9A", "v=6p4cmomC2C4", "v=k8u4xbcvvOA", "v=JUMK-jQiyd0", "v=ub82Xb1C8os"];

chrome.tabs.onActivated.addListener(function (activeInfo) 
{
    is_rick_roll()
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab)
{
    is_rick_roll()
})


function is_rick_roll(){
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs)
    {
        for (let i = 0; i < videos.length; i++)
        {
            if (tabs[0].url.toString().includes(videos[i]))
            {
                chrome.tabs.update(tabs[0].id, { url: "detected.html" });
            }
        }
    })
}