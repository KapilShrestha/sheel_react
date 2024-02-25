import CardWithImage from '@/components/elements/Card/CardThreeDImage'
import TitleWithContent from '@/components/elements/TitleWithContent/TitleWithContent'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <TitleWithContent title='Our Services'>
                <div className="flex flex-wrap justify-center gap-12 lg:w-104">

                    <Link to="/cementitious-waterproofing">
                        <CardWithImage
                            linkUrl='/cementitious-waterproofing'
                            imageUrl='../src/assets/dummy-img.jpg'
                            cardTitle='Cementitious Waterproofing'
                            cardContent='This method involves the use of cement-based coatings or additives to create a waterproof barrier. It is often used for concrete structures and can be applied to both the positive and negative sides of walls.'
                        />
                    </Link>


                    <CardWithImage
                        linkUrl='/liquid-waterproofing-membrane'
                        imageUrl='../src/assets/dummy-img.jpg'
                        cardTitle='Liquid Waterproofing Membrane'
                        cardContent='Liquid-applied waterproofing membranes are flexible coatings that can be applied directly onto surfaces such as roofs, walls, and foundations. They are often used for their ease of application and ability to conform to irregular shapes.'
                    />

                    <CardWithImage
                        linkUrl='bituminous-waterproofing-membrane'
                        imageUrl='../src/assets/dummy-img.jpg'
                        cardTitle='Bituminous Coating Waterproofing'
                        cardContent='Bituminous coatings, such as asphalt or coal tar, are used for waterproofing flat roofs and foundations. These materials are applied in liquid form and then solidify to create a durable waterproof layer.'
                    />







                    <CardWithImage
                        linkUrl='polyurethane-waterproofing'
                        imageUrl='../src/assets/dummy-img.jpg'
                        cardTitle='Polyurethane Waterproofing'
                        cardContent='Polyurethane coatings are flexible and provide excellent waterproofing for a variety of surfaces, including roofs, balconies, and concrete structures. They are known for their durability and resistance to UV radiation..'
                    />



                    <CardWithImage
                        linkUrl='/roof-waterproofing'
                        imageUrl='../src/assets/dummy-img.jpg'
                        cardTitle='Roof Waterproofing Systems'
                        cardContent='Roof waterproofing systems are protective measures applied to roofs to prevent water infiltration and damage. These systems typically involve the application of waterproof membranes, coatings, or sealants to create a barrier against rain, snow, and moisture.'
                    />



                    <CardWithImage
                        linkUrl='injection-waterproofing'
                        imageUrl='../src/assets/dummy-img.jpg'
                        cardTitle='Injection Waterproofing'
                        cardContent='This method involves injecting specialized materials, like polyurethane or epoxy, into cracks and voids in structures to seal them and prevent water infiltration.'
                    />



                    <CardWithImage
                        linkUrl='/geomembranes'
                        imageUrl='../src/assets/dummy-img.jpg'
                        cardTitle='Geomembranes'
                        cardContent='Geomembranes are synthetic liners made from materials like PVC, HDPE, or EPDM. They are used in applications such as lining ponds, landfills, and artificial lakes to prevent water seepage.'
                    />

                    <CardWithImage
                        linkUrl='sheet-membranes'
                        imageUrl='../src/assets/dummy-img.jpg'
                        cardTitle='Sheet Membranes'
                        cardContent='Sheet membranes, typically made of materials like bitumen, PVC, or rubber, are applied to surfaces by rolling out sheets and sealing the seams. They are commonly used for roofing and below-grade waterproofing.'
                    />


                </div>
            </TitleWithContent>
        </>
    )
}

export default Services