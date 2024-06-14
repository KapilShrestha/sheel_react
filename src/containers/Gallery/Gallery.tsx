import TitleWithContent from '@/components/elements/TitleWithContent/TitleWithContent';

const Gallery: React.FC = () => {
  const imagesArray = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/25649809/pexels-photo-25649809/free-photo-of-colors.jpeg',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/17154730/pexels-photo-17154730/free-photo-of-facade-of-a-traditional-tenement-house-in-london-england.jpeg',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/25675332/pexels-photo-25675332/free-photo-of-hiking-in-cappadocia.jpeg',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/17591300/pexels-photo-17591300/free-photo-of-entrance-decorated-with-potted-plants.jpeg',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/25244962/pexels-photo-25244962/free-photo-of-the-temple-is-made-of-wood-and-has-a-red-roof.jpeg',
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/25526387/pexels-photo-25526387/free-photo-of-autumn-trees-in-the-park.jpeg',
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/11762520/pexels-photo-11762520.jpeg',
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/24778198/pexels-photo-24778198/free-photo-of-a-person-walking-on-the-beach-at-sunset.jpeg',
    },
  ];
  return (
    <>
      <TitleWithContent title='Gallery' />
      <div className='px-5 pb-5 md:px-10 md:pb-10'>
        <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 lg:gap-8 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
          {imagesArray.map((image) => (
            <img
              src={image.src}
              alt='image'
              key={image.id}
              className='rounded-lg hover:scale-105 ease-in-out duration-200'
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
