const GalleryItem = ({ props }) => {
  const { title, type, thumbImgSrc } = props;
  console.log(props);
  return (
    <div class="flex flex-col mx-3  my-5">
      <div class="w-96 h-96 overflow-hidden">
        <img src={thumbImgSrc} alt={title} class="w-full" />
      </div>
      <h4>
        <a>
          {title}|{type}
        </a>
      </h4>
    </div>
  );
};

export default GalleryItem;
