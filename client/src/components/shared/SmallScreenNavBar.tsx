import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MdMovie, MdOutlineBookmark, MdOutlineFavorite } from "react-icons/md";

export default function SmallScreenNavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: '100vw' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Movies"
        value="movies"
        icon={<MdMovie />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<MdOutlineFavorite />}
      />
      <BottomNavigationAction
        label="Bookmark"
        value="bookmark"
        icon={<MdOutlineBookmark />}
      />
    </BottomNavigation>
  );
}
