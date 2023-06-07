import React from "react";
import { Box, Skeleton } from "@mui/material";

const MovieSkeleton = () => {
  return (
    <Box
      sx={{
        position: "relative",
        marginLeft: "50px",
        marginTop: "200px",
        width: "235px",
      }}
    >
      <Skeleton
        variant="rounded"
        width={200}
        height={270}
        sx={{
          backgroundColor: "gray",
          position: "absolute",
          top: "-100px",
          zIndex: "10",
          left: "16px",
          //   right: '50%',
        }}
      />

      <Skeleton
        variant="rounded"
        width={150}
        height={15}
        sx={{
          backgroundColor: "gray",
          position: "absolute",
          bottom: "25%",
          zIndex: "10",
          left: "40px",
        }}
      />

      <Skeleton
        variant="rounded"
        width={100}
        height={15}
        sx={{
          backgroundColor: "gray",
          position: "absolute",
          bottom: "15%",
          zIndex: "10",
          left: "65px",
        }}
      />

      <Skeleton
        variant="rounded"
        width={30}
        height={30}
        sx={{
          backgroundColor: "gray",
          position: "absolute",
          bottom: "-12px",
          zIndex: "10",
          right: "7px",
        }}
      />

      <Skeleton
        variant="rounded"
        width={30}
        height={30}
        sx={{
          backgroundColor: "gray",
          position: "absolute",
          bottom: "-12px",
          zIndex: "10",
          right: "40px",
        }}
      />

      <Box sx={{backgroundColor: 'black', position: 'absolute', bottom: '-3px'}}>
        <Skeleton
          variant="rounded"
          width={40}
          height={20}
          sx={{
            backgroundColor: "gray",
            position: "absolute",
            bottom: "15px",
            left: "-7.5px",
            zIndex: "10",
          }}
        />
        
        <Skeleton
          variant="rounded"
          width={45}
          height={20}
          sx={{
            backgroundColor: "gray",
            position: "absolute",
            bottom: "-10px",
            left: "-10px",
            zIndex: "10",
          }}
        />
      </Box>

      <Skeleton
        variant="rounded"
        width={230}
        height={275}
        sx={{
          backgroundColor: "black",
          border: "2px solid gray",
        }}
      />
    </Box>
  );
};

export default MovieSkeleton;
