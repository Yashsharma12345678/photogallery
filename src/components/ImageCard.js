import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <>
      <div className="hidden sm:block">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img className="w-full flex-grow" src={image.webformatURL} alt="" />
          <div className="px-6 py-4">
            <div className=" font-bold text-purple-500 texl-xl mb-2 ">
              Photo by {image.user}
            </div>
            <ul>
              <li>
                <strong>Views: </strong>
                {image.views}
              </li>
              <li>
                <strong>Downloads: </strong>
                {image.downloads}
              </li>
              <li>
                <strong>Likes: </strong>
                {image.likes}
              </li>
            </ul>
          </div>
          <div className="px-6 py-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="block sm:hidden ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img className="w-full" src={image.webformatURL} alt="" />
          <div className="px-6 py-4">
            <div className=" font-bold text-purple-500 texl-xl mb-2 ">
              Photo by {image.user}
            </div>
            <ul>
              <li>
                <strong>Views: </strong>
                {image.views}
              </li>
              <li>
                <strong>Downloads: </strong>
                {image.downloads}
              </li>
            </ul>
          </div>
          {/* <div className="px-6 py-4">
        {tags.map((tag,index)=>(
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {tag}
          </span>
        ))}
        
      </div> */}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
