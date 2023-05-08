const ImageCarousel = () => {
    return (
      <Carousel
        showArrows={true}
        showThumbs={false}
        className="mx-auto max-w-screen-lg"
      >
        <div className="carousel-item">
          <img
            src="/images/image1.jpg"
            alt="Image 1"
            className="w-full h-96 object-cover"
          />
          <p className="legend text-lg font-bold mt-2">Text for image 1</p>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/image2.jpg"
            alt="Image 2"
            className="w-full h-96 object-cover"
          />
          <p className="legend text-lg font-bold mt-2">Text for image 2</p>
        </div>
        <div className="carousel-item">
          <img
            src="/images/image3.jpg"
            alt="Image 3"
            className="w-full h-96 object-cover"
          />
          <p className="legend text-lg font-bold mt-2">Text for image 3</p>
        </div>
      </Carousel>
    );
  };