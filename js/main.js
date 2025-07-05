$(()=>
    {
        const gsat = new Date( 2026 , 1 , 17 , 8 ) ; 
        const now = new Date() ; 
        const y = now.getFullYear() ; 
        const m = String( now.getMonth() + 1 ).padStart( 2 , "0" ) ; 
        const d = String( now.getDate() ).padStart( 2 , "0" ) ; 
        function updateLocalTime() 
        {
            const weekday = now.toLocaleDateString( "en-US", { weekday : "long" } ) ; 
            const hms = now.toLocaleTimeString( "en-US", { hour12 : false } ) ; 
            $( "#now" ).text( `${y}-${m}-${d} ${hms} (${weekday})` ) ; 
        }
        $( "#day" ).text( Math.round( ( gsat - now ) / ( 1000 * 60 * 60 * 24 ) ) ) ; 
        _updateTimeId = setInterval( updateLocalTime , 1000 ) ; 
        updateLocalTime() ; 
    });
