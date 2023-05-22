import Card from "./Card"
const data=[
    {
        name:"לאפה שווארמה",
        desc:"160 גרם שווארמה עגל כולל תוספות ",
        url:require('../images/lapha_Shawarma.png'),
        price:"44 שח"
    },
    {
        name:"פיתה שווארמה",
        desc:"פיתה 140 גרם שווארמה עגל",
        url:require('../images/peta_Shawarma.png'),
        price:"39 שח"
    },
    {
        name:"בגט שווארמה",
        desc:"160 גרם שווארמה עגל כולל תוספת ירקות",
        url:require('../images/bagit_Shawarma2.png'),
        price:"44 שח"
    }, 
    {
        name:"בגט שניצל",
        desc:"160 גרם שניצל כולל תוספות ",
        url:require('../images/bagit_Shnetsil.png'),
        price:"35 שח"
    },
    {
        name:"פיתה שניצל",
        desc:"פיתה 140 גרם שניצל ",
        url:require('../images/peta_Shnetsil.png'),
        price:"30 שח"
    },
    {
        name:"בגט חזה עוף",
        desc:"160 גרם חזה עוף כולל תוספת ירקות",
        url:require('../images/bagit_Chicken2.png'),
        price:"35 שח"
    },
    {
        name:"פיתה חזה עוף",
        desc:"140 גרם חזה עוף",
        url:require('../images/peta_Chicken2.png'),
        price:"30 שח"
    },
    {
        name:"בגט פלאפל",
        desc:"בגט פלאפל",
        url:require('../images/bagit_Flafel.png'),
        price:"23 שח"
    },
    {
        name:"פיתה פלאפל",
        desc:"פיתה פלאפל",
        url:require('../images/peta_Flafel.png'),
        price:"17 שח"
    }
]
const data2=[
    {
        name:"צ'יפס גדול",
        desc:"ציפס גדול בצלחת",
        url:require('../images/chips2.png'),
        price:"20 שח"
    },
    {
        name:"צ'יפס קטן",
        desc:"ציפס קטן בצלחת",
        url:require('../images/chips2.png'),
        price:"15 שח"
    }
]
const data3=[
    {
        name:"שתיה גדול",
        desc:"בקבוק שתיה 1.5 ליטר",
        url:require('../images/big_battle.png'),
        price:"14 שח"
    },
    {
        name:"פחית",
        desc:"פחית שתיה 330 מ'ל",
        url:require('../images/small_battle2.png'),
        price:"7 שח"
    },
    {
        name:"זכוכית",
        desc:"בקבוק זכוכית 350 מ'ל",
        url:require('../images/medum_Battle3.png'),
        price:"10 שח"
    }
]
function ListCards(){
    return(<>
    <div className="mb-4">
    <h2 className="text-center   text-dark border-dark text-animation" style={{marginTop:"70px"}}><span className="border-bottom border-dark border-2">מנות</span></h2>
        <div className="row ">
        {data.map((item)=>
            <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                <Card url={item.url} name={item.name} desc={item.desc} price={item.price}/>
            </div>
            </>
        )}
        </div>
        <hr/>

    <h2 class="text-center   text-dark border-dark text-animation mt-5" ><span className="border-bottom border-dark border-2">ראשוניות</span></h2>
    <div className="row ">
        {data2.map((item)=>
            <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                <Card url={item.url} name={item.name} desc={item.desc} price={item.price}/>
            </div>
            </>
        )}
        </div>
        <hr/>
    <h2 class="text-center   text-dark border-dark text-animation mt-5" ><span className="border-bottom border-dark border-2">משקאות</span></h2>
    <div className="row ">
        {data3.map((item)=>
            <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                <Card url={item.url} name={item.name} desc={item.desc} price={item.price}/>
            </div>
            </>
        )}
        </div>

    </div>
    </>)
}
export default ListCards