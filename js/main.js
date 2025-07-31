$(()=>
    {
        const gsat = new Date( 2026 , 0 , 17 , 8 ) ; 
        const 阮宥翔生日 = new Date( 2026 , 0 , 16 ) ; 
        let now = new Date() ; 
        function updateLocalTime() 
        {
            now = new Date() ; 
            const y = now.getFullYear() - 1911 ; 
            const m = String( now.getMonth() + 1 ).padStart( 2 , "0" ) ; 
            const d = String( now.getDate() ).padStart( 2 , "0" ) ; 
            const weekday = now.toLocaleDateString( "zh-TW", { weekday : "long" } ) ; 
            const hms = now.toLocaleTimeString( "en-US", { hour12 : false } ) ; 
            const day = Math.floor( ( gsat - now ) / ( 1000 * 60 * 60 * 24 ) ) ; 
            const hr = Math.floor( ( gsat - now ) / ( 1000 * 60 * 60 ) ) - day * 24 ; 
            const min = Math.floor( ( gsat - now ) / ( 1000 * 60 ) ) - Math.floor( ( gsat - now ) / ( 1000 * 60 * 60 ) ) * 60 ; 
            const sec = Math.floor( ( gsat - now ) / 1000 ) - Math.floor( ( gsat - now ) / ( 1000 * 60 ) ) * 60 + 1 ; 
            const Bday = Math.floor( ( 阮宥翔生日 - now ) / ( 1000 * 60 * 60 * 24 ) ) ; 
            const Bhr = Math.floor( ( 阮宥翔生日 - now ) / ( 1000 * 60 * 60 ) ) - day * 24 ; 
            const Bmin = Math.floor( ( 阮宥翔生日 - now ) / ( 1000 * 60 ) ) - Math.floor( ( 阮宥翔生日 - now ) / ( 1000 * 60 * 60 ) ) * 60 ; 
            const Bsec = Math.floor( ( 阮宥翔生日 - now ) / 1000 ) - Math.floor( ( 阮宥翔生日 - now ) / ( 1000 * 60 ) ) * 60 + 1 ; 
            $( "#now" ).text( `民國${y}年${m}月${d}日（${weekday}） ${hms}` ) ; 
            $( "#day" ).text( day ) ; 
            $( "#hr" ).text( String( hr ).padStart( 2 , "0" ) ) ; 
            $( "#m" ).text( String( min ).padStart( 2 , "0" ) ) ; 
            $( "#s" ).text( String( sec == 60 ? 0 : sec ).padStart( 2 , "0" ) ) ; 
            $( "#Bday" ).text( Bday ) ; 
            $( "#Bhr" ).text( String( Bhr ).padStart( 2 , "0" ) ) ; 
            $( "#Bm" ).text( String( Bmin ).padStart( 2 , "0" ) ) ; 
            $( "#Bs" ).text( String( Bsec == 60 ? 0 : Bsec ).padStart( 2 , "0" ) ) ; 
        }
        const a = setInterval( updateLocalTime , 500 ) ; 
        updateLocalTime() ; 
    });
