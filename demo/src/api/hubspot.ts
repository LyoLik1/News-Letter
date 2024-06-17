import axios from "axios";

export const sendLead = (
  data: Array<{
    name: string;
    value: string;
  }>,
): Promise<boolean> => {
  return axios
    .post(
      "https://api.hsforms.com/submissions/v3/integration/submit/144670954/da055bb0-f73e-42f9-a192-ac62d94c6a2c",
      { fields: data },
    )
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.error("Failed to post data: " + error);
      return false;
    });
};
