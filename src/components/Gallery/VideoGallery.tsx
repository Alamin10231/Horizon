

export const VideoGallery = () => {
  return (
    <div className="">
      <section>
        <div className="">
          <div className="text-center pb-20">
            <h1 className="md:text-6xl text-4xl py-10 font-medium text-[#3F4919]">
              Brulee-wood Grain
            </h1>

            {/* Responsive video container */}
            <div className="w-full max-w-full mx-auto px-4">
              <div className="relative w-full  overflow-hidden rounded-lg s">
             <iframe
             className="w-full max-h-[660px]"
             width="560" height="315" src="https://www.youtube.com/embed/bMgjZPqL1zk?si=yexSTopaSlVW4cgn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="text-center pb-20">
            <h1 className="md:text-6xl text-4xl py-10 font-medium text-[#3F4919]">
              Red Bordeaux-wood Grain
            </h1>

            {/* Responsive video container */}
            <div className="w-full max-w-full mx-auto px-4">
              <div className="relative w-full  overflow-hidden rounded-lg s">
             <iframe
             className="w-full max-h-[660px]"
             width="560" height="315" src="https://www.youtube.com/embed/bMgjZPqL1zk?si=yexSTopaSlVW4cgn" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
              </div>
            </div>
          </div>
          <div className="text-center pb-20">
            <h1 className="md:text-6xl text-4xl py-10 font-medium text-[#3F4919]">
              Caramel-wood Grain
            </h1>

            {/* Responsive video container */}
            <div className="w-full max-w-full mx-auto px-4">
              <div className="relative w-full  overflow-hidden rounded-lg s">
             <iframe
             className="w-full max-h-[660px]"
             width="560" height="315" src="https://www.youtube.com/embed/bMgjZPqL1zk?si=yexSTopaSlVW4cgn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};
