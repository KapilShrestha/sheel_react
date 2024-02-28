import CardBasic from "@/components/elements/Card/CardBasic"

const CompanyInfo = () => {
    return (
        <>
            <div className="bg-slate-200 py-10">
                <div className="flex justify-center items-center gap-8 flex-wrap">
                    <a href="tel:+9779845683469" className="tracking-wide">
                        <CardBasic
                            cardTitle='Phone Number'
                            cardDescription='+ 977 - 9845683469'
                        />
                    </a>

                    <a href="mailto:yukienterprises@gmail.com" className="tracking-wide">
                        <CardBasic
                            cardTitle='email'
                            cardDescription='yukienterprises@gmail.com'
                        />
                    </a>

                    <CardBasic
                        cardTitle='Office Address'
                        cardDescription='Balkhu, Kathmandu'
                    />
                </div>


            </div>


        </>

    )
}

export default CompanyInfo