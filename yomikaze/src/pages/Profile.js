import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { fetchDataFromEnka } from "../utils/fetchDataFromEnka"; // Adjust path if utils is in a different location
import ProfileHeader from "../components/ProfileHeader";
import CharacterList from "../components/CharacterList";
import Loading from "../components/Loading";


const Profile = () => {
  const { uid } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setProfileData(null);
      try {
        const data = await fetchDataFromEnka(uid);
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setProfileData(null);
      }
      setLoading(false);
    };
    fetchProfile();
  }, [uid]);

  if (loading) return <Loading />;
  if (!profileData) return <Typography align="center">Error loading profile for UID: {uid}</Typography>;

  const { playerInfo, avatarInfoList } = profileData;

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <ProfileHeader nickname={playerInfo.nickname} uid={uid} level={playerInfo.level} /> 
      <Typography variant="h5" align="center" gutterBottom>Characters</Typography>
      <CharacterList avatarInfoList={avatarInfoList} />
    </Box>
  );
};

export default Profile;
