if(Hls.isSupported())
    {
        var audioOne = document.getElementById('audio-one');
        var hls = new Hls();
        hls.loadSource('https://cbcliveradio-lh.akamaihd.net/i/CBCR1_TOR@118420/master.m3u8');
        hls.attachMedia(audioOne);
        hls.on(Hls.Events.MANIFEST_PARSED,function()
        {
            audioOne.play();
        });
    }
    else if (audioOne.canPlayType('application/vnd.apple.mpegurl'))
    {
        audioOne.src = 'https://cbcliveradio-lh.akamaihd.net/i/CBCR1_TOR@118420/master.m3u8';
        audioOne.addEventListener('canplay',function()
        {
            audioOne.play();
        });
    }