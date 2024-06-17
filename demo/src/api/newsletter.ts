import axios from "axios";

interface Newsletter {
  id: string;
  user: string;
  sources: string[];
  time?: string;
  location: string;
  createdAt: string;
}

interface Source {
  link: string;
  keywords: string[];
  type: string;
}

export const postNewsletters = (data: {
  email: string;
  sources: Source[];
  time: string;
  location: string;
}): Promise<boolean> => {
  return axios
    .post("http://localhost:3001/api/v1/newsletter", data)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.error("Failed to post data: " + error);
      return false;
    });
};

export const deleteNewsletter = (id: string): Promise<boolean> => {
  return axios
    .delete(`http://localhost:3001/api/v1/newsletter/${id}`)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.error("Error deleting newsletter:", error);
      return false;
    });
};

export const getNewsletters = (): Promise<Newsletter[] | undefined> => {
  return axios
    .get("http://localhost:3001/api/v1/newsletter")
    .then((response) => {
      const fetchedNewsletters: Newsletter[] = response.data.newsletter;

      return fetchedNewsletters;
    })
    .catch((error) => {
      console.error("Error fetching newsletters:", error);
      return undefined;
    });
};
