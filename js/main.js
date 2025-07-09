$(()=>
    {
        const gsat = new Date( 2026 , 0 , 17 , 8 ) ; 
        let now = new Date() ; 
        function updateLocalTime() 
        {
            now = new Date() ; 
            const y = now.getFullYear() ; 
            const m = String( now.getMonth() + 1 ).padStart( 2 , "0" ) ; 
            const d = String( now.getDate() ).padStart( 2 , "0" ) ; 
            const weekday = now.toLocaleDateString( "en-US", { weekday : "short" } ) ; 
            const hms = now.toLocaleTimeString( "en-US", { hour12 : false } ) ; 
            const day = Math.floor( ( gsat - now ) / ( 1000 * 60 * 60 * 24 ) ) ; 
            const hr = Math.floor( ( gsat - now ) / ( 1000 * 60 * 60 ) ) - day * 24 ; 
            const min = Math.floor( ( gsat - now ) / ( 1000 * 60 ) ) - Math.floor( ( gsat - now ) / ( 1000 * 60 * 60 ) ) * 60 + 1 ; 
            const sec = Math.floor( ( gsat - now ) / 1000 ) - Math.floor( ( gsat - now ) / ( 1000 * 60 ) ) * 60 + 1 ; 
            $( "#now" ).text( `${y}-${m}-${d} ${hms} (${weekday})` ) ; 
            $( "#day" ).text( day ) ; 
            $( "#hr" ).text( String( hr ).padStart( 2 , "0" ) ) ; 
            $( "#m" ).text( String( min == 60 ? 0 : min ).padStart( 2 , "0" ) ) ; 
            $( "#s" ).text( String( sec == 60 ? 0 : sec ).padStart( 2 , "0" ) ) ; 
        }
        const a = setInterval( updateLocalTime , 1000 ) ; 
        updateLocalTime() ; 
    });
