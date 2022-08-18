import { useState, useEffect } from "react";
import { client, recommendProfiles } from "../api";

export default function Home() {
  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await client.query(recommendProfiles).toPromise();
      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  };

  return <div></div>;
}
