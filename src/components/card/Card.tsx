import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";

export default function MediaCard({ launch }: any) {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: "background.paper" }}>
      <CardMedia
        component="img"
        height="140"
        src={launch.ships.image}
        alt="ships"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {launch.mission_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {launch.launch_site.site_name_long}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <StarBorderPurple500OutlinedIcon />
          Add as favourite
        </Button>
      </CardActions>
    </Card>
  );
}
