import { Box, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "urql";
import Card from "../components/card/Card";

const LaunchesQuery = `
  query {
      launchesPast(limit: 10) {
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        links {
          article_link
          video_link
        }
        id
        ships {
          name
          home_port
          image
        }
      }  
    }
`;

const Launches = () => {
  const [result, reexecuteQuery] = useQuery({
    query: LaunchesQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <Box className="cards-container">
      {data.launchesPast.map((launch: any) => (
        <Card key={launch.id} launch={launch} />
      ))}
    </Box>
  );
};

export default Launches;
