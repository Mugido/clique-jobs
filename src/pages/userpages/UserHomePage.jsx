import UserHero from "../../components/usercomponents/UserHero";
import UserHomeCards from "../../components/usercomponents/UserHomeCards";
import UserJobListings from "../../components/usercomponents/UserJobListings";
import UserViewAllJobs from "../../components/usercomponents/UserViewAllJobs";


const UserHomePage = () => {
  return (
    <>
    <UserHero />
    <UserHomeCards />
    <UserJobListings isHome={true} />
    <UserViewAllJobs />
    </>
  );
};

export default UserHomePage