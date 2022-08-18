import { useState, useEffect } from "react";
import { client, recommendProfiles } from "../api";

export default function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await client.query(recommendProfiles).toPromise();
      setProfiles(response.data.recommendProfiles);
      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  };

  return <div></div>;
}
