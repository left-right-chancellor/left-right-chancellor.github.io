$(()=>
    {
        const 學測 = new Date( 2027 , 0 , 16 , 9 , 20 ) ; 
        const 分科 = new Date( 2026 , 6 , 11 , 8 ) ; 
       //  const 阮宥翔生日 = new Date( 2026 , 0 , 16 ) ; 
        // const 天差 = Math.floor( ( 學測 - 阮宥翔生日 ) / ( 1000 * 60 * 60 * 24 ) ) ; 
        // const 時差 = Math.floor( ( 學測 - 阮宥翔生日 ) / ( 1000 * 60 * 60 ) ) - 天差 * 24 ; 
        // const 結婚紀念日 = new Date( 2025 , 8 , 7 );
        const 聯盟生日 = new Date( 2025 , 2 , 14 ) ; 
        let now = new Date() ; 
        if( now.getMonth() == 聯盟生日.getMonth() && now.getDay() == 聯盟生日.getDay() )
        {
            $( "#birth" ).html( "今日是聯盟創立" + ( now.getFullYear() - 聯盟生日.getFullYear() ) + "週年" ) ; 
        }
        function updateLocalTime() 
        {
            now = new Date() ; 
            const y = now.getFullYear() - 1911 ; 
            const m = String( now.getMonth() + 1 ).padStart( 2 , "0" ) ; 
            const d = String( now.getDate() ).padStart( 2 , "0" ) ; 
            const weekday = now.toLocaleDateString( "zh-TW", { weekday : "long" } ) ; 
            const hms = now.toLocaleTimeString( "en-US", { hour12 : false } ) ; 
            const day = Math.floor( ( 學測 - now ) / ( 1000 * 60 * 60 * 24 ) ) ; 
            const hr = Math.floor( ( 學測 - now ) / ( 1000 * 60 * 60 ) ) - day * 24 ; 
            const min = Math.floor( ( 學測 - now ) / ( 1000 * 60 ) ) - Math.floor( ( 學測 - now ) / ( 1000 * 60 * 60 ) ) * 60 ; 
            const sec = Math.floor( ( 學測 - now ) / 1000 ) - Math.floor( ( 學測 - now ) / ( 1000 * 60 ) ) * 60 + 1 ; 
            const Aday = Math.floor( ( 分科 - now ) / ( 1000 * 60 * 60 * 24 ) ) ; 
            const Ahr = Math.floor( ( 分科 - now ) / ( 1000 * 60 * 60 ) ) - Aday * 24 ; 
            const Amin = Math.floor( ( 分科 - now ) / ( 1000 * 60 ) ) - Math.floor( ( 分科 - now ) / ( 1000 * 60 * 60 ) ) * 60 ; 
            const Asec = Math.floor( ( 分科 - now ) / 1000 ) - Math.floor( ( 分科 - now ) / ( 1000 * 60 ) ) * 60 + 1 ; 
            $( "#now" ).text( `民國${y}年${m}月${d}日（${weekday}） ${hms}` ) ; 
            // const Wday = Math.floor( ( now - 結婚紀念日 ) / ( 1000 * 60 * 60 * 24 ) ) ; 
            $( "#day" ).text( day ) ; 
            $( "#hr" ).text( String( hr ).padStart( 2 , "0" ) ) ; 
            $( "#m" ).text( String( min ).padStart( 2 , "0" ) ) ; 
            $( "#s" ).text( String( sec == 60 ? 0 : sec ).padStart( 2 , "0" ) ) ; 
            $( "#Aday" ).text( Aday ) ; 
            $( "#Ahr" ).text( String( Ahr ).padStart( 2 , "0" ) ) ; 
            $( "#Am" ).text( String( Amin ).padStart( 2 , "0" ) ) ; 
            $( "#As" ).text( String( Asec == 60 ? 0 : Asec ).padStart( 2 , "0" ) ) ; 
            // $( "#Bday" ).text( day - 天差 ) ; 
            // $( "#Bhr" ).text( String( Math.abs( 時差 - hr ) ).padStart( 2 , "0" ) ) ; 
            // $( "#Bm" ).text( String( min ).padStart( 2 , "0" ) ) ; 
            // $( "#Bs" ).text( String( sec == 60 ? 0 : sec ).padStart( 2 , "0" ) ) ; 
            // $( "#Wday" ).text( Wday ) ; 
            
            if( now.getMonth() == 聯盟生日.getMonth() && now.getDay() == 聯盟生日.getDay() )
            {
                $( "#birth" ).html( "" ) ; 
            }
            else 
            {
                $( "#birth" ).html( "" ) ; 
            }
        }
        setInterval( updateLocalTime , 500 ) ; 
        updateLocalTime() ; 
    });
