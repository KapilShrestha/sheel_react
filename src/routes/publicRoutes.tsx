import About from "@/containers/About/About";
import BituminousWaterproofingMembrane from "@/containers/BituminousWaterproofingMembrane/BituminousWaterproofingMembrane";
import CementitiousWaterproofingMembrane from "@/containers/CementitiousWaterproofing/CementitiousWaterproofing";
import Contact from "@/containers/Contact/Contact";
import Home from "@/containers/Home/Home";
import InjectionWaterproofing from "@/containers/InjectionWaterproofing/InjectionWaterproofing";
import LiquidWaterproofingMembrane from "@/containers/LiquidWaterproofingMembrane/LiquidWaterproofingMembrane";
import ProductsPage from "@/containers/Products/ProductsPage";
import ServicesPage from "@/containers/Services/ServicesPage";
import PolyurethaneWaterproofing from "@/containers/PolyurethaneWaterproofing/PolyurethaneWaterproofing";
import RoofWaterproofing from "@/containers/RoofWaterproofing/RoofWaterproofing";
import VistaAfaSuper from "@/containers/VistaAfaSuper/VistaAfaSuper";
import VistaCrystalPlus from "@/containers/VistaCrystalPlus/VistaCrystalPlus";
import VistaFlexSealPlus from "@/containers/VistaFlexSealPlus/VistaFlexSealPlus";
import VistaIwa from "@/containers/VistaIwa/VistaIwa";
import VistaNoTwo from "@/containers/VistaNoTwo/VistaNoTwo";
import VistaNoThree from "@/containers/VistaNoThree/VistaNoThree";
import VistaPowerSilicaFume from "@/containers/VistaPowerSilicaFume/VistaPowerSilicaFume";
import VistaSbrLatexPlus from "@/containers/VistaSbrLatexPlus/VistaSbrLatexPlus";
import VistaShotX from "@/containers/VistaShotX/VistaShotX";
import VistaSuperCrete from "@/containers/VistaSuperCrete/VistaSuperCrete";
import VistaSuperplastHs1000 from "@/containers/VistaSuperplastHs1000/VistaSuperplastHs1000";
import VistaSuperPlastHs from "@/containers/VistaSuperplastHs/VistaSuperplastHs";
import Geomembranes from "@/containers/Geomembranes/Geomembranes";
import SheetMembranes from "@/components/elements/SheetMembranes/SheetMembranes";

export const publicRoutes = [
    {
        path: '',
        component: <Home />
    },
    {
        path: 'about',
        component: <About />
    },
    {
        path: 'contact',
        component: <Contact />
    },
    {
        path: 'products',
        component: <ProductsPage />
    },
    {
        path: 'services',
        component: <ServicesPage />
    },
    
    {
        path: 'bituminous-waterproofing-membrane',
        component: <BituminousWaterproofingMembrane />
    },
    {
        path: 'cementitious-waterproofing',
        component: <CementitiousWaterproofingMembrane />
    },
    {
        path: 'injection-waterproofing',
        component: <InjectionWaterproofing />
    },
    {
        path: 'liquid-waterproofing-membrane',
        component: <LiquidWaterproofingMembrane />
    },
    {
        path: 'polyurethane-waterproofing',
        component: <PolyurethaneWaterproofing />
    },
    {
        path: 'roof-waterproofing',
        component: <RoofWaterproofing />
    },
    {
        path: '/products/vista-afa-super',
        component: <VistaAfaSuper />
    },
    {
        path: '/products/vista-crystal-plus',
        component: <VistaCrystalPlus />
    },
    {
        path: '/products/vista-flex-seal-plus',
        component: <VistaFlexSealPlus />

    },
    {
        path: '/products/vista-iwa',
        component: <VistaIwa />
    },
    {
        path: '/products/vista-no-2',
        component: <VistaNoTwo />
    },
    {
        path: '/products/vista-no-3',
        component: <VistaNoThree />
    },
    {
        path: '/products/vista-power-silica-fume',
        component: <VistaPowerSilicaFume />
    },
    {
        path: '/products/vista-sbr-latex-plus',
        component: <VistaSbrLatexPlus />
    },
    {
        path: '/products/vista-shot-x',
        component: <VistaShotX />
    },
    {
        path: '/products/vista-super-crete',
        component: <VistaSuperCrete />
    },
    {
        path: '/products/vista-superplast-hs',
        component: <VistaSuperPlastHs />
    },
    {
        path: '/products/vista-superplast-hs-1000',
        component: <VistaSuperplastHs1000 />
    },
    {
        path: '/geomembranes',
        component: <Geomembranes />
    },
    {
        path: '/sheet-membranes',
        component: <SheetMembranes />
    },



]