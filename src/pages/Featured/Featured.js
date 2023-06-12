import DestinationForm from "../../components/DestinationForm/DestinationForm";
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';


export default function Featured(props) {
  return (
    <ImageList variant="masonry" cols={3} gap={25}>
  {props.businesses.map((b) => (
    <ImageListItem key={b.id}>
      <img
        src={`${b.imageSrc}?w=248&fit=crop&auto=format`}
        srcSet={`${b.imageSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={b.title}
        loading="lazy"
      />
      <ImageListItemBar position="below" title={b.name} />
    </ImageListItem>
  ))}
</ImageList>

  );
}
