import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import fimg1 from './images/fimg1.jpg'
import fimg2 from './images/fimg2.jpg'
import fimg3 from './images/fimg3.jpg'
import fimg4 from './images/fimg4.jpg'

export const responsive = {
	superLargeDesktop: {
	  // the naming can be any, depends on you.
	  breakpoint: { max: 4000, min: 2001 },
	  items: 5,
	  slidesToSlide:2
	},
	largeDesktop: {
		breakpoint: { max: 2000, min: 1025 },
		items: 4,
		slidesToSlide:1
	  },
	desktop: {
	  breakpoint: { max: 1024, min: 801 },
	  items: 3
	},
	tablet: {
	  breakpoint: { max: 800, min: 525 },
	  items: 2
	},
	mobile: {
	  breakpoint: { max: 524, min: 0 },
	  items: 1
	}
  };

export const massage = [
    {
		id: 1,
		title: "Svéd masszázs",
		price: "8.000",
		text: "Klasszikus masszázs, mely segít a reumatikus, mozgásszervi panaszokon",
		duration: "45",
		img: img1
	},
	{
		id: 2,
		title: "Svéd masszázs köpölyözéssel",
		price: "10.000",
		text: "Köpölyözéssel kiegészített klasszikus masszázs, mely segít a reumatikus, mozgásszervi panaszokon",
		duration: "60",
		img: img2
	},
	{
		id: 3,
		title: "Páros masszázs",
		price: "16.000",
		text: "Klasszikus masszázs 2 fő részére, mely segít a reumatikus, mozgásszervi panaszokon",
		duration: "45",
		img: img3
	},
	{
		id: 4,
		title: "Kismama maszázs",
		price: "10.000",
		text: "Speciális masszázs kismamák számára",
		duration: "60",
		img: img4
	},
	{
		id: 5,
		title: "Babamasszázs",
		price: "7.000",
		text: "Segíti a babák testi fejlődését, immunerősítő",
		duration: "45",
		img: img5
	},
	{
		id: 6,
		title: "Thai olajos masszázs",
		price: "11.000",
		text: "Tradícionális thai masszázs olajok használatával",
		duration: "50",
		img: img6
	},
	{
		id: 7,
		title: "Lávaköves masszázs",
		price: "13.000",
		text: "Melegített vulkáni eredetű kövekkel a fokozott izomellazulásért",
		duration: "60",
		img: img7
	},
	{
		id: 8,
		title: "Talpmasszázs",
		price: "7.000",
		text: "Vérkeringés és közérzet javulásáért",
		duration: "45",
		img: img8
	},

];

export const arckezeles = [
	{
		id: 1,
		title: "Alap arckezelés",
		price: "6.500",
		text: "Tisztító, mechanikai bőrradírozás, tonizálás, masszírozás",
		duration: "30",
		img: fimg1
	},
	{
		id: 2,
		title: "Detox arckezelés",
		price: "8.000",
		text: "Méregtelenítő, mélytisztító, antioxidáns és fiatalító hatású kezelés",
		duration: "45",
		img: fimg2
	},
	{
		id: 3,
		title: "Hialuronsavas hidratáló arckezelés",
		price: "13.000",
		text: "Tisztítás, enzimes bőrradírozás, szemránckrém, masszázs",
		duration: "60",
		img: fimg3
	},
	{
		id: 4,
		title: "Anti-aging arckezelés",
		price: "13.000",
		text: "Ráncosodás csökkentése, ráncok megelőzése, bőr regenerálása.",
		duration: "60",
		img: fimg4
	},
]
