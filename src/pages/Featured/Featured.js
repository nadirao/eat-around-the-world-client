
import { Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

export default function Featured(props) {
  return (
<ImageList sx={{ width: '100vmin', height: '100vh'}} cols={3} rowHeight={400}>
  {props.businesses.map((item) => (
    <ImageListItem key={item.imageSrc}>
      <img
        src={`${item.imageSrc}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.imageSrc}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.name}
        loading="lazy"
      />
      <p>{item.name}</p>
      <Button>Add to Itinerary</Button>
    </ImageListItem>
  ))}
</ImageList>
  );
}
