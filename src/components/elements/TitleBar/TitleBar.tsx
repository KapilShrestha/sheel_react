import { Link } from "react-router-dom";

interface TitleBarProps{
    title:string;
    subTitle?:string;
    linkTitle?:string;
    linkTo?:string;
}
const TitleBar : React.FC<TitleBarProps> = ({title,subTitle, linkTitle, linkTo}) => {
    return (

        <>
            <div id="hero-navbar" className="bg-purple-900 pt-24 pb-8 ">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center h-full">
                        <div className="text-center">
                            <h1 className="text-white text-5xl font-extrabold animate-pulse">{title}</h1>
                            <div className="py-2 flex justify-center gap-4">
                                <div className="navbar-item cursor-pointer text-white text-lg hover:text-blue-400 "><Link to="/">Home</Link></div>
                                <i className="ri-donut-chart-fill text-xl text-white hover:animate-spin "></i>
                                <div className="navbar-item cursor-pointer text-white text-lg hover:text-blue-400"> <Link to={linkTo}>{linkTitle}</Link> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="px-8 bg-white lg:px-32 text-black ">
                <div className="py-20">

                    <p className="title-text-size text-purple-900 animated-content">{title}</p>
                    <p className="text-md pt-2">{subTitle}</p>
                    <div className="divider divider-primary"></div>
                </div>
            </div>
        </>



    )
}

export default TitleBar