import Header from "../PageComponents/Header";
import ProfileNavbar from "../Profile/ProfileNavBar";
import BikeDisplay from "./BikeDisplay";

export default function MyBikes() {

    return (
        <div>
            <div><Header /></div>
            <div><ProfileNavbar /></div>
            <div><BikeDisplay /></div>
        </div>
    );
}