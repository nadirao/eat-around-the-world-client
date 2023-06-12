import { Link } from "react-router-dom";
import { Button, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import './Featured.css'

export default function Featured(props) {
  return (
  <div className="featured-container">
<ImageList sx={{ width: '100vh', height: '100vmin'}} cols={4} rowHeight={400} gap={50}>
  {props.businesses.map((item) => (
    
    <ImageListItem key={item.imageSrc}>
      <img
        src={`${item.imageSrc}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.imageSrc}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.name}
        loading="lazy"
      />
      <p>{item.name}</p>
      <Link to={`/restaurant`}>

      <Button>Click to view restaurant</Button>
      </Link>
    </ImageListItem>
  ))}
</ImageList>
</div>
  );
}
