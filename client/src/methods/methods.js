import axios from "axios";
export async function fetchOrganisation(
  setOrgName,
  setOrgLogo,
  setError,
  setLoading
) {
  try {
    setLoading({
      status: true,
      onInit: true,
    });
   const res = await axios.get("/api/org");
   if(!res){
     throw "Server ERROR";
   }
    const {
      data: { avatar_url, login },
    } = await axios.get(`https://api.github.com/orgs/${res.data.orgName}`);
    setOrgName(login);
    setOrgLogo(avatar_url);
    setLoading({
      status: false,
      onInit: false,
    });
  } catch (err) {
    setLoading(false);
    let type = "";
    if (err.message) {
      if (err.message === "Network Error"){
        type = "network";
      }
      
    }
    setError({
      isError: true,
      type,
      onInit: true,
    });
  }
}

export const sendInvite = async (username, setError, setLoading,setSuccess) => {
  try {
    setLoading({
      status: true,
    });
    const response = await axios.post("/api/invite",{
      username,
     })
    if (response.status === 200) {
      setLoading({
        status: false,
      });
      setSuccess(true)
    }
  } catch (err) {
    setLoading({
      status: false,
    });
   
    let type = "";
    if (err.response) {
      if (err.response.status === 404) {
        type = "notfound";
      }
      if (err.response.status === 403) {
        type = "member";
      }
      if (err.response.status === 422) {
        type = "notallowed";
      }

    }
    if (err.message) {
      if (err.message === "Network Error"){
        type = "network";
      }  
    }
    setError({
      isError: true,
      type,
    });
  }
};
